let squares;
const container = document.querySelector('.container');
const fillContainer = document.querySelector('.btn');
const myBoxes = document.querySelectorAll('.searchBoxes');
const colourful = document.querySelector('#colourful');
const black_white = document.querySelector('#black-white');


const firstBox = document.querySelector('.container').lastChild.inner;


let randomVal = () => Math.floor(Math.random() * 256);



function getBoxes(squareAmount, node) {
    for (let i = 0; i < squareAmount; i++) {
        let box = document.createElement('div');
        box.className = "squareBoxes";
        box.addEventListener('click', function() {
            select = box;
            select.style.backgroudColor = 'black';
        });
        node.appendChild(box);
    }
}

function clearBoxes() {
    let boxes = document.querySelectorAll('.squareBoxes')
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].remove();
    }
}


fillContainer.addEventListener('click', function() {
    clearBoxes();
    squares = Number(prompt("How many squares: "));
    squared = squares * squares;
    getBoxes(squared, container);
    container.style.cssText = `grid-template-rows: repeat(${squares}, 1fr);
                                grid-template-columns: repeat(${squares}, 1fr);`;

 /*
    for (let i = 0; i < squares.length; i++) {
      createBox();
      box.className = "squareBoxes";
      box.textContent = i;
      container.appendChild(box);
  }
  */


});


let coloured
function highlight(obj) {
    //coloured = obj.classList.add('colorMe');
    const style1 = window.getComputedStyle(obj);
    console.log(obj.style.backgroundColor);
    console.log(style1.backgroundColor);

    if (style1.backgroundColor == 'rgb(255, 255, 255)') {
        obj.style.backgroundColor = 'rgb(242, 242, 242)';
        console.log(obj.style.backgroundColor);
        return;
    }
    else if (obj.style.backgroundColor == 'rgb(242, 242, 242)') {
        obj.style.backgroundColor = 'rgb(217, 217, 217)';
        return;
    }
    else if (obj.style.backgroundColor == 'rgb(217, 217, 217)') {
        obj.style.backgroundColor = 'rgb(191, 191, 191)';
        return;
    }
    else if (obj.style.backgroundColor == 'rgb(191, 191, 191)') {
        obj.style.backgroundColor = 'rgb(166, 166, 166)';
        return;
    }
    else if (obj.style.backgroundColor == 'rgb(166, 166, 166)') {
        obj.style.backgroundColor = 'rgb(140, 140, 140)';
        return;
    }
    else if (obj.style.backgroundColor == 'rgb(140, 140, 140)') {
        obj.style.backgroundColor = 'rgb(115, 115, 115)';
        return;
    }
    else if (obj.style.backgroundColor == 'rgb(115, 115, 115)') {
        obj.style.backgroundColor = 'rgb(89, 89, 89)';
        return;
    }
    else if (obj.style.backgroundColor == 'rgb(89, 89, 89)') {
        obj.style.backgroundColor = 'rgb(64, 64, 64)';
        return;
    }
    else if (obj.style.backgroundColor == 'rgb(64, 64, 64)') {
        obj.style.backgroundColor = 'rgb(38, 38, 38)';
        return;
    }
    else if (obj.style.backgroundColor == 'rgb(38, 38, 38)') {
        obj.style.backgroundColor = 'rgb(0, 0, 0)';
        return;
    }
}


// random colors highlight
function randomHighlight(obj) {
    obj.style.backgroundColor = `rgb(${randomVal()}, ${randomVal()}, ${randomVal()})`;
    console.log(obj.style.backgroundColor);
}

function colourAll() {
    let mySquares = event.target.closest('div');
    randomHighlight(mySquares);
}

colourful.addEventListener('click', colouredHighlight);
black_white.addEventListener('click', blackHighlight);


function blackHighlight() {
    
    clearBoxes();
    getBoxes(squared, container);
    container.style.cssText = `grid-template-rows: repeat(${squares}, 1fr);
                                grid-template-columns: repeat(${squares}, 1fr);`;
                                
    container.removeEventListener('mouseover', colourAll);

    container.addEventListener('mouseover', function() {
        let mySquares = event.target.closest('div');
        highlight(mySquares);
    
    
    });
}

function colouredHighlight() {
    clearBoxes();
    getBoxes(squared, container);
    container.style.cssText = `grid-template-rows: repeat(${squares}, 1fr);
                                grid-template-columns: repeat(${squares}, 1fr);`;

    container.addEventListener('mouseover', colourAll);
}






/*myBoxes.addEventListener('mouseover', function() {


});
*/

/*
function changeColor() {
let oka = document.querySelectorAll('.searchBoxes');
for (let i = 0; i < oka.length; i++) {
    oka[i].stlye.backgroundColor = 'black';
}



}

const myBoxes = document.querySelectorAll('.searchBoxes');
for (let i = 0; i < myBoxes.length; i++) {
    myBoxes[i].addEventListener('mouseover', changeColor);
    console.log(myBoxes[i]);
}

*/




