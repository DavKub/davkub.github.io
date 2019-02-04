const calculatorDisplay = document.getElementById('calculator-display');

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const resultButton = document.getElementById('result');
const clearButton = document.getElementById('clear-all');

const zeroButton = document.getElementById('zero');
const oneButton = document.getElementById('one');
const twoButton = document.getElementById('two');
const threeButton = document.getElementById('three');
const fourButton = document.getElementById('four');
const fiveButton = document.getElementById('five');
const sixButton = document.getElementById('six');
const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');
const nineButton = document.getElementById('nine');

let numberStack = 0;

// Functions

plusButton.addEventListener('click', function() {
    console.log('plus');
    calculatorDisplay.value += '+';
});

minusButton.addEventListener('click', function() {
    console.log('minus');
});

multiplyButton.addEventListener('click', function() {
    console.log('multiply');
});

divideButton.addEventListener('click', function() {
    console.log('divide');
});

resultButton.addEventListener('click', function() {
    console.log('result');
});

clearButton.addEventListener('click', function() {
    console.clear();
    calculatorDisplay.value = "";
});

// Numbers

zeroButton.addEventListener('click', function() {
    console.log('zero');
    calculatorDisplay.value += '0';
});

oneButton.addEventListener('click', function() {
    console.log('one');
    calculatorDisplay.value += '1';
});

twoButton.addEventListener('click', function() {
    console.log('two');
    calculatorDisplay.value += '2';
    numberStack += 2;
});

threeButton.addEventListener('click', function() {
    console.log('three');
    calculatorDisplay.value += '3';
});

fourButton.addEventListener('click', function() {
    console.log('four');
    calculatorDisplay.value += '4';
});

fiveButton.addEventListener('click', function() {
    console.log('five');
    calculatorDisplay.value += '5';
});

sixButton.addEventListener('click', function() {
    console.log('six');
    calculatorDisplay.value += '6';
});

sevenButton.addEventListener('click', function() {
    console.log('seven');
    calculatorDisplay.value += '7';
});

eightButton.addEventListener('click', function() {
    console.log('eight');
    calculatorDisplay.value += '8';
});

nineButton.addEventListener('click', function() {
    console.log('nine');
    calculatorDisplay.value += '9';
});