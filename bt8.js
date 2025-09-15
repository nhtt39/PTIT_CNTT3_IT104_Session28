function myFilter(array, value, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], value, i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

const numbers = [1, 2, 2, 3, 4, 5, 6];

function callback(element, searchValue) {
  return element === searchValue;
}

console.log(myFilter(numbers, 2, callback));  
console.log(myFilter(numbers, 10, callback)); 
