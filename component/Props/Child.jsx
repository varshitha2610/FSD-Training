// import React from "react";
// class Child extends React.Component{
//     render()
//     {
//         return (
//             <>
//               <h1>my name is {this.props.name}</h1>
//             </>
//         )
//     }
// }
// export default Child

// import Props from "../Props"



// const Child = (props) => {
//     console.log(props)
    // let {name , id , designation} = props.obj
  // return (
     <> 
     {/* <h1>my name is {props.name}</h1> */}
     {/* <h1>the id is {props.id}</h1> */}
     {/* <h1>{props.arr}</h1> */}
     {/* <h1>{name} , {id} , {designation}</h1> */}
     {/* <button onClick={() => Props.fun1()}>click</button> */}
     </>

    
//   )
// }

// export default Child


const Child = (props) => {
  console.log(props);
  console.log(props.children);
  return (
    <>
      {props.children} 
    </>
  )
}

export default Child
