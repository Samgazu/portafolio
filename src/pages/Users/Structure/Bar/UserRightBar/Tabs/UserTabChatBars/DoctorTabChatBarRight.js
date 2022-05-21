import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter } from "react-router-dom";
import moment from 'moment';
import './DoctorTabChatBarRight.scss';

import grayBorderImage from '../../../../../../../assets/img/126PX/boy-border-gray.png';


const DoctorTabChatBarRight = () => {

    const messages = [
        {
            id: 1,
            date: new Date(),
            message: 'Lrem ipsum dolor sit amet, consecture'
        },
        {
            id: 2,
            date: new Date(),
            message: 'Lrem ipsum dolor sit amet, consecture'
        },
        {
            id: 3,
            date: new Date(),
            message: 'Lrem ipsum dolor sit amet, consecture'
        },
        {
            id: 4,
            date: new Date(),
            message: 'Lrem ipsum dolor sit amet, consecture'
        },
        {
            id: 5,
            date: new Date(),
            message: 'Lrem ipsum dolor sit amet, consecture'
        },
        {
            id: 6,
            date: new Date(),
            message: 'Lrem ipsum dolor sit amet, consecture'
        },
    ];

    const renderChat = (item, index) => {
        return (
            <ul className={'doctor-tab-chat-right-messages-ul'}>
                {
                    messages.map((item, index) => (
                        <li className={`doctor-tab-chat-right-messages-li ${index %2 == 0 ? ' even ':' odd '} `} >
                            <span>{ item.message }</span>
                            <span className={"deliveryDate"}>Entregado { moment(item.date).format('DD/MM/YYYY') }</span>
                        </li>
                    ))
                }
            </ul>
        );
    };

    return (
        <div>
            <div className={'doctor-tab-chat-right-profile'}>
                <div className={"image-circle"}>
                    <img src={grayBorderImage} alt={"User photo"} />
                </div>
                <span className={"doctor-tab-chat-right-title"}>ATQ Elena Díaz</span>
            </div>
            {
                renderChat()
            }
        </div>
    )
}


function mapStateToProps (state) {
    return {
        ...state,
    };
}


export default withRouter(connect(mapStateToProps)(DoctorTabChatBarRight));