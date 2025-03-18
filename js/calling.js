import { Breath, CharBreath, GuidedBreath } from "./breath.js";

export function breathBrosData() {
  const BoxBreathing = new Breath("Box Breathing", 4, 4, 4, 0);
  const ResonantBreathing = new Breath("Resonant ", 4, 0, 8, 0);
  const ButeykoBreathing = new Breath("Buteyko", 2, 0, 5, 5);
  const fourSevenEightBreathing = new Breath("Four Seven Eight", 4, 7, 8, 0);

  const cloudChar = new CharBreath(
    "Cloud",
    fourSevenEightBreathing,
    "spin",
    "spinning",
    "cloudChar.svg",
    "M851.7,432.3c-24.1-24.1-52.9-40.6-83.4-49.6,27.5-9.4,53.4-25.1,75.4-47,76.8-76.8,76.8-201.3,0-278.1-76.8-76.8-201.3-76.8-278.1,0-38.4,38.4-57.6,88.7-57.6,139s0,.6,0,.9c0,0,0,0,0,0,0-.3,0-.6,0-.9,0-50.3-19.2-100.7-57.6-139-76.8-76.8-201.3-76.8-278.1,0s-76.8,201.3,0,278.1c24.1,24.1,52.9,40.6,83.4,49.6-27.5,9.4-53.4,25.1-75.4,47-76.8,76.8-76.8,201.3,0,278.1,76.8,76.8,201.3,76.8,278.1,0,34.1-34.1,53-77.6,56.9-122.2.5,0,1-.1,1.5-.2,3.8,44.6,22.7,88.2,56.9,122.3,76.8,76.8,201.3,76.8,278.1,0,76.8-76.8,76.8-201.3,0-278.1Z"
  );
  const triangleChar = new CharBreath(
    "Triangle",
    ResonantBreathing,
    "bloom",
    "spinning",
    "triangleChar.svg",
    "M512 0 L73.2 768 L950.8 768 Z"
  );
  const heartChar = new CharBreath(
    "Heart",
    BoxBreathing,
    "heartBeat",
    "heartBeat",
    "heartChar.svg",
    "M848.3,411.7l-13,13-330,330L162.2,411.7c-91.1-91.1-91.1-238.9,0-330C207.8,36.1,267.5,13.3,327.2,13.3s119.4,22.8,165,68.3l13,13,13-13c45.6-45.6,105.3-68.3,165-68.3s119.4,22.8,165,68.3c91.1,91.1,91.1,238.9,0,330Z"
  );
  const circleChar = new CharBreath(
    "Circle",
    ButeykoBreathing,
    "bloom",
    "float",
    "circleChar.svg",
    "M512,17.3c202.3,0,366.7,164.4,366.7,366.7S714.3,750.7,512,750.7,145.3,586.3,145.3,384,309.7,17.3,512,17.3Z"
  );

  return { cloudChar, triangleChar, heartChar, circleChar };
}
