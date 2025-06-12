let userName;
const maxAttempts = 3;
let attempts = 0;


function greetUser() {
    userName = prompt("Por favor, ingresa tu nombre:");
    if (userName) {
        alert(`¡Bienvenido al simulador, ${userName}!`);
    } else {
        alert("No ingresaste un nombre. Intenta nuevamente.");
        greetUser();
    }
}


function simpleGame() {
    let playAgain;
    do {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        let userGuess = parseInt(prompt("Adivina un número entre 1 y 10:"));
        
        if (userGuess === randomNumber) {
            alert("¡Felicidades! Adivinaste el número correcto.");
        } else {
            attempts++;
            alert(`¡Incorrecto! El número correcto era ${randomNumber}.`);
            if (attempts >= maxAttempts) {
                alert("Alcanzaste el número máximo de intentos. ¡Juego terminado!");
                break;
            }
        }
        
        playAgain = confirm("¿Quieres jugar de nuevo?");
    } while (playAgain);
}


greetUser();
simpleGame();