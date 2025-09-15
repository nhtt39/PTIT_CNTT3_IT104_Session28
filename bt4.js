function displayNumbers(callback, delay) {
  let count = 1;
  setInterval(() => {
    callback(count);
    count++;
  }, delay);
}

function printNumber(num) {
  console.log(`Số thứ tự: ${num}`);
}

displayNumbers(printNumber, 1000);