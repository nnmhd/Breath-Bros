/* JS outline 

1- Variables
2- Functions
3- Events

*/

// 1-Variable

const logo = document.querySelector("#logo");
const logoFace = document.querySelector("#logo-eyes");
const button = document.querySelector("#playStop");
const heart = document.querySelector("#smiley");
const heartFace = document.querySelectorAll(".heartFace");
const heartBody = document.querySelector("#heartBody");
const textReady = document.querySelector(".textbox-1");
const textBreathIn = document.querySelector(".textbox-2");
const textBreathOut = document.querySelector(".textbox-3");
const controllerBox = document.querySelector("#controller");

console.log(textBreathIn);

// 2-Functions
function play() {
  if (heartBody.classList.contains("heartBeat")) {
    heartBody.classList.remove("heartBeat");
    heartBody.classList.toggle("practice");
    heartFace.forEach((e) => {
      e.classList.add("practiceSmileyFace");
    });
    logoFace.classList.toggle("logoBreathing");
    logo.classList.toggle("logoBreathingY");
    textReady.classList.toggle("textReady");
    textBreathIn.classList.toggle("breathIn");
    textBreathOut.classList.toggle("breathOut");
    controllerBox.classList.toggle("boxColorChanging");
    button.innerHTML = "P";
  } else {
    heartBody.classList.add("heartBeat");
    heartBody.classList.toggle("practice");
    heartFace.forEach((e) => {
      e.classList.toggle("practiceSmileyFace");
    });
    logoFace.classList.toggle("logoBreathing");
    logo.classList.toggle("logoBreathingY");
    textReady.classList.toggle("textReady");
    textBreathIn.classList.toggle("breathIn");
    textBreathOut.classList.toggle("breathOut");
    controllerBox.classList.toggle("boxColorChanging");
    button.innerHTML = "S";
  }
}

function ready() {
  if (!logo.classList.contains("ready")) {
    logo.classList.add("ready");
  }
  console.log(logo);
}

function notReady() {
  if (logo.classList.contains("ready")) {
    logo.classList.remove("ready");
  }

  if (!heartBody.classList.contains("heartBeat")) {
    logo.classList.add("ready");
  }
}
// 3-Events

button.addEventListener("click", play);
button.addEventListener("mouseover", ready);
button.addEventListener("mouseleave", notReady);
