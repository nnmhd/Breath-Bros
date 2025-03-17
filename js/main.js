/* JS outline 

1- Variables
2- Functions
3- Events

*/

// 1-Variable

import { Breath, CharBreath, GuidedBreath } from "./breath.js";

const BoxBreathing = new Breath("Box Breathing", 4, 4, 4, 0);
const ResonantBreathing = new Breath("Resonant ", 4, 0, 8, 0);
const ButeykoBreathing = new Breath("Buteyko", 2, 0, 5, 5);
const fourSevenEightBreathing = new Breath("Four Seven Eight", 4, 7, 8, 0);

const cloudChar = new CharBreath("Cloud", fourSevenEightBreathing, "spin");
const triangleChar = new CharBreath("Triangle", ResonantBreathing, "bloom");
const heartChar = new CharBreath("Heart", BoxBreathing, "bloom");
const circleChar = new CharBreath("Circle", ButeykoBreathing, "bloom");

cloudChar.startBreathing();

// !functions
// BoxBreathing.startBreathing();
// ButeykoBreathing.startBreathing();
// ResonantBreathing.startBreathing();
// fourSevenEightBreathing.startBreathing();

const modelist = document.querySelectorAll("#modeName ul li");
Array.from(modelist).forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e);
    const mode = e.innerText;
    document.querySelector("#modeName p").innerText = mode;
  });
});

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
}

function notReady() {
  if (logo.classList.contains("ready")) {
    logo.classList.remove("ready");
  }

  if (!heartBody.classList.contains("heartBeat")) {
    logo.classList.add("ready");
  }
}

window.increaseValue = function increaseValue() {
  let input = document.querySelector("#custom-number");
  if (parseInt(input.value) < parseInt(input.max)) {
    input.value = parseInt(input.value) + 1;
  }
};

window.decreaseValue = function decreaseValue() {
  let input = document.querySelector("#custom-number");
  if (parseInt(input.value) > parseInt(input.min)) {
    input.value = parseInt(input.value) - 1;
  }
};

const modeCon = document.querySelector("#modeName");
modeCon.addEventListener("click", () => {
  document.querySelector("#modeName ul").classList.toggle("show");
});

// 3-Events

button.addEventListener("click", play);
button.addEventListener("mouseover", ready);
button.addEventListener("mouseleave", notReady);
