import { Breath, CharBreath } from "./breath.js";
import { breathBrosData } from "./calling.js";

export function pick() {
  const modeCon = document.querySelector("#modeName");
  const charBody = document.querySelector("#char path");
  const logo = document.querySelector(".logo");
  const breathData = breathBrosData();

  modeCon.addEventListener("click", () => {
    document.querySelector("#modeName ul").classList.toggle("show");
  });

  const modelist = document.querySelectorAll("#modeName ul li");
  modelist.forEach((item) => {
    item.addEventListener("click", () => {
      const face = document.querySelector("#face");
      const charData = breathData[item.dataset.char];

      face.classList = [];
      charBody.setAttribute("d", charData.body);
      charBody.setAttribute("class", `st0 ${charData.standby}`);
      logo.classList.add("ready");
    });
  });
}

export function playBreath() {
  return new Promise((resolve) => {
    const breathData = breathBrosData();
    const modelist = document.querySelectorAll("#modeName ul li");

    modelist.forEach((item) => {
      item.addEventListener("click", () => {
        document.querySelector("#modeName p").textContent = item.textContent;
        const selectedChar = item.dataset.char;
        const charData = breathData[selectedChar];
        resolve(charData);
      });
    });
  });
}

export function startPractice() {
  const button = document.querySelector("#playStop");
  const controller = document.querySelector("#controller");
  const timer = document.querySelector("#custom-number");
  let charData = null;
  let breathingTimeout = null;

  const getTimerValue = () => parseInt(timer.value, 10) || 1;

  timer.addEventListener("input", () => {
    console.log(`Timer updated: ${getTimerValue()} minute(s)`);
  });

  playBreath()
    .then((data) => {
      if (!data || !data.charName) {
        console.warn("Pick Mode First!");
        alert("Pick Mode First!");
        return;
      }
      charData = data;
      console.log(`${charData.charName} is ready to play`);
    })
    .catch((error) => {
      console.error("Pick Mode First!", error);
      alert("Pick Mode First!");
    });

  controller.addEventListener("click", () => {
    if (!charData) {
      console.warn("Please Pick Mode First!");
      alert("Please Pick Mode First!");
      return;
    }

    const currentTimerValue = getTimerValue();
    const timerBox = document.querySelector("#timer");
    const timerLeft = document.querySelector(".timer");

    if (!timerLeft) {
      console.warn("Timer element not found!");
      return;
    }

    console.log(`Current timer value: ${currentTimerValue} minute(s)`);
    timerLeft.style.animation = `timer ${currentTimerValue * 60000}ms linear`;
    timerBox.classList.add("timer");

    if (breathingTimeout) {
      clearTimeout(breathingTimeout);
    }

    if (charData.isBreathing) {
      console.log("Test: Stopping", charData.charName);
      stopBreathing(button, charData);
    } else {
      console.log("Test: Starting", charData.charName);
      startBreathing(button, charData, currentTimerValue);
    }
  });

  function startBreathing(button, charData, timerValue) {
    button.textContent = "P";
    button.style.width = "345px";
    button.style.fontSize = "10.5rem";

    charData.moveMent();
    charData.startBreathing();

    breathingTimeout = setTimeout(() => {
      console.log("⏳ Timer ended. Stopping breathing...");
      stopBreathing(button, charData);
    }, timerValue * 60000);
  }

  function stopBreathing(button, charData) {
    button.textContent = "S";
    button.style.width = "100%";
    button.style.height = "100%";
    button.style.fontSize = "10rem";

    charData.stopBreathing();
    window.location.reload();
  }
}
