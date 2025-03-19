class Breath {
  constructor(name, inhale, hold, exhale, holdAfterExhale = 0) {
    this.name = name;
    this.inhale = inhale;
    this.hold = hold;
    this.exhale = exhale;
    this.holdAfterExhale = holdAfterExhale;
  }

  getSteps() {
    return [
      { phase: "inhale", duration: this.inhale },
      { phase: "hold", duration: this.hold },
      { phase: "exhale", duration: this.exhale },
      { phase: "holdAfterExhale", duration: this.holdAfterExhale },
    ];
  }

  startBreathing(callback) {
    let steps = this.getSteps();
    let index = 0;
    this.isBreathing = true;

    const nextStep = () => {
      if (!this.isBreathing || index >= steps.length) return;
      let step = steps[index];

      console.log(`${this.name} - ${step.phase} for ${step.duration} seconds`);
      if (callback) callback(step.phase, step.duration);

      index++;
      if (index >= steps.length) index = 0;
      setTimeout(nextStep, step.duration * 1000);
    };
    console.log(steps);
    nextStep();
  }

  stopBreathing() {
    this.isBreathing = false;
    console.log(`${this.name} - Breathing stopped.`);
  }
}

class CharBreath extends Breath {
  constructor(charName, breathReference, move, standby, svgPath, bodyPath) {
    super(
      breathReference.name,
      breathReference.inhale,
      breathReference.hold,
      breathReference.exhale,
      breathReference.holdAfterExhale
    );
    this.steps = breathReference.getSteps();
    this.charName = charName;
    this.move = move;
    this.standby = standby;
    this.svg = svgPath;
    this.body = bodyPath;
  }

  startBreathing(callback) {
    let steps = this.getSteps();
    let index = 0;
    this.isBreathing = true;
    let stepStartTime = null;
    let currentStepDuration = 0;

    const body = document.querySelector("#body");
    const face = document.querySelector("#face");
    const text = document.querySelector("#breathingStep");

    const animate = (currentTime) => {
      if (!this.isBreathing) return;

      if (stepStartTime === null) {
        stepStartTime = currentTime;
        currentStepDuration = steps[index].duration;
        updateUI(steps[index]);
      }

      const elapsed = (currentTime - stepStartTime) / 1000;

      if (elapsed >= currentStepDuration) {
        console.log(
          `${this.name} - ${steps[index].phase} for ${currentStepDuration} seconds`
        );
        if (callback) callback(steps[index].phase, currentStepDuration);

        index = (index + 1) % steps.length;

        while (steps[index].duration === 0) {
          index = (index + 1) % steps.length;
        }

        stepStartTime = currentTime;
        currentStepDuration = steps[index].duration;
        updateUI(steps[index]);
      }

      requestAnimationFrame(animate);
    };

    function updateUI(step) {
      switch (step.phase) {
        case "inhale":
          body.setAttribute(
            "style",
            `animation: inhale ${step.duration}s ease`
          );
          text.textContent = [];
          text.textContent = step.phase;
          if (this === "triangleChar") {
            face.setAttribute("class", "pos");
          } else {
            face.setAttribute("class", "");
          }

          console.log("Inhale");
          break;
        case "hold":
          body.setAttribute("style", `animation: hold ${step.duration}s ease`);
          text.textContent = [];
          text.textContent = step.phase;
          if (this === "triangleChar") {
            face.setAttribute("class", "pos");
          } else {
            face.setAttribute("class", "");
          }
          console.log("Hold");
          break;
        case "exhale":
          body.setAttribute(
            "style",
            `animation: exhale ${step.duration}s ease`
          );
          text.textContent = [];
          text.textContent = step.phase;
          if (this === "triangleChar") {
            face.setAttribute("class", "pos");
          } else {
            face.setAttribute("class", "");
          }
          console.log("Exhale");
          break;
        case "holdAfterExhale":
          body.setAttribute(
            "style",
            `animation: holdAfter ${step.duration}s ease`
          );
          text.textContent = [];
          text.textContent = step.phase;
          if (this === "triangleChar") {
            face.setAttribute("class", "pos");
          } else {
            face.setAttribute("class", "");
          }
          console.log("Hold After Exhale");
          break;
      }
    }

    console.log("Steps:", steps);
    requestAnimationFrame(animate);
  }

  stopBreathing() {
    this.isBreathing = false;
    console.log(`${this.name} - Breathing stopped.`);
  }

  moveMent() {
    const charBody = document.querySelector("#char path");
    charBody.setAttribute("class", "st0");
    charBody.classList.add(`${this.move}`);
    console.log(`The ${this.charName} is ${this.move}`);
  }
}

class GuidedBreath extends Breath {
  constructor(inhale, hold, exhale, holdAfterExhale) {
    super(inhale, hold, exhale, holdAfterExhale);
  }
  showGuide() {}
}

export { Breath, CharBreath, GuidedBreath };
