(function () {
  const slug = window.LEADFLOW_PREVIEW_SLUG || new URLSearchParams(window.location.search).get("p");
  const data = window.previewBusinesses && window.previewBusinesses[slug];

  if (!data) {
    document.body.innerHTML = "<main class=\"preview-shell\"><section class=\"hero\"><h1>Preview not found</h1></section></main>";
    return;
  }

  const inquiry = `Hi ${data.name}, I saw this preview and want to ask about ${data.niche}.`;
  const contactUrl = data.whatsapp
    ? `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(inquiry)}`
    : `mailto:${data.email}?subject=${encodeURIComponent(`Inquiry for ${data.name}`)}`;

  document.title = `${data.name} - inquiry page preview`;

  const services = data.services.map((service) => `<li>${service}</li>`).join("");
  const fields = data.fields.map((field) => `<li>${field}</li>`).join("");

  document.body.innerHTML = `
    <main class="preview-shell">
      <nav class="nav">
        <a class="brand" href="../">
          <strong>${data.name}</strong>
          <span>${data.city} - ${data.niche}</span>
        </a>
        <span class="nav-note">Preview only - final version delivered in 24h</span>
      </nav>

      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">${data.city} mobile inquiry preview</p>
          <h1>${data.headline}</h1>
          <p class="subhead">${data.subhead}</p>

          <div class="cta-row">
            <a class="button primary" href="${contactUrl}">${data.primaryCta}</a>
            <a class="button secondary" href="${contactUrl}">${data.secondaryCta}</a>
          </div>

          <div class="trust-row">
            <span class="pill">Mobile-ready</span>
            <span class="pill">WhatsApp-first</span>
            <span class="pill">No calls needed</span>
            <span class="pill">24h setup</span>
          </div>
        </div>

        <aside class="quote-card">
          <p class="card-title">Inquiry form fields</p>
          <ul class="field-list">${fields}</ul>
        </aside>
      </section>

      <section class="sections">
        <article class="section-card">
          <h2>Services</h2>
          <ul class="service-list">${services}</ul>
        </article>
        <article class="section-card">
          <h2>Fast reply draft</h2>
          <p>${data.sampleReply}</p>
        </article>
        <article class="section-card">
          <h2>Contact path</h2>
          <p>${data.contact}</p>
        </article>
      </section>

      <footer class="footer">
        This is a quick preview page concept, not an official business website.
      </footer>
    </main>
  `;
})();
