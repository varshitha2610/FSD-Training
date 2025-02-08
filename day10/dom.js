console.log(typeof document);
console.log(window);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.title);
document.title = "flipkart"
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[1]);
console.log(document.links[2]);
document.links[0].href = "http://www.youtube.com"
document.links[1].href = "http://www.flipkart.com"

let a = document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textContent = "batch 4"
a.style.backgroundColor = "red"
a.style.textAlign = "center"

let b =document.getElementsByClassName("demo1")
console.log(b);
console.log(b[0]);
console.log(b[1]);
console.log(b[0].textContent);
b[0].style.backgroundColor = "blue"

let c = document.getElementsByTagName("p")
console.log(c);
console.log(c[1]);
console.log(c[1].textContent);
c[i].textContent = "hello"
c[i].style.border = "5px solid red"

let d = document.getElementsByName("demo2")
console.log(d);
console.log(d[1]);

let e = document.querySelector("#demo")
console.log(e);

let e1 = document.getSelector(".demo1")
console.log(e1);

let d1 = document.querySelectorAll("#demo")
console.log(d1);
console.log(d1[0]);

let d2 = document.querySelectorAll(".demo")
console.log(d2);
console.log(d2[1]);


