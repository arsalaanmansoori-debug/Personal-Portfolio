// ==========================
// Typing Animation
// ==========================

const typingText = document.getElementById("typing-text");

const words = [
    "MERN Stack Developer",
    "Web Developer",
    "Problem Solver",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent = currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


// ==========================
// Close Mobile Menu
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


// ==========================
// Scroll Reveal Animation
// ==========================

const revealElements = document.querySelectorAll(
    ".skill, .project-card, .achievement, .education-card"
);

function reveal() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ==========================
// Active Navbar Link
// ==========================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("current");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("current");

        }

    });

});


// ==========================
// Back To Top Button
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("show-top");

    } else {

        topButton.classList.remove("show-top");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==========================
// Footer Year
// ==========================

const footer = document.querySelector("footer p");

footer.innerHTML = `© ${new Date().getFullYear()} Arsalaan Mansoori. All Rights Reserved.`;