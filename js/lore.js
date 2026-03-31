fetch('data/lore.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('lore-container');
    const emptyState = document.getElementById('empty-state');

    if (!data || data.length === 0) {
      emptyState.style.display = 'flex';
      return;
    }

    data.forEach(item => {
      const card = document.createElement('a');
      card.className = 'lore-card';
      card.href = `lore-page.html?id=${item.id}`;

      card.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.preview.replace(/\n/g, '<br>')}</p>
        <p class="date">${new Date(item.date).toLocaleDateString('ru-RU')}</p>
      `;

      container.appendChild(card);
    });
  });