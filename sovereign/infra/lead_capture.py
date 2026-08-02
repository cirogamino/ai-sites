#!/usr/bin/env python3
"""Minimal same-origin lead endpoint for Sovereign.

Stores validated prospects on the server without exposing credentials in the
website. A later notification worker can read the JSONL file and send alerts.
"""

from __future__ import annotations

import json
import os
import re
import time
from datetime import datetime, timezone
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

DATA_DIR = Path(os.environ.get("SOVEREIGN_LEADS_DIR", "/var/lib/sovereign"))
LEADS_FILE = DATA_DIR / "leads.jsonl"
MAX_BODY = 16_384
EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
PACKAGE_NAMES = {
    "voice": "Voice — $1,497/mo",
    "pipeline": "Pipeline — $2,497/mo",
    "command": "Command — $4,997/mo",
    "setup": "Private Build — $15–25k",
    "voice_setup": "Voice + Private Build",
}
RECENT_BY_IP: dict[str, list[float]] = {}


def clean(value: object, max_length: int) -> str:
    return str(value or "").strip()[:max_length]


class LeadHandler(BaseHTTPRequestHandler):
    server_version = "SovereignLeadCapture/1.0"

    def log_message(self, format: str, *args: object) -> None:
        return

    def reply(self, status: HTTPStatus, body: dict[str, object]) -> None:
        encoded = json.dumps(body).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(encoded)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(encoded)

    def do_GET(self) -> None:
        if self.path == "/healthz":
            self.reply(HTTPStatus.OK, {"ok": True})
        else:
            self.reply(HTTPStatus.NOT_FOUND, {"ok": False})

    def do_POST(self) -> None:
        if self.path != "/leads":
            self.reply(HTTPStatus.NOT_FOUND, {"ok": False})
            return
        length = int(self.headers.get("Content-Length", "0"))
        if length <= 0 or length > MAX_BODY:
            self.reply(HTTPStatus.BAD_REQUEST, {"ok": False, "error": "Invalid request."})
            return
        try:
            payload = json.loads(self.rfile.read(length))
        except (UnicodeDecodeError, json.JSONDecodeError):
            self.reply(HTTPStatus.BAD_REQUEST, {"ok": False, "error": "Invalid request."})
            return

        ip = self.client_address[0]
        now = time.monotonic()
        requests = [stamp for stamp in RECENT_BY_IP.get(ip, []) if now - stamp < 3600]
        if len(requests) >= 10:
            self.reply(HTTPStatus.TOO_MANY_REQUESTS, {"ok": False, "error": "Please try again later."})
            return
        requests.append(now)
        RECENT_BY_IP[ip] = requests

        lead = {
            "received_at": datetime.now(timezone.utc).isoformat(),
            "name": clean(payload.get("name"), 120),
            "email": clean(payload.get("email"), 254).lower(),
            "phone": clean(payload.get("phone"), 40),
            "company": clean(payload.get("company"), 160),
            "city": clean(payload.get("city"), 100),
            "package": clean(payload.get("package"), 40),
            "notes": clean(payload.get("notes"), 2_000),
            "source": "sovereign.cirogamino.com",
        }
        if not lead["name"] or not EMAIL_RE.fullmatch(lead["email"]) or lead["package"] not in PACKAGE_NAMES:
            self.reply(HTTPStatus.BAD_REQUEST, {"ok": False, "error": "Please complete the required fields."})
            return
        lead["package"] = PACKAGE_NAMES[lead["package"]]

        DATA_DIR.mkdir(parents=True, exist_ok=True)
        with LEADS_FILE.open("a", encoding="utf-8") as leads:
            leads.write(json.dumps(lead, separators=(",", ":")) + "\n")
        self.reply(HTTPStatus.CREATED, {"ok": True})


if __name__ == "__main__":
    ThreadingHTTPServer(("127.0.0.1", 8787), LeadHandler).serve_forever()
