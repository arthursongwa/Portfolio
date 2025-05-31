

// Gere la machine a écrire tu titre
const mots = [
    "des sites web",
    "des applications mobiles",
    "des jeux vidéo",
    "des expériences 3D",
    "des interfaces modernes"
];

let motIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const delayBetweenWords = 2000;
const target = document.getElementById("typewriter");

function type() {
    const mot = mots[motIndex];
    if (isDeleting) {
    charIndex--;
    } else {
    charIndex++;
    }

    target.textContent = mot.substring(0, charIndex);

    if (!isDeleting && charIndex === mot.length) {
    setTimeout(() => isDeleting = true, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    motIndex = (motIndex + 1) % mots.length;
    }

    setTimeout(type, isDeleting ? speed / 2 : speed);
}

type();