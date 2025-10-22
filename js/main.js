// This JavaScript file adds interactivity: nav toggle, CTAs, contact form handling, and footer year.

// Wait until the DOM is loaded before running scripts
document.addEventListener('DOMContentLoaded', function () {

    // NAV TOGGLE for mobile screens
    // 1) Get nav toggle button and menu element
    var navToggle = document.getElementById('navToggle'); // hamburger button
    var navMenu = document.getElementById('navMenu'); // nav list

    // 2) When user clicks hamburger, toggle the menu visibility
    // This improves usability on small screens where nav is hidden
    navToggle && navToggle.addEventListener('click', function () {
        var expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        // Toggle display style as a simple approach
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });

    // CTA BUTTONS: Hook buttons to simulate actions (open modal / send request)
    // For demo purposes we will show an alert-like temporary message
    function showTemporaryMessage(text) {
        // Create a small toast message element
        var msg = document.createElement('div');
        msg.textContent = text;
        msg.style.position = 'fixed';
        msg.style.right = '20px';
        msg.style.bottom = '20px';
        msg.style.background = '#0b1220';
        msg.style.color = 'white';
        msg.style.padding = '0.6rem 1rem';
        msg.style.borderRadius = '8px';
        msg.style.boxShadow = '0 8px 24px rgba(2,6,23,0.2)';
        document.body.appendChild(msg);
        // Remove after 2.2 seconds
        setTimeout(function () { msg.remove(); }, 2200);
    }

    // Buttons by ID — they exist in the HTML
    var demoBtn = document.getElementById('demoBtn');
    var consultBtn = document.getElementById('consultBtn');
    var heroDemo = document.getElementById('heroDemo');
    var heroConsult = document.getElementById('heroConsult');
    var requestDemo = document.getElementById('requestDemo');
    var startTrial = document.getElementById('startTrial');
    var strategyBtn = document.getElementById('strategyBtn');

    // Attach click listeners safely (check element exists)
    demoBtn && demoBtn.addEventListener('click', function () { showTemporaryMessage('Thanks — we will reach out to schedule your demo.'); });
    consultBtn && consultBtn.addEventListener('click', function () { showTemporaryMessage('Thanks — free consultation request received.'); });
    heroDemo && heroDemo.addEventListener('click', function () { showTemporaryMessage('Demo request received.'); });
    heroConsult && heroConsult.addEventListener('click', function () { showTemporaryMessage('Consultation request received.'); });
    requestDemo && requestDemo.addEventListener('click', function () { showTemporaryMessage('Demo request received.'); });
    startTrial && startTrial.addEventListener('click', function () { showTemporaryMessage('Trial started (demo mode).'); });
    strategyBtn && strategyBtn.addEventListener('click', function () { showTemporaryMessage('Strategy call requested.'); });

    // CONTACT FORM HANDLING
    var contactForm = document.getElementById('contactForm');
    var contactMessage = document.getElementById('contactMessage');

    if (contactForm) {
        // When the user submits the contact form
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent page reload — we handle submission in JS

            // Simple front-end validation: required fields are name, email, message
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var message = document.getElementById('message').value.trim();

            // Basic email pattern check (not foolproof)
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !message) {
                contactMessage.textContent = 'Please fill in name, email and message.';
                contactMessage.style.color = 'darkred';
                return;
            }
            if (!emailPattern.test(email)) {
                contactMessage.textContent = 'Please enter a valid email address.';
                contactMessage.style.color = 'darkred';
                return;
            }

            // In a real site we'd send data to a server here using fetch()
            // For learning/demo purposes we simply show a success message
            contactMessage.textContent = 'Thank you, ' + name + '! Your message has been received. We will contact you soon.';
            contactMessage.style.color = 'green';

            // Clear the form after submission (optional)
            contactForm.reset();

            // Show a temporary toast too
            showTemporaryMessage('Message submitted — thank you!');
        });
    }

    // FOOTER YEAR: dynamically set current year so site stays up-to-date
    var footerYear = document.getElementById('footerYear');
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    // Simple smooth scroll for internal links (progressive enhancement)
    // It intercepts clicks on anchor links that start with '#'
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href').slice(1);
            var targetEl = document.getElementById(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // close mobile nav after clicking if open
                if (window.innerWidth <= 800 && navMenu.style.display === 'block') {
                    navMenu.style.display = 'none';
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

});