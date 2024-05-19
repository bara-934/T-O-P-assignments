const add = (x,y) => x + y;
const multiply = (x,y) => x * y;
const subtract = (x,y) => x - y;
const divide = (x,y) =>(y !== 0)? x / y: display.textContent = 'NaN. Could not divide by 0';

let number1 = undefined;
let number2;
let operator;
let displayVal;

function operate(x,ope,y){
    return (ope === '+') ? add(x,y)
    : (ope === '-') ? subtract(x,y)
    : (ope === 'x') ? multiply(x,y)
    : (ope === '/') ? divide(x,y) : NaN;
    
}

const display = document.querySelector('.screen');

function clear()
{
    display.textContent = "";
}

function updateDisplay(digit)
{
    if(display.textContent === 'Enter the operation' || displayVal === 0) clear();
    display.textContent += digit;
    displayVal =  Number(display.textContent);
}

document.querySelectorAll('.digits').forEach((digit)=>{
    digit.addEventListener('click', (e)=> {
        updateDisplay(e.target.textContent);
    })
})
    
    
document.querySelectorAll('.specials').forEach((signs)=>{
    signs.addEventListener('click',(e)=>{
        const button = e.target;
        if(button.id === 'backspace')
        {
            if(display.textContent.length > 0)
            {
                display.textContent = displayVal.toString().slice(0,display.textContent.length - 1);
                if(display.textContent.length === 0)
                {
                    updateDisplay(0);
                }
            }
        }
        else if(button.id === 'clear') {
            display.textContent = '0';
            number1 = undefined;
            displayVal = 0;
        }
        else if (button.id === 'decimal')
        {
            if(! display.textContent.includes('.'))
            {
                updateDisplay('.');
            }
        }
        else if(number1 === undefined) {
            number1 = displayVal;
            operator = button.id;
            displayVal = 0;
        }
        else if (operator === 'equal')
        {
            operator = button.id;
        }
        else{
            clear();
            number2 = displayVal;
            number1 = operate(number1, operator, number2);
            operator = button.id;
            updateDisplay(number1);
            displayVal = 0;
        }
        
    })
})