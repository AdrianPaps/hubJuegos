//Dashboard.js ------> src/pages/Dashboard/Dashboard.js
import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateTresEnRaya">
          <img
            src="https://tictactoefree.com/img/classic_tictactoe.png" //cambiar imagen
            alt=" go to tres en raya"
          />
          <h2>Tres En Raya</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateWhack">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761735/6168776_kfna36.png" 
            alt="go to wacka topo game"
          />
          <h2>Whack a Mole</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  /** le damos el evento al boton de pokemon que es la unica pagina de contenido por
   * ahora esta creada en el proyecto
   */
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });

  const navigatetoTresEnRaya = document.getElementById("navigateTresEnRaya");
  navigatetoTresEnRaya.addEventListener("click", () => {
    initControler("TresEnRaya");
  });

  const navigatetoWhack = document.getElementById("navigateWhack");
  navigatetoWhack.addEventListener("click", () => {
    initControler("WhackAMole");
  });
};

export const printTemplateDashboard = () => {
  /** Como siempre las paginas se renderizan en el main por lo cual inyectamos el template en el contenedor del main */
  document.querySelector("main").innerHTML = template();

  /** Para la nav, que la habiamos ocultado en el login, la volvemos a renderizar cambiandole el display de none a flex */
  document.querySelector("nav").style.display = "flex";

  /** metemos los escuchadores de la pagina */
  addEventListeners();

  getInfo();
};
