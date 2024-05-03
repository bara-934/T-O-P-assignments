const container = document.querySelector("div");
let initialGrid = {width:16, height:16};
createGrid(initialGrid);
const promptButton = document.querySelector("button");
promptButton.addEventListener('click',()=>{createGrid(getUserDimension());});

function getUserDimension(){
    let userWidth = parseInt(prompt('width: '));
    let userHeight = parseInt(prompt('height: '));
    let dimensions = {width: userWidth, height: userHeight};
    return dimensions;
}

function createGrid(dimensions)
{
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
        container.appendChild(row);
    }

}