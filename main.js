// Base Grid stuff
let container = document.querySelector('.grid-container');

for (let r = 0; r < 10; r++) { // r=rows
		let row = document.createElement('div');
    row.className = "grid-row"; 
    	for (let c = 0; c < 10; c++) { // c=columns
      	let columns = document.createElement('div');
        columns.className = "cell"; 
        row.appendChild(columns);
      }
      container.appendChild(row);
}

// Grid changing colors stuff

// Color palette stuff