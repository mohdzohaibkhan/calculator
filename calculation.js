const numBtn = document.querySelectorAll('.num-btn')
const calcBtn = document.querySelectorAll('.calc-btn')
const equalBtn = document.querySelector('#btn-space-equal')
const delBtn = document.querySelector('#btn-space')
const acBtn = document.querySelector("#ac-btn")
let screenText = document.querySelector('.screen-text')
let expression='';

calcBtn.forEach(function (element) {
    element.addEventListener("click", (event) => {
        event.target.style.boxShadow = 'none'
        setTimeout(() => {
            event.target.style.boxShadow = '1px 1px 2px black'
        }, 100)
    })
})
numBtn.forEach(function(element){
    element.addEventListener('click',(event)=>{
        expression+=event.target.innerHTML;
        screenText.innerHTML = expression;
    })
})
equalBtn.addEventListener('click',()=>{
    expression = ''+eval(expression)
    screenText.innerHTML = expression;
    console.log(expression)
})
delBtn.addEventListener('click', ()=>{
    expression = ''+expression.substring(0,expression.length-1)
    console.log(expression)
    screenText.innerHTML = expression
})
acBtn.addEventListener('click', ()=>{
    expression=''
    screenText.innerHTML = 0;
})
