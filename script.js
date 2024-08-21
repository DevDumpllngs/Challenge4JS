// Número a adivinar
const targetNumber = 7;
let attempts = 3;

document.getElementById('guessButton').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    
    if (userGuess === targetNumber) {
        message.textContent = "¡Felicidades! Has adivinado el número.";
        message.style.color = 'green';
    } else {
        attempts--;
        if (attempts > 0) {
            message.textContent = `Incorrecto. Te quedan ${attempts} intentos.`;
            message.style.color = 'red';
        } else {
            message.textContent = `Lo siento, no has adivinado el número. El número era ${targetNumber}.`;
            message.style.color = 'red';
            document.getElementById('guessButton').disabled = true;
        }
    }
});
