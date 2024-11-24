let board;
let boardWidth = 360;
let boardHeight = 575;
let context;

let unicornWidth = 46;
let unicornHeight = 46;
let unicornX = 150;
let unicornY = (unicornHeight * 90) / 8 - unicornHeight;
let unicornRightImg;
let unicornLeftImg;

let unicorn = {
  img: null,
  x: unicornX,
  y: unicornY,
  width: unicornWidth,
  height: unicornHeight,
};

let velosityX = 0;
let velocityY = 0;
let initialVelocityY = -8;
let gravity = 0.4;

let planetArray = [];
let planetWidth = 35;
let planetHeight = 35;
let planetImg;

let score = 0;
let maxScore = 0;
let gameOver = false;

let persons = {
  poppy: {
    leftImage: "images/unicorn-left.png",
    rightImage: "images/unicorn-right.png",
  },
  lily: {
    leftImage: "images/pupi-left.png",
    rightImage: "images/pupi-right.png",
  },
  berry: {
    leftImage: "images/pony3-removebg-preview.png",
    rightImage: "images/pony3-right.png",
  },
  goldy: {
    leftImage: "images/small.png",
    rightImage: "images/maslo-right.png",
  },
};

function getCharacter() {
  myStorage = window.localStorage;
  let person = localStorage.getItem("person");
  // console.log("blabla", person);
  // console.log(`person: ${persons[person]["leftImage"]}`);
  if (persons[person] == undefined) {
    return persons["poppy"];
  }

  return persons[person];
}

let planets = [
  "images/planetik.png",
  "images/planetik1.png",
  "images/pink-pl.png",
];

function getRandomPlanet() {
  let i = planets[Math.floor(Math.random() * planets.length)];
  planetImg = new Image();
  planetImg.src = i;
  return planetImg;
}

window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");

  // context.fillStyle = "pink";
  // context.fillRect(unicorn.x, unicorn.y, unicorn.width, unicorn.height);

  let person = getCharacter();

  unicornRightImg = new Image();
  unicornRightImg.src = person.rightImage;
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
  unicornLeftImg.src = person.leftImage;

  // planetImg = new Image();
  // planetImg.src = r;

  velocityY = initialVelocityY;

  placePlanets();
  requestAnimationFrame(update);
  document.addEventListener("keydown", moveUnicorn);

  function update() {
    requestAnimationFrame(update);
    if (gameOver) {
      return;
    }
    context.clearRect(0, 0, board.width, board.height);

    unicorn.x += velosityX;
    if (unicorn.x > boardWidth) {
      unicorn.x = 0;
    } else if (unicorn.x + unicorn.width < 0) {
      unicorn.x = boardWidth;
    }

    velocityY += gravity;
    unicorn.y += velocityY;
    if (unicorn.y > board.height) {
      gameOver = true;
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
      if (velocityY < 0 && unicorn.y < (boardHeight * 3) / 4) {
        planet.y -= initialVelocityY;
      }
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

    while (planetArray.length > 0 && planetArray[0].y >= boardHeight) {
      planetArray.shift();
      newPlanet();
    }

    updateScore();
    context.fillStyle = "white";
    context.font = "16px sans-serif";
    context.fillText(score, 5, 20);

    if (gameOver) {
      context.fillText(
        "Game Over: Press 'Space' to Restart",
        boardWidth / 7,
        (boardHeight * 7) / 8
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
    } else if (e.code == "Space" && gameOver) {
      let unicorn = {
        img: unicornRightImg,
        x: unicornX,
        y: unicornY,
        width: unicornWidth,
        height: unicornHeight,
      };
      velocityX = 0;
      velocityY = initialVelocityY;
      score = 0;
      maxScore = 0;
      gameOver = false;
      placePlanets();
    }
  }
};

function placePlanets() {
  // let planetImage = getRandomPlanet();
  planetArray = [];
  let planet = {
    img: getRandomPlanet(),
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
      img: getRandomPlanet(),
      x: randomX,
      y: boardHeight - 75 * i - 190,
      width: planetWidth,
      height: planetHeight,
    };
    planetArray.push(planet);
  }
}

function newPlanet() {
  let randomX = Math.floor((Math.random() * boardWidth * 3) / 4);
  let planet = {
    img: getRandomPlanet(),
    x: randomX,
    y: -planetHeight,
    width: planetWidth,
    height: planetHeight,
  };
  planetArray.push(planet);
}

function detectCollision(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function updateScore() {
  let points = Math.floor(2 * Math.random());
  if (velocityY < 0) {
    maxScore += points;
    if (score < maxScore) {
      score = maxScore;
    }
  } else if (velocityY >= 0) {
    maxScore -= points;
  }
}
