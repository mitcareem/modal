// let debounced = debounce(function, delay);
/* 

debouncing limiting the rate of function call

if the time difference between two keypress event is more than given time
then only make function call

Throttling---only make the function call after a certain limit of time

*/

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
