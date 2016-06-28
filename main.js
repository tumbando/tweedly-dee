//have display show digits being entered, being able to input more than just one digit.
//when user clicks on operator button, store the first input value
//after user clicks oprator button, clear display, don't store second value until user clicks equals
//run appropritae function when user clicks equals
//clear display and show result
//calculate with correct order of operations
var firstInt;
var secondInt;
var operator;


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
var negative = document.querySelector('#negative');

zero.addEventListener('click', function() {
    document.querySelector('.display').innerHTML += 0;
});

one.addEventListener('click', function() {
    document.querySelector('.display').innerHTML += 1;
});

two.addEventListener('click', function() {
    document.querySelector('.display').innerHTML += 2;
});

three.addEventListener('click', function() {
    document.querySelector('.display').innerHTML += 3;
});

four.addEventListener('click', function() {
    document.querySelector('.display').innerHTML += 4;
});

five.addEventListener('click', function() {
    document.querySelector('.display').innerHTML += 5;
});

six.addEventListener('click', function() {
    document.querySelector('.display').innerHTML += 6;
});

seven.addEventListener('click', function() {
    document.querySelector('.display').innerHTML += 7;
});

eight.addEventListener('click', function() {
    document.querySelector('.display').innerHTML += 8;
});

nine.addEventListener('click', function() {
    document.querySelector('.display').innerHTML += 9;
});

decimal.addEventListener('click', function() {
    document.querySelector('.display').innerHTML += '.';
});

clear.addEventListener('click', function() {
    document.querySelector('.display').innerHTML = '';
    firstInt='';
    secondInt='';
});

add.addEventListener('click', function() {
    firstInt = document.querySelector('.display').innerHTML;
    console.log(firstInt);
    document.querySelector('.display').innerHTML = '';
    operator='+';

});

subtract.addEventListener('click', function() {
    firstInt = document.querySelector('.display').innerHTML;
    document.querySelector('.display').innerHTML = '';
    operator='-';
});

multiply.addEventListener('click', function() {
    firstInt = document.querySelector('.display').innerHTML;
    document.querySelector('.display').innerHTML = '';
    operator='*';
});

divide.addEventListener('click', function() {
    firstInt = document.querySelector('.display').innerHTML;
    document.querySelector('.display').innerHTML = '';
    operator='/';
});


equals.addEventListener('click', function() {
    secondInt = document.querySelector('.display').innerHTML;
    console.log(firstInt);
    console.log(secondInt);
    console.log(operator);
    if (operator === '+') {
    document.querySelector('.display').innerHTML = Number(firstInt) + Number(secondInt);
  } else if (operator === '-') {
    document.querySelector('.display').innerHTML = Number(firstInt) - Number(secondInt);
  }  else if (operator === '*') {
      document.querySelector('.display').innerHTML = Number(firstInt) * Number(secondInt);
    } else if (operator === '/'){
      document.querySelector('.display').innerHTML = Number(firstInt) / Number(secondInt);
    }

});

percent.addEventListener('click', function() {
    var int = document.querySelector('.display').innerHTML;
    document.querySelector('.display').innerHTML = Number(int) / 100;

});

negative.addEventListener('click', function() {
    var int = document.querySelector('.display').innerHTML;
    document.querySelector('.display').innerHTML = Number(int) - 2 * Number(int);
});
