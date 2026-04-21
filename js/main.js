document.addEventListener("DOMContentLoaded", () => {
    const cfg = window.SITE_CONFIG || {};
    const lang = (document.documentElement.lang || "de").toLowerCase();
    const isEN = lang.startsWith("en");

    applyTheme(cfg);
    injectGlobalTokens(cfg, isEN);
    renderMetrics(cfg, isEN);
    renderTrustBadges(cfg, isEN);
    renderServices(cfg, isEN);
    renderBrands(cfg);
    renderDeviceGroups(cfg, isEN);
    renderReasons(cfg, isEN);
    renderPremiumSignals(cfg, isEN);
    renderDifferentiators(cfg, isEN);
    renderProcess(cfg, isEN);
    renderTestimonials(cfg, isEN);
    renderFaq(cfg, isEN);
    renderCoverage(cfg, isEN);
    renderContactHighlights(cfg, isEN);
    renderStructuredData(cfg, isEN);
    updateYear();
    highlightCurrentNav();
    setupMobileMenu();
    setupRevealObserver();
    setupForms(isEN);
    renderCookieBanner(isEN);
});

function applyTheme(cfg) {
    const theme = cfg.brand && cfg.brand.theme;
    if (!theme) return;
    const root = document.documentElement;
    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--color-primary-dark", theme.primaryDark);
    root.style.setProperty("--color-primary-soft", theme.primarySoft);
    root.style.setProperty("--color-heading", theme.heading);
    root.style.setProperty("--color-text", theme.text);
    root.style.setProperty("--color-text-muted", theme.textMuted);
    root.style.setProperty("--color-surface", theme.surface);
    root.style.setProperty("--color-surface-alt", theme.surfaceAlt);
    root.style.setProperty("--color-surface-dark", theme.surfaceDark);
    root.style.setProperty("--color-border", theme.border);
    root.style.setProperty("--color-success", theme.success);
    root.style.setProperty("--color-highlight", theme.highlight);
}

function injectGlobalTokens(cfg, isEN) {
    const tokens = getTokens(cfg, isEN);
    document.title = replaceTokens(document.title, tokens);

    document.querySelectorAll("[href]").forEach((el) => {
        const href = el.getAttribute("href");
        if (href && href.includes("{{")) {
            el.setAttribute("href", replaceTokens(href, tokens));
        }
    });

    document.querySelectorAll("[content]").forEach((el) => {
        const content = el.getAttribute("content");
        if (content && content.includes("{{")) {
            el.setAttribute("content", replaceTokens(content, tokens));
        }
    });

    document.querySelectorAll("[aria-label]").forEach((el) => {
        const label = el.getAttribute("aria-label");
        if (label && label.includes("{{")) {
            el.setAttribute("aria-label", replaceTokens(label, tokens));
        }
    });

    document.querySelectorAll("[data-token]").forEach((el) => {
        const tokenName = el.getAttribute("data-token");
        if (Object.prototype.hasOwnProperty.call(tokens, tokenName)) {
            el.textContent = tokens[tokenName];
        }
    });

    document.querySelectorAll("[data-template]").forEach((el) => {
        const template = el.getAttribute("data-template") || "";
        el.innerHTML = replaceTokens(template, tokens);
    });

    document.querySelectorAll("[data-template-href]").forEach((el) => {
        const template = el.getAttribute("data-template-href") || "";
        el.setAttribute("href", replaceTokens(template, tokens));
    });

    document.querySelectorAll("[data-template-content]").forEach((el) => {
        const template = el.getAttribute("data-template-content") || "";
        el.setAttribute("content", replaceTokens(template, tokens));
    });

    document.querySelectorAll("[data-template-aria-label]").forEach((el) => {
        const template = el.getAttribute("data-template-aria-label") || "";
        el.setAttribute("aria-label", replaceTokens(template, tokens));
    });

    document.querySelectorAll("[data-phone-display]").forEach((el) => {
        el.textContent = tokens.PHONE_DISPLAY;
    });

    document.querySelectorAll("[data-email-display]").forEach((el) => {
        el.textContent = tokens.EMAIL;
    });
}

function getTokens(cfg, isEN) {
    const contact = cfg.contact || {};
    const domain = contact.domain || "{{DOMAIN}}";
    const city = contact.city || (cfg.brand && cfg.brand.city) || "Berlin";
    const addressLines = contact.addressLines || [];
    return {
        BUSINESS_NAME: isEN ? ((cfg.brand && (cfg.brand.nameEN || cfg.brand.name)) || "{{BUSINESS_NAME}}") : ((cfg.brand && cfg.brand.name) || "{{BUSINESS_NAME}}"),
        PHONE_NUMBER: contact.phone || "{{PHONE_NUMBER}}",
        PHONE_DISPLAY: contact.phoneDisplay || contact.phone || "{{PHONE_NUMBER}}",
        EMAIL: contact.email || "{{EMAIL}}",
        WHATSAPP_NUMBER: contact.whatsapp || "{{WHATSAPP_NUMBER}}",
        DOMAIN: domain,
        DOMAIN_URL: "https://www." + domain,
        ADDRESS_LINE_1: addressLines[0] || "{{ADDRESS_LINE_1}}",
        ADDRESS_LINE_2: addressLines[1] || "",
        POSTAL_CODE: contact.postalCode || "{{POSTAL_CODE}}",
        CITY: city,
        OPENING_HOURS: contact.openingHours || "{{OPENING_HOURS}}",
        LEGAL_OWNER: cfg.legal && cfg.legal.owner ? cfg.legal.owner : "{{LEGAL_OWNER}}",
        LEGAL_REPRESENTATIVE: cfg.legal && cfg.legal.representative ? cfg.legal.representative : "{{LEGAL_REPRESENTATIVE}}",
        VAT_ID: cfg.legal && cfg.legal.vatId ? cfg.legal.vatId : "{{VAT_ID}}"
    };
}

function replaceTokens(template, tokens) {
    return template.replace(/\{\{([A-Z0-9_]+)\}\}/g, (_match, key) => {
        return Object.prototype.hasOwnProperty.call(tokens, key) ? tokens[key] : "{{" + key + "}}";
    });
}

function renderMetrics(cfg, isEN) {
    const items = isEN ? cfg.metrics.en : cfg.metrics.de;
    const container = document.querySelector('[data-section="metrics"]');
    if (!container || !items) return;
    container.innerHTML = items.map((item) => ['<article class="metric-card reveal">', '<strong>' + escapeHtml(item.value) + '</strong>', '<span>' + escapeHtml(item.label) + '</span>', '</article>'].join("")).join("");
}

function renderTrustBadges(cfg, isEN) {
    const items = isEN ? cfg.trustBadges.en : cfg.trustBadges.de;
    const container = document.querySelector('[data-section="trust"]');
    if (!container || !items) return;
    container.innerHTML = items.map((text) => ['<div class="trust-item">', '<span class="trust-mark" aria-hidden="true"></span>', '<span>' + escapeHtml(text) + '</span>', '</div>'].join("")).join("");
}

function renderServices(cfg, isEN) {
    const items = isEN ? cfg.services.en : cfg.services.de;
    const container = document.querySelector('[data-section="services"]');
    if (!container || !items) return;
    container.innerHTML = items.map((item, index) => {
        const problemsHtml = item.problems && item.problems.length
            ? '<ul class="service-problems">' + item.problems.map((p) => '<li>' + escapeHtml(p) + '</li>').join("") + '</ul>'
            : "";
        const linkHtml = item.slug
            ? '<a class="service-link" href="' + escapeHtml(item.slug) + '.html">' + (isEN ? "Learn more" : "Mehr erfahren") + ' <span aria-hidden="true">→</span></a>'
            : "";
        return [
            '<article class="feature-card reveal reveal-delay-' + Math.min(index, 3) + '">',
            item.icon
                ? '<div class="feature-icon" aria-hidden="true">' + item.icon + '</div>'
                : '<div class="card-index">0' + (index + 1) + '</div>',
            '<h3>' + escapeHtml(item.title) + '</h3>',
            '<p>' + escapeHtml(item.copy) + '</p>',
            problemsHtml,
            linkHtml,
            '</article>'
        ].join("");
    }).join("");
}

function renderBrands(cfg) {
    const container = document.querySelector('[data-section="brands"]');
    if (!container || !cfg.brands || !cfg.brands.length) return;
    container.innerHTML = cfg.brands.map((brand) => '<li class="brand-item">' + escapeHtml(brand) + '</li>').join("");
}

function renderDeviceGroups(cfg, isEN) {
    const items = isEN ? cfg.deviceGroups.en : cfg.deviceGroups.de;
    const container = document.querySelector('[data-section="devices"]');
    if (!container || !items) return;
    container.innerHTML = items.map((item) => '<li class="pill-item">' + escapeHtml(item) + '</li>').join("");
}

function renderReasons(cfg, isEN) {
    const items = isEN ? cfg.reasons.en : cfg.reasons.de;
    const container = document.querySelector('[data-section="reasons"]');
    if (!container || !items) return;
    container.innerHTML = items.map((item) => ['<article class="reason-card reveal">', '<h3>' + escapeHtml(item.title) + '</h3>', '<p>' + escapeHtml(item.copy) + '</p>', '</article>'].join("")).join("");
}

function renderPremiumSignals(cfg, isEN) {
    const source = cfg.premiumSignals;
    const items = source ? (isEN ? source.en : source.de) : null;
    const container = document.querySelector('[data-section="premium-signals"]');
    if (!container || !items) return;
    container.innerHTML = items.map((item) => ['<article class="signal-card reveal">', '<h3>' + escapeHtml(item.title) + '</h3>', '<p>' + escapeHtml(item.copy) + '</p>', '</article>'].join("")).join("");
}

function renderDifferentiators(cfg, isEN) {
    const source = cfg.differentiators;
    const items = source ? (isEN ? source.en : source.de) : null;
    const container = document.querySelector('[data-section="differentiators"]');
    if (!container || !items) return;
    container.innerHTML = items.map((item) => ['<article class="difference-card reveal">', '<h3>' + escapeHtml(item.title) + '</h3>', '<p>' + escapeHtml(item.copy) + '</p>', '</article>'].join("")).join("");
}

function renderProcess(cfg, isEN) {
    const items = isEN ? cfg.process.en : cfg.process.de;
    const container = document.querySelector('[data-section="process"]');
    if (!container || !items) return;
    container.innerHTML = items.map((item) => ['<li>', '<h3>' + escapeHtml(item.title) + '</h3>', '<p>' + escapeHtml(item.copy) + '</p>', '</li>'].join("")).join("");
}

function renderTestimonials(cfg, isEN) {
    const items = isEN ? cfg.testimonials.en : cfg.testimonials.de;
    const container = document.querySelector('[data-section="testimonials"]');
    if (!container || !items) return;
    container.innerHTML = items.map((item) => ['<article class="testimonial-card reveal">', '<p class="quote">"' + escapeHtml(item.quote) + '"</p>', '<p class="author">' + escapeHtml(item.author) + '</p>', '<p class="role">' + escapeHtml(item.role) + '</p>', '</article>'].join("")).join("");
}

function renderFaq(cfg, isEN) {
    const items = isEN ? cfg.faq.en : cfg.faq.de;
    const container = document.querySelector('[data-section="faq"]');
    if (!container || !items) return;
    container.innerHTML = items.map((item, index) => ['<details class="faq-item"' + (index === 0 ? ' open' : '') + '>', '<summary>' + escapeHtml(item.q) + '</summary>', '<div class="faq-answer"><p>' + escapeHtml(item.a) + '</p></div>', '</details>'].join("")).join("");
}

function renderCoverage(cfg, isEN) {
    const el = document.querySelector('[data-section="coverage"]');
    if (!el) return;
    if (cfg.coverage) {
        el.textContent = isEN ? cfg.coverage.en : cfg.coverage.de;
        return;
    }
    if (!cfg.districts) return;
    el.textContent = (isEN ? "Service area in Berlin: " : "Einsatzgebiet in Berlin: ") + cfg.districts.join(", ") + ".";
}

function renderContactHighlights(cfg, isEN) {
    const items = isEN ? cfg.contactHighlights.en : cfg.contactHighlights.de;
    const container = document.querySelector('[data-section="contact-highlights"]');
    if (!container || !items) return;
    container.innerHTML = items.map((item) => '<li>' + escapeHtml(item) + '</li>').join("");
}

function renderStructuredData(cfg, isEN) {
    const tokens = getTokens(cfg, isEN);
    const existing = document.getElementById("site-jsonld");
    if (existing) existing.remove();
    const ld = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: tokens.BUSINESS_NAME,
        description: document.title,
        url: tokens.DOMAIN_URL,
        telephone: tokens.PHONE_NUMBER,
        email: tokens.EMAIL,
        address: {
            "@type": "PostalAddress",
            streetAddress: [tokens.ADDRESS_LINE_1, tokens.ADDRESS_LINE_2].filter(Boolean).join(", "),
            postalCode: tokens.POSTAL_CODE,
            addressLocality: tokens.CITY,
            addressCountry: cfg.brand && cfg.brand.countryCode ? cfg.brand.countryCode : "DE"
        },
        areaServed: (cfg.districts || []).map((district) => ({ "@type": "AdministrativeArea", name: district + ", Berlin" })),
        openingHours: tokens.OPENING_HOURS
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "site-jsonld";
    script.textContent = JSON.stringify(ld);
    document.head.appendChild(script);
}

function updateYear() {
    const year = String(new Date().getFullYear());
    document.querySelectorAll("[data-current-year]").forEach((el) => { el.textContent = year; });
}

function highlightCurrentNav() {
    const current = document.body.getAttribute("data-page");
    document.querySelectorAll(".nav-link").forEach((link) => {
        if (link.getAttribute("data-page-link") === current) {
            link.setAttribute("aria-current", "page");
        }
    });
}

function setupMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", (e) => {
        if (nav.classList.contains("is-open") && !nav.contains(e.target) && !toggle.contains(e.target)) {
            nav.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && nav.classList.contains("is-open")) {
            nav.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.focus();
        }
    });
}

function setupRevealObserver() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15 });
    items.forEach((item) => observer.observe(item));
}

function setupForms(isEN) {
    document.querySelectorAll("form[data-form-mode]").forEach((form) => {
        form.setAttribute("novalidate", "novalidate");
        form.querySelectorAll("input, select, textarea").forEach((field) => {
            field.addEventListener("blur", () => validateField(field, isEN));
            field.addEventListener("input", () => clearFieldError(field));
        });
        form.addEventListener("submit", (event) => {
            const fields = Array.from(form.querySelectorAll("input, select, textarea"));
            const invalid = fields.filter((field) => !validateField(field, isEN));
            if (invalid.length) {
                event.preventDefault();
                invalid[0].focus();
                return;
            }
            if (form.getAttribute("data-form-mode") === "demo") {
                event.preventDefault();
                showFormSuccess(form, isEN);
            }
        });
    });
}

function validateField(field, isEN) {
    if (field.type === "hidden" || field.name === "bot-field") return true;
    const value = field.type === "checkbox" ? String(field.checked) : field.value.trim();
    let message = "";
    if (field.hasAttribute("required")) {
        if (field.type === "checkbox" && !field.checked) {
            message = isEN ? "Please confirm the privacy notice." : "Bitte bestätigen Sie den Datenschutzhinweis.";
        } else if (!value) {
            message = isEN ? "Please complete this field." : "Bitte füllen Sie dieses Feld aus.";
        }
    }
    if (!message && field.type === "email" && value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            message = isEN ? "Please enter a valid email address." : "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
        }
    }
    if (!message && field.type === "tel" && value) {
        const phonePattern = /^[0-9+\s()/.-]{6,}$/;
        if (!phonePattern.test(value)) {
            message = isEN ? "Please enter a valid phone number." : "Bitte geben Sie eine gültige Telefonnummer ein.";
        }
    }
    if (message) {
        field.setAttribute("aria-invalid", "true");
        setFieldError(field, message);
        return false;
    }
    field.removeAttribute("aria-invalid");
    clearFieldError(field);
    return true;
}

function setFieldError(field, message) {
    let error = field.parentElement && field.parentElement.querySelector(".field-error");
    if (!error) {
        error = document.createElement("p");
        error.className = "field-error";
        if (field.parentElement) {
            field.parentElement.appendChild(error);
        } else {
            field.insertAdjacentElement("afterend", error);
        }
    }
    error.textContent = message;
}

function clearFieldError(field) {
    const parent = field.parentElement;
    if (!parent) return;
    const error = parent.querySelector(".field-error");
    if (error) error.remove();
}

function showFormSuccess(form, isEN) {
    const success = form.parentElement && form.parentElement.querySelector(".form-success");
    if (!success) return;
    form.hidden = true;
    success.hidden = false;
    success.classList.add("is-active");
    const heading = success.querySelector("[data-success-heading]");
    const copy = success.querySelector("[data-success-copy]");
    if (heading) heading.textContent = isEN ? "Thank you for your enquiry" : "Vielen Dank für Ihre Anfrage";
    if (copy) copy.textContent = isEN
        ? "Thanks for your message. We will be in touch shortly."
        : "Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.";
}

function renderCookieBanner(isEN) {
    if (localStorage.getItem("cookie-consent")) return;
    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", isEN ? "Cookie consent" : "Cookie-Einwilligung");
    if (isEN) {
        banner.innerHTML = '<p>We use cookies to improve your experience. <a href="privacy-en.html">Privacy policy</a></p><div class="cookie-actions"><button id="cookie-accept">Accept</button><button id="cookie-reject">Reject</button></div>';
    } else {
        banner.innerHTML = '<p>Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. <a href="datenschutz.html">Datenschutz</a></p><div class="cookie-actions"><button id="cookie-accept">Akzeptieren</button><button id="cookie-reject">Ablehnen</button></div>';
    }
    document.body.appendChild(banner);
    function dismiss(choice) {
        localStorage.setItem("cookie-consent", choice);
        banner.remove();
    }
    document.getElementById("cookie-accept").addEventListener("click", function () { dismiss("accepted"); });
    document.getElementById("cookie-reject").addEventListener("click", function () { dismiss("rejected"); });
}

function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
}
