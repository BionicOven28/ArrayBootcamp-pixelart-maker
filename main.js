// Grid stuff
let divTag = document.createElement('div');
let container = document.querySelector('.grid-container');

for (let r = 1; r < 8; r++) { // r=rows
		let row = document.createElement('div'); // creates the row
    row.classList.add('row');
 		container.appendChild(row);
    console.log(`The rows work correctly.`);
    	for (let c = 0; c < 8; c++) { // c=columns
      	let cell = document.createElement('div'); // creates the cell
        cell.classList.add('grid-square');
        row.appendChild(cell);
        console.log(`The cells work correctly.`);
      }
}