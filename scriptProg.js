
document.getElementById('openMenu').addEventListener('click', function() {
  document.getElementById('sideMenu').style.left = '0';
});

document.getElementById('sideMenu').addEventListener('click', function() {
  document.getElementById('sideMenu').style.left = '-250px';
});

const galleryCarousel = document.querySelector('.gallery-carousel');
let currentIndex = 0;

function moveNext() {
  const imageWidth = galleryCarousel.querySelector('img').offsetWidth;
  currentIndex++;
  if (currentIndex >= galleryCarousel.children.length) {
    currentIndex = 0;
  }
  galleryCarousel.style.transform = `translateX(-${imageWidth * currentIndex}px)`;
}

setInterval(moveNext, 2000); // Mueve automáticamente cada 2 segundos




function mostrarInfo(id) {
  // Oculta todas las secciones de información
  var infos = document.querySelectorAll('.info');
  infos.forEach(function(info) {
    info.style.display = 'none';
  });
  
  // Muestra la sección de información correspondiente al ID del botón
  var infoToShow = document.getElementById(id);
  if (infoToShow) {
    infoToShow.style.display = 'block';
  }
}




document.addEventListener("DOMContentLoaded", function() {
  var index = 0;
  var slides = document.querySelectorAll("#logos img");
  var totalSlides = slides.length;

  function nextSlide() {
    slides[index].style.display = "none";
    index = (index + 1) % totalSlides;
    slides[index].style.display = "block";
  }

  // Cambia a la siguiente imagen cada 3 segundos (ajusta el tiempo según prefieras)
  setInterval(nextSlide, 1000);
});


