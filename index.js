var btn = document.getElementById("btn");

var span = document.getElementById("inner");

btn.addEventListener("click", () => (span.style.display = "block"));

var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => (span.style.display = "none"));

var close = document.getElementById("close");
close.addEventListener("click", () => (span.style.display = "none"));

var outer = document.getElementById("outer");

outer.addEventListener("click", function (e) {
    console.log(e);
    if (e.target === outer) {
        span.style.display = "none";
    }
});
