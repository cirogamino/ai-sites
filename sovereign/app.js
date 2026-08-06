(function () {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  let theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  root.setAttribute("data-theme", theme);

  function setThemeIcon() {
    if (!toggle) return;
    toggle.setAttribute("aria-label", "Switch to " + (theme === "dark" ? "light" : "dark") + " mode");
    toggle.innerHTML =
      theme === "dark"
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
  setThemeIcon();
  toggle &&
    toggle.addEventListener("click", () => {
      theme = theme === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", theme);
      setThemeIcon();
    });

  const y = document.getElementById("y");
  if (y) y.textContent = String(new Date().getFullYear());

  // Reserve space for the mobile action bar only when it exists
  if (document.querySelector(".action-bar")) {
    document.body.classList.add("has-action-bar");
  }

  // ROI
  const leads = document.getElementById("leads");
  const close = document.getElementById("close");
  const job = document.getElementById("job");
  const cons = document.getElementById("conservative");
  const fmt = (n) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  function calc() {
    if (!leads || !close || !job) return;
    const L = Number(leads.value);
    const C = Number(close.value) / 100;
    const J = Number(job.value);
    const haircut = cons && cons.checked ? 0.5 : 1;
    const monthly = L * 4.3 * C * J * haircut;
    const vLeads = document.getElementById("v-leads");
    const vClose = document.getElementById("v-close");
    const vJob = document.getElementById("v-job");
    const leakOut = document.getElementById("leak-out");
    const leakDetail = document.getElementById("leak-detail");
    const jobsPay = document.getElementById("jobs-payback");
    const hero = document.getElementById("hero-leak");
    if (vLeads) vLeads.textContent = String(L);
    if (vClose) vClose.textContent = Math.round(C * 100) + "%";
    if (vJob) vJob.textContent = fmt(J);
    const html = fmt(monthly) + "<span>/mo</span>";
    if (leakOut) leakOut.innerHTML = html;
    if (hero) hero.innerHTML = html;
    if (leakDetail) {
      leakDetail.textContent =
        L +
        (L === 1 ? " lead a week" : " leads a week") +
        ", " +
        Math.round(C * 100) +
        "% close rate, " +
        fmt(J) +
        " average job" +
        (haircut < 1 ? ", cut in half to stay conservative" : "");
    }

    // Payback: how many recovered jobs cover Voice each month
    const VOICE = 1497;
    const perJob = Math.max(J * haircut, 1);
    const need = VOICE / perJob;
    if (jobsPay) {
      jobsPay.textContent = need < 1 ? "less than 1 job/mo" : "~" + need.toFixed(1) + " jobs/mo";
    }

    // Comparison chart — leakage vs cost, scaled to the larger of the two
    const barLeak = document.getElementById("bar-leak");
    const barCost = document.getElementById("bar-cost");
    const barLeakVal = document.getElementById("bar-leak-val");
    const barCostVal = document.getElementById("bar-cost-val");
    const caption = document.getElementById("bar-caption");
    const tLeak = document.getElementById("t-leak");
    const tPay = document.getElementById("t-payback");
    if (barLeak && barCost) {
      const max = Math.max(monthly, VOICE);
      barLeak.style.width = Math.max((monthly / max) * 100, 2).toFixed(1) + "%";
      barCost.style.width = Math.max((VOICE / max) * 100, 2).toFixed(1) + "%";
    }
    if (barLeakVal) barLeakVal.textContent = fmt(monthly);
    if (barCostVal) barCostVal.textContent = fmt(VOICE);
    if (tLeak) tLeak.textContent = fmt(monthly);
    if (tPay) tPay.textContent = need < 1 ? "less than 1" : need.toFixed(1);
    if (caption) {
      if (monthly <= VOICE) {
        caption.innerHTML =
          "At these numbers the leak is smaller than the fee. <strong>Sovereign is not worth it for you yet</strong> \u2014 come back when call volume grows.";
      } else {
        const jobsWord = need < 1 ? "one job a month" : need.toFixed(1) + " jobs a month";
        const multiple = (monthly / VOICE).toFixed(1);
        caption.innerHTML =
          "Recover just <strong>" +
          jobsWord +
          "</strong> and Voice has paid for itself. You are currently leaking <strong>" +
          multiple +
          "\u00d7</strong> what it costs.";
      }
    }
  }
  [leads, close, job, cons].forEach((el) => el && el.addEventListener("input", calc));
  calc();

  // SKU buttons
  const skuField = document.getElementById("sku");
  const skuSelect = document.getElementById("sku-select");
  document.querySelectorAll("[data-sku]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const s = btn.getAttribute("data-sku");
      if (skuField) skuField.value = s;
      if (skuSelect) {
        const opt = [...skuSelect.options].find((o) => o.value === s || o.value.startsWith(s));
        if (opt) skuSelect.value = opt.value;
      }
    });
  });
  if (skuSelect && skuField) {
    skuSelect.addEventListener("change", () => {
      skuField.value = skuSelect.value;
    });
  }

  // Access form — server-side capture. Checkout is enabled only after real
  // Stripe Payment Links are configured.
  const form = document.getElementById("access-form");
  const status = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const pkg = fd.get("package") || fd.get("sku") || "voice";
      const submit = form.querySelector('button[type="submit"]');
      if (status) {
        status.hidden = false;
        status.textContent = "Sending your request…";
      }
      if (submit) submit.disabled = true;
      try {
        const response = await fetch("/api/sovereign/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(fd.entries())),
        });
        if (!response.ok) throw new Error("Lead request failed");
        form.reset();
        if (skuField) skuField.value = "voice";
        if (status) status.textContent = "Request received. We’ll follow up by email.";
      } catch (error) {
        if (status) status.textContent = "We couldn’t receive that request. Please email sovereign@cirogamino.com.";
      } finally {
        if (submit) submit.disabled = false;
      }
    });
  }

  // Quote page lock countdown — anchored per visitor so it doesn't reset on reload
  const timerEl = document.getElementById("lock-timer");
  if (timerEl) {
    let start = Number(localStorage.getItem("sov_lock_start"));
    if (!start || Number.isNaN(start)) {
      start = Date.now();
      try {
        localStorage.setItem("sov_lock_start", String(start));
      } catch (e) {
        /* private mode — fall back to session-only */
      }
    }
    const end = start + 14 * 24 * 60 * 60 * 1000;
    function tick() {
      const ms = Math.max(0, end - Date.now());
      const d = Math.floor(ms / 86400000);
      const h = Math.floor((ms % 86400000) / 3600000);
      timerEl.textContent =
        ms === 0 ? "price lock expired" : d + " days " + h + " hours remaining";
    }
    tick();
    setInterval(tick, 60000);
  }
})();
