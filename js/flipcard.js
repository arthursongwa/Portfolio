const flipCard = document.getElementById('flipCard');
  const closeBtn = document.getElementById('closeBtn');

  flipCard.addEventListener('click', () => {
    flipCard.classList.toggle('flipped');
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // empêcher le flip au clic sur Fermer
    flipCard.classList.remove('flipped');
  });