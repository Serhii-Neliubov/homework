const hoverBlock = document.querySelector('.container__hover-block');
const ghostBlock = document.querySelector('.container__ghost-block');

hoverBlock.addEventListener('focus', () => {
    ghostBlock.style.display = 'block';
});

hoverBlock.addEventListener('blur', () => {
    ghostBlock.style.display = 'none';
});
