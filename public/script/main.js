// Navigation active link handling
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove("active"));
            // Add active class to the clicked link
            link.classList.add("active");
        });
    });
});

// Smooth scroll (optional for internal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


