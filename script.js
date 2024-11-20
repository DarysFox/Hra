let board;
let boardWidth = 360;
let boardHeight = 575;
let context;

let unicornWidth = 46;
let unicornHeight = 46;
let unicornY = unicornWidth / 2 - unicornWidth / 2;
let unicornX = (unicornHeight * 7) / 8 - unicornHeight;
let unicornRightImg;
let unicornLeftImg;

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
  context = boad.getContext("2d");
};
