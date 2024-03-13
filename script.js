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
    sign: prompt("What is your play sign? X or O"),
  };
  return { player };
}

function gameBehavior() {
  let mark = (name, sign) => {
    let place;
    place = prompt(`Hello ${name} where to place a ${sign} sign?`);
    place.split("");

    playground1.playground[place[0]][place[1]] = sign;
  };

  let round = () => {
    let temporary = 0;
    let winActivator;
    do {
      if (temporary === 0) {
        gameBehavior().mark(player1.player.name, player1.player.sign);
        temporary = 1;
      } else if (temporary === 1) {
        gameBehavior().mark(player2.player.name, player2.player.sign);
        temporary = 0;
      }
      winActivator = winningConditions();
    } while (winActivator < 1);
  };

  let winningConditions = () => {
    let winActivator = 0;
    let pg = playground1.playground;
    if (pg.a[1] + pg.a[2] + pg.a[3] === "xxx") {
      console.log(`${player1.player.name} wins!`);
      winActivator = 1;
    } else if (pg.b[1] + pg.b[2] + pg.b[3] === "xxx") {
      console.log(`${player1.player.name} wins!`);
      winActivator = 1;
    } else if (pg.c[1] + pg.c[2] + pg.c[3] === "xxx") {
      console.log(`${player1.player.name} wins!`);
      winActivator = 1;
    } else if (pg.a[1] + pg.b[1] + pg.c[1] === "xxx") {
      console.log(`${player1.player.name} wins!`);
      winActivator = 1;
    } else if (pg.a[2] + pg.b[2] + pg.c[2] === "xxx") {
      console.log(`${player1.player.name} wins!`);
      winActivator = 1;
    } else if (pg.a[3] + pg.b[3] + pg.c[3] === "xxx") {
      console.log(`${player1.player.name} wins!`);
      winActivator = 1;
    } else if (pg.a[1] + pg.b[2] + pg.c[3] === "xxx") {
      console.log(`${player1.player.name} wins!`);
      winActivator = 1;
    } else if (pg.a[3] + pg.b[2] + pg.c[1] === "xxx") {
      console.log(`${player1.player.name} wins!`);
      winActivator = 1;
    } else if (pg.a[1] + pg.a[2] + pg.a[3] === "ooo") {
      console.log(`${player2.player.name} wins!`);
      winActivator = 1;
    } else if (pg.b[1] + pg.b[2] + pg.b[3] === "ooo") {
      console.log(`${player2.player.name} wins!`);
      winActivator = 1;
    } else if (pg.c[1] + pg.c[2] + pg.c[3] === "ooo") {
      console.log(`${player2.player.name} wins!`);
      winActivator = 1;
    } else if (pg.a[1] + pg.b[1] + pg.c[1] === "ooo") {
      console.log(`${player2.player.name} wins!`);
      winActivator = 1;
    } else if (pg.a[2] + pg.b[2] + pg.c[2] === "ooo") {
      console.log(`${player2.player.name} wins!`);
      winActivator = 1;
    } else if (pg.a[3] + pg.b[3] + pg.c[3] === "ooo") {
      console.log(`${player2.player.name} wins!`);
      winActivator = 1;
    } else if (pg.a[1] + pg.b[2] + pg.c[3] === "ooo") {
      console.log(`${player2.player.name} wins!`);
      winActivator = 1;
    } else if (pg.a[3] + pg.b[2] + pg.c[1] === "ooo") {
      console.log(`${player2.player.name} wins!`);
      winActivator = 1;
    }
    return winActivator;
  };

  return { mark, round, winningConditions };
}

function gamePlay() {
  playground1 = createPlayground();
  player1 = createPlayer();
  player2 = createPlayer();

  gameBehavior().round();
  gameBehavior().winningConditions();

  console.table(playground1.playground);
}

// gamePlay();


//DOM ATTACK


const frame = document.querySelector(".frame")

frame.addEventListener(("click"), () => {
  console.log("clicked");
})