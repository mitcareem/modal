// generator functions return series of values
// returns an iterable
// iterable is an object that supports iteration

function* natNum() {
    let num = 1;
    while (num <= 100) {
        yield num;
        num = num + 1;
    }
}

const numbers = natNum();
console.log(numbers.next().value);

for (const ele of numbers) {
    console.log(ele);
}
