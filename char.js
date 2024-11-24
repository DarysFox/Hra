const goldyCard = document.getElementById("goldy-card");
const questionImg = document.getElementById("question-img");
const goldyImg = document.getElementById("goldy-img");
const unlockButton = document.getElementById("unlock-goldy");

unlockButton.addEventListener("click", () => {
  questionImg.classList.add("hidden");
  goldyImg.classList.remove("hidden");

  goldyCard.classList.remove("locked");
});
