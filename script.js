let board;
let boardWidth = 360;
let boardHeight = 575;
let context;

let unicornWidth = 46;
let unicornHeight = 46;
let unicornX = unicornWidth / 2 - unicornWidth / 2;
let unicornY = (unicornHeight * 7) / 8 - unicornHeight;
let unicornRightImg;
let unicornLeftImg;

let velosityX = 0;

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

  requestAnimationFrame(update);
  document.addEventListener("keydown", moveUNnicorn);

  function update() {
    requestAnimationFrame(update);
    context.drawImage(
      unicorn.img,
      unicorn.x,
      unicorn.y,
      unicorn.width,
      unicorn.height
    );
  }

  function moveUNnicorn(e) {
    if (e.code == "ArrowRight" || e.code == "KeyD") {
      velosityX = 4;
      unicorn.img = unicorn.unicornRightImg;
    } else if (e.code == "ArrowLeft" || e.code == "KeyA") {
      velosityX = -4;
      unicorn.img = unicorn.unicornLeftImg;
    }
  }
};
