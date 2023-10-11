let body = document.getElementsByTagName('body')[0]

createContainer()


function makeGradient(){
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
    let squaresContainer = body.getElementsByTagName('div')[0]
    let squares = squaresContainer.getElementsByTagName('div')
    console.log(squares)

    for(let index = 0; index < squares.length; index++){
        let row = Math.floor(index/8) //determines the current row
        let col = index
        if(col % 2 === 0 && row % 2 === 0){
            squares[index].style.backgroundColor = 'red'
        } else if(col % 2 !== 0 && row % 2 === 0) {
            squares[index].style.backgroundColor = 'black'
        } else if(col % 2 === 0 && row % 2 !== 0) {
            squares[index].style.backgroundColor = 'black'
        } else if(col % 2 !== 0 && row % 2 !== 0) {
            squares[index].style.backgroundColor = 'red'
        }
    }

    //iterate thru element and set color based on column and row
}

function makeRandomColor(){
    let squaresContainer = body.getElementsByTagName('div')[0]
    let squares = squaresContainer.getElementsByTagName('div')

    let R,G,B = 0;

    for(const square of squares){
        R = getRandomColorValue();
        G = getRandomColorValue();
        B = getRandomColorValue();
        square.style.backgroundColor = `rgb(${R},${G},${B})`
    }

}

function getRandomColorValue(){
    return Math.floor(Math.random() * 256)
}

function makeGraident(){
    makeCheckerBoardColors(); //piggy backing off checkerboard color values
    let squaresContainer = body.getElementsByTagName('div')[0]
    let squares = squaresContainer.getElementsByTagName('div')

    let R = 255;
    let G = 0;
    let B = 255;

    // myDiv.style.backgroundColor

    for(let index = 0; index < squares.length; index++){
        let colorDiffA = Math.floor((index*9)/3)
        let colorDiffB = Math.floor((index*3)/5)
        // let colorDiff = (index*4)
        // console.log(colorDiff)
        if(squares[index].style.backgroundColor === 'red'){
            squares[index].style.backgroundColor = `rgb(${R-colorDiffA},${G+colorDiffA},${B-colorDiffA})`
        } else{
            squares[index].style.backgroundColor = `rgb(${R-colorDiffB},${G+colorDiffB},${B-colorDiffB})`
        }
    }
}

function makeFlashingColors(){
    let squaresContainer = body.getElementsByTagName('div')[0]
    let squares = squaresContainer.getElementsByTagName('div')

    let styleElement = document.createElement('style')

    let cssClassRules = `

    .rainbowA{
        animation: rainbow 6s linear infinite;
    }
    .rainbowB{
        animation: rainbow 8s linear infinite;
    }
    .rainbowC{
        animation: rainbow 10s linear infinite;
    }
    @keyframes rainbow {
        0% { background: red; }
        14% { background: orange; }
        28% { background: yellow; }
        42% { background: green; }
        57% { background: blue; }
        71% { background: indigo; }
        85% { background: violet; }
        100% { background: red; }
      }
    `

    styleElement.appendChild(document.createTextNode(cssClassRules))
    document.head.appendChild(styleElement);
    
    let randomIndexArr = [];
    let randomIndex;

    for(let index = 0; index < squares.length; index++){
        // let row = Math.floor(index/8) //determines the current row
        randomIndex = Math.floor(Math.random() * 65)
        if(!randomIndexArr.includes(randomIndex)){
            squares[index].classList.add('rainbowA')
            squares[index].classList.remove('rainbowB');
            randomIndexArr.unshift(randomIndex)
        }else{
            squares[index].classList.add('rainbowB')
            squares[index].classList.remove('rainbowA');
            randomIndexArr.unshift(randomIndex)
        }
    }

    

}


