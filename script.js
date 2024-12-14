// Anzahl der Klicks auf den "No"-Button
let noClickCount = 0;

// Variablen, um die vorherige Position zu speichern
let previousX = null;
let previousY = null;

// Funktion, um eine zufällige Position für den "No"-Button zu generieren
function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    let randomX, randomY;

    do {
        randomX = Math.floor(Math.random() * maxWidth);
        randomY = Math.floor(Math.random() * (maxHeight - 150)) + 100; // +100, um Überschneidungen mit dem GIF zu vermeiden
    } while (randomX === previousX && randomY === previousY);

    // Aktualisiere die Position des Buttons
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';

    // Speichere die aktuelle Position für den nächsten Vergleich
    previousX = randomX;
    previousY = randomY;
}

// Ereignislistener für den "Yes"-Button
document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('yesContent').style.display = 'block';
});

// Ereignislistener für den "No"-Button
document.getElementById('noButton').addEventListener('click', function() {
    noClickCount++;
    if (noClickCount >= 5) {
        this.style.display = 'none';
    } else {
        moveNoButton();
    }
});

// Initiale Positionierung des "No"-Buttons
window.onload = function() {
    moveNoButton();
};