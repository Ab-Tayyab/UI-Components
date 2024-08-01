document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');

  form.addEventListener('submit', (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // Get the input values
    const email = document.querySelector('.login-email').value;
    const password = document.querySelector('.login-password').value;

    const retrievedData = localStorage.getItem(email)

    if(retrievedData){
      const userData = JSON.parse(retrievedData)
      if(userData.signupFirstPassword === password){
        alert("Login successfully.")
      }
      else{
        alert("Password do not match")
      }
    }
    else{
      alert("Mail not found")
    }

    form.reset();
  });
});
