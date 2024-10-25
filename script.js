// Agrega una clase "show" a los elementos con la clase "animate" cuando se desplazan al área visible del navegador
function animateElements() {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('show');
      }
    });

  }
  document.addEventListener("DOMContentLoaded", function() {
    var elemento = document.querySelector ("h1");

  
    elemento.classList.add ("animacion-slideIn");
   
  });
  
  // Verifica si un elemento está en el área visible del navegador
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  const carouselInner = document.querySelector('.carousel-inner');
  let currentSlide = 0;
  
  function showSlide(slideIndex) {
    carouselInner.style.transform = `translateX(-${slideIndex * 100}%)`;
    currentSlide = slideIndex;
  
    // Activa la animación en el slide actual, si tiene el atributo data-animate="true"
    activateAnimation(currentSlide);
  }
  
 

// Variable para controlar el estado de la pausa
        let isPaused = false;

        // Función para alternar la pausa de la animación
        function togglePause() {
            isPaused = !isPaused;
            const carrusel = document.querySelector('.carousel-inner');
            carrusel.classList.toggle('paused');
            toggleFlip();
            if (isPaused) {
                clearInterval(intervalo);
               
            } else {
                intervalo = setInterval(function() {
                    document.querySelector('.carousel-control-next').click();
                    
                }, 7000);
            }
        }

        function nextSlide() {
          if (!isPaused) {
            currentSlide = (currentSlide + 1) % carouselInner.children.length;
            showSlide(currentSlide);
            activateAnimation(currentSlide);
          }
        }
        
        function prevSlide() {
          if (!isPaused) { 
            currentSlide = (currentSlide - 1 + carouselInner.children.length) % carouselInner.children.length;
            showSlide(currentSlide);
            activateAnimation(currentSlide);
          }
        }
        


  // Función para activar la animación en un slide específico
  function activateAnimation(slideIndex) {
    // Obtiene el slide correspondiente al índice
    const carouselItems = document.querySelectorAll('.carousel-item');
    const slide = carouselItems[slideIndex];
  
    // Obtiene el valor del atributo data-animate
    const animateValue = slide.getAttribute('data-animate');
  
    // Obtiene la imagen dentro del slide
    const image = slide.querySelector('.img');
  
    // Si el atributo data-animate es "true", agregar la clase "bounce-in-fwd" para activar la animación
    if (animateValue === 'true') {
      image.classList.add('bounce-in-fwd');
  
      // Quita la clase "bounce-in-fwd" después de que termine la animación
      image.addEventListener('animationend', () => {
        image.classList.remove('bounce-in-fwd');
      });
    }
  }
  
 
  showSlide(currentSlide);

// Ejecuta la función animateElements() cuando se carga la página y cuando se desplaza
window.addEventListener('DOMContentLoaded', animateElements);
window.addEventListener('scroll', animateElements);

// Establece un intervalo de 5 segundos (5000 milisegundos)
let intervalo = setInterval(function() {
  // Simular un clic en el botón de avanzar
  document.querySelector('.carousel-control-next').click();
}, 7000);

// Obtiene el elemento del carrusel
let carrusel = document.querySelector('.carousel-inner');

// Añade un evento al entrar el ratón en el carrusel
carrusel.addEventListener('mouseenter', function() {
  // Cancela el intervalo
  clearInterval(intervalo);
});

// Añade un evento al salir el ratón del carrusel
carrusel.addEventListener('mouseleave', function() {
  // Reanuda el intervalo
  intervalo = setInterval(function() {
    // Simula un clic en el botón de avanzar
    document.querySelector('.carousel-control-next').click();
  }, 5000);
});

function toggleFlip() {
  const btnFlip = document.querySelector('.btn-flip');
  btnFlip.classList.toggle('flip-active');
}

window.addEventListener('scroll', handleScroll);

function handleScroll() {
  const planetWrapper = document.querySelector('.planet-wrapper');
  const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  const rotation = scrollPercentage * 3.6; // para cambiar la velocidad solamente se ajusta el valor
  
  planetWrapper.style.transform = `rotateY(${rotation}deg)`;
}

document.addEventListener('scroll', () => {
  const planets = document.querySelectorAll('.planet');

  setTimeout(() => {
    planets.forEach((planet, index) => {
      setTimeout(() => {
        planet.style.opacity = '1';
      }, index * 1000); // para cambiar el retraso entre la aparición de cada esfera se ajusta este valor
    });
  }, 1000); // para cambiar el retraso antes de que comiencen a aparecer las esferas ajusta este valor
});

// Obtiene el elemento de audio por su id
var musica = document.getElementById("musica");

// Obtiene el elemento del botón flotante por su id
var boton = document.getElementById("boton-flotante");

//variable booleana para controlar el estado de la reproducción
var pausado = true;

// Añade un evento click al botón flotante
boton.addEventListener("click", function() {
  // Si la música está pausada
  if (pausado) {
    // Reproducir la música
    musica.play();
    // Cambia el estado de la variable a false
    pausado = false;
    // Cambia el texto del botón a "Pausar"
    boton.innerHTML = "𝅛𝅛";
  } else {
    // Si la música está reproduciéndose
    // Pausa la música
    musica.pause();
    // Cambiar el estado de la variable a true
    pausado = true;
    // Cambiar el texto del botón a "Reproducir"
    boton.innerHTML = "▶";
  }
});

