let obj = {
    name : "varshitha" ,
    id : 1 ,
    role : "developer" ,
}
console.log(obj);

let obj1 = JSON.stringify(obj)
console.log(obj1);

let obj2 = JSON.parse(obj1)
console.log(obj2);