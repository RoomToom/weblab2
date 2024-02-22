document.addEventListener('DOMContentLoaded', () => {
    applyFilter('all'); // Відразу показати всі картки при завантаженні сторінки
    setTimeout(() => {
      showModal('subscriptionModal');
    }, 5000);
  });
  
  const data = [
    { id: 1, category: 'category1', description: 'Опис 1', image: 'image.webp' },
    { id: 2, category: 'category2', description: 'Опис 2', image: 'image.webp' },
    { id: 3, category: 'category1', description: 'Опис 3', image: 'image.webp' },
    { id: 4, category: 'category2', description: 'Опис 4', image: 'image.webp' },
    { id: 5, category: 'category1', description: 'Опис 5', image: 'image.webp' },
    { id: 6, category: 'category2', description: 'Опис 6', image: 'image.webp' },
    { id: 7, category: 'category1', description: 'Опис 7', image: 'image.webp' },
    { id: 8, category: 'category2', description: 'Опис 8', image: 'image.webp' },
    { id: 9, category: 'category1', description: 'Опис 9', image: 'image.webp' },
    { id: 10, category: 'category2', description: 'Опис 10', image: 'image.webp' },
  ];
  
  function applyFilter(category) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = ''; // Очистити контейнер перед додаванням нових карток
    
    const filteredData = category === 'all' ? data : data.filter(item => item.category === category);
    
    filteredData.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${item.image}" alt="Image ${item.id}" style="width:100%; height:auto;">
        <h4>Картка ${item.id}</h4>
        <p>${item.description}</p>
      `;
      container.appendChild(card);
    });
  }
  
  // Решта функцій залишаються без змін
  
  
  function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
    if (modalId === 'advertisementModal') {
      setTimeout(() => {
        document.getElementById('closeAdBtn').disabled = false;
      }, 5000); // Зробіть кнопку закриття активною через 5 секунд
    }
  }
  
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
  }
  
  function subscribe() {
    // Логіка підписки
    closeModal('subscriptionModal');
    // Показати повідомлення про подяку за приєднання
  }
  
  // Викликати showModal('advertisementModal') на певній події, наприклад, після прокрутки сторінки на 50% або після 10 секунд на сайті.
  