// skryti jednoho jednorozce pred rozkliknutim

const goldyCard = document.getElementById("goldy-card");
const questionImg = document.getElementById("question-img");
const goldyImg = document.getElementById("goldy-img");
const goldyName = document.getElementById("goldy-name");
const hideName = document.getElementById("hide");
const unlockButton = document.getElementById("unlock-goldy");

myStorage = window.localStorage;

// co se stane po rozkliknuti
unlockButton.addEventListener("click", () => {
  questionImg.classList.add("hidden");
  goldyImg.classList.remove("hidden");
  hideName.classList.add("hidden");
  goldyName.classList.remove("hidden");

  goldyCard.classList.remove("locked");

  // efekt zareni
  goldyCard.classList.add("glow");
  setTimeout(() => {
    goldyCard.classList.remove("glow");
  }, 2000);
});

//vybrany jednorozec se zapise do local.storage ale predem ho vyprazdni
function choosePerson(e) {
  localStorage.clear();
  console.log(e);
  localStorage.setItem("person", e);

  //prechod na dalsi stranku
  window.location.href = "index.html";
}
