let textarea = document.querySelector("textarea");
let b = document.querySelectorAll(".counter p b");
textarea.addEventListener("input", () => {
  b[0].textContent = textarea.textLength;
  b[1].textContent = textarea.maxLength - textarea.textLength;
});