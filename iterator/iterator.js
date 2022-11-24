/*
Iteration is abstraction of traversing in JS

*/

let str = "hello";
for(const char of str) {
    console.log(char)
}

const iter = str[Symbol.iterator](); // returns an object
console.log(iter) // print the object
console.log(iter.next()) // gives the first value


let obj = {
    [Symbol.iterator]() { //iterable
        let i = 0;
        done = false;
        return {
            next() { //iterator
                return { value: i++, done: i > 10 };
            },
        };
    },
};
for (const el of obj) {
    console.log(el);
}
