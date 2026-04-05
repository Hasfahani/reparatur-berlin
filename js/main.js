document.addEventListener("DOMContentLoaded", () => {
    const cfg = window.SITE_CONFIG || {};

    // -------------------------------------------------------
    //  1. CONFIG INJECTION — text, links, generated sections
    // -------------------------------------------------------

    // 1a. Simple text replacement: <span data-cfg="businessName">
    document.querySelectorAll("[data-cfg]").forEach((el) => {
        const key = el.dataset.cfg;
        if (cfg[key] !== undefined) el.textContent = cfg[key];
    });

    // 1b. Link replacement: <a data-cfg-href="phoneLink">
    if (cfg.phone) {
        document.querySelectorAll('[data-cfg-href="phone"]').forEach((el) => {
            el.setAttribute("href", "tel:" + cfg.phone);
        });
    }
    if (cfg.whatsapp) {
        document.querySelectorAll('[data-cfg-href="whatsapp"]').forEach((el) => {
            el.setAttribute("href", "https://wa.me/" + cfg.whatsapp);
        });
    }
    if (cfg.email) {
        document.querySelectorAll('[data-cfg-href="email"]').forEach((el) => {
            el.setAttribute("href", "mailto:" + cfg.email);
        });
    }

    // 1c. Generated sections
    renderServices(cfg);
    renderTrustBadges(cfg);
    renderBenefits(cfg);
    renderProcessSteps(cfg);
    renderFAQ(cfg);
    renderApplianceOptions(cfg);
    renderCoverageText(cfg);
    renderStructuredData(cfg);

    // -------------------------------------------------------
    //  2. YEAR DISPLAY
    // -------------------------------------------------------
    const currentYear = new Date().getFullYear();
    document.querySelectorAll("[data-current-year]").forEach((el) => {
        el.textContent = String(currentYear);
    });

    // -------------------------------------------------------
    //  3. ACTIVE NAV LINK
    // -------------------------------------------------------
    const currentPage = document.body.dataset.page;
    document.querySelectorAll(".nav-link").forEach((link) => {
        const href = link.getAttribute("href");
        if (!href) return;
        const target = href.replace(".html", "").replace(/-(?:de|en)$/, "");
        const current = currentPage ? currentPage.replace(/-(?:de|en)$/, "") : "";
        if (target === currentPage || target === current) {
            link.setAttribute("aria-current", "page");
        }
    });

    // -------------------------------------------------------
    //  4. MOBILE MENU TOGGLE
    // -------------------------------------------------------
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");

    if (menuToggle && siteNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = siteNav.classList.toggle("is-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        siteNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                siteNav.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && siteNav.classList.contains("is-open")) {
                siteNav.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.focus();
            }
        });
    }

    // -------------------------------------------------------
    //  5. SCROLL REVEAL — IntersectionObserver
    // -------------------------------------------------------
    const revealEls = document.querySelectorAll(".reveal");
    if (revealEls.length) {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        revealEls.forEach((el) => revealObserver.observe(el));
    }
});

// ===========================================================
//  SECTION RENDERERS
//  Each renderer checks for a container with data-cfg-section
//  and populates it from config. No container = no-op.
// ===========================================================

function renderServices(cfg) {
    const container = document.querySelector('[data-cfg-section="services"]');
    if (!container || !cfg.services) return;
    container.innerHTML = "";
    cfg.services.forEach((s, i) => {
        const delay = i > 0 ? " reveal-delay-" + i : "";
        const article = document.createElement("article");
        article.className = "service-card reveal" + delay;
        article.innerHTML =
            '<div class="service-icon">' + s.icon + "</div>" +
            "<h3>" + esc(s.name) + "</h3>" +
            "<p>" + esc(s.desc) + "</p>";
        container.appendChild(article);
    });
    observeNewReveals(container);
}

function renderTrustBadges(cfg) {
    const container = document.querySelector('[data-cfg-section="trustBadges"]');
    if (!container || !cfg.trustBadges) return;
    container.innerHTML = "";
    cfg.trustBadges.forEach((b) => {
        const div = document.createElement("div");
        div.className = "trust-item";
        div.innerHTML =
            '<div class="trust-icon">' + b.icon + "</div>" +
            "<span>" + esc(b.text) + "</span>";
        container.appendChild(div);
    });
}

function renderBenefits(cfg) {
    const container = document.querySelector('[data-cfg-section="benefits"]');
    if (!container || !cfg.benefits) return;
    container.innerHTML = "";
    cfg.benefits.forEach((b, i) => {
        const delay = i > 0 ? " reveal-delay-" + i : "";
        const article = document.createElement("article");
        article.className = "service-card reveal" + delay;
        article.innerHTML =
            '<div class="service-icon">' + b.icon + "</div>" +
            "<h3>" + esc(b.title) + "</h3>" +
            "<p>" + esc(b.desc) + "</p>";
        container.appendChild(article);
    });
    observeNewReveals(container);
}

function renderProcessSteps(cfg) {
    const container = document.querySelector('[data-cfg-section="processSteps"]');
    if (!container || !cfg.processSteps) return;
    container.innerHTML = "";
    cfg.processSteps.forEach((step) => {
        const li = document.createElement("li");
        li.innerHTML = "<strong>" + esc(step.title) + "</strong> \u2013 " + esc(step.desc);
        container.appendChild(li);
    });
}

function renderFAQ(cfg) {
    const container = document.querySelector('[data-cfg-section="faq"]');
    if (!container || !cfg.faq) return;
    container.innerHTML = "";
    cfg.faq.forEach((item, i) => {
        const details = document.createElement("details");
        details.className = "faq-item";
        if (i === 0) details.setAttribute("open", "");
        details.innerHTML =
            "<summary>" + esc(item.q) + "</summary>" +
            '<div class="faq-answer"><p>' + esc(item.a) + "</p></div>";
        container.appendChild(details);
    });
}

function renderApplianceOptions(cfg) {
    const select = document.querySelector('[data-cfg-options="applianceOptions"]');
    if (!select || !cfg.applianceOptions) return;
    // Keep only the first placeholder <option>
    while (select.options.length > 1) select.remove(1);
    cfg.applianceOptions.forEach((opt) => {
        const o = document.createElement("option");
        o.value = opt.value;
        o.textContent = opt.label;
        select.appendChild(o);
    });
}

function renderCoverageText(cfg) {
    const el = document.querySelector('[data-cfg-section="coverage"]');
    if (!el || !cfg.districts) return;
    el.textContent =
        "Wir fahren in alle Berliner Bezirke: " +
        cfg.districts.join(", ") +
        " und weitere. Geben Sie bei Ihrer Anfrage einfach Ihren Bezirk oder Ihre Postleitzahl an.";
}

function renderStructuredData(cfg) {
    const existing = document.getElementById("ld-json");
    if (existing) existing.remove();
    if (!cfg.businessName) return;

    const ld = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": cfg.businessName,
        "description":
            "Hausgeräte-Reparatur in " + cfg.city +
            ". Waschmaschine, Geschirrspüler, Trockner und Herd \u2013 direkt bei Ihnen vor Ort.",
        "url": "https://www." + cfg.domain,
        "telephone": cfg.phone,
        "areaServed": { "@type": "City", "name": cfg.city },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": cfg.city,
            "addressCountry": "DE"
        }
    };
    if (cfg.serviceTypes) ld.serviceType = cfg.serviceTypes;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ld-json";
    script.textContent = JSON.stringify(ld);
    document.head.appendChild(script);
}

// ===========================================================
//  HELPERS
// ===========================================================

/** Minimal HTML-escape to prevent XSS when injecting config text. */
function esc(str) {
    const d = document.createElement("div");
    d.appendChild(document.createTextNode(str));
    return d.innerHTML;
}

/** Observe newly added .reveal elements so they animate on scroll. */
function observeNewReveals(container) {
    const reveals = container.querySelectorAll(".reveal");
    if (!reveals.length) return;
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
}