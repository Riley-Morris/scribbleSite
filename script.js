function genGrid(size){
    const mainBox = document.querySelector('#mainBox');
    for (let i = 0; i <= Math.sqrt(size); i++){
         const rowBox = document.createElement('div');
         rowBox.classList.add('rowBox')
         mainBox.appendChild(rowBox)
         console.log(i)
         for (let i=0; i<=Math.sqrt(size); i++){
            console.log(i + 10)
            const innerBox = document.createElement('div');
            innerBox.classList.add('innerBox');
            rowBox.appendChild(innerBox);
         }
    }
}
genGrid(100)