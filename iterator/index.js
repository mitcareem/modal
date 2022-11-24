// an object is iterable and iterator with the same time

let obj = {
    _i: 0,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        return {
            value: this._i++,
            done: this._i > 10,
        };
    },
};

for (const x of obj) {
    console.log(x);
    if (x > 5) {
        break;
    }
}
console.log("After a break!");
for (const x of obj) {
    console.log(x);
}
