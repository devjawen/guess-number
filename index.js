const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let max, randomNumber, attempts, remaining, startTime;

function initGame() {
  console.clear();
  console.log(chalk.cyan.bold("🎮 Sayı Tahmin Oyununa Hoş Geldin!"));
  console.log(chalk.gray("Zorluk seviyesi seç:"));
  console.log("  1) Kolay (1-50, 10 hak)");
  console.log("  2) Orta  (1-100, 12 hak)");
  console.log("  3) Zor   (1-200, 15 hak)");

  rl.question(chalk.yellow("Seçimin (1/2/3): "), (level) => {
    if (level === "1") {
      max = 50;
      remaining = 10;
    } else if (level === "3") {
      max = 200;
      remaining = 15;
    } else {
      max = 100;
      remaining = 12;
    }

    attempts = 0;
    randomNumber = Math.floor(Math.random() * max) + 1;
    startTime = Date.now();

    console.log(chalk.magenta(`\n🎯 1 ile ${max} arasında bir sayı tuttum.`));
    askGuess();
  });
}

function askGuess() {
  if (remaining <= 0) {
    console.log(chalk.red.bold("\n💥 Hakkın bitti!"));
    console.log(chalk.redBright(`🔎 Doğru sayı: ${randomNumber}\n`));
    return playAgain();
  }

  rl.question(chalk.white(`\n📌 Tahminin? (Kalan hakkın: ${chalk.yellow(remaining)}): `), (input) => {
    const guess = parseInt(input);
    attempts++;
    remaining--;

    if (isNaN(guess)) {
      console.log(chalk.red("⚠️ Geçerli bir sayı gir."));
    } else if (guess < randomNumber) {
      console.log(chalk.blue("🔼 Daha büyük bir sayı dene."));
    } else if (guess > randomNumber) {
      console.log(chalk.blue("🔽 Daha küçük bir sayı dene."));
    } else {
      const time = ((Date.now() - startTime) / 1000).toFixed(2);
      console.log(chalk.greenBright.bold(`\n🎉 Tebrikler! ${attempts} denemede doğru bildin.`));
      console.log(chalk.green(`⏱️ Süre: ${time} saniye\n`));
      return playAgain();
    }

    askGuess();
  });
}

function playAgain() {
  rl.question(chalk.yellow("🔁 Tekrar oynamak ister misin? (e/h): "), (cevap) => {
    if (cevap.toLowerCase() === "e") {
      initGame();
    } else {
      console.log(chalk.gray("\n👋 Görüşmek üzere!"));
      rl.close();
    }
  });
}

initGame();
