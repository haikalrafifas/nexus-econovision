document.addEventListener('DOMContentLoaded', function() {
    // Category buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
        });
    });

    // FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add your expand/collapse logic here
            console.log('FAQ item clicked');
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if(text.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});