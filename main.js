//(function() {
  // BASE AND RE-SIZE GRID VIA USER INPUT
  let container = document.querySelector('.grid-container');

  function createGrid(colorArray) {
    container.innerHTML = '';
    let columnsIndex = 0;
    for (let r = 0; r < document.querySelector('.rvalue').value; r++) { // r=rows // HEIGHT
      let row = document.createElement('div');
      row.className = "grid-row";
      for (let c = 0; c < document.querySelector('.cvalue').value; c++) { // c=columns // WIDTH
        let columns = document.createElement('div');
        columns.className = "cell";
        if (colorArray) {
          let saveBackgroundColor = colorArray[columnsIndex];
          columns.style.background = saveBackgroundColor;
        }
        row.appendChild(columns);
        columnsIndex++;
      }
      container.appendChild(row);
    }
    console.log(`Grid created`);
    addEventListenersToGrid();
  }
  let entBtn = document.querySelector('.input-enter');
  entBtn.addEventListener('click', createGrid);

  // COLOR PALETTE WIRE-UP ie click and make colors happen
  let selectedColor;
  let colorPalette = document.querySelector('.color-palette');
  let colors = ['#130912', '#1d1c1f', '#3e1c33', '#43394f', '#602749', '#3b6b4f', '#b14623', '#62a348', '#f6921d', '#73de49'];

  function createPalette() {
  let colorIndicator = document.querySelector('.current-color-display');
    for (let i = 0; i < colors.length; i++) { // j
      let cpBtn = document.createElement('button');
      let currentColor = colors[i];
      cpBtn.classList.add(`cp-btn`);
      cpBtn.value = currentColor;
      cpBtn.style.backgroundColor = currentColor;

      colorPalette.appendChild(cpBtn);

      cpBtn.addEventListener('click', function(event) {
        selectedColor = cpBtn.style.backgroundColor;
        colorIndicator.style.background = selectedColor
        console.log(selectedColor);
      });
    }
  }

  function addEventListenersToGrid() {
    let allCells = document.querySelectorAll('.cell');

    for (let p = 0; p < allCells.length; p++) { // p
      let cell = allCells[p];

      cell.addEventListener('click', function() {
        cell.style.background = selectedColor;
      });
    }
  }

  // CLEAR BUTTON
  let clearBtn = document.querySelector('.clear');

  function clearSquaresColors() {
    let allCells = document.querySelectorAll('.cell');

    for (let x = 0; x < allCells.length; x++) { // x
      let square = allCells[x];
      square.style.background = 'white';
    }
  }

  clearBtn.addEventListener('click', clearSquaresColors);

  // SAVE & LOAD BUTTON
	function initializeButtonEvents() {
  	let saveButton = document.querySelector('.save-project');
  	let loadButton = document.querySelector('.load-project');
  
  saveButton.addEventListener('click', (event) => {
    let allCells = document.querySelectorAll('.cell');
    let storedCellsArr = [];
    
    allCells.forEach(function(domElement, index) {
      storedCellsArr.push(domElement.style.backgroundColor);
    });
    console.log('Artwork saved');
    
    localStorage.setItem('lastSavedDesign', JSON.stringify(storedCellsArr));
	});
  
  loadButton.addEventListener('click', (event) => {
  	let allCells = document.querySelectorAll('.cell');
    
    allCells.forEach((domElement) => {
    	domElement.remove();
  });
  console.log('Artwork loaded');
  
  	let savedDesignSquares = JSON.parse(localStorage.getItem('lastSavedDesign'));
    
    createGrid(savedDesignSquares);
   });
  }

  function startup() {
    createGrid()
    createPalette()
    initializeButtonEvents()
    addEventListenersToGrid()
    clearSquaresColors()
  }

  startup() // everything you want to load at the start of the page

//})();