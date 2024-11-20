let board;
let boardWidth = 360;
let boardHeight = 575;
let context;

let unicornWidth = 46;
let unicornHeight = 46;
let unicornX = 150;
let unicornY = (unicornHeight * 85) / 8 - unicornHeight;
let unicornRightImg;
let unicornLeftImg;

let velosityX = 0;

let planetArray = [];
let planetWidth = 60;
let planetHeight = 60;
let planetImg;

let unicorn = {
  img: null,
  x: unicornX,
  y: unicornY,
  width: unicornWidth,
  height: unicornHeight,
};

window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");

  // context.fillStyle = "pink";
  // context.fillRect(unicorn.x, unicorn.y, unicorn.width, unicorn.height);

  unicornRightImg = new Image();
  unicornRightImg.src = "images/unicorn-right.png";
  unicorn.img = unicornRightImg;

  unicornRightImg.onload = function () {
    context.drawImage(
      unicorn.img,
      unicorn.x,
      unicorn.y,
      unicorn.width,
      unicorn.height
    );
  };
  unicornLeftImg = new Image();
  unicornLeftImg.src = "images/unicorn-left.png";

  planetImg = new Image();
  planetImg.src = "images/bp2-removebg-preview.png";

  placePlanets();
  requestAnimationFrame(update);
  document.addEventListener("keydown", moveUnicorn);

  function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    unicorn.x += velosityX;
    if (unicorn.x > boardWidth) {
      unicorn.x = 0;
    } else if (unicorn.x + unicorn.width < 0) {
      unicorn.x = boardWidth;
    }

    context.drawImage(
      unicorn.img,
      unicorn.x,
      unicorn.y,
      unicorn.width,
      unicorn.height
    );

    for (let i = 0; i < planetArray.length; i++) {
      let planet = planetArray[i];
      context.drawImage(
        planet.img,
        planet.x,
        planet.y,
        planet.width,
        planet.height
      );
    }
  }

  function moveUnicorn(e) {
    if (e.code == "ArrowRight" || e.code == "KeyD") {
      velosityX = 4;
      unicorn.img = unicornRightImg;
    } else if (e.code == "ArrowLeft" || e.code == "KeyA") {
      velosityX = -4;
      unicorn.img = unicornLeftImg;
    }
  }
};

function placePlanets() {
  planetArray = [];
  let planet = {
    img: planetImg,
    x: boardWidth / 2,
    y: boardHeight - 90,
    width: planetWidth,
    height: planetHeight,
  };
  planetArray.push(planet);
}
