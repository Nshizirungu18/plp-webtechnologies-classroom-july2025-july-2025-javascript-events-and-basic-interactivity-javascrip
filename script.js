// ===== Theme Toggle (Dark/Light Mode) =====
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ===== Click Counter Feature =====
let count = 0;
const clickButton = document.getElementById('click-button');
const clickCount = document.getElementById('click-count');

clickButton.addEventListener('click', () => {
    count++;
    clickCount.textContent = count;
});

// ===== Collapsible FAQ Section =====
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// ===== Form Validation =====
const form = document.getElementById('signup-form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const formSuccess = document.getElementById('form-success');

    let valid = true;

    // Validate Name
    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate Password
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    // Show success message if all valid
    if (valid) {
        formSuccess.textContent = "Form submitted successfully!";
        form.reset();
    } else {
        formSuccess.textContent = "";
    }
});
