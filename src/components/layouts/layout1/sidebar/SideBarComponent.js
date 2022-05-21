import React from 'react';
import './sass/styles.sass';
import { MdPlayArrow } from "react-icons/md";
import icoCloseBarAzul from '../../../../assets/img/512PX/Icono_Cierre_Azul_512px.png'
import { useDispatch, useSelector } from 'react-redux';
import { finishSideActive } from '../../../../actions/sidebar';
import { NavLink } from 'react-router-dom';
import { sideBarData } from './sideBarData';
import { getDriveAccess } from '../../../../actions/systemsAction';


export const SideBarComponent = () => {
    
    const { isBarActive } = useSelector( state => state.sidebar );
    const permissionsState = useSelector(state => state.user.user.identity.permissions);
    const user = useSelector(state => state.user.user.identity);
    const permissions = permissionsState.map(permission => permission.permissionTypeDescription);
    const dispatch = useDispatch();

    const handleChangeBarActive = () => {
        dispatch( finishSideActive() );    
    }

    const handleProduct = () => {
        dispatch(getDriveAccess());    
    }

    return (
        <div className={ ( !isBarActive ) ? ('c-sidebar') : ('c-sidebar active')}>
            <button 
                className='c-sidebar-btn-close'
                onClick={handleChangeBarActive}
            >
                <img className='c-sidebar-btn-close-img' src={icoCloseBarAzul} alt=""/> 
            </button>

            <ul className='c-sidebar-list'>
                {
                    sideBarData.map((item)=>{
                        if(item.type && item.type === "extern"){
                            return (
                                <NavLink key={item.uid} to={`/Inicio`} 
                                    onClick={handleProduct}
                                            >
                                                <li className='c-sidebar-item' >
                                                    <div className='c-sidebar-item-c-name'>
                                                        <img className='c-sidebar-item-icon' src={item.icon}  alt='' />
                                                        <span className='c-sidebar-item-name'>{item.title}</span>
                                                    </div>
                                                    <div className='c-sidebar-item-c-arrow'>
                                                        <MdPlayArrow />
                                                    </div>
                                                </li>
                                </NavLink>
                            )
                        }else if(!item.type){
                            if( permissions.includes( item.rolePermissions ) || (item.rols && item.rols.find( item => item === user.roleID.toString()))){
                                return (
                                    <NavLink key={item.uid} to={`/${item.path}`} 
                                            onClick={handleChangeBarActive}
                                    >
                                        <li className='c-sidebar-item' >
                                            <div className='c-sidebar-item-c-name'>
                                                <img className='c-sidebar-item-icon' src={item.icon}  alt='' />
                                                <span className='c-sidebar-item-name'>{item.title}</span>
                                            </div>
                                            <div className='c-sidebar-item-c-arrow'>
                                                <MdPlayArrow />
                                            </div>
                                        </li>
                                    </NavLink>
                                );           
                            }
                        }
                    })
                
                }
            </ul>

        </div>
    )
}
