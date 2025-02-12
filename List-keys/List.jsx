
// const List = () => {
//     let arr = [10 , 20 , 30 , 40]
//     let num = 0
//   return (
//     <>
//       {
//         arr.map((x) => {
//             console.log(`<li key=${num++} >${x}</li>`);
//             return (
//                 <li key = {num++} >{x}</li>
//             )
//         })
//       } 

import { Fragment } from "react"

      
//     </>
//   )
// }

// export default List

const List = () => {
    let main =[
        {
            name : "abc" ,
            id : 1
        },
        {
            name : "varshitha" ,
            id : 2
        },
        {
            name : "rahul" ,
            id : 3
        }
    ]
  return (
    <>
    {
        main.map((x) => {
            return (
                <Fragment key={x.id}>
                    <li>{x.name}</li>
                </Fragment>
            )
        })
    }
    </>
  )
}

export default List