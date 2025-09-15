function calculate(a, b, callback) {
    const sum = a + b;
    callback(sum); 
}

calculate(5, 7, function(result) {
    console.log("Kết quả là:", result);
});
