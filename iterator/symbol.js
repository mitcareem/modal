/* symbols are new primitive types in es6
it's the core part of iterator
symbols are used in meta programming

Metaprogramming is a programming technique 
in which computer programs have the ability 
to treat other programs as their data.

we can create a symbol in global object as well as in local memory
let sym = Symbol.for()----create in global object
Symbol.keyFor(sym) ----access from global object

Symbol.iterator  --- over write the behavior of for of loop
Symbol are used to simulate the behavior of operator loading in other language like Python
Symbol.hasInstance over write the behavior of instanceof
Symbol.match over write the behavior of string match

Symbol.replace over write the behavior of string replace....... and so on.......


*/

let sym = Symbol('a')
let sym2 = Symbol("a")
console.log(sym ===sym2)
