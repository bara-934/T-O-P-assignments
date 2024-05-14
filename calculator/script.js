const add = (x,y) => x + y;
const multiply = (x,y) => x * y;
const subtract = (x,y) => x - y;
const divide = (x,y) => x / y;

let number1;
let number2;
let operator;

function operate(x,ope,y){
    return (ope === '+') ? add(x,y)
        : (ope === '-') ? subtract(x,y)
        : (ope === '*') ? multiply(x,y)
        : (ope === '/') ? divide(x,y) : NaN;
     
}