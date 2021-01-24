import React from "react";
import {Link} from "react-router-dom"
const NavBar=()=>{
    return(
        <>
        <div className="container-nav">
            <nav>
                <div className="profile-pic">
                    <div>
                        <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                    </div>
                    <h2>Henry Jabbawockiez&nbsp; <i class="fas fa-chevron-down"></i> </h2>
                </div>
                <ul>
                    <Link to ="#"><li><i class="fas fa-th-large"></i> &nbsp; &nbsp;Home</li></Link>
                    <Link to ="#"><li><i class="far fa-comment-dots"></i> &nbsp; &nbsp;Chat</li></Link>
                    <Link to ="#"><li><i class="far fa-user"></i> &nbsp; &nbsp;Contact</li></Link>
                    <Link to ="#"><li><i class="far fa-bell"></i> &nbsp; &nbsp;Notifications</li></Link>
                    <Link to ="#"><li><i class="far fa-calendar-alt"></i> &nbsp; &nbsp;Calender</li></Link>
                    <Link to ="#"><li><i class="fas fa-cog"></i> &nbsp; &nbsp;Settings</li></Link>
                </ul>
                <div className="out">
                     <h3>LOG OUT</h3>
                </div>
            </nav>
            
        </div>
        </>)
}

export default NavBar;