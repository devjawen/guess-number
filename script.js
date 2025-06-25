let max = 100;
let randomNumber = Math.floor(Math.random() * max) + 1;
let attempts = 0;
const maxAttempts = 10;

const guessBtn = document.getElementById("guess-btn");
const restartBtn = document.getElementById("restart-btn");
const input = document.getElementById("guess-input");
const message = document.getElementById("message");
const attemptsInfo = document.getElementById("attempts-info");

guessBtn.addEventListener("click", () => {
  const guess = parseInt(input.value);
  attempts++;

  if (isNaN(guess)) {
    message.textContent = "⚠️ Lütfen geçerli bir sayı gir.";
    return;
  }

  if (guess < randomNumber) {
    message.textContent = "🔼 Daha büyük bir sayı dene.";
  } else if (guess > randomNumber) {
    message.textContent = "🔽 Daha küçük bir sayı dene.";
  } else {
    message.textContent = `🎉 Tebrikler! ${attempts} denemede doğru bildin.`;
    endGame();
    return;
  }

  if (attempts >= maxAttempts) {
    message.textContent = `💥 Hakkın bitti! Doğru sayı: ${randomNumber}`;
    endGame();
  }

  attemptsInfo.textContent = `Kalan hak: ${maxAttempts - attempts}`;
});

function endGame() {
  guessBtn.disabled = true;
  input.disabled = true;
  restartBtn.style.display = "inline-block";
}

restartBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * max) + 1;
  attempts = 0;
  input.value = "";
  message.textContent = "";
  attemptsInfo.textContent = "";
  guessBtn.disabled = false;
  input.disabled = false;
  restartBtn.style.display = "none";
});
