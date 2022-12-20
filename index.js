
let container = document.getElementById("container");
let x = 25;
let y = 25;

const rows = 25;
const cols = 25;
const startingArray = [];

for (let i = 0; i < y; i++) {
    startingArray[i] = [];
    for (let j = 0; j < y; j++) {
        startingArray[i][j] = Math.random() < 0.5;
    }
}    
let goForwardBoard = startingArray;    

function makeEmptyBoard(x, y) {
    let arr1 = new Array(x);
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = new Array(y);
    }
    return arr1;
}


//Fill method 1, random
function randomFill() {
    rando = Math.random();
    if(rando < 0.5)
        rando = false;
    else
        rando = true;
    return rando;
}
//Fill method 2, alternating
function alternateBools(bools) {
    return alternateBools.state = !alternateBools.state;
}


function fillBoardWithBools() {  
    board = makeEmptyBoard(x, y);          
    for (let i = 0; i < x; i++) {
        for(let j = 0; j < y; j++) {
            board[i][j] = alternateBools();
        }
    }
    return board;
}


function fillBoardWithRandom() { 
    randomBoard = makeEmptyBoard(x, y);           
    for (let i = 0; i < x; i++) {
        for(let j = 0; j < y; j++) {
            randomBoard[i][j] = randomFill();
        }
    }
    return randomBoard;
}



function createGridFromBoard() {
    container.innerHTML = "";
    for (let i = 0; i < board.length; i++) {
        let row = document.createElement("div");
        for (let j = 0; j < board[i].length; j++) {
            let block = document.createElement("div");
            block.style.display = "inline-block";
            block.style.width = "25px";
            block.style.height = "25px";
            if(board[i][j] === true) {
                block.style.background = "gray";
            } else {
                block.style.background = "white";
            }
            row.appendChild(block);
        }
    document.getElementById("container").appendChild(row);
    }
}


function createGridFromRandomBoard() {
    fillBoardWithRandom();
    for (let i = 0; i < randomBoard.length; i++) {
        let row = document.createElement("div");
        for (let j = 0; j < randomBoard[i].length; j++) {
            let block = document.createElement("div");
            block.style.display = "inline-block";
            block.style.width = "25px";
            block.style.height = "25px";
            if(randomBoard[i][j] === true) {
                block.style.background = "gray";
            } else {
                block.style.background = "white";
            }
            row.append(block);
        }
    document.getElementById("container").appendChild(row);
    }
}

function stepForward() {
    //fillBoardWithRandom();
    for (let i = 0; i < startingArray.length; i++) {
        let row = document.createElement("div");
        for (let j = 0; j < startingArray[i].length; j++) {
            let block = document.createElement("div");
            block.style.display = "inline-block";
            block.style.width = "25px";
            block.style.height = "25px";
            if(startingArray[i][j] === true) {
                block.style.background = "gray";
            } else {
                block.style.background = "white";
            }
            row.append(block);
        }
    document.getElementById("container").appendChild(row);
    }
}


function goForward() {
    let count = 0;
    if(count < 1) {
        for (let i = 0; i < board.length; i++) {
        let row = document.createElement("div");
        for (let j = 0; j < board[i].length; j++) {
            let block = document.createElement("div");
            block.style.display = "inline-block";
            block.style.width = "25px";
            block.style.height = "25px";
            if(startingArray[i][j] === true) {
                block.style.background = "gray";
            } else {
                block.style.background = "white";
            }
            row.append(block);
        }
    document.getElementById("container").appendChild(row);
    count ++;
    }}
    container.innerText = "";
    goForwardBoard = stepBoard(goForwardBoard);

    for (let i = 0; i < board.length; i++) {
        let row = document.createElement("div");
        for (let j = 0; j < board[i].length; j++) {
            let block = document.createElement("div");
            block.style.display = "inline-block";
            block.style.width = "25px";
            block.style.height = "25px";
            if(goForwardBoard[i][j] === true) {
                block.style.background = "gray";
            } else {
                block.style.background = "white";
            }
            row.append(block);
        }
    document.getElementById("container").appendChild(row);
    }
}

    
function stepBoard(arr1) {
    //returns sum of neighbors at each index of entered array[i][j]
    let nextBoard = [];
    for (let i = 0; i < arr1.length; i++) {
        let insideArr = [];
        let col = arr1[i].length;
        nextBoard.push(insideArr);
        for (let j = 0; j < col; j++) {
            let sum = 0;
            if (arr1[i-1] && arr1[i-1][j-1]) 
                sum++;
            if (arr1[i-1] && arr1[i-1][j]) 
                sum++;
            if (arr1[i-1] && arr1[i-1][j+1]) 
                sum++;
            if (arr1[i] && arr1[i][j-1]) 
                sum++;
            if (arr1[i] && arr1[i][j+1]) 
                sum++;
            if (arr1[i+1] && arr1[i+1][j-1]) 
                sum++;      
            if (arr1[i+1] && arr1[i+1][j]) 
                sum++;       
            if (arr1[i+1] && arr1[i+1][j+1]) 
                sum++;
            insideArr.push(sum);
        }
    }
    
    //applies conways game rules based on the sum of nextBoard neighbors to return the final array    
    finalArr = [];
    for(let i = 0; i < nextBoard.length; i++) {
        let insideFinal = [];
        let col = nextBoard[i].length;
        finalArr.push(insideFinal);
        for(let j = 0; j < col; j++) {
            if (arr1[i][j] === true && nextBoard[i][j] === (2)) { 
                insideFinal.push(true);
            } else if (arr1[i][j] === true && nextBoard[i][j] === (3)) { 
                insideFinal.push(true);
            } else if(arr1[i][j] === false && nextBoard[i][j] === 3) {
                insideFinal.push(true);
            } else {
                insideFinal.push(false);
            }
        }       
    }
    return finalArr;
}



fillBoardWithBools(); 
createGridFromBoard();

function work() {
    container.innerText = "";
    goForward(goForwardBoard);
}
let intervalId;

function stepButton() {
    if (container.childNodes.length === 0) {
    stepForward();
    } else {
        if (container.childNodes.length === 0) {
    goForward();
    } else {
        container.innerText = "";
        goForward(goForwardBoard);
    }  
    }
}
function goButton(whichArray) {
    intervalId = setInterval(work, 100);
            
}
function pauseButton() {
    clearInterval(intervalId);    
}
function resetButton() {
    location.reload();
    board = startingArray;
    createGridFromBoard()
    clearInterval(intervalId);            
}
function randomButton() {
    location.reload();
    if (container.childNodes.length === 0) {
    createGridFromRandomBoard()
    clearInterval(intervalId);
    } else {
        container.innerText = "";
        createGridFromRandomBoard()
        clearInterval(intervalId);
    }
}
