import "./style.css";
import { showError } from "./functions/showError";
import { confirmPasswordInputs } from "./functions/confirmPasswordInputs";

const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");
const countryInput = document.querySelector("#country");
const countryError = document.querySelector("#country + span.error");
const passwordInput = document.querySelector("#password");
const passwordConfirmationInput = document.querySelector(
  "#password-confirmation"
);

emailInput.addEventListener("input", () => {
  if (emailInput.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

countryInput.addEventListener("input", () => {
  if (countryInput.validity.valid) {
    countryError.textContent = "";
    countryError.className = "error";
  } else {
    showError();
  }
});

passwordInput.addEventListener("input", confirmPasswordInputs);
passwordConfirmationInput.addEventListener("input", confirmPasswordInputs);

form.addEventListener("submit", (e) => {
  if (!emailInput.validity.valid) {
    showError();
    e.preventDefault();
  }

  if (!countryInput.validity.valid) {
    showError();
    e.preventDefault();
  }

  let passwordValid = confirmPasswordInputs();
  console.log(passwordValid);
  if (!passwordValid.passwordValid || !passwordValid.passwordConfirmation) {
    showError();
    e.preventDefault();
  }
});
