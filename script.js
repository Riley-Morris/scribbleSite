
let mouseDown = false;

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
    console.log('right here')
    if (mouseDown === true) {
        console.log('mousedown')
        e.target.style.backgroundColor = colorChoice
    }
}
let colorChoice = 'black'      
genGrid(36)