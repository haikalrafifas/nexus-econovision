document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const buyButton = document.querySelector('.buy-button');
    const previewPopup = document.getElementById('previewPopup');
    const confirmButton = document.querySelector('.confirm-button');
    const buyPopup = document.getElementById('buyPopup');

    // Show preview popup when clicking buy button
    buyButton.addEventListener('click', function() {
        // Get values from buy form
        const price = document.querySelector('.price-input input').value;
        const lot = document.querySelector('.lot-input input').value;
        const investment = document.querySelector('.investment-amount').textContent;
        const expiry = document.querySelector('.expiry-select').value;
        
        // Hide buy popup
        buyPopup.style.display = 'none';
        
        // Update preview popup values
        document.querySelector('.stock-value').textContent = formatCurrency(price * lot);
        document.querySelector('.expiry-value').textContent = expiry;
        document.querySelector('.price-value').textContent = formatCurrency(price);
        document.querySelector('.lot-value').textContent = lot;
        document.querySelector('.investment-value').textContent = investment;
        document.querySelector('.total-value').textContent = formatCurrency(price * lot);
        
        // Show preview popup
        previewPopup.style.display = 'block';
    });

    // Close preview popup when clicking outside
    previewPopup.addEventListener('click', function(e) {
        if (e.target === previewPopup) {
            previewPopup.style.display = 'none';
            // Optionally show buy popup again
            buyPopup.style.display = 'block';
        }
    });

    // Handle confirm button click
    confirmButton.addEventListener('click', function() {
        // Here you can add the logic to submit the order
        alert('Order confirmed!');
        previewPopup.style.display = 'none';
        buyPopup.style.display = 'none';
    });

    // Helper function to format currency
    function formatCurrency(value) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    }
});