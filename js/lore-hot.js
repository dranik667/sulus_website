fetch('data/lore.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('lore-container');
    
    // Get the last 3 items
    const latest = data.slice(-3);

    latest.forEach(item => {
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