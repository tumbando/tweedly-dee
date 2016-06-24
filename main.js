//have display show digits being entered, being able to input more than just one digit.
//when user clicks on operator button, store the first input value
//after user clicks oprator button, clear display, don't store second value until user clicks equals
//run appropritae function when user clicks equals
//clear display and show result
//calculate with correct order of operations

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
var subtract = document.querySelector('#subtract');
var add = document.querySelector('#add');
var equals = document.querySelector('#equals');
var clear = document.querySelector('#clear');


zero.addEventListener('click', function (){
  document.querySelector('output').innerHTML+=0;
});

one.addEventListener('click', function () {
  document.querySelector('output').innerHTML+=1;
});

two.addEventListener('click', function () {
  document.querySelector('output').innerHTML+=2;
});

three.addEventListener('click', function () {
  document.querySelector('output').innerHTML+=3;
});

four.addEventListener('click', function () {
  document.querySelector('output').innerHTML+=4;
});

five.addEventListener('click', function () {
  document.querySelector('output').innerHTML+=5;
});

six.addEventListener('click', function () {
  document.querySelector('output').innerHTML+=6;
});

seven.addEventListener('click', function () {
  document.querySelector('output').innerHTML+=7;
});

eight.addEventListener('click', function () {
  document.querySelector('output').innerHTML+=8;
});

nine.addEventListener('click', function () {
  document.querySelector('output').innerHTML+=9;
});

decimal.addEventListener('click', function () {
  document.querySelector('output').innerHTML+='.';
});

clear.addEventListener('click', function () {
  document.querySelector('output').innerHTML='';
});

add.addEventListener('click', function () {
  var firstInt = document.querySelector('.result').innerHTML;
  document.querySelector('output').innerHTML='';
    equals.addEventListener('click', function (){
    var secondInt = document.querySelector('.result').innerHTML;
    document.querySelector('output').innerHTML=Number(firstInt) + Number(secondInt);
  });
});

subtract.addEventListener('click', function () {
  var firstInt = document.querySelector('.result').innerHTML;
  document.querySelector('output').innerHTML='';
    equals.addEventListener('click', function (){
    var secondInt = document.querySelector('.result').innerHTML;
    document.querySelector('output').innerHTML=Number(firstInt) - Number(secondInt);
  });
});

multiply.addEventListener('click', function () {
  var firstInt = document.querySelector('.result').innerHTML;
  document.querySelector('output').innerHTML='';
    equals.addEventListener('click', function (){
    var secondInt = document.querySelector('.result').innerHTML;
    document.querySelector('output').innerHTML=Number(firstInt) * Number(secondInt);
  });
});

divide.addEventListener('click', function () {
  var firstInt = document.querySelector('.result').innerHTML;
  document.querySelector('output').innerHTML='';
    equals.addEventListener('click', function (){
    var secondInt = document.querySelector('.result').innerHTML;
    document.querySelector('output').innerHTML=Number(firstInt) / Number(secondInt);
  });
});

percent.addEventListener('click', function (){
  var int = document.querySelector('.result').innerHTML;
  document.querySelector('output').innerHTML=Number(int) / 100;

});
