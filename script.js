document.body.style.width = "100%";
document.body.style.height = "100%";

colorArray = ['black','silver','gray','white','maroon','red','purple','fuchsia','green','lime','olive','yellow','navy','blue', 'teal','aqua'];
mouseColor = '';
var parentDiv = document.createElement('div');
parentDiv.setAttribute('id', 'parentDiv');
document.body.appendChild(parentDiv);
var mouseIsPressed = false;
var dimension = prompt('What size board do you want?')
var scaleFactor = 100 / dimension;

console.log('Board size: ' + dimension, 'Scale factor ' + scaleFactor);



function mouseEnter(){
    if (mouseIsPressed) {
        console.log("Pressed and entering")
        // if (mouseColor === '') {
        //     console.log('Select a color')
        // }
        var test = window.event.target
    
    
    if(test.style.backgroundColor === "" || test.style.backgroundColor !== mouseColor) {
        test.style.backgroundColor = mouseColor
    }
    // } else {
    //     test.style.backgroundColor = ''
    // }
    } else {
        console.log('entering');
    }

}

function mouseDown(){
    mouseIsPressed = true;
    console.log('pressed');
}

function mouseUp(){
    mouseIsPressed = false;
}
function alertTest(){
    var currentPixel = window.event.target
    
    
    if(currentPixel.style.backgroundColor === "" || currentPixel.style.backgroundColor !== mouseColor) {
        currentPixel.style.backgroundColor = mouseColor
    } 
}
function colorSelect(){
    console.log(window.event.target.style.backgroundColor);
    mouseColor = window.event.target.style.backgroundColor;
    currentColorText.innerHTML = mouseColor;
    CurentColorBox.backgroundColor = mouseColor;
}



for (var i = 0; i < dimension; i++) {
    
  for (var j = 0; j < dimension; j++) {
    var divName = [];
    divName[0] = i;
    divName[1] = j;
    
    var checker = document.createElement("div");
    checker.setAttribute('id', divName);
    checker.style.height = scaleFactor + "%";
    checker.style.width = scaleFactor + "%";
    checker.style.float = "left";
    checker.style.paddingBottom = scaleFactor + "%";
    checker.style.border = "inset black";
    checker.style.borderWidth="1px 1px"
    

    checker.addEventListener("click", alertTest);
    checker.addEventListener('mouseenter', mouseEnter);
    checker.addEventListener('mousedown', mouseDown);
    checker.addEventListener('mouseup', mouseUp);
    document.getElementById('parentDiv').appendChild(checker);
  }
}


var colorTemplate = document.createElement("footer");
colorTemplate.setAttribute('id', "foot")
document.body.appendChild(colorTemplate);
console.log(colorTemplate);

var colorinner = document.createElement('colorTemplate');
colorinner.innerHTML = 'Color Template:' + '\n';
colorinner.setAttribute('id', 'colortemplate');

document.getElementById('foot').appendChild(colorinner);


// var curentColorBox = document.createElement('CurrentColorBox');
// curentColorBox.setAttribute('id','CurrentColorBox');
// curentColorBox.style.height = "1.0%";
// curentColorBox.style.width = "1.0%";
// curentColorBox.style.float = "left";
// curentColorBox.style.paddingBottom = "1.0%";
// curentColorBox.style.border = "inset black";
// curentColorBox.style.borderWidth="1px 1px"
// curentColorBox.style.backgroundColor = 'black'
// document.getElementById('colortemplate').append(curentColorBox);


var currentColorText = document.createElement('colorText');
currentColorText.innerHTML = 'Current Color' + '\n';
document.getElementById('colortemplate').appendChild(currentColorText);

var currentColorBox = document.createElement('CurrentColorBox');
currentColorBox.setAttribute('id','CurrentColorBox');
currentColorBox.style.height = "1.0%";
currentColorBox.style.width = "1.0%";
currentColorBox.style.float = "right";
currentColorBox.style.paddingBottom = "1.0%";
currentColorBox.style.border = "inset black";
currentColorBox.style.borderWidth="1px 1px"
currentColorBox.style.backgroundColor = ''
document.getElementById('colortemplate').append(currentColorBox);




// var colorText = document.createElement('currentColor');
// colorTemplate.innerHTML = 'CurrentColor';
// document.getElementById('foot').appendChild(colorTemplate);

// var colorTemplateText = document.createElement('currentColor');
// colorTemplateText.innerHTML = 'CurrentColor';
// document.getElementById('foot').appendChild(colorTemplate);


for (var h = 0; h < colorArray.length; h++){
    var colorTempName = [];
    colorTempName[0] = h;
    var colorSwatch = document.createElement('colorSwatch');
    colorSwatch.setAttribute('id', colorTempName);
    colorSwatch.style.height = "5.0%";
    colorSwatch.style.width = "5.0%";
    colorSwatch.style.float = "left";
    colorSwatch.style.paddingBottom = "5.0%";
    colorSwatch.style.border = "inset black";
    colorSwatch.style.borderWidth="3px 3px"
    colorSwatch.style.backgroundColor = colorArray[h];
    colorSwatch.addEventListener("click", colorSelect);
    document.getElementById('foot').appendChild(colorSwatch);
}
