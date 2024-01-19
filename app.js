const copyInput = document.getElementById("copy-input");
const copyBtn = document.getElementById("copy-btn");
const copyImg = document.getElementById("copy-img");
const copiedImg = document.getElementById("copied-img");
const range = document.getElementById("range");
const rangeNumber = document.getElementById("range-number");
const pressBtn = document.getElementById("press-btn");

//!Assigning Charecters to variable
let allChars =
  "mnbvcxzlkjhgfdsapoiuytrewqQAZWSXEDCRFVTGBYHNUJMIKLOP1029384756~!@#$%^&*()_-+=";

//!Setting a Generate Function
function generatePassword() {
  let password = "";
  //!Loop through the data to generate variable
  for (let i = 0; i < range.value; i++) {
    let setPassword = Math.floor(Math.random() * allChars.length);
    password += allChars[setPassword];
    copyInput.value = password;
  }

  //!Displaying password into input
  range.addEventListener("input", setRangeNum);

  function setRangeNum() {
    rangeNumber.innerText = range.value;
  }

  copyImg.classList.remove("none");
  copiedImg.classList.add("none");
}

copyBtn.addEventListener("click", copyFunction);

function copyFunction() {
  navigator.clipboard.writeText(copyInput.value);
  copyImg.classList.add("none");
  copiedImg.classList.remove("none");
}

pressBtn.addEventListener("click", generatePassword);

generatePassword();
