import "./TresEnRaya.css";

const template = () => {
  return `<div class="containerTresEnRaya">
    <h1>Tres en raya :)!</h1>
    <h2 class="mensaje"></h2>
    <div class="tablero">
      <button class="botonJuego"></button>
      <button class="botonJuego"></button>
      <button class="botonJuego"></button>
      <button class="botonJuego"></button>
      <button class="botonJuego"></button>
      <button class="botonJuego"></button>
      <button class="botonJuego"></button>
      <button class="botonJuego"></button>
      <button class="botonJuego"></button>
    </div>
    <div class="contenedorBoton">
      <button class="botonReinicio"></button>
    </div>
    </div>
    `;
};

const start = () => {
  let jugador = 1;
  let fichas = ["X", "O"];
  let movimientos = 0;
  let partidaTerminada = false;
  let botones = document.querySelectorAll(".botonJuego");
  let h2 = document.querySelector("h2");
  let botonReinicio = document.querySelector(".botonReinicio");

  let hayGanador = () => {
    const posicioneGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < posicioneGanadoras.length; i++) {
      const [a, b, c] = posicioneGanadoras[i];
      const botonA = botones[a].innerHTML;
      const botonB = botones[b].innerHTML;
      const botonC = botones[c].innerHTML;

      if (botonA) {
        if (botonA === botonB) {
          if (botonA === botonC) {
            return true;
          }
        }
      }
    }
    return false;
  };

  botones.forEach((item) => {
    item.addEventListener("click", (event) => {
      const boton = event.target;
      boton.innerHTML = fichas[jugador - 1];
      movimientos++;

      if (hayGanador()) {
        h2.innerHTML = `El jugador ${jugador} ha ganado`;
        partidaTerminada = true;
        return;
      }

      if (movimientos === 9) {
        h2.innerHTML = `Ha sido un empate`;
        partidaTerminada = true;
        return;
      }

      if (jugador === 1) {
        jugador = 2;
      } else {
        jugador = 1;
      }
    });
  });

  botonReinicio.innerHTML = "Recargar";

  botonReinicio.addEventListener("click", () => {
    location.reload();
  });
};

export const printPageTresEnRaya = () => {
  document.querySelector("main").innerHTML = template();
  start();
};

//hacer carpeta para el juego, con un template y esa funcion de print de la pagina llevarla al route, initcontroler y hacer un caso
//despues de que tenga el caso, ir al dashboard y ejecutar el mismo
//importar el css en el archivo js de el juego
//meter la logica del codigo en una funcion para que inicie
//incluir en el barril index.js

//en el dashboard se coloca el tema,

//en components en el header donde estan los iconos e imagen, poner el icono aca.
