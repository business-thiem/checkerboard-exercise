
createTable();



// table 8x8 
function createTable(){
    let rowSize = 8;
    let cellCount = 8;
    let row = ''
    let rowContainer = ''



    let flexContainer = document.createElement('div')
    flexContainer.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    height: 800px;
    background-color:gray;
    `;


    // // count starts with 0
    // let tileEven = document.createElement('div')
    // tileEven.style.cssText = `
    // width:12.5%;
    // height:12.5%;
    // background-color: red
    // `

    // let tileOdd = document.createElement('div')
    // tileOdd.style.cssText = `
    // width:12.5%;
    // height:12.5%;
    // background-color: black
    // `

    


    let bgColor = 'red';
    // let rowEvenOdd = 'even'
    // let tileEvenOdd = 'even'
    let tileColor = 'red'
    

    for(let i = 0; i <= rowSize; i++){
        row = ''
        
        for(let j = 0; j < rowSize; j++){
            let tileElement = `<div style="width: 12.5%; height: 12.5%; background-color: ${bgColor};"></div>`

            //if i is even and j is even, then red, 
            bgColor = (i % 2 === j % 2 ? 'red': 'black')

            row += tileElement
        }

        rowContainer += row;

    }

    // console.log(row)

    // console.log(flexContainer)

    flexContainer.innerHTML = rowContainer

    let body = document.getElementsByTagName('body')
    body[0].append(flexContainer)

    console.log(body[0])
}
