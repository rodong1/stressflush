function burnMemo() {
  const explosion = document.getElementById("explosion");
  explosion.style.display = "flex"; // Start explosion animation

  const explosionImg = document.querySelector("#explosion img");

  // After the animation ends, hide the explosion image and reload the page
  setTimeout(() => {
    explosion.style.display = "none"; // Hide explosion image
    location.reload(); // Refresh the page
  }, 1800); // Wait for the animation to complete before hiding the explosion

  const audio = document.getElementById("explosion-sound");
  audio.play();
}

function playCustomSound(soundFile) {
  const audio = new Audio(soundFile); // 동적으로 사운드 파일을 불러옴
  audio.play(); // 사운드 재생
}

function changeFontSize(fontSize) {
  const memoTextArea = document.getElementById("memo");
  memoTextArea.style.fontSize = fontSize + "px"; // 선택된 폰트 사이즈 적용
}
