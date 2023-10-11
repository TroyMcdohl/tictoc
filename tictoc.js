let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let game_end_id = document.getElementById("game_end_id");
let p1_title = document.querySelector(".p1_title");
let p2_title = document.querySelector(".p2_title");

let result = [];

const game_fun = () => {
  let player = 0;
  let stopGame = 0;
  let arr = [];
  let testArray = [];

  //for 1 square function
  const sq_fun = (class_name, para) => {
    let playRound = 0;
    const sq = document.getElementById(`${class_name}`);

    sq.addEventListener("click", () => {
      if (playRound == 0 && stopGame == 0) {
        testArray.push("a");

        if (player == 0) {
          p2.style.display = "block";
          p1.style.display = "none";
          sq.innerHTML = "X";
          sq.style.color = "red";
          player += 1;
          playRound = 1;
          arr[para] = "X";
        } else {
          p1.style.display = "block";
          p2.style.display = "none";
          sq.innerHTML = "O";
          sq.style.color = "green";
          player = 0;
          playRound = 1;
          arr[para] = "O";
        }

        //check if game win or lose

        if (
          (arr[0] == "X" && arr[1] == "X" && arr[2] == "X") ||
          (arr[0] == "O" && arr[1] == "O" && arr[2] == "O")
        ) {
          stopGame = 1;
        } else if (
          (arr[3] == "X" && arr[4] == "X" && arr[5] == "X") ||
          (arr[3] == "O" && arr[4] == "O" && arr[5] == "O")
        ) {
          stopGame = 1;
        } else if (
          (arr[6] == "X" && arr[7] == "X" && arr[8] == "X") ||
          (arr[6] == "O" && arr[7] == "O" && arr[8] == "O")
        ) {
          stopGame = 1;
        } else if (
          (arr[0] == "X" && arr[3] == "X" && arr[6] == "X") ||
          (arr[0] == "O" && arr[3] == "O" && arr[6] == "O")
        ) {
          stopGame = 1;
        } else if (
          (arr[1] == "X" && arr[4] == "X" && arr[7] == "X") ||
          (arr[1] == "O" && arr[4] == "O" && arr[7] == "O")
        ) {
          stopGame = 1;
        } else if (
          (arr[2] == "X" && arr[5] == "X" && arr[8] == "X") ||
          (arr[2] == "O" && arr[5] == "O" && arr[8] == "O")
        ) {
          stopGame = 1;
        } else if (
          (arr[0] == "X" && arr[4] == "X" && arr[8] == "X") ||
          (arr[0] == "O" && arr[4] == "O" && arr[8] == "O")
        ) {
          stopGame = 1;
        } else if (
          (arr[2] == "X" && arr[4] == "X" && arr[6] == "X") ||
          (arr[2] == "O" && arr[4] == "O" && arr[6] == "O")
        ) {
          stopGame = 1;
        }

        //check tie game

        if (testArray.length == 9) {
          stopGame = 2;
        }

        //game end

        if (stopGame == 1) {
          p2.style.display = "none";
          p1.style.display = "none";
          game_end_id.style.display = "flex";

          if (player == 1) {
            p1_title.innerHTML = "Player 1 Winner!";
            result.push("Player 1 Win!");
          } else {
            p2_title.innerHTML = "Player 2 Winner!";
            result.push("Player 2 Win!");
          }
        } else if (stopGame == 2) {
          p2.style.display = "none";
          p1.style.display = "none";
          game_end_id.style.display = "flex";
          p1_title.innerHTML = "Tie!!";
          p2_title.innerHTML = "Tie!!";
        }
      }
    });
  };

  sq_fun("ch1", 0);
  sq_fun("ch2", 1);
  sq_fun("ch3", 2);
  sq_fun("ch4", 3);
  sq_fun("ch5", 4);
  sq_fun("ch6", 5);
  sq_fun("ch7", 6);
  sq_fun("ch8", 7);
  sq_fun("ch9", 8);
};

game_fun();

document.getElementById("try_again").addEventListener("click", () => {
  document.getElementById("ch1").innerHTML = "";
  document.getElementById("ch2").innerHTML = "";
  document.getElementById("ch3").innerHTML = "";
  document.getElementById("ch4").innerHTML = "";
  document.getElementById("ch5").innerHTML = "";
  document.getElementById("ch6").innerHTML = "";
  document.getElementById("ch7").innerHTML = "";
  document.getElementById("ch8").innerHTML = "";
  document.getElementById("ch9").innerHTML = "";
  p1_title.innerHTML = "Player 1";
  p2_title.innerHTML = "Player 2";
  p1.style.display = "block";
  game_end_id.style.display = "none";
  game_fun();
});
