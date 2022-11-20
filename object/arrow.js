// var obj = {
//     name: "Jane",
//     friends: ["Tarzan", "Cheeta"],
//     loop: function () {
//         this.friends.forEach(function (friend) {
//             console.log(this.name + " knows " + friend)
//         }, this)
//     }
// }

// obj.loop();

var obj = {
    name: "Jane",
    friends: ["Tarzan", "Cheeta"],
    loop: function () {
        this.friends.forEach((friend) => {
            console.log(this.name + " knows " + friend);
        });
    },
};

obj.loop();

/* what is global object in js?
  any code you write in js which is not inside the function is in global object
*/
