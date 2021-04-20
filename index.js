const canvas = document.getElementById('main');
const context = canvas.getContext("2d");
const size = 500;
const scale = 5;

let cells;

state();
startingPix();
displayCells();
console.log(neighbors(1,1));

function state(){
    canvas.width = size;
    canvas.height = size;
    context.scale(scale, scale);
    context.fillStyle = "black";
    cells = storageArrays();
}

// Helper function
// This creates a 2d array for each cell on the screen
// False if white, black if true
function storageArrays(){
    let rows = [];
    for(let x=0; x<size/scale; x++){
        let cols = [];
        for(let y=0; y<size/scale; y++){
            cols.push(false);
        }
        rows.push(cols);
    }
    return rows;
}

// We have random starting positions
// Random cells are set to true aka black color
function startingPix(){
    for(let y=0; y<size/scale; y++){
        for(let x=0; x<size/scale; x++){
            if(Math.random() < .5){
                cells[x][y] = true;
            }
        }
    }
}

// We read off of the 'cells' 2d array and fill the cells as black if it's true
function displayCells(){
    for(let y=0; y<size/scale; y++){
        for(let x=0; x<size/scale; x++){
            if(cells[x][y] == true){
                context.fillRect(x,y,1,1);
            }
        }
    }
}

function rules(){
    let tempCells = storageArrays();
    for(let y=0; y<size/scale; y++){
        for(let x=0; x<size/scale; x++){
            
        }
    }
}

function neighbors(x,y){
    let counter = 0;
    for(let y1=-1; y1<2; y1++){
        for(let x1=-1; x1<2; x1++){
            if(x + x1 < 0 || x + x1 > size/scale-1){
                continue;
            }
            if(y + y1 < 0 || y + y1 > size/scale-1){
                continue;
            }
            if(y1 == 0 && x1==0){
                continue;
            }
            if(cells[x + x1][y + y1] == true){
                counter++;
            }
        }
    }
    return counter;
}