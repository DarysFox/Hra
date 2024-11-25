const goldyCard = document.getElementById("goldy-card");
const questionImg = document.getElementById("question-img");
const goldyImg = document.getElementById("goldy-img");
const goldyName = document.getElementById("goldy-name");
const hideName = document.getElementById("hide");
const unlockButton = document.getElementById("unlock-goldy");
myStorage = window.localStorage;

unlockButton.addEventListener("click", () => {
  questionImg.classList.add("hidden");
  goldyImg.classList.remove("hidden");
  hideName.classList.add("hidden");
  goldyName.classList.remove("hidden");

  goldyCard.classList.remove("locked");

  goldyCard.classList.add("glow");

  setTimeout(() => {
    goldyCard.classList.remove("glow");
  }, 2000);
});

function choosePerson(e) {
  localStorage.clear();
  console.log(e);
  localStorage.setItem("person", e);
  window.location.href = "index.html";
}
const audio = document.getElementById("myAudio");
document.addEventListener(
  "keydown",
  () => {
    audio.loop = true;
    audio.play();
  },
  { once: true }
);
