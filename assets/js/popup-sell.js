document.addEventListener('DOMContentLoaded', function() {
    const sellButtons = document.querySelectorAll('.btn-sell');
    const sellPopup = document.getElementById('sellPopup');
    const previewSellPopup = document.getElementById('previewSellPopup');
    const confirmButton = previewSellPopup.querySelector('.confirm-button');
    const lotSlider = sellPopup.querySelector('.lot-slider');
    const lotValueDisplay = sellPopup.querySelector('.lot-value');

    const saleCompletePopup = document.getElementById('saleCompletePopup');
    const closeButton = saleCompletePopup.querySelector('.close-button');
    const sellMoreButton = saleCompletePopup.querySelector('.sell-more-button');
    const viewInventoryButton = saleCompletePopup.querySelector('.view-inventory-button');

    // Function to update slider color
    function updateSliderColor(slider) {
        const min = slider.min || 0;
        const max = slider.max || 10;
        const value = slider.value;
        const percentage = ((value - min) / (max - min)) * 100;
        slider.style.setProperty('--slider-percentage', `${percentage}%`);
    }

    // Initialize slider
    if (lotSlider) {
        updateSliderColor(lotSlider);
    }

    // Update slider when value changes
    lotSlider.addEventListener('input', function() {
        updateSliderColor(this);
        lotValueDisplay.textContent = this.value;
    });

    // Show sell popup when clicking sell button
    sellButtons.forEach(button => {
        button.addEventListener('click', function() {
            sellPopup.style.display = 'block';
            updateSliderColor(lotSlider);
        });
    });

    // Handle Place Order button click
    const placeOrderButton = sellPopup.querySelector('.btn-sell');
    placeOrderButton.addEventListener('click', function() {
        const price = parseFloat(sellPopup.querySelector('.price-input input').value);
        const lot = parseInt(lotSlider.value);
        const total = price * lot;

        // Update preview popup values
        previewSellPopup.querySelector('.stock-value').textContent = `Rp. ${total.toLocaleString()}`;
        previewSellPopup.querySelector('.price-value').textContent = price.toLocaleString();
        previewSellPopup.querySelector('.lot-value').textContent = lot;
        previewSellPopup.querySelector('.proceed-amount').textContent = `Rp. ${total.toLocaleString()}`;
        previewSellPopup.querySelector('.total-value').textContent = `Rp. ${total.toLocaleString()}`;

        // Hide sell popup and show preview popup
        sellPopup.style.display = 'none';
        previewSellPopup.style.display = 'block';
    });

    // Update confirm button click handler
    confirmButton.addEventListener('click', function() {
        previewSellPopup.style.display = 'none';
        saleCompletePopup.style.display = 'block';
    });

    // Close button handler
    closeButton.addEventListener('click', function() {
        saleCompletePopup.style.display = 'none';
    });

    // Sell More button handler
    sellMoreButton.addEventListener('click', function() {
        saleCompletePopup.style.display = 'none';
        sellPopup.style.display = 'block';
    });

    // View Inventory button handler
    viewInventoryButton.addEventListener('click', function() {
        window.location.href = '../pages/inventory.html';
    });

    // Close popup when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === sellPopup) {
            sellPopup.style.display = 'none';
        }
        if (e.target === previewSellPopup) {
            previewSellPopup.style.display = 'none';
        }
        if (e.target === saleCompletePopup) {
            saleCompletePopup.style.display = 'none';
        }
    });
});