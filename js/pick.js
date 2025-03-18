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
      console.log(e);
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
        console.log("Selected:", selectedChar);
        const charData = breathData[selectedChar];
        resolve(charData);
      });
    });
  });
}

export function startPractice() {
  playBreath().then((charData) => {
    console.log(`${charData.charName} is ready to play`);
    document.querySelector("#controller").addEventListener("click", () => {
      if (charData.isBreathing) {
        console.log("Test: Stopping", charData.charName);
        charData.stopBreathing();
        return;
      } else {
        console.log("Test: Playing", charData.charName);
        charData.moveMent();
        charData.startBreathing();
      }
    });
  });
}
