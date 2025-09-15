function processArray(arr, callback) {
  arr.forEach((num, index) => {
    setTimeout(() => {
      callback(num, index);
    }, (index + 1) * 1000); 
  });
}

function printElement(num, index) {
  console.log(`Phần tử thứ: ${num}`);
}

processArray([1, 2, 3, 4, 5], printElement);