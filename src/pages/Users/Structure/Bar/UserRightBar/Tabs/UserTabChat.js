import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from "react-router-dom";
import DoctorTabChatBarLeft from './UserTabChatBars/DoctorTabChatBarLeft';
import DoctorTabChatBarRight from './UserTabChatBars/DoctorTabChatBarRight';
import './UserTabChat.scss';
import { getUserRols } from '../../../../../../actions/allUsersAction';


const UserTabChat = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserRols());
    }, [])
    return (
        <div className={'doctor-tab-chat-main-container'}>
            <div className={'doctor-tab-chat-left-bar'}>
                <DoctorTabChatBarLeft />
            </div>
            <div className={'doctor-tab-chat-main-right-bar'}>
                <DoctorTabChatBarRight />
            </div>
        </div>
    );
}


function mapStateToProps (state) {
    return {
        ...state,
    };
}


export default withRouter(connect(mapStateToProps)(UserTabChat));