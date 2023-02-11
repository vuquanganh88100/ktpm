const form = document.querySelector("#registration-form");
const errorMessage = document.querySelector("#error-message");

form.addEventListener("submit", function(event) {
  const password = form.elements.password.value;
  const confirmPassword = form.elements.confirmPassword.value;
  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match";
    event.preventDefault();
  }
});
const registerButton = document.getElementById("register-button");
const registrationForm = document.getElementById("registration-form");

registerButton.addEventListener("click", function() {
  registrationForm.style.display = "block";
  loginForm.style.display = "none";
});
const loginButton = document.getElementById("login-button");
const loginForm = document.getElementById("login-form");

loginButton.addEventListener("click", function() {
  loginForm.style.display = "block";
  registrationForm.style.display = "none";
});

const signUpButton = document.getElementById("sign-up-button");


signUpButton.addEventListener("click", function() {
  loginForm.style.display = "none";
  registrationForm.style.display = "block";
});