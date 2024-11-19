import "./Whack.css";

const template = () => {
  return `    <div id="containerWhack">
  <h1>Whack a Mole</h1>
    <h2 id="score">0</h2>
    <h2 id="win"></h2>
    <div id="board"></div>
    </div>`;
};

const startWhack = () => {
  let currentMoleTile;
  let score = 0;
  let gameOver = false;

  const setGame = () => {
    for (let i = 0; i < 9; i++) {
      let tile = document.createElement("div");
      tile.id = i.toString();
      tile.addEventListener("click", () => {
        if (tile == currentMoleTile) {
          score += 10;
          document.getElementById("score").innerText = score.toString();
          if (score >= 150) {
            endGame();
          }
        }
      });
      document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000);
  };

  const endGame = () => {
    gameOver = true;
    alert("Has Ganado");
  };

  const getRandomTile = () => {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
  };

  const setMole = () => {
    if (currentMoleTile) {
      currentMoleTile.innerHTML = "";
    }

    if (gameOver) {
      score = 0;
      document.getElementById("score").innerText = score.toString();

      return location.reload();
    }

    let mole = document.createElement("img");
    mole.src = "../../../public/images/monty-mole.png";

    let num = getRandomTile();
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
  };
  setGame();
};

window.onload = () => {
  startWhack();
};

export const printWhack = () => {
  document.querySelector("main").innerHTML = template();
  startWhack();
};
