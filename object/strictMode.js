"use strict";

function returnThis() {
    return this;
}

console.log(returnThis())


// In strict mode window or global object is undefined
/*
Strcit mode prevent you to by mistake putting the things(props) in global object when you want
to construct an object.
*/
