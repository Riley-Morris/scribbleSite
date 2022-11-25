
let mouseDown = false;
let gridLinesOption = '1px solid black'
let gridSizeCurrent 
let colorChoice = 'red' 
let colorToggle = false


//main function to generate grid, takes size as arg 
//should output equal squares for the grid
function genGrid(size){
    const mainBox = document.querySelector('#mainBox');
    const boxLength = ((1/Math.sqrt(size)) * 100).toString() + '%'
    for (let i = 0; i <= Math.sqrt(size); i++){
         const rowBox = document.createElement('div');
         rowBox.classList.add('rowBox')
         rowBox.style.height = boxLength
         rowBox.style.width = '100%'
         mainBox.appendChild(rowBox)
         
         for (let i=0; i<=Math.sqrt(size); i++){
            const innerBox = document.createElement('div');
            innerBox.classList.add('innerBox');
            innerBox.style.height = '100%';
            innerBox.style.width = boxLength;
            innerBox.style.border = gridLinesOption
            innerBox.addEventListener('mouseover', paintLines)
            rowBox.appendChild(innerBox);
         }
        
    }
}


//function that actually changes grid colors, operates by flipping a value
//depending on if mouse is down or not
function paintLines(e){
    document.body.onmousedown = function(){
        mouseDown = true
    };
    document.body.onmouseup = function() {
        mouseDown = false
    };
    if (colorToggle === true){
        if (mouseDown === true){
            console.log('true test')
            e.target.style.backgroundColor = randomRGB()
        }
    }else{
        if (mouseDown === true) { 
        colorRadioListener()
        e.target.style.backgroundColor = colorChoice
        }
    }
}


// update colorChoice variable to feed into paintLines & mouse listener
function colorRadioListener(){
    const radioButtons = document.querySelectorAll('input[name="color"]');
    for (const radioButton of radioButtons) {
        if(radioButton.checked){
            colorChoice = radioButton.value;
        }
    }
}   
//removes all the grid's rows, and regenerates a new grid by
//calling the genGrid function
function refreshGrid(){
    const gridBox = document.querySelectorAll('.rowBox')
    for (row of gridBox) {
        row.remove()
    }   genGrid(gridSizeCurrent)
    
}
//selects color radio butts, finds which is checked & sets the variable
//gridSizeCurrent to its value, then passes refreshgrid()
function gridRadioListener(){
    const radioButtons = document.querySelectorAll('input[name="gridSize"]')
    for (const radioButton of radioButtons) {
        if(radioButton.checked){
            gridSizeCurrent = radioButton.value
            refreshGrid();  
            
        }
    }
}
// check radio buttons if grid line option is enabled
function getGridLines(e){
    const radioButtons = document.querySelectorAll('input[name="gridLines"]');
    for (radioButton of radioButtons){
        if (radioButton.checked){
            console.log(radioButton.value);
            gridLinesOption = radioButton.value;
        }
    }
    refreshGrid()
}
//generate rgb string//
function toggleSwitch(){
    colorToggle = !colorToggle
}

function randomRGB(){
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    console.log(colorToggle)
    return `rgb(${red.toString()},${green.toString()},${blue.toString()})`
}

gridRadioListener()