const num1 = Math.floor(Math.random() *10 +1)   
const num2 = Math.floor(Math.random() *10 +1)

const questionEl = document.getElementById("question");

const formEl = document.querySelector("form")
const inputEl = document.getElementById("input")
const haiEl = document.getElementById("hai")
const scoreEl = document.getElementById("score");

let highScore = 0 //localStorage.getItem("highscore", JSON.parse);
let score = localStorage.getItem("score", JSON.parse)

questionEl.innerText = `What is ${num1} multilpy by ${num2}?`

const correctAns = num1 * num2

scoreEl.innerHTML =`score : ${score}`

//console.log(correctAns)

if(!score){
    score = 0;
}


formEl.addEventListener("submit", ()=> {
    const userAns = +inputEl.value;
    
    if (userAns === correctAns){
        score++;
        updateLocalStorage()
    }else{
        score--;
        updateLocalStorage()
    }
})
function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}


// if( score > highScore){
//     highScore = score
//     //updateHighScore
//     console.log(highScore)
// }else if (score < highScore) {
//     highScore = highScore;
//     console.log(highScore)
// }
// else {
//     highScore = highScore
//     updateHighScore
//     console.log(highScore)
// }
// //function updateHighScore(){
//     localStorage.setItem("highscore" , JSON.stringify(highScore))
// }




//haiEl.innerText = `correct answer ${correctAns}`
