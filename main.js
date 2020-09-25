(function() {
  // BASE AND RE-SIZE GRID VIA USER INPUT
  let container = document.querySelector('.grid-container');

  function createGrid() {
    container.innerHTML = '';
    for (let r = 0; r < document.querySelector('.rvalue').value; r++) { // r=rows // HEIGHT
      let row = document.createElement('div');
      row.className = "grid-row";
      for (let c = 0; c < document.querySelector('.cvalue').value; c++) { // c=columns // WIDTH
        let columns = document.createElement('div');
        columns.className = "cell";
        row.appendChild(columns);
      }
      container.appendChild(row);
    }
    addEventListenersToGrid();
  }
  let entBtn = document.querySelector('.input-enter');
  entBtn.addEventListener('click', createGrid);

  // COLOR PALETTE WIRE-UP ie click and make colors happen
  let selectedColor;
  let colorPalette = document.querySelector('.color-palette');
  let colors = ['#130912', '#1d1c1f', '#3e1c33', '#43394f', '#602749', '#3b6b4f', '#b14623', '#62a348', '#f6921d', '#73de49'];

  function createPalette() {
    for (let i = 0; i < colors.length; i++) { // j
      let cpBtn = document.createElement('button');
      let currentColor = colors[i];
      cpBtn.classList.add(`cp-btn`);
      cpBtn.value = currentColor;
      cpBtn.style.backgroundColor = currentColor;

      colorPalette.appendChild(cpBtn);

      cpBtn.addEventListener('click', function(event) {
        selectedColor = cpBtn.style.backgroundColor;
        console.log(selectedColor);
      });
    }
  }

  function addEventListenersToGrid() {
    let allCells = document.querySelectorAll('.cell');

    for (let p = 0; p < allCells.length; p++) { // p
      let cell = allCells[p];

      cell.addEventListener('click', function() {
        cell.style.background = 'black';
      });
    }
  }

  // to return one value of an array  arrayClassArr.indexOf('name') inside brackets
  // arrayClassArr.forEach(function(name))


  // mousedown mouseup mouseleave mouseover onclick
  // click event on the palette
  // click = select color



  //// BOTTOM ROW OF BUTTONS WIRE UP ////
  // ROW & COLUMN ENTER VALUES BUTTON
  //let enterBtn = document.querySelector('.input-enter');

  //function userInputEnter() {
  //let userInputApply = document.querySelector('.')
  //}



  // UNDO BUTTON
  //let undoBtn = document.querySelector('.undo');


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

  // SAVE BUTTON
  // LOAD BUTTON
  // UPLOAD AN IMG STUFF
  //let imageBox = document.querySelector('.grid-container');
  // fetch('https://picsum.photos/300/300', {
  //method: 'GET',
  //headers: {
  //'Accept': 'application/json'
  //}
  //})
  //.then ( function(response) {
  //let imgElement = document.createElement('img');
  //imgElement.src = response.url;
  //imageBox.appendChild(imgElement);
  //}
  //)

  function startup() {
    createGrid()
    createPalette()
  }

  startup() // everything you want to load at the start of the page

})();
