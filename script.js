function createPlayground() {
  let playground = {
    a: {
      1: "e",
      2: "e",
      3: "e",
    },
    b: {
      1: "e",
      2: "e",
      3: "e",
    },
    c: {
      1: "e",
      2: "e",
      3: "e",
    },
  };
  return { playground };
}

function createPlayer() {
  const player = {
    name: prompt("What is your name?"),
    sign: prompt("What is your play sign?"),
  };
  return { player };
}

function gameBehavior() {
  let mark = (name, sign) => {
    let placeCol;
    let placeRow;
    placeCol = prompt(`Hello ${name} where to place col a ${sign} sign?`);
    placeRow = prompt(`Hello ${name} where to place row a ${sign} sign?`);

    playgroud1.playground[placeCol][placeRow] = sign;
  };

  let gameRound = () => {
    let temporary = 0;
    for (let i = 0; i < 3; i++) {
      if (temporary === 0) {
        gameBehavior().mark(player1.player.name, player1.player.sign);
        temporary = 1;
      } else if (temporary === 1) {
        gameBehavior().mark(player2.player.name, player2.player.sign);
        temporary = 0;
      }
    }
    let winningConditions = () => {
      idk;
    };
  };

  return { mark, gameRound };
}

function gamePlay() {
  playgroud1 = createPlayground();
  player1 = createPlayer();
  player2 = createPlayer();

  gameBehavior().gameRound();

  console.table(playgroud1.playground);
}

gamePlay();
