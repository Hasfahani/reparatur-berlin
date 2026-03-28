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
});