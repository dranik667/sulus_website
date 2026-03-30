const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch('data/lore.json')
  .then(res => res.json())
  .then(data => {
    const lore = data.find(item => item.id === id);

    if (!lore) {
      document.body.innerHTML = "<h1>404</h1>";
      return;
    }

    document.getElementById('title').textContent = lore.title;

    const contentEl = document.getElementById('content');

    // Split content by newline and wrap each line in <p>
    const paragraphs = lore.content.split('\n');

    // When inserting, <hide> tags stay in HTML
    contentEl.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('') +
                          `<p class="date">${new Date(lore.date).toLocaleDateString('ru-RU')}</p>`;
  });