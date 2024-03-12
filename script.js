// musze zrobic planszę
// plansza ma macierz 3 na 3
// macierz wygląda tak ale w obiekcie?:
// może array w obiekcie?

function game() {
  const playground = {
    row1: {
      col1: "e",
      col2: "e",
      col3: "e",
    },
    row2: {
      col1: "e",
      col2: "e",
      col3: "e",
    },
    row3: {
      col1: "e",
      col2: "e",
      col3: "e",
    },
  };
  let mark = (player, sign) => {
    return console.log(player, sign);
  };
  return { playground, mark };
}

console.log(game().playground.row1.col1);
console.log(game().mark("seba", "x"));
