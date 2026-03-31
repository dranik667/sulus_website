// Lightbox
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.gallery-item img');
images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    lightbox.classList.add('show');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('show');
});