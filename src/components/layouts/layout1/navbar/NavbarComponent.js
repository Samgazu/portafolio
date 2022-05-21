import React from 'react';
import { SideBarComponent } from '../sidebar/SideBarComponent';
import './sass/styles.sass';
import { useDispatch, useSelector } from 'react-redux';
import icoMenuAzul from '../../../../assets/img/512PX/Icono_Menu_Azul_512px.png';
import icoChatBlanco from '../../../../assets/img/512PX/Icono_Chat_Blanco_512px.png';
import icoNotificacionesBlanco from '../../../../assets/img/512PX/Icono_Notificaciones_Blanco_512px.png';
import icoAjustesBlanco from '../../../../assets/img/512PX/Icono_Ajustes_Blanco_512px.png';
import icoLogoutBlanco from '../../../../assets/img/512PX/Icono_CerrarSesion_Blanco_512px.png';
import icoTraumaService from '../../../../assets/img/512PX/Logo_TSI_512px.png';
import { initialSideActive } from '../../../../actions/sidebar';
import { NavLink, useHistory } from 'react-router-dom';
import { userLogout } from '../../../../actions/userActions';
import { resetToInitialStateQuote } from '../../../../actions/newQuoteAction';
import { resetToInitialState } from '../../../../actions/systemsAction';
import { ChatComponent } from '../../../ChatComponent/ChatComponent';
import { useState } from 'react';
import { setStateNewNotification } from '../../../../actions/notification-chatAction';

export const NavbarComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [openElement, setOpenElement] = useState(false);
    const stateNewNotification = useSelector((state) => state.notificationChat.stateNewNotification);

    const handleLogout = () => {
        dispatch(userLogout());
        dispatch(resetToInitialStateQuote());
        dispatch(resetToInitialState());
        history.replace('');
    }

    const handleChangeSideBarActive = () => {
        dispatch(initialSideActive());
    }

    return (
        <nav className='c-navbar'>
            <div className='c-navbar-sideBar'>
                <button
                    onClick={handleChangeSideBarActive}
                    className='btn-sideBar sideBar-logo'
                >
                    <img className='sideBar-logo-img' src={icoMenuAzul} alt="" />
                </button>
            </div>

            <div className='c-navbar-c-icoLogo'>
                <NavLink to='/Inicio'>
                    <img className='c-navbar-icoLogo' src={icoTraumaService} alt="" />
                </NavLink>
            </div>


            <div className="c-navbar-tools">

                <button className='tools-logo tools-logo-Chat' onClick={() => setOpenElement({ status: !openElement.status, typeElement: 'CHAT' })}>
                    <img className='tools-logo-img tools-logo-Chat-img' src={icoChatBlanco} alt="" />
                </button>


                <button className='tools-logo tools-logo-Notificaciones' onClick={() => { setOpenElement({ status: !openElement.status, typeElement: 'NOTIFICATION' }); dispatch(setStateNewNotification(false)) }}>
                    <div className={`${stateNewNotification ? 'bolita-roja' : 'hidden'}`}></div>
                    <img className='tools-logo-img tools-logo-Notificaciones-img' src={icoNotificacionesBlanco} alt="" />
                </button>

                <button className='tools-logo tools-logo-Ajustes'>
                    <img className='tools-logo-img tools-logo-Ajustes-img' src={icoAjustesBlanco} alt="" />
                </button>
                <button className='tools-logo tools-logo-Logout'
                    onClick={handleLogout}
                >
                    <img className='tools-logo-img tools-logo-Logout-img' src={icoLogoutBlanco} alt="" />
                </button>
            </div>

            {
                openElement.status && openElement.typeElement === 'CHAT' &&
                <ChatComponent />
            }

            <SideBarComponent />

        </nav>
    )
}
