import { Breath, CharBreath } from "./breath.js";
import { breathBrosData } from "./calling.js";

export function pick() {
  const modeCon = document.querySelector("#modeName");
  const charBody = document.querySelector("#char path");
  modeCon.addEventListener("click", () => {
    document.querySelector("#modeName ul").classList.toggle("show");
  });

  // !call the data //
  const breathData = breathBrosData();

  const modelist = document.querySelectorAll("#modeName ul li");
  Array.from(modelist).forEach((e) => {
    e.addEventListener("click", () => {
      const face = document.querySelector("#face");
      face.classList = [];
      const P = e.dataset.char;

      const charData = breathData[P];
      charBody.setAttribute("d", charData.body);
      charBody.setAttribute("class", `st0`);
      charBody.setAttribute("class", `st0 ${charData.standby}`);

      if (P === "triangleChar") {
        face.classList.add("pos");
      }
    });
  });
}

export function playBreath() {
  return new Promise((resolve) => {
    const breathData = breathBrosData();
    document.querySelectorAll("#modeName ul li").forEach((e) => {
      e.addEventListener("click", () => {
        const selectedChar = e.dataset.char;
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

  function getTimerValue() {
    return parseInt(timer.value, 10) || 1;
  }

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
    console.log(`Current timer value: ${currentTimerValue} minute(s)`);

    // ! Timer Animation
    const timerBox = document.querySelector("#timer");
    const timerLeft = document.querySelector(".timer");

    if (!timerLeft) {
      console.warn("Timer element not found!");
      return;
    }

    timerLeft.style.animation = `timer ${currentTimerValue * 60000}ms linear`;
    timerBox.classList.add("timer");

    if (breathingTimeout) {
      clearTimeout(breathingTimeout);
    }

    if (charData.isBreathing) {
      console.log("Test: Stopping", charData.charName);
      button.textContent = "S";
      button.style.width = "100%";
      button.style.height = "100%";
      button.style.fontSize = "10rem";
      charData.stopBreathing();
      window.location.reload();
    } else {
      console.log("Test: Playing", charData.charName);
      button.textContent = "P";
      button.style.width = "345px";
      // button.style.height = "345px";
      button.style.fontSize = "10.5rem";
      charData.moveMent();
      charData.startBreathing();

      breathingTimeout = setTimeout(() => {
        console.log("⏳ Timer ended. Stopping breathing...");
        button.textContent = "S";
        charData.stopBreathing();
        window.location.reload();
      }, currentTimerValue * 60000);
    }
  });
}
