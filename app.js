/********************** Create welcome screen and explain rules of game *********************/
function greeting() {
        alert("Welcome to Simple 21! Which ever player gets a number closer to 21 wins the round. Best 3 out of 5 rounds wins. To start click OK then "+ document.getElementById("body").innerText);
    };
    // alert("Which ever player gets a number closer to 21 wins the round.Best 3 out of 5 rounds wins.");
    // };
   
    // function bodyLoad() {
        // alert("alert from body onload");
        // alert("content from d1: " + document.getElementById("d1").innerText);
    // }
    




/************************ Generate players' random numbers bet. 1-21 ************************/

let play1 =
    Math.floor(Math.random() * (21) + 1);
console.log(play1);

let play2 =
    Math.floor(Math.random() * (21) + 1);
console.log(play2);

/************************ Write conditional based on higher number, displaying 
 * message if player wins or loses round ************************/

if (play1 > play2) {
    console.log('You Win!');
} else if (play1 < play2) {
    console.log('You Lose!');
} else {
    console.log('Draw!')
};


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