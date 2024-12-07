document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

<script>
    function checkAdminAccess() {
        fetch("http://localhost:YOUR_PORT_HERE/admin/login.html")
            .then(response => {
                if (response.ok) {
                    window.location.href = "http://localhost:YOUR_PORT_HERE/admin/login.html";
                } else {
                    window.location.href = "index.html"; 
                }
            })
            .catch(error => {
                window.location.href = "index.html"; 
            });
    }

    document.getElementById("admin-link").addEventListener("click", function (event) {
        event.preventDefault(); 
        checkAdminAccess(); 
    });
</script>

