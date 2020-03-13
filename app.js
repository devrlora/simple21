/********************** Create welcome screen using 'alert' and explain rules of game *********************/
function greeting() {
    alert("Welcome to Simple 21! Which ever player gets a number closer to 21 wins the round. Best 3 out of 5 rounds wins. To start =>click OK<= then " +
        document.getElementById("startButton").innerText);
};

/************************ Generate players' random numbers bet. 1-21 ************************/
// let play1 = 0;
// let play2 = 0;
let i=0;
let gameOver = "Game Over";
let playerWon = 0;
let compWon = 0;
    
function newNum() {
    let play1 = Math.floor(Math.random() * (21) + 1);
    console.log(play1);
    let play2 = Math.floor(Math.random() * (21) + 1);
    console.log(play2);
    document.getElementById("numLeft").innerHTML = play1;
    document.getElementById("numRight").innerHTML = play2
    firstNum = play1;
    secNum = play2;
    i++
    outCome()
    console.log(i)
    document.getElementById("numRound").innerHTML = i;
    if (i==5){
        document.getElementById("endTheGame").innerHTML = "Game Over";
        clickPlay.style.display = "none";
    };
    if (play1>play2){
        playerWon++
        document.getElementById("displayCount1").innerHTML = playerWon;
    } else if(play1<play2){
        compWon++
        document.getElementById("displayCount2").innerHTML = compWon;
    }
        if (i==5){
        document.getElementById("playerName").innerHTML = "";
        clickPlay.style.display = "none";
    }
};
/* Calls function to display the random numbers into html when button is pressed */

//newNum();




/************************ Write conditional based on comparing higher number, displaying 
 * message if player wins, loses or draws ************************/

function outCome() {
    let iWon = "You Win!";
    let iLost = "Dealer Wins!";
    let noWin = "Draw!";

    if (firstNum > secNum) {
        document.getElementById("playerName").innerHTML = iWon;
    } else if (firstNum < secNum) {
        document.getElementById("playerName").innerHTML = iLost;
    } else if (firstNum === secNum) {
        document.getElementById("playerName").innerHTML = noWin;
    } else {
        console.log("Error");
    }
};
// outCome();



/******************* Output all function results to html ********************* */

// function allNum() {
//     newNum();
//     outCome();
//     rNum();
// };
// allNum();


/******************* Create counter for "Round" number/ 
 * Onclick=>of start button, update "Round" number ************************/
// let count = 0;
// let button = document.getElementById("clickPlay");
// let display = document.getElementById("displayCount");

// clickPlay.onclick = function () {
//     count++;
//     display.innerHTML = count;
// }

// function rNum() {
    // let clickPlay = document.getElementById("numRound");
    // let numRound = document.getElementById("numRound");
    // numRound.innerHTML = 0;
    // clickPlay.onclick = function()
    // {
    //     numRound.innerHTML++;
    // };



// rNum()
// function rNum() {
// let button = document.getElementById("clickPlay"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "Round Number: " + count;
// }
// };
// rNum()



// let Score=0;
// if (iWon === true) 
//         {
//             Score=Score+1;
//     }
//     else 
//     {
//             Score=Score-1;
//     }

//     var lblScore = Document.getElementById('lblScore');
//     lblScore.innerHTML=Score
//     clickPlay.onclick = function()
//     {
//         clickPlay.innerHTML++;
//     };



// let displayCount=document.getElementById("displayCount");

// displayCount.EventListener("click",function(){
//     clickPlay.onclick++;
//         });
//let i =0


/******************* create end of game after 5 rounds ********************* */


   



//     let rNum = document.getElementById("resultLeft"),
//         count = 0;
//     while (rNum < 5) {
//         text += "The number is " + i;
//         i++;
//         document.getElementById("resultLeft").innerHTML = outCome;
//     }
// }
// endGame();

// if(outCome=)

/******************* Create reset button functionality ********************* */
/* added <button id="clickPlay" to reload page when clicked */

