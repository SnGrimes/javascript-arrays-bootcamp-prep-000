var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, item) {
  return [item, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, item) {
  return array.unshift(item);
}

function addElementToEndOfArray(array, item) {
 return [...array, item]; 
}

function destructivelyAddElementToEndOfArray(array, item) {
  return array.push(item);
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.shift(0);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.unshift(0);
}