function genGrid(size, color){
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
            innerBox.addEventListener('mousedown', () => {
                innerBox.style.backgroundColor = color
            })
            rowBox.appendChild(innerBox);
         }
    }
}
genGrid(1000, 'black')