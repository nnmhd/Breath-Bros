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

    const nextStep = () => {
      if (!this.isBreathing || index >= steps.length) return;
      let step = steps[index];

      const stepB = ``;
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
