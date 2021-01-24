import React from "react";
import {Link} from "react-router-dom";
const NavBar=()=>{
    return(
        <>
        <div className="chat-box">
            <div className="header">
                <div>
                    <h2>Chats</h2>
                    <h3>Recent Chats &nbsp; <i class="fas fa-chevron-down"></i></h3>
                </div>
                <div>
                    <button><i class="fas fa-plus"></i>&nbsp; Create New Chat</button>
                </div>
            </div>
            <div className="search">
                    <span>
                    <i class="fas fa-search"></i>
                    </span>
                <div>
                    
                    <input placeholder={"Search"}/>
                </div>
                
                    <button>
                        <h5>Messages&nbsp; <i class="fas fa-chevron-down"></i></h5>
                    </button>
            
            </div>
            <div className="chats">
                
                    <div className="cBox Box1">
                        <div className="top">
                            <div className="info">
                                <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                                <div>
                                        <h4>Lucy Robin</h4>
                                        <p>... writes</p>
                                </div>
                            </div>
                            <div class="time">
                                    1 minute ago
                            </div>
                        </div>
                        <div className="para">
                            <p>Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). </p>
                            <div>
                                <div class="bell"><p>2</p></div>
                            </div>
                        </div>
                    </div>
                
                <div className="cBox Box2">
                <div className="top">
                            <div className="info">
                                <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                                <div>
                                        <h4>Lucy Robin</h4>
                                        <p> records voice message</p>
                                </div>
                            </div>
                            <div class="time">
                                    1 minute ago
                            </div>
                        </div>
                        <div className="para">
                            <p><i class="fas fa-microphone"></i>&nbsp; Voice message (01:15)</p>
                          
                            <div>
                                <div class="bell"><p>1</p></div>
                            </div>
                        </div>
                        <div className="attach">
                                    <button className="attach1"><i class="far fa-file-alt"></i>&nbsp;  Files (x2)</button>
                                    <button className="attach2"><i class="far fa-image"></i>&nbsp;Photo</button>
                         </div>
                </div>
                <div className="cBox Box3 selected">
                <div className="top">
                            <div className="info">
                                <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                                <div>
                                        <h4>Lucy Robin</h4>
                                        <p>last online 5 hours ago</p>
                                </div>
                            </div>
                            <div class="time">
                                    3 days ago
                            </div>
                        </div>
                        <div className="para">
                            <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                            <div>
                                <div class="bell"><p>2</p></div>
                            </div>
                        </div>
                </div>
                <div className="cBox Box3 selected">
                <div className="top">
                            <div className="info">
                                <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                                <div>
                                        <h4>Lucy Robin</h4>
                                        <p>last online 5 hours ago</p>
                                </div>
                            </div>
                            <div class="time">
                                    3 days ago
                            </div>
                        </div>
                        <div className="para">
                            <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                            <div>
                                <div class="bell"><p>2</p></div>
                            </div>
                        </div>
                </div>
                
            </div>
        </div>
        </>)
}

export default NavBar;