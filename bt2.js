function delayedCallback(callback, number) {
    setTimeout(() => {
        callback();
    }, number);
}


delayedCallback(() => {
    console.log("Hàm callback được gọi sau 2 giây!");
}, 2000);