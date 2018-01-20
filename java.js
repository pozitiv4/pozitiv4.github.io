// Калькулятор+
function plus(){
var num1, num2, result;
num1 = document.getElementById('n1').value;
num1 = parseInt(num1);

num2 = document.getElementById('n2').value;
num2 = parseInt(num2);

result = num1+num2;
//innerHTML
document.getElementById('out').innerHTML = result;
}

function minus(){
var num1, num2, result;
num1 = document.getElementById('n1').value;
num1 = parseInt(num1);

num2 = document.getElementById('n2').value;
num2 = parseInt(num2);

result = num1-num2;
document.getElementById('out').innerHTML = result;
}
function umn(){
var num1, num2, result;
num1 = document.getElementById('n1').value;
num1 = parseInt(num1);

num2 = document.getElementById('n2').value;
num2 = parseInt(num2);

result = num1*num2;
document.getElementById('out').innerHTML = result;
}
function delit(){
var num1, num2, result;
num1 = document.getElementById('n1').value;
num1 = parseInt(num1);

num2 = document.getElementById('n2').value;
num2 = parseInt(num2);

result = num1/num2;
document.getElementById('out').innerHTML = result;
}
function sqrt(){
var num1, result, x;

num1 = document.getElementById('n1').value;
num1 = parseInt(num1);

x = Math.sqrt (num1);

result = x;
document.getElementById('out').innerHTML = result;
}
// Калькулятор-

//Загрузка+
window.onload = function() {
var start = 0; 
var finish = document.getElementById('progress');
var t = setInterval(move, 50);
var c = setInterval(dot, 550);
var progress = 0;
var number = document.getElementById('number');
var string = document.getElementById('string');
var titleOf = document.getElementById('h1');
var header = 'Downloading';

function move() {
if(start > 100) {
clearInterval(t);
titleOf.innerHTML = '<br/>';
string.innerHTML = "ПРИВЕТСТВУЮ";
} else {

number.style.color = 'red';
finish.value= start++; 
number.innerHTML= progress++ + "%"; 
}
}

function dot() {
if(header=='Downloading...'){
header = 'Downloading';
titleOf.innerHTML = header;
}else if(start > 100) {
clearInterval(c);
}else {
header = header + '.';
titleOf.innerHTML = header;
}
}
};
//Загрузка-