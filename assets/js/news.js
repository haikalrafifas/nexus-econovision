
  // Animasi untuk news cards
function animateNewsCards() {
    const cards = document.querySelectorAll('.news-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }
  
  // Period selector functionality
  const periodButtons = document.querySelectorAll('.period-btn');
  periodButtons.forEach(button => {
    button.addEventListener('click', () => {
      periodButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Animate cards again when period changes
      const cards = document.querySelectorAll('.news-card');
      cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
      });
      
      setTimeout(animateNewsCards, 100);
    });
  });
  
  // Search input animation
  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('focus', () => {
    searchInput.style.boxShadow = '0 0 0 2px rgba(5, 16, 64, 0.1)';
  });
  
  searchInput.addEventListener('blur', () => {
    searchInput.style.boxShadow = 'none';
  });
  
  // Run animations on page load
  document.addEventListener('DOMContentLoaded', () => {
    animateNewsCards();
  });