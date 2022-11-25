function* reverse(iter) {
    for (let i = iter.length - 1; i >= 0; i--) {
        yield iter[i];
    }
}

const rev = reverse([1, 2, 3]);
for (const el of rev) {
    console.log(el);
}
