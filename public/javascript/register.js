const emailInput = document.getElementById("email");
const passwordField = document.getElementById("password-field");
const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");


// Toggle password visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password-field");
    const togglePassword = document.getElementById("togglePassword");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      togglePassword.innerHTML = '<img src="images/icons/eye-fill.svg" alt="Eye fill" />'; // Mengganti ikon ke kunci terbuka
    } else {
      passwordField.type = "password";
      togglePassword.innerHTML = '<img src="images/icons/eye-slash-fill.svg" alt="Eye fill" />'; // Mengganti ikon ke mata
    }
}

function toggleConfirmPasswordVisibility() {
    const passwordField = document.getElementById("confirm_password-field");
    const togglePassword = document.getElementById("toggleConfirmPassword");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.innerHTML = '<img src="images/icons/eye-fill.svg" alt="Eye fill" />'; // Mengganti ikon ke mata tertutup (kunci)
    } else {
        passwordField.type = "password";
        togglePassword.innerHTML = '<img src="images/icons/eye-slash-fill.svg" alt="Eye fill" />'; // Mengganti ikon ke mata terbuka
    }
}




let x = document.getElementById("privacy_policy").required = true;


const emailNotification = document.getElementById('email-notification');

emailInput.addEventListener('blur', () => {
  if (!emailInput.value.includes('@')) {
    emailNotification.style.display = 'block';
  } else {
    emailNotification.style.display = 'none';
  }
});
