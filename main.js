onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

function goToMessage() {
  document.getElementById("message").scrollIntoView({
    behavior: "smooth"
  });
}

function toggleMusic() {
  const audio = document.getElementById("bg-music");
  const btn = document.querySelector(".play-btn");

  if (audio.paused) {
    audio.play();
    btn.textContent = "❚❚";
    btn.classList.toggle("playing");
  } else {
    audio.pause();
    btn.textContent = "▶";
  }
}