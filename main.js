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
    let colorsArr = ['#130912', '#3e1c33', '#602749', '#b14623', '#f6921d', '#73de49', '#62a348', '#3b6b4f', '#43394f', '#1d1c1f']
  
   // function selectColor() {
  
    //}
    
    //colorBtn.addEventListener('click', function() {
    //	let colorIndicator = document.querySelector('.current-color');
      //selectedColor = colorBtn.value;
      //colorIndicator.style.background = selectedColor;
     // console.log(`${selectedColor} is the current color.`);
     // });
   // }
  
    // to return one value of an array  arrayClassArr.indexOf('name') inside brackets
    // arrayClassArr.forEach(function(name))
  
    function addEventListenersToGrid() {
      let allCells = document.querySelectorAll('.cell');
  
      for (let p = 0; p < allCells.length; p++) { // p
        let cell = allCells[p];
  
        cell.addEventListener('click', function() {
          cell.style.background = 'black';
        });
      }
    }
  
  
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
    }
    
    startup() // everything you want to load at the start of the page
  
  })();