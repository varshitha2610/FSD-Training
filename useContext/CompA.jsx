 // import CompB from "./CompB"

import React from "react"
import CompB from "./CompB"
export let userName = React.createContext()
export let id = React.createContext()



// import React from "react"
// import CompB from "./CompB"

// export const user = React.createContext()
// export const id = React.createContext()
// export const CompA = () => {
//   return (
//    <>
//     <user.Provider value={"abhi"}>
//          <id.Provider value={10}>
//              <CompB/>
//          </id.Provider>
//     </user.Provider>

//    </>
//   )
// }

 const CompA = () => {
  return (
    <div>
      <userName.Provider value={"varshitha"}>
          <id.Provider value={100}>
            <CompB/>
          </id.Provider>

      </userName.Provider>
    </div>
  )
}

export default CompA

