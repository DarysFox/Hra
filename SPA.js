function AudioPlayer() {
  const soundImage = document.getElementById("soundImage");
  const audio = document.getElementById("audio");

  soundImage.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      soundImage.src = "images/musical-note.png";
      soundImage.alt = "Vypnout hudbu";
    } else {
      audio.pause();
      soundImage.src = "images/musical-notex.png";
      soundImage.alt = "Spustit hudbu";
    }
  });
}

export default AudioPlayer;
