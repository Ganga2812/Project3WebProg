const canvas = document.getElementById('main');
const context = canvas.getContext("2d");
const size = 500;
const scale = 5;

let cells;

state();
startingPix();
displayCells();
//setInterval(function() { rules(1); }, 100);
//rules(23);

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
            /*
            if(Math.random() < .5){
                cells[x][y] = true;
            }
            */

           /*
            cells[25][25] = true;
            cells[25][26] = true;
            cells[26][25] = true;
            cells[26][26] = true;
            */

            /*
            cells[25][25] = true;
            cells[26][25] = true;
            cells[27][25] = true;
            */

            /*
            cells[25][25] = true;
            cells[25][26] = true;
            cells[26][25] = true;
            cells[27][28] = true;
            cells[28][27] = true;
            cells[28][28] = true;
            */

            cells[50][50] = true;
            cells[49][52] = true;
            cells[50][52] = true;
            cells[51][51] = true;
            cells[51][52] = true;

        }
    }
}

// We read off of the 'cells' 2d array and fill the cells as black if it's true
function displayCells(){
    context.fillStyle = 'white';
    context.fillRect(0,0, size/scale, size/scale);
    context.fillStyle = 'black';
    for(let y=0; y<size/scale; y++){
        for(let x=0; x<size/scale; x++){
            if(cells[x][y] == true){
                context.fillRect(x,y,1,1);
            }
        }
    }
}

function rules(num){
    while(num > 0){
        let tempCells = storageArrays();
        for(let y=0; y<size/scale; y++){
            for(let x=0; x<size/scale; x++){
                const neighbors = neighborsCount(x,y);
                if(cells[x][y] == true && neighbors < 2){
                    tempCells[x][y] = false;
                }
                if(cells[x][y] == true && neighbors >= 2 && neighbors <=3){
                    tempCells[x][y] = true;
                }
                else if(cells[x][y] == false && neighbors == 3){
                    tempCells[x][y] = true;
                }
            }
        }
        cells = tempCells;
        num--;
    }
    displayCells();
}

// get number of neighbors for a cell
function neighborsCount(x,y){
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