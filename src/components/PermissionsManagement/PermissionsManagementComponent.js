import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './sass/styles.scss';
import PropTypes from 'prop-types';
import { AddUserPermission, GetAllUsersSuccess, RemoveUserPermission } from '../../actions/userActions';

export const PermissionsManagementComponent = ({userSelected, setUserSelected}) => {
    const dispatch = useDispatch();
    const permissionsList = useSelector(state => state.user.permissionsList);
    const allUsers = useSelector(state => state.user.allUsers);

    const convertPermisionName = {
        Login: 'Login',
        MakeAppointment: 'Crear Cita',
        MakeQuotation: 'Crear Cotización',
        ModifyProducts: 'Modificar Productos',
        QuotationsHistory: 'Historial de Cotizaciones',
        TemplatesConfiguration: 'Configuración de plantillas',
        ManageUsers: 'Gestionar Usuarios',
        AllQuotations: 'Todas las cotizaciones',
        EditDrive: 'Editar Drive',
        ReasignATQ:'Reasignar ATQ',
        Delivery:'Repartidor',
    }

    const handleSystemCardClick = (permissId) => {
        if( allUsers && allUsers.length > 0 && userSelected &&
            userSelected.permissions.filter( item =>  item.id === permissId.id).length === 0 ){
            setUserSelected({...userSelected,
                                permissions:  [...userSelected.permissions, permissId]
                            });
            dispatch(GetAllUsersSuccess( allUsers.map(item => {
                if(item.userID === userSelected.userID){
                    return item = {...userSelected,
                        permissions:  [...userSelected.permissions, permissId]
                    }
                }
                return item;
            })));

            dispatch(AddUserPermission(userSelected.userID, permissId.id));


        }else if(   userSelected && userSelected.permissions.length > 0 &&
                    userSelected.permissions.filter( item =>  item.id === permissId.id).length !== 0){
            setUserSelected({...userSelected,
                permissions: userSelected.permissions.filter(el => el.id !== permissId.id)
            })
            dispatch(GetAllUsersSuccess( allUsers.map(item => {
                if(item.userID === userSelected.userID){
                    return item = {...userSelected,
                        permissions: userSelected.permissions.filter(el => el.id !== permissId.id)
                    }
                }
                return item;
            })));

            dispatch(RemoveUserPermission(userSelected.userID, permissId.id));
        }
        
    }

    return (
        <section className="container_permissionsManage_component permissionsManage_component_rigth">
            <div className="permissionsManage_component_container_title">
                <h3 className="permissionsManage_component_title"> Permisos </h3>
            </div>
            <div className="permissionsManage_component_container_cards permissionsManage_component_cards_rigth">
                {
                    permissionsList && permissionsList.length > 0 &&
                        permissionsList.map(el => (
                            <div className={ 
                                userSelected && userSelected.permissions.length > 0 &&
                                userSelected.permissions.filter( item =>  item.id === el.id).length !== 0  
                                    ? 'permissionsManage_component_container_card_selected'
                                    : 'permissionsManage_component_container_card'}
                                onClick={() => handleSystemCardClick(el)} 
                                key={el.id}
                            >
                                <div className="permissionsManage_component_card_container_info">
                                    <span className="">{convertPermisionName[(el.permissionTypeDescription).replace(' ', '')]}</span>
                                </div>
                                <div className="permissionsManage_component_card_container_arrow">
                                    <span className='arrowRight'></span>
                                </div>

                            </div>

                        ))
                }

            </div>
        </section>
    )
}

PermissionsManagementComponent.propTypes={
    userSelected: PropTypes.any,
    setUserSelected: PropTypes.any,
}
