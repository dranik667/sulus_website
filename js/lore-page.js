const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch('data/lore.json')
  .then(res => res.json())
  .then(data => {
    const lore = data.find(item => item.id === id);
    const contentEl = document.getElementById('content');
    const titleEl = document.getElementById('title');

    if (!lore || !lore.content) {
      titleEl.textContent = "Пусто...";
      contentEl.innerHTML = `
        <div class="empty-state">
          <img src="img/sulus-dead.png" alt="Мертвый чиби-Сулус">
          <h2>Ничего тут пока нет :(</h2>
        </div>
      `;
      return;
    }

    titleEl.textContent = lore.title;

    const paragraphs = lore.content.split('\n');

    contentEl.innerHTML =
      paragraphs.map(p => `<p>${p}</p>`).join('') +
      `<p class="date">${new Date(lore.date).toLocaleDateString('ru-RU')}</p>`;
  });