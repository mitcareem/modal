"use strict";

function returnThis() {
    return this;
}

console.log(returnThis())


// In strict mode window or global object is undefined
