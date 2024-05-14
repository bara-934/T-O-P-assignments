const add = (x,y) => x + y;
const multiply = (x,y) => x * y;
const subtract = (x,y) => x - y;
const divide = (x,y) =>(y !== 0)? x / y: display.textContent = 'NaN. Could not divide by 0';

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
            else display.textContent =  `${calculate(display.textContent.split(' '))}`;
        }

    })
});

function calculate(splitted){
    if (splitted.at(-1) === '*' || splitted.at(-1) === '/' )
    {
        splitted.push(1);
    }
    if (splitted.at(0) === '*' || splitted.at(0) === '/' )
    {
        splitted.unshift(1);
    }
    if (splitted.at(-1) === '+' || splitted.at(-1) === '-' )
    {
        splitted.push(0);
    }
    if (splitted.at(0) === '+' || splitted.at(0) === '-' )
    {
        splitted.unshift(0);
    }

    if(splitted.length === 3){
        return operate(Number(splitted[0]),splitted[1],Number(splitted[2]));
    }
    else{
        const copySplitted = splitted.slice(3);
        copySplitted.unshift(calculate(splitted.slice(0,3)));
        return calculate(copySplitted);    
    }
}
