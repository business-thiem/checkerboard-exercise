



createTable();



// table 8x8 
function createTable(){
    let rowSize = 8;
    let colSize = 8;
    let row = ''
    let rowContainer = ''
    let bgColor = 'red';

    let flexContainer = document.createElement('div')
    flexContainer.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    height: 800px;
    background-color:gray;
    `;

    for(let i = 0; i <= rowSize; i++){
        row = ''
        
        for(let j = 0; j < colSize; j++){
            let tileElement = `<div style="width: 12.5%; height: 12.5%; background-color: ${bgColor};"></div>`
            bgColor = getColorRowCol(i,j)
            row += tileElement
        }
        rowContainer += row;
    }


    flexContainer.innerHTML = rowContainer

    let body = document.getElementsByTagName('body')
    body[0].append(flexContainer)

    console.log(body[0])
}


function getColorRowCol(row, col){
    let bgColor = 'red';

    let rowEvenOdd = (row % 2 === 0 ? 'even' : 'odd')
    let colEvenOdd = (col % 2 === 0 ? 'even' : 'odd')

    if(rowEvenOdd === 'even' && colEvenOdd === 'even'){
        bgColor = 'red'
    } else if(rowEvenOdd === 'even' && colEvenOdd === 'odd'){
        bgColor = 'black'
    }else if(rowEvenOdd === 'odd' && colEvenOdd === 'even'){
        bgColor = 'black'
    }else if(rowEvenOdd === 'odd' && colEvenOdd === 'odd'){
        bgColor = 'red'
    }
    

    return bgColor
}

//  -------------------------------------------------------------------------------------------------------
function createTableTwo(){
    let rowSize = 8;
    let colSize = 8;

    let flexContainer = document.createElement('div')
    flexContainer.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    height: 800px;
    background-color:gray;
    `;


    // count starts with 0
    let tileRed = document.createElement('div')
    tileRed.style.cssText = `
    width:12.5%;
    height:12.5%;
    background-color: red
    `

    let tileBlack = document.createElement('div')
    tileBlack.style.cssText = `
    width:12.5%;
    height:12.5%;
    background-color: black
    `


    //TODO make one square but change the color then append to flexbox


    // tileRed.style.backgroundColor = 'black'


    for(let i = 0; i <= rowSize; i++){
        
        //note that createElement each time so that it's referring to a new element
        tileRed = document.createElement('div')
        tileRed.style.cssText = `
        width:12.5%;
        height:12.5%;
        background-color: red
        `
    
        tileBlack = document.createElement('div')
        tileBlack.style.cssText = `
        width:12.5%;
        height:12.5%;
        background-color: black
        `


        for(let j = 0; j < colSize; j++){
            if(getColorRowCol(i,j) === 'red'){
                flexContainer.appendChild(tileRed)
            } else if(getColorRowCol(i,j) === 'black'){
                flexContainer.appendChild(tileBlack)
            }
        }
        
    }

    let body = document.getElementsByTagName('body')[0]
    body.appendChild(flexContainer)

} 



container.stye.margin = "auto"

