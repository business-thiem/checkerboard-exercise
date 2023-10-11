let body = document.getElementsByTagName('body')[0]


function createCheckerBoard(){
    createContainer()
}


function createContainer(){
    let container = document.createElement('div')
    container.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    height: 800px;
    background-color:gray;
    margin: auto;
    border: 1px solid white;
    `;

    for(let i = 0; i<64; i++){
        let row = Math.floor(i/8) //determines the current row
        createSquare(container, i, row)
    }
    body.appendChild(container)
}

function createSquare(container, col, row){
    let square = document.createElement('div')
    square.style.cssText = `
    width:12.5%;
    height:12.5%;
    `

    if(col % 2 === 0 && row % 2 === 0){
        square.style.backgroundColor = 'red'
    } else if(col % 2 !== 0 && row % 2 === 0) {
        square.style.backgroundColor = 'black'
    } else if(col % 2 === 0 && row % 2 !== 0) {
        square.style.backgroundColor = 'black'
    } else if(col % 2 !== 0 && row % 2 !== 0) {
        square.style.backgroundColor = 'red'
    }
    
    container.appendChild(square)
}

function makeCheckerBoardColors(){
    //get the container's squares by i HTML collection

    //iterate thru element and set color based on column and row
}

function makeRandomColor(){
    //get the container's squares by i HTML collection
    //make variables for R, G, B (255,255,255) (`R,G,B`)
    

    //iterate thru element and set color based on column and row

}

createCheckerBoard()

console.log(body)