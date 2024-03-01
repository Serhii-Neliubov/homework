const hoverBlock = document.querySelector('.container__hover-block');
const ghostBlock = document.querySelector('.container__ghost-block');

hoverBlock.addEventListener('mouseover', () => {
  ghostBlock.style.display = 'block';
});

hoverBlock.addEventListener('mouseout', () => {
  ghostBlock.style.display = 'none';
});
