const container = document.querySelector('.container');
const toggleForms = document.querySelectorAll('.toggle-form');

toggleForms.forEach(btn => {
    btn.addEventListener('click', () => {
        container.classList.toggle('sign-up-mode');
    });
});