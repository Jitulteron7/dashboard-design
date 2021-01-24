import React from "react";
import NavBar from "./DashBoard/navBar/Bar";
import ChatBox from "./DashBoard/ChatBox/ChatBox";
import ChatHere from "./DashBoard/ChatHere/ChatHere";
const DashBoard=()=>{
    return(
        <>
        <div className="container-dash">
            <div className="box1">
                <NavBar/>
            </div>
            <div className="box2">
                <ChatBox/>
                <ChatHere/>
            </div>
        </div>
        </>)
}

export default DashBoard;