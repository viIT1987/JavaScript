const heading = document.querySelector(".form h1");
const formSubmit = document.querySelector(".form");
const inpNumber = document.querySelector(".input")
const newScore = document.querySelector(".score");


let firstNumber = Math.floor(Math.random()*10);
let secondNumber = Math.floor(Math.random()*10);
let res = firstNumber * secondNumber;

let question = `Multiply = ${firstNumber} by ${secondNumber}.`;
heading.innerHTML = question;


let score = JSON.parse(localStorage.getItem("score"));
newScore.innerHTML =`score: ${score}`;
if(!score){
    score = 0;
}
function myFunc(){
    const res1 = +inpNumber.value;
    if(res === res1){
        score++
        updateScore();
    }else{
        score--;
        updateScore();
    }
}
function updateScore(){
    localStorage.setItem("score", JSON.stringify(score))
}
formSubmit.addEventListener("submit", () => {
    // e.preventDefault();
    myFunc();
})
