// base + re-size stuff
let container = document.querySelector('.grid-container');



for (let r = 0; r < 30; r++) { // r=rows // this is grid HEIGHT
		let row = document.createElement('div');
    row.className = "grid-row"; 
    	for (let c = 0; c < 30; c++) { // c=columns // this is grid WIDTH
      	let columns = document.createElement('div');
        columns.className = "cell"; 
        row.appendChild(columns);
      }
      container.appendChild(row);
}

// Grid changing colors stuff

// to return one value of an array  arrayClassArr.indexOf('name') inside brackets
// arrayClassArr.forEach(function(name)) 

// Color palette stuff
//let colorPalette = document.querySelector('.color-palette');
//let paletteArr = [ '#000', '#A70060', '#7400A7', '#0014A7', ];

//function grabColor () 
	//newColor = 
//



//function selectedPalette = paletteArr {}

//document.getElementById('cp-btn-a').addEventListener("click", function() {
	
//})



// upload an img button stuff
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