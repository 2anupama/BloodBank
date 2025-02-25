function displayFeedback(input, message, isValid) {
    const feedbackSpan = document.getElementById(input.id + 'Fdbk');
    feedbackSpan.textContent = message;
    input.style.borderColor = isValid ? 'green' : 'red';
    feedbackSpan.style.color = isValid ? 'green' : 'red';
}

function validateName() {
    const nameInput = document.getElementById('name');
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const isValid = nameRegex.test(nameInput.value);
    const message = isValid ? '✓' : 'Name must contain only letters and spaces, minimum 3 characters';
    displayFeedback(nameInput, message, isValid);
    return isValid;
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(emailInput.value);
    const message = isValid ? '✓' : 'Enter a valid email address';
    displayFeedback(emailInput, message, isValid);
    return isValid;
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isValid = passwordRegex.test(passwordInput.value);
    const message = isValid ? '✓' : 'Password must be at least 8 characters long and contain both letters and numbers';
    displayFeedback(passwordInput, message, isValid);
    return isValid;
}

function validateConfirmPassword() {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordInput = document.getElementById('password');
    const isValid = confirmPasswordInput.value === passwordInput.value;
    const message = isValid ? '✓' : 'Passwords do not match';
    displayFeedback(confirmPasswordInput, message, isValid);
    return isValid;
}

function validateDob() {
    const dobInput = document.getElementById('dob');
    const dob = new Date(dobInput.value);
    const age = new Date().getFullYear() - dob.getFullYear();
    const isValid = age >= 18 && dobInput.value.length === 10;
    const message = isValid ? '✓' : 'You must be at least 18 years old';
    displayFeedback(dobInput, message, isValid);
    return isValid;
}

function toggleSubmitButton() {
    const isFormValid = validateName() && validateEmail() && validatePassword() && validateConfirmPassword() && validateDob();
    document.querySelector('button[type="submit"]').disabled = !isFormValid;
}

document.getElementById('name').addEventListener('input', () => {
    validateName();
    toggleSubmitButton();
});
document.getElementById('email').addEventListener('input', () => {
    validateEmail();
    toggleSubmitButton();
});
document.getElementById('password').addEventListener('input', () => {
    validatePassword();
    validateConfirmPassword();
    toggleSubmitButton();
});
document.getElementById('confirmPassword').addEventListener('input', () => {
    validateConfirmPassword();
    toggleSubmitButton();
});
document.getElementById('dob').addEventListener('input', () => {
    validateDob();
    toggleSubmitButton();
});

document.querySelector('form').addEventListener('submit', function(event) {
    if (!validateName() || !validateEmail() || !validatePassword() || !validateConfirmPassword() || !validateDob()) {
        event.preventDefault(); // Prevent form submission if any field is invalid
    }
});

document.addEventListener('DOMContentLoaded', toggleSubmitButton);


function thankyou(){
    alert("Your details have been submitted succesfully!")
}