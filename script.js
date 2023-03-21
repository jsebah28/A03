
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


function politicPesv1() {
    document.getElementById('politic_content').innerHTML = 'RADIO TAXIS LIBRES S.A.S. está comprometida con promover la ejecución de actividades de prevención y control con el propósito de mitigar los riesgos viales asociados a los accidentes de tránsito, los cuales estarán integrados al Sistema de Gestión de Seguridad y Salud en el Trabajo. La empresa acorde con los lineamientos de la normativa vigente con respecto al Plan Estratégico de Seguridad Vial, se compromete a mejorar las condiciones que impliquen una cultura de autocuidado en la prevención de accidentes e incidentes viales que puedan afectar la integridad física, mental y social de los funcionarios y contratistas que deban desempeñar cualquier rol en la vía de acuerdo con el Código Nacional de Tránsito, todo enmarcado en los valores de la organización y en los procesos de mejora continua, que contribuyan por la adopción de conductas proactivas para prevenir accidentes e incidentes en la vía.';
}

function politicPesv2() {
    document.getElementById('politic_content').innerHTML = 'RADIO TAXIS LIBRES SAS, establece la política y programa de gestión de velocidad segura, cumpliendo con los límites de velocidad para los vehículos tipo taxi y servicio especial. El  límite de velocidad para los vehículos de servicio público, en zonas urbanas, será de sesenta (60) kilómetros por hora y en carreteras nacionales y departamentales las velocidades autorizadas serán determinadas por el Ministerio de Transporte o la Gobernación, según sea el caso teniendo en cuenta las especificaciones de la vía. En ningún caso podrá sobrepasar los 80 kilómetros por hora. El control de la velocidad de nuestros vehículos se obtiene por el monitoreo que hacemos por medios tecnológicos como GPS, tacómetros, radares móviles de la app que tenemos.';
}







