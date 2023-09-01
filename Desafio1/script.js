document.addEventListener("DOMContentLoaded", function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const guessButton = document.getElementById("guessButton");
    const guessInput = document.getElementById("guessInput");
    const resultDiv = document.getElementById("result");

    guessButton.addEventListener("click", function() {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            resultDiv.textContent = "Digite um número válido entre 1 e 100.";
            return;
        }

        attempts++;

        if (userGuess === randomNumber) {
            resultDiv.textContent = `Parabéns! Você acertou em ${attempts} tentativas.`;
        } else if (userGuess > randomNumber) {
            resultDiv.textContent = "Chute muito alto!";
        } else {
            resultDiv.textContent = "Chute muito baixo!";
        }

        guessInput.value = "";
        guessInput.focus();
    });
});
