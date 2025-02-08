let a = document.createElement("h1")
console.log(a);
a.textContent = "hello world"

document.body.appendChild(a)
a.style.backgroundColor = "red"

let ol = document.createElement("ol")
console.log(ol);

let li1 = document.createElement("li")
console.log("li1");
li1.textContent = "react"
ol.appendChild(li1)

let li2 = document.createElement("li")
console.log("li2");
li2.textContent = "node.js"
ol.appendChild(li2)

document.body.appendChild(ol)

let div = document.getElementById("demo")
console.log("div");


div.style.border = "5px solid red";
div.appendChild(ol)


ol.setAttribute("type", "A")

let table = document.createElement("table")
console.log(table);

table.setAttribute("border" , "2px solid black")
document.body.appendChild(table)

let tr1 = document.createElement("tr")
console.log(tr1);
table.appendChild(tr1)

let td1 = document.createElement("td")
console.log(td1);
td1.textContent = "node.js"
table.appendChild(td1)

let td2 = document.createElement("id")
console.log(td2);
td2.textContent = "node.js"
tr1.appendChild(td2)




