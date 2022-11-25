function* range(upperBound) {
    let start = 0;
    while (start < upperBound) {
        yield start;
        start = start + 1;
    }
}

const numbers = range(1000000000);
for (const el of numbers) {
    console.log(el);
}
