
function hideMenu() {
    document.getElementById('menu_mobile_version').style.display = 'none';
}

function showMenu() {
    document.getElementById('menu_mobile_version').style.display = 'block';
}

function showAskCab() {
    document.getElementById('ask_cab').style.display = 'block';
}

function hideAskCab() {
    document.getElementById('ask_cab').style.display = 'none';
}

function showEmpresas() {
    document.getElementById('empresas').style.display = 'block';
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const maxSlides = slides.length;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + maxSlides) % maxSlides;
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

setInterval(nextSlide, 2000);





