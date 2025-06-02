
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle menu on button click
toggleBtn.addEventListener('click', (e) => {
e.stopPropagation(); // Empêche le clic de se propager à document
mobileMenu.classList.toggle('hidden');
});

// Empêche les clics dans le menu de se propager
mobileMenu.addEventListener('click', (e) => {
e.stopPropagation();
});

// Ferme le menu si on clique ailleurs
document.addEventListener('click', () => {
if (!mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
}
});