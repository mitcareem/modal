function fetchData(callback) {
    setTimeout(() => {
        callback("this was the message");
    }, 2000);
}
