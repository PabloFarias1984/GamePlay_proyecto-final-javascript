const clickMario = document.getElementById('mario_01')
const clickSonic = document.getElementById('sonic_02')
const clickDD = document.getElementById('dd_03')
const clickPacman = document.getElementById('pacman_04')
const clickLK = document.getElementById('lionking05')


clickMario.addEventListener('click', () => {

  
/*     Swal.fire({
        icon: 'error',
        title: 'AGREGADO AL CARRITO',
        text: 'Felicitaciones! compraste un XX',
        footer: '<button> Ir al carrito</button>'
      })
 */
      Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        //newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    



    })

    const clickCarrito = document.getElementById('carrito')
    clickCarrito.addEventListener('click', () => {
            Swal.fire({
                icon: 'error',
                title: 'AGREGADO AL CARRITO',
                text: 'Felicitaciones! compraste un XX',
                footer: '<button> Ir al carrito</button>'
              })
    })
        

// Declaracion de objetos

class Juego {
  constructor(id, juego, descripcion, precio, stock){
      this.id = id
      this.juego = juego
      this.descripcion = descripcion
      this.precio = precio
      this.stock = stock
  }
  aumentarPrecio(porcentaje) {
      this.precio = this.precio * porcentaje
  }
}

const juego1 = new Juego (1, "Mario Bros", "Super Mario Bros. o Super Mario Brothers es un videojuego de plataformas, diseñado por Shigeru Miyamoto, lanzado el 13 de septiembre de 1985 y producido por la empresa japonesa Nintendo, para la consola Nintendo Entertainment System.", 100, 10)
const juego2 = new Juego (2, "Sonic the Hedgehog", "Sonic the Hedgehog es una serie de videojuegos publicados por Sega y por Sonic Team. Hoy en día, Sonic es considerado uno de los personajes más influyentes del mundo de los videojuegos. Wikipedia Creador: Naoto Ōshima y Yūji Naka Desarrollador: Sonic Team", 1200, 02)
const juego3 = new Juego (3, "Double Dragon", "Double Dragon es un videojuego clásico del género beat 'em up, inicialmente desarrollado por Technos Japan, quienes también desarrollaron River City Ransom y la saga Nekketsu Koha Kunio-kun. Wikipedia Género: beat 'em up Plataformas: Arcade Diseñadores: Yoshihisa Kishimoto, Atsuyushi Nishizawa, Muneki Ebinuma", 200, 200)
const juego4 = new Juego (4, "Pac-Man", "Pac-Man es una franquicia de videojuegos japonesa creada por Toru Iwatani, el padre de Pac-Man, pero publicada, desarrollada y propiedad de Bandai Namco Entertainment. Las entradas han sido desarrolladas por una amplia gama de otras compañías de videojuegos, incluidas Midway Games, Atari y Mass Media, Inc.", 700, 1200)
const juego5 = new Juego (5, "LION KING", "Disfruta de la reedición de otro clásico de los años 90 para Sega, ¡El Rey León! Recorre varios niveles localizados en plena selva, ayuda a Simba a superar diferentes obstáculos y destruye algunos enemigos saltando sobre ellos y asustándolos con tu poderoso rugido. Recopila todos los power ups que puedas y ¡diviértete! ", 2500, 10)

const juegos = [juego1, juego2, juego3, juego4, juego5]
console.table(juegos)
const divJuegos = document.getElementById('catalogo')

