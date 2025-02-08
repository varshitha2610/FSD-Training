
// const Ref = () => {
//     let demo = document.getElementById("demo")
//     console.log(demo)
//     demo.style.backgroundColor = "yellow"
//   return (
//     <>
//       <h1 id='demo' >hello-world</h1>
//     </>
//   )
// }

// import { useRef } from "react"

// export default Ref


// const Ref = () => {
//     let demo =useRef()
//     console.log(demo.current);
//     demo.current.style.backgroundColor = "yellow"
//     demo.current.style.textAlign = "center"
//   return (
//     <div>
//         <h2 ref={demo}>hello</h2>
//     </div>
//   )
// }

// export default Ref


import { useRef, useState } from "react";
import video from "./video.mp4"
const Ref = () => {
    let ref1 = useRef()
    console.log(ref1.current);
    let [state , setState] = useState(true)

    let demo = () => {
        setState(!state)
        state === true ? ref1.current.play() : ref1.current.pause()
    }
  return (
    <div>
        <video src={video} style={{height: "300px"}}
        onClick={demo}></video>
    </div>
  )
}

export default Ref