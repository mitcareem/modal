// let debounced = debounce(function, delay);

function debounce(fn, wait) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, wait);
    };
}
function printName(name) {
    console.log(name);
}
const debounced = debounce(printName, 3000);
for (let i = 0; i < 5; i++) {
    debounced("Jane");
}
