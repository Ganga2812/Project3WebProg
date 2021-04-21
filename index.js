const canvas = document.getElementById('main');
const context = canvas.getContext("2d");
const size = 500;
const scale = 5;
var intervalID;
var generations = 0;
let cells;

state();
displayCells();


//rules(23);

function state(){
    canvas.width = size;
    canvas.height = size;
    context.scale(scale, scale);
    context.fillStyle = "black";
    cells = storageArrays();
    canvas.addEventListener('mousedown', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        if(cells[Math.floor(mousePos.x/5)][Math.floor(mousePos.y/5)]){
            cells[Math.floor(mousePos.x/5)][Math.floor(mousePos.y/5)] = false;
        }
        else{
            cells[Math.floor(mousePos.x/5)][Math.floor(mousePos.y/5)] = true;
        }
        
        displayCells();
      }, false);
      
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
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
function startingPix(type){
    for(let y=0; y<size/scale; y++){
        for(let x=0; x<size/scale; x++){

            switch(type) {
                case 1:
                    cells[25][25] = true;
                    cells[25][26] = true;
                    cells[26][25] = true;
                    cells[26][26] = true;
                    break;
                case 2:
                    cells[25][25] = true;
                    cells[26][25] = true;
                    cells[27][25] = true;
                    break;
                case 3:
                    cells[25][25] = true;
                    cells[25][26] = true;
                    cells[26][25] = true;
                    cells[27][28] = true;
                    cells[28][27] = true;
                    cells[28][28] = true;
                    break;
                case 4:
                    cells[50][50] = true;
                    cells[49][52] = true;
                    cells[50][52] = true;
                    cells[51][51] = true;
                    cells[51][52] = true;
                    break;
                default:
                    if(Math.random() < .5) {
                        cells[x][y] = true;
                    }
            }
        }
    }
}

// We read off of the 'cells' 2d array and fill the cells as black if it's true
function displayCells(){
    context.fillStyle = 'lightblue';
    context.fillRect(0,0, size/scale, size/scale);
    context.fillStyle = 'red';
    for(let y=0; y<size/scale; y++){
        for(let x=0; x<size/scale; x++){
            if(cells[x][y] == true){
                context.fillRect(x,y,1,1);
            }
        }
    }
}

function changeCell(x,y){
    if(cells[x][y] == true){
        cells[x][y] == false;
    }
    else{
        cells[x][y] == true;
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
        generations++;
        console.log(generations);
        document.getElementById("generation").style.color = "red";
        document.getElementById("generation").innerHTML = "Generation: " + generations;
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

function clearButton(){
    try{
        stopButton();
    } catch(err) {

    }
    cells = storageArrays();
    generations = 0;
    document.getElementById("generation").innerHTML = "Generation: " + generations;
    displayCells();
}

function startButton(){
    intervalID = setInterval(function() { rules(1); }, 50);
}

function stopButton(){
    clearInterval(intervalID);
    displayCells();
}

function randButton(){
    try{
        stopButton();
    } catch(err) {
    }
    clearButton();
    startingPix(7);
    generations = 0;
    document.getElementById("generation").innerHTML = "Generation: " + generations;
    displayCells();
}

function pattern1Button(){
    try{
        stopButton();
    } catch(err) {
    }
    clearButton();
    startingPix(1);
    generations = 0;
    document.getElementById("generation").innerHTML = "Generation: " + generations;
    displayCells();
}

function pattern2Button(){
    try{
        stopButton();
    } catch(err) {
    }
    clearButton();
    startingPix(2);
    generations = 0;
    document.getElementById("generation").innerHTML = "Generation: " + generations;
    displayCells();
}

function pattern3Button(){
    try{
        stopButton();
    } catch(err) {
    }
    clearButton();
    startingPix(3);
    generations = 0;
    document.getElementById("generation").innerHTML = "Generation: " + generations;
    displayCells();
}

function pattern4Button(){
    try{
        stopButton();
    } catch(err) {

    }
    clearButton();
    startingPix(4);
    generations = 0;
    document.getElementById("generation").innerHTML = "Generation: " + generations;
    displayCells();
}

function increment1Button(){
    try{
        stopButton();
    } catch(err) {

    }
    rules(1);
}
function increment23Button(){
    try{
        stopButton();
    } catch(err) {

    }
    rules(23);
}