let container = document.querySelector('.container');
let gridSquare = document.createElement('grid-square');
let divTag = document.createElement('div');

divTag.style.background = "red";
divTag.style.height = "10px";
divTag.style.width = "10px";
divTag.style.borderRadius = "2px";

container.appendChild(divTag);

console.log('I am loaded and ready!');