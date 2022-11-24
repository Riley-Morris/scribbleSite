
let mouseDown = false;
let gridLinesOption
let gridSizeCurrent 

function genGrid(size){
    // getGridLines()
    const gridLineButtons = document.querySelectorAll('input[name="gridLines"]');
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
            innerBox.style.border = 'gridLinesOption'
            console.log(gridLinesOption)
            innerBox.addEventListener('mouseover', paintLines)
            rowBox.appendChild(innerBox);
         }
        
    }
}



function paintLines(e){
    document.body.onmousedown = function(){
        mouseDown = true
    };
    document.body.onmouseup = function() {
        mouseDown = false
    };
    if (mouseDown === true) { 
        colorRadioListener()
        e.target.style.backgroundColor = colorChoice
    }
}
let colorChoice = 'red' 

// update colorChoice variable to feed into paintLines & mouse listener
function colorRadioListener(){
    const radioButtons = document.querySelectorAll('input[name="color"]');
    for (const radioButton of radioButtons) {
        if(radioButton.checked){
            colorChoice = radioButton.value;
        }
    }
}   
function refreshGrid(){
    const gridBox = document.querySelectorAll('.rowBox')
    for (row of gridBox) {
        row.remove()
    }   genGrid(gridSizeCurrent)
    
}
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
// function getGridLines(){
//     for (button of gridLineButtons){
//         if (button.checked){
//             if (button.value === 'yes'){
//             gridLinesOption = '1px solid black'
//             }else {
//             gridLinesOption = 'none'
//             }
//         }
//     }
// }

gridRadioListener()