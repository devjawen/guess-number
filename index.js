const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("🎲 1 ile 100 arasında bir sayı tuttum. Tahmin et bakalım!");

const askGuess = () => {
  rl.question("Tahminin nedir? ", (input) => {
    const guess = parseInt(input);
    attempts++;

    if (isNaN(guess)) {
      console.log("❗ Lütfen bir sayı gir.");
    } else if (guess < randomNumber) {
      console.log("🔼 Daha büyük bir sayı dene.");
    } else if (guess > randomNumber) {
      console.log("🔽 Daha küçük bir sayı dene.");
    } else {
      console.log(`🎉 Tebrikler! ${attempts} denemede doğru bildin.`);
      rl.close();
      return;
    }

    askGuess();
  });
};

askGuess();
