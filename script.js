// document.body.style.width = "100%";
// document.body.style.height = "100%";

var colorArray = ['black','silver','gray','white','maroon','red','purple','fuchsia','green','olive','yellow','navy','blue', 'teal','aqua'];
var mouseColor = '';
var parentDiv = document.createElement('ul');
parentDiv.setAttribute('id', 'parentDiv');

document.body.appendChild(parentDiv);
var mouseIsPressed = false;
var dimension = prompt('What size board do you want?')
var scaleFactor = 100 / dimension;

console.log('Board size: ' + dimension, 'Scale factor ' + scaleFactor);



function mouseEnter(){
    if (mouseIsPressed) {
        console.log("Pressed and entering")
        var test = window.event.target
    
    if(test.style.backgroundColor === "" || test.style.backgroundColor !== mouseColor) {
        test.style.backgroundColor = mouseColor
    }

    } else {
        // console.log('entering');
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
    console.log(currentPixel.id);
    
    if(currentPixel.style.backgroundColor === "" || currentPixel.style.backgroundColor !== mouseColor) {
        currentPixel.style.backgroundColor = mouseColor
    } 
}
function colorSelect(){
    console.log(window.event.target.style.backgroundColor);
    mouseColor = window.event.target.style.backgroundColor;
    currentColorText.innerHTML = mouseColor;
    currentColorBox.style.backgroundColor = mouseColor;
    
}
function specificColor(){
    console.log(document.getElementById("colorChoice").value);
    var specifcSelect = document.getElementById('colorChoice')
    specifcSelect.style.backgroundColor = specifcSelect.value;
    mouseColor = specifcSelect.style.backgroundColor
    

    
}

function reset(){
    document.getElementsByTagName("UL")[0].innerHTML = "";
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
      
}
function save(){
var saveArray = [];
var tempArr = [];
saveArray = document.getElementsByTagName("DIV")
var arr = [].slice.call(saveArray);
for(var e = 0; e < arr.length; e++){
    
    tempArr.push((arr[e].style.backgroundColor));
};
console.log(tempArr);

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
currentColorBox.style.borderRadius = "50%"
document.getElementById('colortemplate').append(currentColorBox);







for (var h = 0; h < colorArray.length; h++){
    var colorTempName = [];
    colorTempName[0] = h;
    var colorSwatch = document.createElement('colorSwatch');
    colorSwatch.setAttribute('id', colorTempName);
    colorSwatch.style.height = "2.5%";
    colorSwatch.style.width = "2.5%";
    colorSwatch.style.float = "left";
    colorSwatch.style.paddingBottom = "2.5%";
    colorSwatch.style.border = "inset black";
    colorSwatch.style.borderWidth="3px 3px"
    colorSwatch.style.borderRadius = "50%"
    colorSwatch.style.backgroundColor = colorArray[h];
    colorSwatch.addEventListener("click", colorSelect);
    document.getElementById('foot').appendChild(colorSwatch);
}

var userColor = document.createElement('input');
userColor.setAttribute('id', 'colorChoice');
userColor.style.height = "5.0%";
userColor.style.width = "5.0%";
userColor.style.float = "left";
userColor.style.paddingBottom = "5.0%";
userColor.style.border = "inset black";
userColor.style.borderWidth="3px 3px"
userColor.style.borderRadius = "50%"
userColor.setAttribute('type', 'color');
userColor.addEventListener("change", specificColor);
document.getElementById('foot').appendChild(userColor);


var resolution = (20 * dimension) + (dimension * 2)
document.getElementById('parentDiv').style.maxWidth = resolution + 'px'
document.getElementById('parentDiv').style.maxHeight = resolution + 'px'
console.log(document.getElementById('parentDiv').style.maxHeight);

var resetButton = document.createElement('button');
resetButton.setAttribute('id', 'reset');
resetButton.style.height = "2.0%";
resetButton.style.width = "5.0%";
resetButton.style.float = "left";
resetButton.style.paddingBottom = "5.0%";
resetButton.style.border = "inset black";
resetButton.style.borderWidth="3px 3px"

resetButton.innerHTML = 'RESET'
resetButton.addEventListener("click", reset);
document.getElementById('foot').appendChild(resetButton);





var resetButton = document.createElement('button');
resetButton.setAttribute('id', 'save');
resetButton.style.height = "2.0%";
resetButton.style.width = "5.0%";
resetButton.style.float = "left";
resetButton.style.paddingBottom = "5.0%";
resetButton.style.border = "inset black";
resetButton.style.borderWidth="3px 3px"

resetButton.innerHTML = 'SAVE'
resetButton.addEventListener("click", save);
document.getElementById('foot').appendChild(resetButton);



// var saveButtton = document.createElement('buttons');
// saveButton.setAttribute('id', 'save');
// saveButton.style.height = "2.0%";
// saveButton.style.width = "5.0%";
// saveButton.style.float = "left";
// saveButton.style.paddingBottom = "5.0%";
// saveButton.style.border = "inset black";
// saveButton.style.borderWidth="3px 3px"
// saveButton.innerHTML = 'SAVE'
// saveButton.addEventListener("click", save);
// document.getElementById('foot').appendChild(saveButton);


// var saveArray = [];
// saveArray = document.getElementsByTagName("DIV")
// var arr = [].slice.call(saveArray);
// for(var e = 0; e < arr.length; e++){
//     console.log(arr[e].style.backgroundColor);
// };

