document.addEventListener('DOMContentLoaded', function() {
    // Expand/Collapse functionality
    const settingItems = document.querySelectorAll('.setting-item');
    
    settingItems.forEach(item => {
        item.addEventListener('click', function() {
            const details = this.querySelector('.setting-details');
            const chevron = this.querySelector('.fa-chevron-right');
            
            // Close other sections
            settingItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.setting-details').classList.add('hidden');
                    otherItem.querySelector('.fa-chevron-right').style.transform = 'rotate(0deg)';
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current section
            details.classList.toggle('hidden');
            this.classList.toggle('active');
            
            // Rotate chevron
            if (details.classList.contains('hidden')) {
                chevron.style.transform = 'rotate(0deg)';
            } else {
                chevron.style.transform = 'rotate(90deg)';
            }
        });
    });
});