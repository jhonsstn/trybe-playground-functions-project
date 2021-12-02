// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue && secondValue) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(stringArray) {
  let newString = `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  return winPoints + ties;
}

// Desafio 6
function highestCount(valuesArray) {
  let largest = valuesArray[0];
  for (let i = 0; i < valuesArray.length; i += 1) {
    if (valuesArray[i] > largest) {
      largest = valuesArray[i];
    }
  }
  let valueCounter = valuesArray.filter((value) => value === largest).length;
  return valueCounter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1MouseDistance = Math.abs(cat1 - mouse);
  let cat2MouseDistance = Math.abs(cat2 - mouse);

  if (cat1MouseDistance < cat2MouseDistance) {
    return 'cat1';
  }
  if (cat1MouseDistance > cat2MouseDistance) {
    return 'cat2';
  }
  if (cat1MouseDistance === cat2MouseDistance) {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
