import React from 'react';
import { SearchChatComponent } from './SearchChatComponent';
import './sass/styles.scss';
import { MessagesChatComponent } from './MessagesChatComponent';


export const ChatComponent = () => {
    

    return (
        <div className="ChatComponent-container">
            <div className="ChatComponent-subContainer">
                <div className="ChatComponent-header-container">

                    <div className="ChatComponent-header-info-container">
                        <h3 className="ChatComponent-header-info">Chat Live</h3>
                        <img src="" alt="" className="" />
                    </div>

                    <div className="">
                        <SearchChatComponent />
                    </div>

                </div>

                <div className="ChatComponent-messages-info-container">
                    <MessagesChatComponent />
                </div>

            </div>
        </div>
    )
}
