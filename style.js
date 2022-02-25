function start() {
    document.getElementById("startText").classList.add("hideBlock");
    document.getElementById("startButton").classList.add("hideBlock");
    document.getElementById("question").classList.remove("hideBlock");
    document.getElementById("question").innerHTML ="Попытка " + stage + ": " + middle;
    document.getElementById("Small").classList.remove("hideBlock");
    document.getElementById("Bingo").classList.remove("hideBlock");
    document.getElementById("Big").classList.remove("hideBlock");
}


let min = 0;
let max = 100;

let middle = Math.floor((min + max)/2);

let stage = 1;

function smallClick(){
max = middle;

middle = Math.floor((min + max)/2);

      if (max == middle) {
          middle -=1;
        
}

   checkGame();
}
function bingoClick() {
  max = middle;
  min = middle;

  checkGame();

 }
 function checkGame(){
      if(min == max){
          document.getElementById("question").innerHTML = " Вы загадил число " + min;
          document.getElementById("small").classList.add("hideBlock");
          document.getElementById("bingo").classList.add("hideBlock");
          document.getElementById("big").classList.add("hideblock");

          return;
         }

    }

        stage += 1;
         if (stage == 8){
          document.getElementById("question").innerHTML = " Жульначить - не хорошо!";
         
         document.getElementById("question").innerHTML = "Попытка " + stage + ": " + middle;
         }