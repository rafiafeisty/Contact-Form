// Log to verify the script is running
console.log('Script loaded');

// Element selection
const form = document.getElementById('contact-form');
const success = document.getElementById('success-message');

// Email validation function
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Check if the form is being selected correctly
if (form) {
    console.log('Form element found');
} else {
    console.error('Form element not found');
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    console.log('Submit event triggered'); // Check if the event listener is working

    let isValid = true; // Reset validity on each submit

    const firstname = document.getElementById('first').value.trim();
    const lastname = document.getElementById('last').value.trim();
    const email = document.getElementById('email-address').value.trim();
    const query = document.querySelector('input[name="options"]:checked');
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('consen-check').checked;

    // Validate First Name
    if (firstname === '') {
        isValid = false;
        document.querySelector('#first + .form-alert').style.display = 'block';
        document.querySelector('#first').style.border = "1px solid var(--red)";
        console.log("First name error");
    } else {
        document.querySelector('#first + .form-alert').style.display = "none";
        document.querySelector('#first').style.border = "1px solid var(--medium-grey)";
    }

    // Validate Last Name
    if (lastname === '') {
        isValid = false;
        document.querySelector('#last + .form-alert').style.display = "block";
        document.querySelector('#last').style.border = "1px solid var(--red)";
        console.log("Last name error");
    } else {
        document.querySelector('#last + .form-alert').style.display = "none";
        document.querySelector('#last').style.border = "1px solid var(--medium-grey)";
    }

    // Validate Email
    if (!isValidEmail(email)) {
        isValid = false;
        document.querySelector('#email-address + .form-alert').style.display = "block";
        document.querySelector('#email-address').style.border = "1px solid var(--red)";
        console.log("Email error");
    } else {
        document.querySelector('#email-address + .form-alert').style.display = "none";
        document.querySelector('#email-address').style.border = "1px solid var(--medium-grey)";
    }

    // Validate Query Type (Radio Button)
    if (!query) {
        isValid = false;
        document.querySelector('.form-item:nth-child(3) .form-alert').style.display = "block";
        console.log("Query type error");
    } else {
        document.querySelector('.form-item:nth-child(3) .form-alert').style.display = "none";
    }

    // Validate Message
    if (message === '') {
        isValid = false;
        document.querySelector('#message + .form-alert').style.display = "block";
        document.querySelector('#message').style.border = "1px solid var(--red)";
        console.log("Message error");
    } else {
        document.querySelector('#message + .form-alert').style.display = "none";
        document.querySelector('#message').style.border = "1px solid var(--medium-grey)";
    }

    // Validate Consent Checkbox
    const consentAlert = document.querySelector('#consen-check + .form-alert');
    if (!consent) {
        isValid = false;
        document.querySelector('#consen-check').style.outline = "1px solid var(--red)";
        console.log("Consent error");
        if (consentAlert) {
            consentAlert.style.display = "block";
        } else {
            console.error('Consent alert element not found');
        }
    } else {
        document.querySelector('#consen-check').style.outline = "none";
        if (consentAlert) {
            consentAlert.style.display = "none";
        }
    }

    // If all fields are valid, show the success message
    if (isValid) {
        success.style.display = "block";
        form.reset(); // Reset form fields
        console.log('Success message displayed.');
    }
});
