const songs = [
  { name: "Ishq Hai", path: "download_music/ishq_hai.mp3" },
  { name: "O Rangrez", path: "download_music/o_rangrez.mp3" },
  { name: "Aaja Piya Tohe", path: "download_music/Aaja_Piya_Tohe.mp3" },
  { name: "Earned It", path: "download_music/Earned_It.mp3" },
  { name: "Die With A Smile", path: "download_music/Die_With_A_Smile.mp3" }
];

let currentSong = 0;
const audio = document.getElementById("audio");
const source = document.getElementById("audioSource");
const songNameDisplay = document.getElementById("songName");

function loadSong(index) {
  source.src = songs[index].path;
  songNameDisplay.textContent = "Now Playing: " + songs[index].name;
  audio.load();
  audio.play();
  document.getElementById("playPauseIcon").className = "fas fa-pause";
}

function playPause() {
  const icon = document.getElementById("playPauseIcon");
  if (audio.paused) {
    audio.play();
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  } else {
    audio.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
}

// Populate playlist
const playlistList = document.getElementById("playlistList");

songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = song.name;
  li.style.cursor = "pointer";
  li.onclick = () => {
    currentSong = index; // fixed variable name from currentSongIndex
    loadSong(currentSong);
  };
  playlistList.appendChild(li);
});