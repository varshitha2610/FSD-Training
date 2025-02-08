function main(m,n)
{
   newPromise((resolve,reject) => {
   setTimeout(() => {
        isNan(m) || isNaN(n)
        {
            return reject()
        }
        for(let i=m; i<=n; i++)
        {
           console.log(i);
        }
        return resolve()
   }, 5000)
})

.then(() => console.log("promise is resolved"))
.then(() => console.log(5+5))
.catch(() => console.log("error occured"))
}
main(1,"10")


function simple()
{
    console.log("no's printed");
}
simple()

