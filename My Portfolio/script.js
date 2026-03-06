document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

window.addEventListener("load", () => {
    const progress = document.querySelector("progress");
    let value = 0;

    const interval = setInterval(() => {
        if (value >= 70) {
            clearInterval(interval);
        } else {
            value++;
            progress.value = value;
        }
    }, 20);
});

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("❌ Please fill all the fields!");
        return;
    }

    alert("✅ Message sent successfully!");
    form.reset();
});

setTimeout(() => {
    console.log("Welcome to Krishika's Portfolio 🚀");
}, 1000);
