// register.js
const confirmPasswordField = document.getElementById("confirm_password-field");


// Validate password and confirm password match
function validatePasswordMatch() {
  const password = passwordField.value;
  const confirmPassword = confirmPasswordField.value;

  if (password !== confirmPassword) {
    // Tampilkan pesan error jika password dan confirm password tidak sama
    confirmPasswordField.style.borderColor = "red"; // Ubah warna border menjadi merah
    return false;
  } else {
    // Lanjutkan submit form jika password dan confirm password sama
    confirmPasswordField.style.borderColor = ""; // Reset warna border
    return true;
  }
}

// Call validatePasswordMatch function when the form is submitted
document.querySelector('form').addEventListener('submit', function(e) {
  // Cegah submit form jika password dan confirm password tidak valid
  if (!validatePasswordMatch()) {
    e.preventDefault();
  }
});
