import React from "react";
import {Link} from "react-router-dom"
const NavBar=()=>{
    return(
        <>
        <div className="chat-here">
            <nav>
                <div className="left">
                    <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                    <div className="para">
                        <h4>Nika Jerrardo</h4>
                        <p>last online 5 hour ago</p>
                    </div>
                </div>
                <div className="right">
                    <div className="circle"><i class="fas fa-paperclip"></i></div>
                    <div className="circle"><i class="fas fa-ellipsis-v"></i></div>
                </div>
            </nav>
            <div className="content">
                <div className="texts">
                <div className="friend">
                    <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <div>
                            <p>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.</p>
                            <div className="msg-ends">
                                <div className="end-para">
                                    <p>
                                        Can I send you files?
                                        
                                    </p>
                                    <span className="span1">4 days ago</span>
                                </div>
                                <span className="span2" ><i class="fas fa-ellipsis-h"></i></span>
                            </div>
        
                        </div>
                    </div>
                    <div className="me">
                    <div className="divt">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                        <div className="divs">
                        <p>Hey! Okay, send out.</p>
                        </div>
                        <div className="check">
                        <i class="fas fa-check-double"></i>
                        </div>
                    </div>
                    
                    <div className="friend">
                    <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <div>
                            <div className="msg-ends">
                                <div className="end-para">
                                    
                                    <p>
                                        <div className="box-cover">
                                        <i class="far fa-file"></i>
                                        </div>
                                        <div className="box-cover1">
                                            <div>Style.zip</div>
                                            <div className="light">41.36 Mb</div>
                                        </div>
                                        
                                        
                                    </p>
                                    <span className="span1">4 days ago</span>
                                </div>
                                <span className="span2" ><i class="fas fa-ellipsis-h"></i></span>
                            </div>
        
                        </div>
                    </div>
                    <div className="dash">
                        <div class="show">

                        </div>
                        <div className="day">
                            3 days ago
                        </div>
                        <div  class="show">

                        </div>
                    </div>
                    <div className="me">
                    <div className="divP">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                        <div className="divs">
                            <p>Hello! I tweaked everything you asked. I am sending the finished file.
                            <span>(52.05 Mb) NEW_Style.zip&nbsp; <i class="far fa-file"></i></span></p>
                        </div>
                        <div className="check">
                        <i class="fas fa-check-double"></i>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="options">
                        <button><i class="fas fa-film"></i>&nbsp;</button>
                        <button><i class="far fa-file-image"></i>&nbsp;</button>
                        <button><i class="far fa-file"></i>&nbsp;</button>
                        <button><i class="fas fa-plus"></i>&nbsp;</button>
                    </div>
                            <input placeholder="       Type a message here" />
                    <div className="right-options">
                        <i class="far fa-smile"></i>
                        <button><i class="fas fa-location-arrow"></i></button>
                    </div>        
                        
                </div>  
            </div>
        </div>
        </>)
}

export default NavBar;