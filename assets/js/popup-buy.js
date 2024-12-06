document.addEventListener('DOMContentLoaded', function() {
    // Get all buy buttons
    const buyButtons = document.querySelectorAll('.btn-buy');
    const buyPopup = document.getElementById('buyPopup');
    const previewPopup = document.getElementById('previewPopup');
    const purchaseCompletePopup = document.getElementById('purchaseCompletePopup');
    
    const slider = buyPopup.querySelector('.balance-slider');
    const percentageDisplay = buyPopup.querySelector('.percentage-text');
    const confirmButton = previewPopup.querySelector('.confirm-button');
    
    // Purchase Complete popup elements
    const closeButton = purchaseCompletePopup.querySelector('.close-button');
    const buyMoreButton = purchaseCompletePopup.querySelector('.buy-more-button');
    const viewInventoryButton = purchaseCompletePopup.querySelector('.view-inventory-button');

    // Add click event to all buy buttons
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            buyPopup.style.display = 'block';
            slider.value = 50;
            percentageDisplay.textContent = slider.value + '%';
        });
    });

    // Close popup when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === buyPopup) {
            buyPopup.style.display = 'none';
        }
        if (e.target === previewPopup) {
            previewPopup.style.display = 'none';
        }
        if (e.target === purchaseCompletePopup) {
            purchaseCompletePopup.style.display = 'none';
        }
    });
    
    // Update percentage display when slider value changes
    slider.addEventListener('input', function() {
        percentageDisplay.textContent = this.value + '%';
    });

    // Handle increase/decrease buttons
    const handleQuantityButtons = (decreaseBtn, increaseBtn, input) => {
        decreaseBtn.addEventListener('click', () => {
            input.value = Math.max(0, parseInt(input.value) - 1);
        });
        
        increaseBtn.addEventListener('click', () => {
            input.value = parseInt(input.value) + 1;
        });
    };

    // Setup quantity buttons for price and lot inputs
    const priceControls = buyPopup.querySelector('.price-input');
    const lotControls = buyPopup.querySelector('.lot-input');

    handleQuantityButtons(
        priceControls.querySelector('.decrease'),
        priceControls.querySelector('.increase'),
        priceControls.querySelector('input')
    );

    handleQuantityButtons(
        lotControls.querySelector('.decrease'),
        lotControls.querySelector('.increase'),
        lotControls.querySelector('input')
    );

    // Handle confirm button click
    confirmButton.addEventListener('click', function() {
        previewPopup.style.display = 'none';
        purchaseCompletePopup.style.display = 'block';
    });

    // Close button handler
    closeButton.addEventListener('click', function() {
        purchaseCompletePopup.style.display = 'none';
    });

    // Buy More button handler
    buyMoreButton.addEventListener('click', function() {
        purchaseCompletePopup.style.display = 'none';
        buyPopup.style.display = 'block';
    });

    // View Inventory button handler
    viewInventoryButton.addEventListener('click', function() {
        window.location.href = '../pages/inventory.html';
    });
});

