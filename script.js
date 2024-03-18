//MODAL
function modal() {
  const dialog = document.getElementById("modal");
  const buttons = {
    open: document.querySelector("#openModal"),
    play: document.querySelector("#playModal"),
    close: document.querySelector("#closeModal"),
    restart: document.querySelector("#restart"),
  };

  const behaviors = () => {
    buttons.open.addEventListener("click", () => {
      dialog.showModal();
    });

    buttons.play.addEventListener("click", () => {
      mainGame.playerInfo.output1();
      mainGame.play();
      dialog.close();
    });

    buttons.close.addEventListener("click", () => {
      dialog.close();
    });

    buttons.restart.addEventListener("click", () => {
      window.location.reload();
    });
  };

  return { dialog, buttons, behaviors };
}
// MODAL START
const mainModal = modal();
mainModal.dialog;
mainModal.buttons;
mainModal.behaviors();

//GAME
function game() {
  const currentPlayer = { value: 1 };
  const playground = () => {
    let playground = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9"];
    let playgroundElements = playground.map((elementId) => {
      return document.querySelector(`#${elementId}`);
    });
    return { playgroundElements };
  };

  const players = {
    player1Input: document.querySelector("#player1"),
    player2Input: document.querySelector("#player2"),
  };

  const playerInfo = {
    selector: document.querySelector(".player-info > p"),
    output1: function () {
      this.selector.innerText = players.player1Input.value + "'s turn";
    },
    output2: function () {
      this.selector.innerText = players.player2Input.value + "'s turn";
    },
    output1win: function () {
      this.selector.innerText = players.player1Input.value + " wins!";
    },
    output2win: function () {
      this.selector.innerText = players.player2Input.value + " wins!";
    },
    output3draw: function () {
      this.selector.innerText = "It is a draw!";
    },
  };

  const toggleTurn = () => {
    if (currentPlayer.value === 1) {
      playerInfo.output2();
      currentPlayer.value = 2;
    } else {
      playerInfo.output1();
      currentPlayer.value = 1;
    }
  };

  const play = () => {
    let winner = 0;
    const playgroundElements = playground().playgroundElements;
    playgroundElements.forEach((element, index, arr) => {
      element.addEventListener("click", () => {
        if (!element.innerText && winner === 0) {
          let sign = document.createTextNode(
            currentPlayer.value === 1 ? "X" : "O"
          );
          toggleTurn();
          element.appendChild(sign);
          arr[index] = sign;
          console.log(winner);
          if (
            arr[0].textContent + arr[1].textContent + arr[2].textContent ===
              "XXX" ||
            arr[0].textContent + arr[3].textContent + arr[6].textContent ===
              "XXX" ||
            arr[1].textContent + arr[4].textContent + arr[7].textContent ===
              "XXX" ||
            arr[2].textContent + arr[5].textContent + arr[8].textContent ===
              "XXX" ||
            arr[3].textContent + arr[4].textContent + arr[5].textContent ===
              "XXX" ||
            arr[6].textContent + arr[7].textContent + arr[8].textContent ===
              "XXX" ||
            arr[0].textContent + arr[4].textContent + arr[8].textContent ===
              "XXX" ||
            arr[2].textContent + arr[4].textContent + arr[6].textContent ===
              "XXX"
          ) {
            playerInfo.output1win();
            winner = 1
          } else if (
            arr[0].textContent + arr[1].textContent + arr[2].textContent ===
              "OOO" ||
            arr[0].textContent + arr[3].textContent + arr[6].textContent ===
              "OOO" ||
            arr[1].textContent + arr[4].textContent + arr[7].textContent ===
              "OOO" ||
            arr[2].textContent + arr[5].textContent + arr[8].textContent ===
              "OOO" ||
            arr[3].textContent + arr[4].textContent + arr[5].textContent ===
              "OOO" ||
            arr[6].textContent + arr[7].textContent + arr[8].textContent ===
              "OOO" ||
            arr[0].textContent + arr[4].textContent + arr[8].textContent ===
              "OOO" ||
            arr[2].textContent + arr[4].textContent + arr[6].textContent ===
              "OOO"
          ) {
            playerInfo.output2win();
            winner = 1
          } else if (
            arr[0].textContent &&
            arr[1].textContent &&
            arr[2].textContent &&
            arr[3].textContent &&
            arr[4].textContent &&
            arr[5].textContent &&
            arr[6].textContent &&
            arr[7].textContent &&
            arr[8].textContent
          ) {
            playerInfo.output3draw();
          }
        }
      });
    });
  };

  return { playerInfo, play };
}

const mainGame = game();

//GAME START
// const mainGame = game();
// const playground = mainGame.playground().playgroundElements;
// playground.forEach((element) => {
//   element.addEventListener("click", () => {
//     if (!element.innerText) {
//       console.log(mainGame.currentPlayer);
//       let sign = document.createTextNode(
//         mainGame.players.currentPlayer === 1 ? "X" : "O"
//       );
//       mainGame.toggleTurn();
//       element.appendChild(sign);
//     }
//   });
// });

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

// let round = () => {
//   let temporary = 0;
//   let winActivator;
//   do {
//     if (temporary === 0) {
//       // gameBehavior().mark(player1.player.name, player1.player.sign);
//       console.log(playground);
//       temporary = 1;
//     } else if (temporary === 1) {
//       // gameBehavior().mark(player2.player.name, player2.player.sign);

//       temporary = 0;
//     }
//     winActivator = winningConditions();
//   } while (winActivator < 1);
// };

// round();

//   let winningConditions = () => {
//     let winActivator = 0;
//     if (mainGame.) {
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
