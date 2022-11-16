function genGrid(size){
    const mainBox = document.querySelector('#mainBox');
    for (let i = 0; i <= Math.sqrt(size); i++){
         const rowBox = document.createElement('div');
         rowBox.classList.add('rowBox')
         mainBox.appendChild(rowBox)
         console.log(i)
    }
}
genGrid(36)