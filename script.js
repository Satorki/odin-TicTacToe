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