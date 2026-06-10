console.log("Script loaded successfully!");

//Navigation Bar
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => { 
    const linkPage = link.getAttribute("href").replace("./", "");
    if (currentPage === linkPage) {
        link.classList.add("active");
    }
});

// Back to Top Button Functionality
const topButton = document.getElementById("topButton");
if (topButton) {
    topButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Contact Form Validation
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        if (!name || !email || !message) {
            event.preventDefault();
            alert("Please fill in all fields before submitting.");
        }
    });
}

// Project Filtering Functionality
function filterProjects(category) {
    const projects = document.querySelectorAll(".project-card");
    projects.forEach(project => {
        if (category === "all" || project.classList.contains(category)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}
