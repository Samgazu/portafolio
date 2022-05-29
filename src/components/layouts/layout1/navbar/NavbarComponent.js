import React from 'react';
import { SideBarComponent } from '../sidebar/SideBarComponent';
import './sass/styles.sass';
import { useDispatch } from 'react-redux';
import icoMenuAzul from '../../../../assets/img/512PX/Icono_Menu_Azul_512px.png';
import icoLogoutBlanco from '../../../../assets/img/512PX/Icono_CerrarSesion_Blanco_512px.png';
import icoLogo from '../../../../assets/img/512PX/icoLogo.svg';
import { initialSideActive } from '../../../../actions/sidebar';
import { NavLink, useHistory } from 'react-router-dom';
import { userLogout } from '../../../../actions/userActions';
import { resetToInitialStateQuote } from '../../../../actions/newQuoteAction';
import { resetToInitialState } from '../../../../actions/systemsAction';

export const NavbarComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();

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
                    <img className='c-navbar-icoLogo' src={icoLogo} alt="" />
                </NavLink>
            </div>

            <div className="c-navbar-tools">

                <button className='tools-logo tools-logo-Logout'
                    onClick={handleLogout}
                >
                    <img className='tools-logo-img tools-logo-Logout-img' src={icoLogoutBlanco} alt="" />
                </button>
            </div>

            <SideBarComponent />

        </nav>
    )
}
