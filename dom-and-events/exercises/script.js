function init() {
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");
  const missionAbort = document.getElementById("abortMission");

  button.addEventListener("click", (event) => {
    paragraph.innerHTML = "Houston! We have liftoff!";
  });
  missionAbort.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "";
  });
}

window.addEventListener("load", init);
