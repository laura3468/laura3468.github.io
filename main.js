var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/first.png') {
      myImage.setAttribute ('src','images/second.png');
    } else {
      myImage.setAttribute ('src','images/first.png');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent =  myName + '''s Recipe Box';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent =  storedName + 's Recipe Box';
}

myButton.onclick = function() {
  setUserName();
}