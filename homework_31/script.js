let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });

    if (index === 0) {
        document.getElementById('prevButton').style.display = 'none';
    } else {
        document.getElementById('prevButton').style.display = 'block';
    }

    if (index === totalSlides - 1) {
        document.getElementById('nextButton').style.display = 'none';
    } else {
        document.getElementById('nextButton').style.display = 'block';
    }
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

showSlide(currentSlide);