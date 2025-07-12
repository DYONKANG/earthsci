// script.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-item').forEach(item => {
    item.querySelector('.accordion-header').addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
});