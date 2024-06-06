document.addEventListener('DOMContentLoaded', function () {
    const phonePattern = /^(\+98|0)?9\d{9}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    function validatePhoneNumber(phone) {
        return phonePattern.test(phone);
    }

    function validateNationalID(id) {
        if (id.length !== 10 || !/^\d{10}$/.test(id)) return false;
        const checkDigit = parseInt(id[9]);
        const sumDigits = id.split('').slice(0, 9).reduce((sum, digit, idx) => sum + (parseInt(digit) * (10 - idx)), 0);
        const remainder = sumDigits % 11;
        return (remainder < 2 && checkDigit === remainder) || (remainder >= 2 && checkDigit === 11 - remainder);
    }

    function validatePassword(password) {
        return passwordPattern.test(password);
    }

    function resetForm() {
        const form = document.querySelector('form');
        if (form) {
            form.reset();
        }
    }

    function showError(input, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'invalid-feedback';
        errorElement.textContent = message;
        input.classList.add('is-invalid');
        input.parentElement.appendChild(errorElement);
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.invalid-feedback');
        errorElements.forEach(function (element) {
            element.remove();
        });

        const invalidInputs = document.querySelectorAll('.is-invalid');
        invalidInputs.forEach(function (input) {
            input.classList.remove('is-invalid');
        });
    }

    // Reset form on page load
    resetForm();

    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        let valid = true;
        clearErrors();

        const phoneInput = document.querySelector('input[name="phone_number"]');
        const nationalIDInput = document.querySelector('input[name="national_id"]');
        const passwordInput = document.querySelector('input[name="password"]');
        const passwordRepeatInput = document.querySelector('input[name="password_repeat"]');

        if (!validatePhoneNumber(phoneInput.value)) {
            valid = false;
            showError(phoneInput, 'Invalid phone number. Please enter a valid phone number.');
        }

        if (nationalIDInput && !validateNationalID(nationalIDInput.value)) {
            valid = false;
            showError(nationalIDInput, 'Invalid national ID. Please enter a valid national ID.');
        }

        if (!validatePassword(passwordInput.value)) {
            valid = false;
            showError(passwordInput, 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.');
        }

        if (passwordInput.value !== passwordRepeatInput.value) {
            valid = false;
            showError(passwordRepeatInput, 'Passwords do not match.');
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
