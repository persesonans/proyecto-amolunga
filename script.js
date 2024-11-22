document.addEventListener('DOMContentLoaded', function() {
    // Funciones para el primer carrusel
    const carousel1 = document.getElementById('carousel1');
    const track1 = carousel1.querySelector('.carousel-track');
    const prevBtn1 = document.getElementById('prevBtn');
    const nextBtn1 = document.getElementById('nextBtn');
    let currentIndex1 = 0;
    const images1 = track1.querySelectorAll('img');
    const totalImages1 = images1.length;

    function moveCarousel1() {
        track1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
    }

    prevBtn1.addEventListener('click', function() {
        currentIndex1 = (currentIndex1 === 0) ? totalImages1 - 1 : currentIndex1 - 1;
        moveCarousel1();
    });

    nextBtn1.addEventListener('click', function() {
        currentIndex1 = (currentIndex1 === totalImages1 - 1) ? 0 : currentIndex1 + 1;
        moveCarousel1();
    });

    // Funciones para el segundo carrusel
    const carousel2 = document.getElementById('carousel2');
    const track2 = carousel2.querySelector('.carousel-track');
    const prevBtn2 = document.getElementById('prevBtn2');
    const nextBtn2 = document.getElementById('nextBtn2');
    let currentIndex2 = 0;
    const images2 = track2.querySelectorAll('img');
    const totalImages2 = images2.length;

    function moveCarousel2() {
        track2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
    }

    prevBtn2.addEventListener('click', function() {
        currentIndex2 = (currentIndex2 === 0) ? totalImages2 - 1 : currentIndex2 - 1;
        moveCarousel2();
    });

    nextBtn2.addEventListener('click', function() {
        currentIndex2 = (currentIndex2 === totalImages2 - 1) ? 0 : currentIndex2 + 1;
        moveCarousel2();
    });

    // Funciones para el tercer carrusel
    const carousel3 = document.getElementById('carousel3');
    const track3 = carousel3.querySelector('.carousel-track');
    const prevBtn3 = document.getElementById('prevBtn3');
    const nextBtn3 = document.getElementById('nextBtn3');
    let currentIndex3 = 0;
    const images3 = track3.querySelectorAll('img');
    const totalImages3 = images3.length;

    function moveCarousel3() {
        track3.style.transform = `translateX(-${currentIndex3 * 100}%)`;
    }

    prevBtn3.addEventListener('click', function() {
        currentIndex3 = (currentIndex3 === 0) ? totalImages3 - 1 : currentIndex3 - 1;
        moveCarousel3();
    });

    nextBtn3.addEventListener('click', function() {
        currentIndex3 = (currentIndex3 === totalImages3 - 1) ? 0 : currentIndex3 + 1;
        moveCarousel3();
    });
});