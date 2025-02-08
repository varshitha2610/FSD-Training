function parent()
{
    function child()
    {
        console.log("i am a child fun");
    }
    child()
}
parent()

var a = 10;
let b = 20;
function parent1()
{
    var a = "hello"
    let b = "hi"
    console.log(a);
    console.log(b);
    console.log(this.a);
    console.log(this.b);
}
parent1()

function main()
{
    let a = 10;
    function child()
    {
        console.log(a);
    }
    child()
}
main()

function parent()
{
    function child1(){
        console.log("This is child1");
        function child1_1()
        {
            console.log("This is child3");
        }
        return child1_1
    }
    function child2(){
        console.log("This is child2");
    }

    return [child1 , child2]

}
parent()[0]()()
parent()[1]()
