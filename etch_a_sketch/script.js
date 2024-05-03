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
            square.addEventListener('mouseover',(e)=> {
            squareColor(e.target);
            });
            // square.addEventListener('mouseout',()=> {
            // square.style.backgroundColor = 'transparent';
            // })

        }        
        newContainer.appendChild(row);
    }
    document.body.replaceChild(newContainer,container)

}

function squareColor(square){
    if(square.className !== 'passed')
    {
        square.className = 'passed';
        let rInitial = getRandomInt(255);
        let gInitial = getRandomInt(255);
        let bInitial = getRandomInt(255);
        square.setAttribute("data-rInitial",`${rInitial}`);
        square.setAttribute("data-gInitial",`${gInitial}`);
        square.setAttribute("data-bInitial",`${bInitial}`);
        square.setAttribute("data-r",`${rInitial}`);
        square.setAttribute("data-g",`${gInitial}`);
        square.setAttribute("data-b",`${bInitial}`);
        
        square.style.backgroundColor = `rgb(${rInitial}}, ${gInitial}}, ${bInitial}})`
    } 
    else 
    {
        
        let r = Number(square.getAttribute('data-r')) - Number(square.getAttribute("data-rInitial")) * 0.10;
        let g = Number(square.getAttribute('data-g')) - Number(square.getAttribute("data-gInitial")) * 0.10;
        let b = Number(square.getAttribute('data-b')) - Number(square.getAttribute("data-bInitial")) * 0.10;
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        square.setAttribute("data-r",`${r}`);
        square.setAttribute("data-g",`${g}`);
        square.setAttribute("data-b",`${b}`);
        
    }
    
}

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}