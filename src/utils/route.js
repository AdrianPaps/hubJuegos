// route.js ---> utils/route.js
import { getUser } from "../global/state/globalstate";
import {
  Login,
  PrintPokemonPage,
  printPageTresEnRaya,
  printTemplateDashboard,
  printWhack,
} from "../pages";

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    /// -------OPERA ESTE CASO--- SI NO HAY USER EN EL CONTEXTO PINTA EL LOGIN
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;

    /// ------------------------------------------------------------------------
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Topo":
      "Topo()";
      break;
    case "Login":
      Login();
      break;
    case "Memory":
      "Memory()";
      break;
    case "TresEnRaya":
      printPageTresEnRaya();
      break;
    case "WhackAMole":
      printWhack();
      break;
  }
};
