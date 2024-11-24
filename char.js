const goldyCard = document.getElementById("goldy-card");
const questionImg = document.getElementById("question-img");
const goldyImg = document.getElementById("goldy-img");
const goldyName = document.getElementById("goldy-name");
const hideName = document.getElementById("hide");
const unlockButton = document.getElementById("unlock-goldy");

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
