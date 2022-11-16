function memoize(fn) {
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
function fib(n) {
    if (n < 2) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

const fibM = memoize(fib)
console.log(fibM(10))