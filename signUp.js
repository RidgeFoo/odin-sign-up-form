const password = document.getElementById("pass");
const confirmPassword = document.getElementById("confirmPass");

function checkPasswordMatch() {
  const passwordMismatchDiv = document.getElementById("passwordMismatch");

  if (password.value != confirmPassword.value) {
    password.classList.add("error");
    confirmPassword.classList.add("error");
    passwordMismatchDiv.textContent = "* Passwords do not match!";
  } else {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    passwordMismatchDiv.textContent="";
  }
}

password.addEventListener("change", checkPasswordMatch);
confirmPassword.addEventListener("change", checkPasswordMatch);