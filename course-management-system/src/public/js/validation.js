document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const courseForm = document.getElementById('courseForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function (e) {
            let valid = true;
            const gender = document.querySelector('input[name="gender"]:checked');
            const number = document.getElementById('number').value;

            if (!gender) {
                valid = false;
                alert('Please select your gender.');
            }

            if (!number || isNaN(number) || number <= 0) {
                valid = false;
                alert('Please enter a valid number.');
            }

            if (!valid) {
                e.preventDefault();
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (!username || !password) {
                alert('Please fill in both username and password.');
                e.preventDefault();
            }
        });
    }

    if (courseForm) {
        courseForm.addEventListener('submit', function (e) {
            let valid = true;
            const courseName = document.getElementById('courseName').value;
            const price = document.getElementById('price').value;
            const duration = document.getElementById('duration').value;
            const courseStartDate = document.getElementById('courseStartDate').value;

            if (!courseName) {
                valid = false;
                alert('Course name is required.');
            }

            if (!price || isNaN(price) || price <= 0) {
                valid = false;
                alert('Please enter a valid price.');
            }

            if (!duration) {
                valid = false;
                alert('Duration is required.');
            }

            if (!courseStartDate) {
                valid = false;
                alert('Course start date is required.');
            }

            if (!valid) {
                e.preventDefault();
            }
        });
    }
});