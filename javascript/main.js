document.addEventListener("DOMContentLoaded", function() {
    var bienvenida = document.getElementById("bienvenida");
    var cards = document.querySelectorAll(".card");
  
    window.addEventListener("scroll", function() {
      var scrollPosition = window.scrollY;
  
      // Ajusta el valor 400 según la posición en la que deseas que aparezca el título y las cards
      if (scrollPosition > 400) {
        // Añade un retraso de 1000 milisegundos (1 segundo) antes de cambiar la opacidad
        setTimeout(function() {
          bienvenida.style.opacity = "1";
          cards.forEach(function(card, index) {
            // Añade un retraso incremental para cada card
            setTimeout(function() {
              card.style.opacity = "1";
            }, 500 * index);
          });
        }, 1000);
      } else {
        bienvenida.style.opacity = "0";
        cards.forEach(function(card) {
          card.style.opacity = "0";
        });
      }
    });
  });

  $(document).ready(function() {
    var contadorNumero = 0;
    var finalContador = 30;
    var intervalo = setInterval(function() {
      $('#contador-numero').text(contadorNumero);
      contadorNumero++;
      if (contadorNumero > finalContador) {
        clearInterval(intervalo);
      }
    }, 100); // Ajusta la velocidad del contador
  });
