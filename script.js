let board;
let boardWidth = 360;
let boardHeight = 575;
let context;

window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = boad.getContext("2d");
};
