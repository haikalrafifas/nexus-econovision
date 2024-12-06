// Animate stats cards on load
window.addEventListener("load", () => {
  document.querySelectorAll(".stat-card").forEach((card, index) => {
    setTimeout(() => {
      card.style.transition = "all 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });
});

// Update the menu click handler(Overview)
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    // Prevent click from bubbling to parent elements
    e.stopPropagation();

    // Toggle expanded class
    item.classList.toggle("expanded");

    // Get the submenu
    const submenu = item.querySelector(".sub-menu");

    // Toggle submenu visibility with animation
    if (item.classList.contains("expanded")) {
      submenu.style.display = "block";
    } else {
      submenu.style.display = "none";
    }
  });
});
