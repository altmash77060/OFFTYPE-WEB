const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const links = navLinks.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        `Hello OFFTYPE Design Studio,%0A%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A` +
        `Service: ${service}%0A` +
        `Message: ${message}`;

    const whatsappURL =
    `https://wa.me/918840078052?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
});
// Scroll Animation

const animatedElements = document.querySelectorAll(
    ".about, .services, .portfolio, .process, .why-offtype, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach((element) => {
    element.classList.add("animate");
    observer.observe(element);
});
