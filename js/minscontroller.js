export function minsCon() {
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
}
