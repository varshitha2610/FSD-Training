// import { user , id } from "./CompA"

import { useContext } from "react"
import {userName , id} from "./CompA"


// const CompC = () => {
//   return (
//     <>
//       <user.Consumer>
//         {
//             (user) => {
//                 return (
//                     <>
//                       {
//                         <id.Consumer>
//                           {
//                             (id) => {
//                             return(
//                               <h1>my name is {user} , {id}</h1>
//                             )
//                             }
//                           }
//                         </id.Consumer>
//                       }
//                     </>
//                 )
//             }
//         }
//       </user.Consumer>
//     </>
//   )
// }

// export default CompC

const CompC = () => {
  let user = useContext(userName)
  let id1 =useContext(id)
  return (
    <div>
        <h1>my name is {user} {id1}</h1>
    </div>
  )
}

export default CompC