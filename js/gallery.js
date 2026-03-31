// Empty state logic
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.gallery-grid');
  const emptyState = document.getElementById('empty-state');

  if (!container || container.querySelectorAll('.gallery-item').length === 0) {
    emptyState.style.display = 'flex';
  } else {
    emptyState.style.display = 'none';
  }

  // Lightbox logic
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('img');

  container.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('show');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
  });
});