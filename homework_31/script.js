const images = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpeg',
    'img4.jpg',
    'img5.jpg',
    'img3.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
];

const index = Math.floor(Math.random() * images.length);
const image = images[index];

const imageBlock = document.createElement('img');

imageBlock.src = './images/' + image;

document.body.appendChild(imageBlock);
