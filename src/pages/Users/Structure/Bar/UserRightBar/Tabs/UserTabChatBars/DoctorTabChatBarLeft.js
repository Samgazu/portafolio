import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter } from "react-router-dom";
import './DoctorTabChatBarLeft.scss';
import SearchInput from '../../../../../../../components/shared/Atoms/SearchInput';
import ListItem1 from '../../../../../../../components/shared/Molecules/ListItem1';
import { getUsersChat, setUserChatSelected } from '../../../../../../../actions/allUsersAction';

import { userTypes } from '../../../../Vars';
import grayBorderImage from '../../../../../../../assets/img/126PX/boy-border-gray.png';

const DoctorTabChatBarLeft = () => {
    const dispatch = useDispatch();
    const [ rols, setRols ] = useState(null)
    const [ chatUsers, setChatUsers ] = useState(null)
    const data = useSelector(state => state.allUsers);
    useEffect(() => {
        if (data.rols) {
            setRols(data.rols)
        }
        if (data.usersChat) {
            setChatUsers(data.usersChat)
        }
    }, [data])
    const [selectedUserTypeList, setSelectedUserTypeList] = useState(null);

    const [selectedTabId, setSelectedTabId] = useState(null);

    const selectUserToGetInfo = ( item ) => {
        setSelectedUserTypeList(item)
        dispatch(getUsersChat(item.id));
    }

    const selectSelectedUserId = ( item ) => {
        setSelectedTabId(item.id)
        dispatch(setUserChatSelected(item.id));
    }
    const renderUserTypeList = () => {
        return (
            <ul className={'doctor-tab-chat-user-type-ul'}>
                {
                    rols &&
                    rols.map((item,index) => (
                        <li key={item.id} className={'doctor-tab-chat-user-type-li'}>
                            <button 
                                className={` ${selectedUserTypeList && selectedUserTypeList.id === item.id ? ' active ':''} `} 
                                onClick={() => selectUserToGetInfo(item)}
                            >
                                {userTypes[item.name]}
                            </button>
                        </li>
                    ))
                }
            </ul>
        );
    };

    const renderProfileCard = (item, index) => {
        return (
            <div onClick={() => selectSelectedUserId(item)}>
                <ListItem1
                    id={item.id}
                    img={item.img}
                    title={item.name}
                    subtitle={item.institution}
                    subtitle2={item.email}
                    selectedTabId={selectedTabId}
                />
            </div>
        );
    };

    return (
        <div>
            {
                renderUserTypeList()
            }
            <div className={"search_content_base"}>
                <SearchInput />
            </div>
            <div className={'profile-list'}>
                {
                    chatUsers &&
                    chatUsers.map(renderProfileCard)
                }
            </div>
        </div>
    )
}


function mapStateToProps (state) {
    return {
        ...state,
    };
}


export default withRouter(connect(mapStateToProps)(DoctorTabChatBarLeft));