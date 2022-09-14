/* addEventListener('DOMContentLoaded', (event) => {
    let num1 = parseInt(document.getElementById("num1-el").value);
    let num2 = parseInt(document.getElementById("num2-el").value);
}); */
let num1 = document.getElementById("num1-el");
let num2 = document.getElementById("num2-el");

const resultText = "Result: ";  


// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

const add = document.querySelector("#add")
const substract = document.querySelector("#substract")
const divide = document.querySelector("#divide")
const multiply = document.querySelector("#multiply")
const sumEl = document.querySelector("#sum-el")

function addNumber() {
    let result = Number(num1.value) + Number(num2.value);
    console.log(result)
    sumEl.innerText = resultText + result;
};
function substractNumber() {
    let result = Number(num1.value) - Number(num2.value);
    console.log(result)
    sumEl.innerText = resultText + result;
};
function divideNumber() {
    let result = Number(num1.value) / Number(num2.value);
    console.log(result)
    sumEl.innerText = resultText + result;
};
function multiplyNumber() {
    let result = Number(num1.value) * Number(num2.value);
    console.log(result)
    sumEl.innerText = resultText + result;
};

add.addEventListener("click", addNumber);
substract.addEventListener("click", substractNumber);
divide.addEventListener("click", divideNumber);
multiply.addEventListener("click", multiplyNumber);