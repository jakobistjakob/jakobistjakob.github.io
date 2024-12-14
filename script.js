// Anzahl der Klicks auf den "Nein"-Button
let noClickCount = 0;

// Funktion, um eine zufällige Position für den "Nein"-Button zu generieren
function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const buttonContainer = document.querySelector('.button-container');
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

// Ereignislistener für den "Ja"-Button
document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('yesContent').style.display = 'block';
});

// Ereignislistener für den "Nein"-Button
document.getElementById('noButton').addEventListener('click', function() {
    noClickCount++;
    if (noClickCount >= 5) {
        this.style.display = 'none';
    } else {
        moveNoButton();
    }
});

// Initiale Positionierung des "Nein"-Buttons
window.onload = function() {
    moveNoButton();
};