// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.card button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`Has hecho clic en: ${button.parentElement.querySelector('h2').innerText}`);
        });
    });
});
