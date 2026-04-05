document.addEventListener("DOMContentLoaded", () => {
    const currentYearElements = document.querySelectorAll("[data-current-year]");
    const currentYear = new Date().getFullYear();

    currentYearElements.forEach((element) => {
        element.textContent = String(currentYear);
    });

    const currentPage = document.body.dataset.page;
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        const linkTarget = link.getAttribute("href");
        if (!linkTarget) {
            return;
        }

        const targetPage = linkTarget.replace(".html", "").replace(/-(?:de|en)$/, "");
        const normalizedCurrent = currentPage ? currentPage.replace(/-(?:de|en)$/, "") : "";
        if (targetPage === currentPage || targetPage === normalizedCurrent) {
            link.setAttribute("aria-current", "page");
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");

    if (menuToggle && siteNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = siteNav.classList.toggle("is-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        // Close menu when a nav link is clicked
        siteNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                siteNav.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });

        // Close menu on Escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && siteNav.classList.contains("is-open")) {
                siteNav.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.focus();
            }
        });
    }
});