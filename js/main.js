import { playPause } from "./playPause.js";
import { hover } from "./hover.js";
import { minsCon } from "./minscontroller.js";
import { pick, playBreath, startPractice } from "./pick.js";
import { breathBrosData } from "./calling.js";

hover();
playPause();
minsCon();
pick();
playBreath();
startPractice();

const { cloudChar, triangleChar, circleChar, heartChar } = breathBrosData();
// heartChar.startBreathing();

const logo = document.querySelector("#logo");
const logoFace = document.querySelector("#logo-eyes");
const button = document.querySelector("#controller");
const heart = document.querySelector("#smiley");
const heartFace = document.querySelectorAll(".heartFace");
const heartBody = document.querySelector("#heartBody");
const textReady = document.querySelector(".textbox-1");
const textBreathIn = document.querySelector(".textbox-2");
const textBreathOut = document.querySelector(".textbox-3");
const controllerBox = document.querySelector("#controller");
const playPauseDisplay = document.querySelector("#playStop");
