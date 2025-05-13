document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("Load");
  const mainContent = document.getElementById("content");

  // Wait for the fade-out animation to complete
  setTimeout(() => {
    loadingScreen.style.display = "none"; // Hide the loading screen
    mainContent.style.display = "block"; // Show the main content
  }, 1700); // Matches the total duration of the fade-out animation (2s delay + 1s animation)
});

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bg-music");
  const muteBtn = document.getElementById("mute-btn");

  // Restore mute state and playback position
  const isMuted = localStorage.getItem("bg-music-muted") === "true";
  const lastTime = parseFloat(localStorage.getItem("bg-music-time")) || 0;

  audio.currentTime = lastTime;
  audio.muted = isMuted;
  muteBtn.src = isMuted
    ? "https://cdn.iconscout.com/icon/free/png-512/free-speaker-mute-icon-download-in-svg-png-gif-file-formats--silent-no-volume-user-interface-pack-icons-2598130.png?f=webp&w=512"
    : "https://cdn.iconscout.com/icon/free/png-512/free-speaker-volume-full-icon-download-in-svg-png-gif-file-formats--sound-voice-user-interface-pack-icons-2598129.png?f=webp&w=512";

  // Autoplay after user interaction (required by browsers)
  function startAudio() {
    audio.play();
    document.removeEventListener("click", startAudio);
  }
  document.addEventListener("click", startAudio);

  // Mute/unmute toggle
  muteBtn.addEventListener("click", function () {
    audio.muted = !audio.muted;
    muteBtn.src = audio.muted
      ? "https://cdn.iconscout.com/icon/free/png-512/free-speaker-mute-icon-download-in-svg-png-gif-file-formats--silent-no-volume-user-interface-pack-icons-2598130.png?f=webp&w=512"
      : "https://cdn.iconscout.com/icon/free/png-512/free-speaker-volume-full-icon-download-in-svg-png-gif-file-formats--sound-voice-user-interface-pack-icons-2598129.png?f=webp&w=512";
    localStorage.setItem("bg-music-muted", audio.muted);
  });

  // Save playback position before leaving the page
  window.addEventListener("beforeunload", function () {
    localStorage.setItem("bg-music-time", audio.currentTime);
  });
});
