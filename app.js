/********************** Create welcome screen using 'alert' and explain rules of game *********************/
// function greeting() {
//     alert("Welcome to Simple 21! Which ever player gets a number closer to 21 wins the round. Best 3 out of 5 rounds wins. To start =>click OK<= then " +
//         document.getElementById("startButton").innerText);
// };

/************************ Generate players' random numbers bet. 1-21 ************************/
// let play1 = 0;
// let play2 = 0;

function newNum() {
    let play1 = Math.floor(Math.random() * (21) + 1);
    console.log(play1);
    let play2 = Math.floor(Math.random() * (21) + 1);
    console.log(play2);
    document.getElementById("numLeft").innerHTML = play1;
    document.getElementById("numRight").innerHTML = play2
    firstNum = play1;
    secNum = play2;
};

/* Call function to display the random numbers into html */
newNum();




/************************ Write conditional based on higher number, displaying 
 * message if player wins or loses round ************************/

function outCome() {
    let iWon = "Human";
    let iLost = "Dealer";
    let noWin = "Draw";

    if (firstNum > secNum) {
        document.getElementById("playerName").innerHTML = iWon;
    } else if (firstNum < secNum) {
        document.getElementById("playerName").innerHTML = iLost;
    } else if(firstNum===secNum){
        document.getElementById("playerName").innerHTML = noWin;
    }else {
        console.log("Error");
    }
};

outCome();


function allNum() {
    newNum();
    outCome();
}
allNum();

/******************* Output results to html form ********************* */
// let form=document.getElementById("result");
// form.addEventListener('click',function(){
// });


/******************* Create counter for number "Round"/ 
 * Onclick=> update "Round" number ************************/


// id="numRound"




/******************* create end of game after 5 rounds********************* */
// let score = 0

// for(let i = 0; i < 5; i++) {
//   if( )

// }

// return score
// }