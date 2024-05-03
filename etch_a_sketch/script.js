let initialGrid = {width:16, height:16};
createGrid(initialGrid);
const promptButton = document.querySelector("button");
promptButton.addEventListener('click',()=>{createGrid(getUserDimension());});

function getUserDimension(){
    let userHeight, userWidth;
    do{userWidth = parseInt(prompt('width: '));
    }while(userWidth > 100);

    do{userHeight = parseInt(prompt('height: '));
    }while(userHeight > 100);
    let dimensions = {width: userWidth, height: userHeight};
    return dimensions;
}

function createGrid(dimensions)
{
    const container = document.querySelector("div");
    const newContainer = document.createElement("div");
    newContainer.style.cssText = `height: 400px;
    width: 400px;
    display: flex;
    flex-direction: column;
    border: 2px solid black;`;

    for(let i = 0; i < dimensions.height; i++)
    {
        const row = document.createElement("div");
        row.style.cssText =  
        `border:1px solid blue;
        flex:auto; 
        display:flex;`;

        for(let i = 0; i < dimensions.width; i++)
            {
                const square = document.createElement("div");
                row.appendChild(square);
                square.style.cssText = 
                `border:1px solid darkblue;
                 flex:1 0 auto`;
                 square.addEventListener('mouseover',()=> {
                    square.style.backgroundColor = 'darkblue';
                 })
                 square.addEventListener('mouseout',()=> {
                    square.style.backgroundColor = 'transparent';
                 })
    
            }        
        newContainer.appendChild(row);
    }
    document.body.replaceChild(newContainer,container)

}

function squareColor(square){
    if(square.className !== 'passed')
    {
        square.className = 'passed';
        square.style.backgroundColor = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`
    } 
    else 
    {
        let prevBackground = square.style.backgroundColor;
        let r = Number(prevBackground.slice(4,7)) * 0.85;
        let g = Number(prevBackground.slice(8,11)) * 0.85;
        let b = Number(prevBackground.slice(12,15)) * 0.85;
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    
}

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}