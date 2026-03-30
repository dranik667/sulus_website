fetch('data/lore.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('lore-container');

    data.forEach(item => {
      const card = document.createElement('a');
      card.className = 'lore-card';
      card.href = `lore-page.html?id=${item.id}`;

      card.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.preview}</p>
        <p class="date">${new Date(item.date).toLocaleDateString('ru-RU')}</p>
      `;

      container.appendChild(card);
    });
  });