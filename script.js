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
let velocityY = 0;
let initialVelocityY = -8;
let gravity = 0.4;

let planetArray = [];
let planetWidth = 35;
let planetHeight = 35;
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
  unicornRightImg.src = "images/pupi-right.png";
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
  unicornLeftImg.src = "images/pupi-left.png";

  planetImg = new Image();
  planetImg.src = "images/marsik1.png";

  velocityY = initialVelocityY;

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

    velocityY += gravity;
    unicorn.y += velocityY;
    context.drawImage(
      unicorn.img,
      unicorn.x,
      unicorn.y,
      unicorn.width,
      unicorn.height
    );

    for (let i = 0; i < planetArray.length; i++) {
      let planet = planetArray[i];
      if (detectCollision(unicorn, planet) && velocityY >= 0) {
        velocityY = initialVelocityY;
      }
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

  // planet = {
  //   img: planetImg,
  //   x: boardWidth / 2,
  //   y: boardHeight - 190,
  //   width: planetWidth,
  //   height: planetHeight,
  // };
  // planetArray.push(planet);

  for (let i = 0; i < 6; i++) {
    let randomX = Math.floor((Math.random() * boardWidth * 3) / 4);
    let planet = {
      img: planetImg,
      x: randomX,
      y: boardHeight - 75 * i - 190,
      width: planetWidth,
      height: planetHeight,
    };
    planetArray.push(planet);
  }
}

function detectCollision(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}
