// let arr = [];
// function fib(n) {
//     if (arr[n] !== undefined) {
//         return arr[n];
//     } else if (n == 0 || n == 1) {
//         return (arr[n] = n);
//     } else {
//         arr[n] = fib(n - 1) + fib(n - 2);
//         return arr[n];
//     }
// }
// console.log(fib(1000));
// console.log(arr[7]);

// 0, 1, 1, 2, 3, 5, 8, 13

// function time(fn) {
//     console.time();
//     fn();
//     console.timeEnd();
// }

// time(() => fib(1000));

const { memoize } = require("lodash");

function fib(n) {
    if (n < 2) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

// console.log(fib(7))
const fibM = memoize(fib);
// console.time();
console.log(fibM(20));
// console.timeEnd();
// console.time();
// console.log(fibM(20));
// console.timeEnd();
// console.time();
// console.log(fibM(20));
// console.timeEnd();

// const fibM = memoize(fib);

function memoizeM(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.toString();
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            cache.set(key, fn(...args));
            return cache.get(key);
        }
    };
}
