let divTag = document.createElement('div');
let container = document.querySelector('.container');

divTag.style.background = "red";
divTag.style.height = "10px";
divTag.style.width = "10px";

for (let i = 0; i < 100; i++) {
 	container.appendChild(divTag);
 	divTag.classList.add('gridSquare');
    console.log(`I am running correctly.`)
	}