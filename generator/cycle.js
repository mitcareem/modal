function* cycle(iter) {
//     let i = 0;
//     while (i <= iter.length) {
//         yield iter[i];
//         i++;
//         if (i >= iter.length) {
//             i = 0;
//         }
//     }
// }
while(true) {
    for(const el of iter) {
        yield el;
    }
}

}

const i = cycle([1, 2, 3]);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
