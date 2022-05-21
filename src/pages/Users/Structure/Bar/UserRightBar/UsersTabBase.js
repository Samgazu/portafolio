import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import TabsLine from '../../../../../components/shared/Molecules/TabsLine';

import UserTabProfile from './Tabs/UserTabProfile';
import UserTabPatient from './Tabs/UserTabPatient';
import UserTabProcess from './Tabs/UserTabProcess';
import UserTabAgenda from './Tabs/UserTabAgenda';
import UserTabChat from './Tabs/UserTabChat';

import profileImage from '../../../../../assets/img/126PX/profileI.png';
import pacientImage from '../../../../../assets/img/126PX/pacientI.png';
import processImage from '../../../../../assets/img/126PX/processI.png';
import agendaImage from '../../../../../assets/img/126PX/agendaI.png';
import chatImage from '../../../../../assets/img/126PX/chatI.png';

import profileWhiteImage from '../../../../../assets/img/126PX/profile-white-i.png';
import pacientWhiteImage from '../../../../../assets/img/126PX/pacient-white-i.png';
import processWhiteImage from '../../../../../assets/img/126PX/process-white-i.png';
import agendaWhiteImage from '../../../../../assets/img/126PX/agenda-white-i.png';
import chatWhiteImage from '../../../../../assets/img/126PX/chat-white-i.png';


const UsersTabBase = ( ) => {
    const [ userRol, setUserRol ] = useState(null)
    const data = useSelector(state => state.allUsers);
    const [ tabsOptions, setTablsOptions ] = useState(null)
    useEffect(() => {
        if (data.userRolSelected) {
            setUserRol(data.userRolSelected)
            if ( data.userRolSelected == "doctor") {
                setTablsOptions([
                    {
                        id: 1,
                        title: 'Perfil',
                        icon: undefined,
                        img: profileImage,
                        imgW: profileWhiteImage,
                    },
                    {
                        id: 2,
                        title: 'Paciente',
                        icon: undefined,
                        img: pacientImage,
                        imgW: pacientWhiteImage,
                    },
                    {
                        id: 3,
                        title: 'Procesos',
                        icon: undefined,
                        img: processImage,
                        imgW: processWhiteImage,
                    },
                    {
                        id: 4,
                        title: 'Agenda',
                        icon: undefined,
                        img: agendaImage,
                        imgW: agendaWhiteImage,
                    },
                    {
                        id: 5,
                        title: 'Chat',
                        icon: undefined,
                        img: chatImage,
                        imgW: chatWhiteImage,
                    },
            
                ])
            } else {
                setTablsOptions([
                    {
                        id: 1,
                        title: 'Perfil',
                        icon: undefined,
                        img: profileImage,
                        imgW: profileWhiteImage,
                    },
                    {
                        id: 3,
                        title: 'Procesos',
                        icon: undefined,
                        img: processImage,
                        imgW: processWhiteImage,
                    },
                    {
                        id: 4,
                        title: 'Agenda',
                        icon: undefined,
                        img: agendaImage,
                        imgW: agendaWhiteImage,
                    },
                    /* {
                        id: 5,
                        title: 'Chat',
                        icon: undefined,
                        img: chatImage,
                        imgW: chatWhiteImage,
                    }, */
            
                ])
            }
        }
    }, [data])

    const setTabId = (id) => {
        setSelectedTabId(id);
    };
    const [selectedTabId, setSelectedTabId] = useState(null);
    return (
        <div>
        {
            tabsOptions && 
            <TabsLine 
            options={tabsOptions} 
            selectedTabId={selectedTabId}  
            setSelectedTabId={setTabId}
        />}
        <div>
            {
                //Puede ser necesario meter el selectedTabId al redux
                selectedTabId == 1 && <UserTabProfile />
            }
            {
                data.userRolSelected == "doctor" &&
                selectedTabId == 2 && <UserTabPatient />
            }
            {
                selectedTabId == 3 && <UserTabProcess />
            }
            {
                selectedTabId == 4 && <UserTabAgenda />
            }
            {
                selectedTabId == 5 && <UserTabChat />
            }
        </div>
        </div>
    )
}

export default UsersTabBase;