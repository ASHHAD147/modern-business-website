

// ==========================================
// NEXORA - PROFESSIONAL WEBSITE JAVASCRIPT
// ==========================================


// ==========================================
// 1. EMAILJS CONFIGURATION
// ==========================================

// Replace these three values with your EmailJS details.

const EMAILJS_SERVICE_ID = "service_1mye4o3";
const EMAILJS_TEMPLATE_ID = "template_SnOikOs";
const EMAILJS_PUBLIC_KEY = "U-r67MRxKOSDT37t-";


// ==========================================
// 2. WEBSITE INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    console.log("NEXORA Website Loaded Successfully!");
});


// ==========================================
// 3. MOBILE NAVIGATION MENU
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    const menuItems = navLinks.querySelectorAll("a");

    menuItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

    document.addEventListener("click", function (event) {

        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedMenuButton = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedMenuButton) {

            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

}


// ==========================================
// 4. CONTACT FORM WITH EMAILJS
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate empty fields

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Validate email format

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate message length

        if (message.length < 10) {
            alert("Please enter a message with at least 10 characters.");
            return;
        }

        // Check EmailJS configuration

        if (
            !window.emailjs ||
            EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
            EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
            EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
        ) {
            alert("Email service is not configured yet. Please try again later.");
            console.error("EmailJS configuration is missing.");
            return;
        }

        // Find submit button

        const submitButton = contactForm.querySelector(
            'button[type="submit"], input[type="submit"]'
        );

        const originalButtonText = submitButton
            ? (submitButton.textContent || submitButton.value)
            : "";

        if (submitButton) {
            submitButton.disabled = true;

            if (submitButton.tagName === "INPUT") {
                submitButton.value = "Sending...";
            } else {
                submitButton.textContent = "Sending...";
            }
        }

        // Prepare email template variables

        const templateParams = {
            name: name,
            email: email,
            message: message,
            reply_to: email
        };

        try {

            // Send email using EmailJS

            await window.emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                {
                    publicKey: EMAILJS_PUBLIC_KEY
                }
            );

            alert(
                "Thank you, " + name +
                "! Your message has been sent successfully."
            );

            contactForm.reset();

            console.log("NEXORA contact email sent successfully.");

        } catch (error) {

            console.error("EmailJS Error:", error);

            alert(
                "Sorry! Your message could not be sent. " +
                "Please try again later."
            );

        } finally {

            if (submitButton) {

                submitButton.disabled = false;

                if (submitButton.tagName === "INPUT") {
                    submitButton.value = originalButtonText;
                } else {
                    submitButton.textContent = originalButtonText;
                }

            }

        }

    });

}


// ==========================================
// 5. SCROLL REVEAL ANIMATIONS
// ==========================================

const revealElements = document.querySelectorAll(
    ".service-card, .portfolio-card, .testimonial-card, .benefit-item"
);

revealElements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(function (element) {

        element.style.opacity = "1";
        element.style.transform = "translateY(0)";

    });

}


// ==========================================
// 6. NAVBAR SCROLL EFFECT
// ==========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ==========================================
// 7. BACK TO TOP FUNCTION
// ==========================================

const backToTop = document.querySelector(
    '.footer a[href="#home"]'
);

if (backToTop) {

    backToTop.addEventListener("click", function (event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ==========================================
// 8. CURRENT YEAR IN FOOTER
// ==========================================

const footerText = document.querySelector(".footer-content p");

if (footerText) {

    footerText.textContent =
        "© " + new Date().getFullYear() +
        " NEXORA. All Rights Reserved.";

}


// ==========================================
// 9. HERO BUTTON INTERACTION
// ==========================================

const heroButton = document.querySelector(
    ".hero-buttons .btn-primary"
);

if (heroButton) {

    heroButton.addEventListener("click", function () {
        console.log("NEXORA project enquiry started!");
    });

}


// ==========================================
// 10. SERVICE CARD INTERACTION
// ==========================================

const serviceLinks = document.querySelectorAll(".service-card a");

serviceLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const card = link.closest(".service-card");
        const heading = card ? card.querySelector("h3") : null;

        console.log(
            "Service selected:",
            heading ? heading.textContent : "Unknown service"
        );

    });

});


// ==========================================
// 11. WEBSITE READY
// ==========================================

console.log(
    "NEXORA is ready! All JavaScript features initialized."
);
