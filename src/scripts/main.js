AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button");

  button.addEventListener("click", confet);
  time();
});

//função time para contar o tempo até o aniversário
function time() {
  const dateEvent = new Date("Jun 15, 2025 19:00:00");
  const timeStampEvent = dateEvent.getTime();

  const counterTime = setInterval(function () {
    const time = new Date();
    const timeStempCurrent = time.getTime();

    const distanceToEvent = timeStampEvent - timeStempCurrent;

    const dayToMs = 1000 * 60 * 60 * 24;
    const hoursToMs = 1000 * 60 * 60;
    const minToMs = 1000 * 60;

    const dayOfEvent = Math.floor(distanceToEvent / dayToMs);
    const hoursOfEvent = Math.floor((distanceToEvent % dayToMs) / hoursToMs);
    const minutesOfEvent = Math.floor((distanceToEvent % hoursToMs) / minToMs);
    const secondsOfEvent = Math.floor((distanceToEvent % minToMs) / 1000);

    document.getElementById(
      "counterTime"
    ).innerHTML = `${dayOfEvent}d ${hoursOfEvent}h ${minutesOfEvent}m ${secondsOfEvent}s`;

    if (distanceToEvent < 0) {
      clearInterval(counterTime);
      document.getElementById("counterTime").innerHTML = "Evento expirado";
    }
  }, 1000);
}

//Função para colocar a cofirmação da presenca junto com os confetes
function confet() {
  const cat = document.querySelector(".cat");
  const body = document.body;
  cat.style.display = "flex";
  body.style.overflowY = "hidden";

  setTimeout(() => {
    cat.style.display = "none";
    body.style.overflowY = "visible";
  }, 5000);

  const end = Date.now() + 5 * 1000;

  //Confetes
  const colors = ["#bb0000", "#ffffff"];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });

    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
