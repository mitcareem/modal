// const cart = ["shoes", "pants", "kurta"];

// api.createOrder(cart, function () {
//     api.proceedToPayment(function () {
//         api.orderSummary(function () {
//             api.updateWallet();
//         });
//     });
// });


/* issue with call back
1. callback hell----callback inside another callback
2. inversion of control

A promise object represents the eventual completion (of failure) of an asynchronous
task, error handling is very easy.
*/


//basic example of callback
function doCalculate(fn) {
    let number = 5;
    console.log(fn(number));
}

function square(num) {
    return num * num;
}

doCalculate(square);
