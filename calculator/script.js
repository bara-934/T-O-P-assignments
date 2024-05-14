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
        : (ope === 'x') ? multiply(x,y)
        : (ope === '/') ? divide(x,y) : NaN;
     
}

const display = document.querySelector('.screen');

document.querySelectorAll('.specials button').forEach((special)=>{
    special.className = "specials";
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click',(e)=> {
        if(button.className !== "specials"){
            if(display.textContent === 'Enter the operation')
            {
                display.textContent = button.id;    
            }
            else display.textContent += (button.parentNode.className === 'right')? 
                ' ' + button.id + ' ': button.id ;
        }
        else{
            if(button.id === 'clear')
            {
                display.textContent = 'Enter the operation';
            }
            else display.textContent =  calculate(display.textContent);
        }

    })
});

function calculate(string){
    arr = string.split(" ");
    return operate(Number(arr[0]),arr[1],Number(arr[2]))
}
