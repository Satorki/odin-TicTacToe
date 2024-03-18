//MODAL
function modal() {
  const window = document.getElementById("modal");
  const button = {
    open: document.querySelector("#openModal"),
    play: document.querySelector("#playModal"),
    close: document.querySelector("#closeModal"),
  };

  const behaviors = () => {
    button.open.addEventListener("click", () => {
      window.showModal();
    });

    button.play.addEventListener("click", () => {});

    button.close.addEventListener("click", () => {
      window.close();
    });
  };

  return { window, button, behaviors };
}

const mainModal = modal();
mainModal.window;
mainModal.button;
mainModal.behaviors();

//GAME
function game() {
  const playground = () => {
    let playground = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9"];
    let playgroundElements = playground.map((elementId) => {
      return document.querySelector(`#${elementId}`);
    });
    return { playgroundElements };
  };

  const player = () => {
    const player = {
      player1Input: document.querySelector("#player1"),
      player2Input: document.querySelector("#player2"),
    };
  };

  const behaviors = () => {};

  return { playground, player, behaviors };
}

const mainGame = game();
const playground = mainGame.playground().playgroundElements;
playground.forEach((element, index, arr) => {
  element.addEventListener("click", () => {
    let xSign = document.createTextNode("X");
    arr[index] = element.appendChild(xSign);
  });
});

mainGame.player();

// function createPlayground() {
//   let playground = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9"];
//   let playgroundElements = playground.map((elementId) => {
//     return document.querySelector(`#${elementId}`);
//   });
//   return { playground: playgroundElements };
// }

// function createPlayer() {
//   const player = {
//     player1Input: document.querySelector("#player1"),
//     player2Input: document.querySelector("#player2"),
//   };
//   return { player };
// }

// function gameBehavior() {
//   let mark = (name, sign) => {
//     let place;
//     place = prompt(`Hello ${name} where to place a ${sign} sign?`);
//     place.split("");

//     playground1.playground[place[0]][place[1]] = sign;
//   };

//   let round = () => {
//     let temporary = 0;
//     let winActivator;
//     do {
//       if (temporary === 0) {
//         gameBehavior().mark(player1.player.name, player1.player.sign);
//         temporary = 1;
//       } else if (temporary === 1) {
//         gameBehavior().mark(player2.player.name, player2.player.sign);
//         temporary = 0;
//       }
//       winActivator = winningConditions();
//     } while (winActivator < 1);
//   };

//   let winningConditions = () => {
//     let winActivator = 0;
//     let pg = playground1.playground;
//     if (pg.a[1] + pg.a[2] + pg.a[3] === "xxx") {
//       console.log(`${player1.player.name} wins!`);
//       winActivator = 1;
//     } else if (pg.b[1] + pg.b[2] + pg.b[3] === "xxx") {
//       console.log(`${player1.player.name} wins!`);
//       winActivator = 1;
//     } else if (pg.c[1] + pg.c[2] + pg.c[3] === "xxx") {
//       console.log(`${player1.player.name} wins!`);
//       winActivator = 1;
//     } else if (pg.a[1] + pg.b[1] + pg.c[1] === "xxx") {
//       console.log(`${player1.player.name} wins!`);
//       winActivator = 1;
//     } else if (pg.a[2] + pg.b[2] + pg.c[2] === "xxx") {
//       console.log(`${player1.player.name} wins!`);
//       winActivator = 1;
//     } else if (pg.a[3] + pg.b[3] + pg.c[3] === "xxx") {
//       console.log(`${player1.player.name} wins!`);
//       winActivator = 1;
//     } else if (pg.a[1] + pg.b[2] + pg.c[3] === "xxx") {
//       console.log(`${player1.player.name} wins!`);
//       winActivator = 1;
//     } else if (pg.a[3] + pg.b[2] + pg.c[1] === "xxx") {
//       console.log(`${player1.player.name} wins!`);
//       winActivator = 1;
//     } else if (pg.a[1] + pg.a[2] + pg.a[3] === "ooo") {
//       console.log(`${player2.player.name} wins!`);
//       winActivator = 1;
//     } else if (pg.b[1] + pg.b[2] + pg.b[3] === "ooo") {
//       console.log(`${player2.player.name} wins!`);
//       winActivator = 1;
//     } else if (pg.c[1] + pg.c[2] + pg.c[3] === "ooo") {
//       console.log(`${player2.player.name} wins!`);
//       winActivator = 1;
//     } else if (pg.a[1] + pg.b[1] + pg.c[1] === "ooo") {
//       console.log(`${player2.player.name} wins!`);
//       winActivator = 1;
//     } else if (pg.a[2] + pg.b[2] + pg.c[2] === "ooo") {
//       console.log(`${player2.player.name} wins!`);
//       winActivator = 1;
//     } else if (pg.a[3] + pg.b[3] + pg.c[3] === "ooo") {
//       console.log(`${player2.player.name} wins!`);
//       winActivator = 1;
//     } else if (pg.a[1] + pg.b[2] + pg.c[3] === "ooo") {
//       console.log(`${player2.player.name} wins!`);
//       winActivator = 1;
//     } else if (pg.a[3] + pg.b[2] + pg.c[1] === "ooo") {
//       console.log(`${player2.player.name} wins!`);
//       winActivator = 1;
//     }
//     return winActivator;
//   };

//   return { mark, round, winningConditions };
// }

// function gamePlay() {
//   playground1 = createPlayground();
//   player1 = createPlayer();
//   player2 = createPlayer();
//   const modalWindow = document.getElementById("modal");

//   modalButtons.open.addEventListener("click", () => {
//     modalWindow.showModal();
//   });

//   submitModalButton.addEventListener("click", () => {});

//   closeModalButton.addEventListener("click", () => {
//     dialog.close();
//   });

//   gameBehavior().round();
//   gameBehavior().winningConditions();

//   console.table(playground1.playground);
// }

// gamePlay();
