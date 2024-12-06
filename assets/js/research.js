function setActivePeriod(button) {
  // Hapus class active dari semua button
  document.querySelectorAll('.period-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Tambah class active ke button yang diklik
  button.classList.add('active');
} 