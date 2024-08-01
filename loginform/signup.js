document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form')
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const signupFirstName = document.querySelector('.signupForm-fName').value;
        const signupLastName = document.querySelector('.signupForm-lName').value;
        const signupEmail = document.querySelector('.signupForm-email').value;
        const signupFirstPassword = document.querySelector('.signupForm-fPassword').value;
        const signupReEnterPassword = document.querySelector('.signupForm-rPassword').value;


        // checking if field is empty then show error 
        clearErrors();
        let valid = true;

        if (!signupFirstName) {
            document.querySelector('.fName-error').textContent = " Please Enter First Name.";
            valid = false;
        }
        if (!signupLastName) {
            document.querySelector('.lName-error').textContent = " Please Enter last Name.";
            valid = false;
        }
        if (!signupEmail) {
            document.querySelector('.email-error').textContent = " Please Enter valid Email.";
            valid = false;
        }
        if (!signupFirstPassword) {
            document.querySelector('.fPasword-error').textContent = " Please Enter Valid Password.";
            valid = false;
        }
        if (!signupReEnterPassword) {
            document.querySelector('.rPassword-error').textContent = " Please Enter Valid Password.";
            valid = false;
        }

        if (signupFirstPassword !== signupReEnterPassword) {
            document.querySelector('.fPassword-error').textContent = "Password Do Not Match.";
            valid = false;
        }

        if (valid) {
            const userData = { signupFirstName, signupLastName, signupEmail, signupFirstPassword, signupReEnterPassword }
            localStorage.setItem(signupEmail, JSON.stringify(userData));
            console.log('User registered:', userData);
            signupForm.reset();
            alert("Form Submitted");

        }

        // function for clear all error message 
        function clearErrors() {
            document.querySelectorAll('.error-msg').forEach(error => error.textContent = '');
        }
    })
})
// console.log('F-Name', signupFirstName);
// console.log('L-Name', signupLastName);
// console.log('Email', signupEmail);
// console.log('F-Password', signupFirstPassword);
// console.log('R-Password', signupReEnterPassword);