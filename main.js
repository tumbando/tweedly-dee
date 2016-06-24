//have display show digits being entered, being able to input more than just one digit.
  //Maybe enter them as strings, so you can click in 11, vs. 1 and then a 1 to replace it
//don't store the first input value until user clicks on operation button
//after user clicks oprator button, clear display, don't store second value until user clicks equals
//run appropritae function when user clicks equals
//clear display and show result

var zero = document.querySelector('#zero');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var divide = document.querySelector('#divide');
var multiply = document.querySelector('#multiply');
var subtract = document.querySelector('#sutract');
var divide = document.querySelector('#divide');
var equals = document.querySelector('#equals');


zero.addEventListener('click', function (){
  document.querySelector('output').innerHTML+=0;
});

one.addEventListener('click', function () {
  document.querySelector('output').innerHTML+=1;
});


var add = function (){};
var subract = function (){};
var multiply = function (){};
var divide = function (){};
