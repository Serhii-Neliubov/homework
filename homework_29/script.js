const emojiButtons = document.querySelectorAll('.emojis button');

emojiButtons.forEach(button => {
    button.addEventListener('click', () => {
        const countElement = button.nextElementSibling;
        countElement.textContent = parseInt(countElement.textContent) + 1;
    });
});