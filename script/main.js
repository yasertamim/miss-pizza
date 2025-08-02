 const filterButtons = document.querySelectorAll('.opt');
  const menuItems = document.querySelectorAll('.card-m');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

    menuItems.forEach(item => {
    const category = item.getAttribute('data-category');
    if (filter === 'all' || category === filter) {
        item.classList.remove('hidden');
    } else {
        item.classList.add('hidden');
    }
    });


      // Optional: update active button style
      filterButtons.forEach(btn => btn.classList.remove('primary'));
      button.classList.add('primary');
    });
  });

  