import React from 'react'
import { messagesChatData } from './messagesChatData';
import imgMessenger from '../../assets/img/126PX/imgChat.png';

export const MessagesChatComponent = () => {
    return (
        <div className="MessagesChatComponent-container">
            {
                messagesChatData.map(item => (
                    <div key={item.uid} className={item.status 
                                                ? "MessagesChatComponent-preContainer MessagesChatComponent-preContainer-active"
                                                : "MessagesChatComponent-preContainer MessagesChatComponent-preContainer-inactive"}>
                        <div  className="MessagesChatComponent-info-container">
                            
                            <img src={item.imgUser} alt="" className="MessagesChatComponent-info-imgUser" />

                            <div className="MessagesChatComponent-container-info" >
                                <h2 className="MessagesChatComponent-info-nameUser" >{item.nameUser}</h2>
                                <h3 className="MessagesChatComponent-info-messageUser" >{item.messageUser}</h3>
                                <h4 className="MessagesChatComponent-info-timeMsg" >{item.timeMsg}</h4>
                            </div>
                            <img src={imgMessenger} alt="" className="MessagesChatComponent-info-imgMessage" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
