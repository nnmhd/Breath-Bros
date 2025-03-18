export function hover() {
  const playCon = document.querySelector("#controller");
  const logo = document.querySelector("#logo");

  function ready() {
    if (!playCon.classList.contains("ready")) {
      playCon.classList.add("ready");
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
  }

  playCon.addEventListener("mouseover", ready);
  playCon.addEventListener("mouseleave", notReady);
}
