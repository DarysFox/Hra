const goldyCard = document.getElementById("goldy-card");
const questionImg = document.getElementById("question-img");
const goldyImg = document.getElementById("goldy-img");
const goldyName = document.getElementById("goldy-name");
const hideName = document.getElementById("hide");
const unlockButton = document.getElementById("unlock-goldy");
myStorage = window.localStorage;

unlockButton.addEventListener("click", () => {
  // var x = localStorage.getItem("scores");
  // if (x < 70) {
  //   alert("You have to reach score 70 :(");
  // } else if (x >= 70) {
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

// function saveScores() {
//   localStorage.setItem("scores", JSON.stringify(score));
// }
function choosePerson(e) {
  localStorage.clear();
  console.log(e);
  localStorage.setItem("person", e);
  // if (x < 70 && persons[person] == "goldy") {
  //   window.location.href = "character.html";
  //   choosePerson();
  //}
  window.location.href = "index.html";
}
