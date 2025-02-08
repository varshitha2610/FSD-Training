import React from "react";

class Props extends React.Component{
    render(){
        return (
            <>
            {
                React.createElement("hi" , "null" ,"hello-world")
            }
            {
               React.createElement("div" , {id : "demo"} , React.createElement("span","null","I am span tag"))
            }
            </>
        )
    }
}
export default Props