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

/*

--Logical Tree (DOM Tree)
A tree is the finite set of data items(Node);
There is a special Node called root node;
And other nodes are the descendent of the root node;

--User Interface Tree
A web application can be consider a tree; why?
The base URL is can be root node----
base URL ---- https://www.pesto.tech/;

And  https://www.pesto.tech/register can be consider a branch where this
branch connects to leaf node called register;

route === path 
path is set of edges that leads to a Node


*/
