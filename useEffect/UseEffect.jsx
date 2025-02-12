// import { useEffect, useState } from "react"

import { useEffect, useState } from "react"

// import { useState } from "react"


// const UseEffect = () => {
//     let [state , setState] = useState(0)
//     useEffect(() => {
//         setTimeout(() => {
//             setState(state + 1)
//         } , 2000)
//     }) //no dependency passed
//   return (
//     <>
//       <h1>{state}</h1>
//     </>
//   )
// }

// export default UseEffect



// const UseEffect = () => {
//   let [state , setState] = useState(0)
//   UseEffect(() => {
//     setTimeout(() => {
//       setState(state)
//     })
//   })
//   return (
//     <div>UseEffect</div>
//   )
// }

// export default UseEffect



const UseEffect = () => {
  let [state , setState] = useState(0)
  let [incr , setIncr] = useState(0)
  useEffect(() => {
      setIncr(() => state*2)
  },[state])

  return (
    <div>
      <h1>{state}</h1>

      <h1>{incr}</h1>

      <button onClick={() => {setState((c) => c + 1 )}}>click</button>
    </div>
  )
}

export default UseEffect