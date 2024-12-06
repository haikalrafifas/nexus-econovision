document.addEventListener("DOMContentLoaded", function () {
  const switchInput = document.querySelector(".switch input");
  const billMonthly = document.querySelector(".bill-monthly");
  const billAnnually = document.querySelector(".bill-annually");
  const priceElements = document.querySelectorAll(".amount");
  const periodElements = document.querySelectorAll(".period");

  // Harga bulanan (default)
  const monthlyPrices = ["0", "99.000", "299.000"];
  // Harga tahunan (diskon 10%)
  const annualPrices = ["0", "999.000", "2.999.000"];

  // Tambahkan ini untuk mengupdate harga saat halaman dimuat
  updatePrices(monthlyPrices);
  updatePeriodText("/month");

  switchInput.addEventListener("change", function () {
    isAnnualBilling = this.checked;
    
    // Update existing price display logic
    if (this.checked) {
        // Annually
        updatePrices(annualPrices);
        updatePeriodText("/year");
    } else {
        // Monthly
        updatePrices(monthlyPrices);
        updatePeriodText("/month");
    }

    // Update popup price if it's open
    const popup = document.getElementById('orderPopup');
    if (popup.style.display === 'flex') {
        const currentPlanType = document.getElementById('planName').textContent.split(' ')[0];
        updatePopupPrices(currentPlanType);
    }
  });

  function updatePrices(prices) {
    priceElements.forEach((element, index) => {
      // Animasi perubahan harga
      element.style.transform = "scale(0.8)";
      element.style.opacity = "0";

      setTimeout(() => {
        element.textContent = `Rp. ${prices[index]}`;
        element.style.transform = "scale(1)";
        element.style.opacity = "1";
      }, 200);
    });
  }

  function updatePeriodText(newPeriod) {
    periodElements.forEach((element) => {
      element.style.transform = "scale(0.8)";
      element.style.opacity = "0";

      setTimeout(() => {
        element.textContent = newPeriod;
        element.style.transform = "scale(1)";
        element.style.opacity = "1";
      }, 200);
    });
  }
});

//POP UP
const planDetails = {
    'VIP': {
        monthlyPrice: '100.000',
        annualPrice: '300.000',
        features: ['Live streaming', 'News', 'Riset']
    },
    'VVIP': {
        monthlyPrice: '200.000',
        annualPrice: '999.000',
        features: ['Live streaming', 'News', 'Riset', 'Chat bot']
    },
    'Nexus': {
        monthlyPrice: '299.000',
        annualPrice: '2.999.000',
        features: ['Live streaming', 'News', 'Riset', 'Chat bot', 'IPO']
    }
};

// Tambahkan variable untuk track billing period
let isAnnualBilling = false;

function updatePopupPrices(planType) {
    const planPrice = document.getElementById('planPrice');
    const subtotalAmount = document.getElementById('subtotalAmount');
    const totalAmount = document.getElementById('totalAmount');
    
    const price = isAnnualBilling ? 
        planDetails[planType].annualPrice : 
        planDetails[planType].monthlyPrice;
    
    planPrice.textContent = `Rp. ${price}`;
    subtotalAmount.textContent = `Rp. ${price}`;
    totalAmount.textContent = `Rp. ${price}`;
}

function showOrderPopup(planType) {
    const popup = document.getElementById('orderPopup');
    const planName = document.getElementById('planName');
    const featuresList = document.getElementById('features-list');

    // Set plan name
    planName.textContent = `${planType} Plan`;

    // Set features
    featuresList.innerHTML = planDetails[planType].features
        .map(feature => `<div>${feature}</div>`)
        .join('');

    // Set prices based on current billing period
    updatePopupPrices(planType);

    // Show popup
    popup.style.display = 'flex';
}


// Add click event listeners to buttons
document
  .querySelectorAll(".choose-btn, .subscription-btn")
  .forEach((button) => {
    button.addEventListener("click", (e) => {
      const card = e.target.closest(".pricing-card");
      const planType = card.querySelector("h2").textContent;
      showOrderPopup(planType);
    });
  });

// Close popup when clicking outside
document.getElementById("orderPopup").addEventListener("click", (e) => {
  if (e.target.id === "orderPopup") {
    e.target.style.display = "none";
  }
});

// Confirm button click handler
document.querySelector(".confirm-btn").addEventListener("click", () => {
  // Add your confirmation logic here
  document.getElementById("orderPopup").style.display = "none";
  alert("Order confirmed!"); // Replace with your desired confirmation action
});
