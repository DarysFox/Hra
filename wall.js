myStorage = window.localStorage;
function chooseWall(e) {
  localStorage.clear(wall);
  console.log(e);
  localStorage.setItem("wall", e);
  window.location.href = "index.html";
}
