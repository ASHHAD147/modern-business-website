
// ==========================================
// NEXORA - PROFESSIONAL WEBSITE JAVASCRIPT
// ==========================================


// ==========================================
// 1. WEBSITE INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("NEXORA Website Loaded Successfully!");

});


// ==========================================
// 2. MOBILE NAVIGATION MENU
// ==========================================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    // Open and close mobile menu

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    // Close menu after clicking a navigation link

    const menuItems = navLinks.querySelectorAll("a");

    menuItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });


    // Close menu when clicking outside

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
// 3. CONTACT FORM VALIDATION
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent default form submission

        event.preventDefault();


        // Get input values

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


        // Show success message

        alert(
            "Thank you, " + name +
            "! Your form passed validation."
        );


        // Clear the form

        contactForm.reset();

    });

}


// ==========================================
// 4. SCROLL REVEAL ANIMATIONS
// ==========================================

const revealElements = document.querySelectorAll(
    ".service-card, .portfolio-card, .testimonial-card, .benefit-item"
);


// Add reveal animation styles

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

    // Fallback for older browsers

    revealElements.forEach(function (element) {

        element.style.opacity = "1";

        element.style.transform = "translateY(0)";

    });

}


// ==========================================
// 5. NAVBAR SCROLL EFFECT
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
// 6. BACK TO TOP FUNCTION
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
// 7. CURRENT YEAR IN FOOTER
// ==========================================

const footerText = document.querySelector(
    ".footer-content p"
);

if (footerText) {

    footerText.textContent =
        "© " + new Date().getFullYear() +
        " NEXORA. All Rights Reserved.";

}


// ==========================================
// 8. HERO BUTTON INTERACTION
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
// 9. SERVICE CARD INTERACTION
// ==========================================

const serviceLinks = document.querySelectorAll(
    ".service-card a"
);

serviceLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log(
            "Service selected:",
            link.closest(".service-card").querySelector("h3").textContent
        );

    });

});


// ==========================================
// 10. WEBSITE READY
// ==========================================

console.log(
    "NEXORA is ready! All JavaScript features initialized."
);
