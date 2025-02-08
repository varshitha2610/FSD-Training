// import { useState } from "react"

import { useState } from "react"

// import { useState } from "react"


// const State = () => {
//     let [state , setState] = useState("abhi")
//     console.log(state);
//     console.log(setState);
//     let demo = () => {
//         setState("rahul")
//     }
//   return (
//     <>
//       <h1>{state}</h1>
//       <button onClick={demo}>click</button>
//     </>
//   )
// }

// export default State



// const State = () => {
//   return (
//     <div>State</div>
//   )
// }

// export default State




// const State = () => {
//   let [state , setState] = useState(0)

//   let incr = () => {
//     setState(state + 1)
//   }

//   let reset = () => {
//     setState(0)
//   }

//   let decr = () => {
//     setState(state - 1)
//   }

//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={incr}>increment</button>
//       <button onClick={reset}>reset</button>
//       <button onClick={decr}>decrement</button>
//     </div>
//   )
// }

// export default State


const State = () => {
  let [name , setName] = useState('')
  let [password , setPassword] = useState('')

  let demo =(e) => {
    e.preventDefault()
    console.log({name , password});
    (name === "admin" && password === "12345") ?
    window.open("http://www.pixabay.com") : window.location.reload()
  }
  return (
    <div>
      <form action="">
        <label htmlFor="name"></label>
        <input type="text" name="name" id="name" 
        onChange={(e) => {setName(e.target.value)}}/>

        <br />

        <label htmlFor="password"></label>
        <input type="password" name="password" id="password"
        onChange={(e) => {setPassword(e.target.value)}} />

        <br />
        <button onClick={demo}>submit</button>
      </form>
    </div>
  )
}

export default State