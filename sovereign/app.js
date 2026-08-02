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
        " leads/wk × 4.3 × " +
        Math.round(C * 100) +
        "% × " +
        fmt(J) +
        (haircut < 1 ? " × 50% conservative" : "");
    }
    if (jobsPay) {
      const need = 1497 / Math.max(J * C * haircut, 1);
      jobsPay.textContent = "~" + need.toFixed(1) + " jobs/mo";
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

  // Quote page lock countdown (14 days from first open — in-memory only)
  const timerEl = document.getElementById("lock-timer");
  if (timerEl) {
    const end = Date.now() + 14 * 24 * 60 * 60 * 1000;
    function tick() {
      const ms = Math.max(0, end - Date.now());
      const d = Math.floor(ms / 86400000);
      const h = Math.floor((ms % 86400000) / 3600000);
      timerEl.textContent = d + "d " + h + "h remaining on this price lock";
    }
    tick();
    setInterval(tick, 60000);
  }
})();
