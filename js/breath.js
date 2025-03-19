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
      { phase: "hold...", duration: this.holdAfterExhale },
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

    const elements = {
      body: document.querySelector("#body"),
      face: document.querySelector("#face"),
      text: document.querySelector("#breathingStep"),
      Tbreath: document.querySelector(".Tbreath"),
      logo: document.querySelector("#logo"),
      logoFace: document.querySelector("#logo g rect"),
      logoMouth: document.querySelector("#logo-mouth"),
      logoBody: document.querySelector("#logo-body"),
    };

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

    const updateUI = (step) => {
      const { phase, duration } = step;
      const animationStyle = `animation: ${phase} ${duration}s ease-in-out`;
      const faceAnimationStyle = `animation: face_${phase} ${duration}s ease-in-out`;
      const logoAnimationStyle = `animation: logo_${phase} ${duration}s cubic-bezier(0.65, 0.05, 0.36, 1)`;
      const textAnimationStyle = `animation: T${phase} ${duration}s ease-in-out`;

      elements.body.setAttribute("style", animationStyle);
      elements.face.setAttribute("style", faceAnimationStyle);
      elements.logo.setAttribute("style", logoAnimationStyle);
      elements.text.textContent = phase;
      elements.Tbreath.setAttribute("style", textAnimationStyle);

      console.log(phase.charAt(0).toUpperCase() + phase.slice(1));
    };

    requestAnimationFrame(animate);
  }

  stopBreathing() {
    this.isBreathing = false;
    console.log(`${this.name} - Breathing stopped.`);
  }

  moveMent() {
    const charBody = document.querySelector("#char path");
    charBody.setAttribute("class", "st0");
    charBody.classList.add(this.move);
  }
}

export { Breath, CharBreath };
