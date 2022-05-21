import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUsers, GetAllUsersSuccess, SearchUsers } from '../../actions/userActions';
import './sass/styles.scss';
import PropTypes from 'prop-types';

export const UsersPermissionsManagementComponent = ({setUserSelected, userSelected}) => {

    const dispatch = useDispatch();
    const [searchUser, setSearchUser] = useState("");
    const [users, setUsers] = useState(null);
    const allUsers = useSelector(state => state.user.allUsers);
    const searchUserState = useSelector(state => state.user.searchUsers);

    const handleSelectUserCardClick = (userId) => {
        setUserSelected(userId)
    }

    const [list, setList] = useState([]);     
  
  useEffect(() => {
    if(list && list.length > 0){
    setList([...list,...allUsers])
    }else if(allUsers && allUsers.length > 0){
      setList(allUsers)
    }
  },[allUsers])

    const [currentPage, setPage] = useState(0);
    
    const handleScroll = (event) => {
        const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
        
        if(scrollHeight-Math.round(scrollTop) === clientHeight){
            setPage(prev => prev + 1)
        }
    }


    /* useEffect(() => {
        dispatch( GetAllUsers(0,1000) );
    }, [currentPage]) */

    useEffect(() => {
        dispatch( GetAllUsers(0,1000) );
        return () => {
            dispatch( GetAllUsersSuccess([]) );
        }
    }, [])

    useEffect(() => {
        if(list && searchUser.trim().length === 0){
            setUsers(list)
        }else if(searchUserState && searchUser.trim().length !== 0){
            setUsers(searchUserState)
        }
    }, [list, searchUserState, searchUser])


    useEffect(() => {
        if(searchUser.trim().length !== 0 ){
            dispatch(SearchUsers( searchUser));
        }
    }, [searchUser]);


    const handleSearchUser = (e) => {
            e.preventDefault();
            dispatch(SearchUsers( searchUser ));
    }


    const covertRolId = (rol) => {

        switch (rol) {
            case 1:
                return 'Vendedor';
                break;
            case 2:
                return 'Medico';
                break;
            case 3:
                return 'Totvs';
                break;
            case 4:
                return 'Administrador';
                break;
            case 5:
                return 'ATQ';
                break;
            case 6:
                return 'Supervisor de zona';
                break;
            case 7:
                return 'Distribuidor';
                break;
            case 8:
                return 'Licitador';
                break;
            case 9:
                return 'Director';
                break;
            case 10:
                return 'Departamento Facturacion';
                break;
            case 11:
                return 'Administrador ATQ';
                break;
            case 12:
                return 'Mensajero';
                break;
            case 13:
                return 'Almacén';
                break;
            default:
                break;
        }
    }


    return (
        <div className="container_permissionsManage_component">
            <div className="permissionsManage_component_container_title">
                <h3 className="permissionsManage_component_title"> Usuarios </h3>
            </div>

            <form className="permissionsManage_component_container_search"
                  onSubmit={handleSearchUser}>
                <input type="text"
                       autoComplete="off"
                       name="searchUser"
                       value={searchUser}
                       onChange={({ target }) => setSearchUser(target.value)}
                       placeholder='Buscar Usuario...'
                       className="permissionsManage_component_search"
                />
            </form>

            <div className="permissionsManage_component_container_cards" >
                {
                    users && users.length > 0 &&
                        users.map( el => (
                            <div    className={ userSelected && el.userID === userSelected.userID ? 'permissionsManage_component_container_card_selected' :'permissionsManage_component_container_card'}
                                    onClick={() => handleSelectUserCardClick(el)} 
                                    key={el.userID}
                            >
                                <div className="permissionsManage_component_card_container_info">
                                    <span className="permissionsManage_component_card_container_info_name">
                                        Nombre: { el.firstName && `${el.firstName} ` } 
                                        { el.secondName && `${el.secondName} ` } 
                                        { el.firstLastName && `${el.firstLastName} `} 
                                        { el.secondLastName && `${el.secondLastName}` }
                                    </span>
                                    <span className="permissionsManage_component_card_container_info_mail">
                                        Correo: { el.email && `${el.email} ` } 
                                    </span>
                                    <span className="permissionsManage_component_card_container_info_other">
                                        Rol: { el.roleID && `${covertRolId(el.roleID)} ` } 
                                    </span>
                                    <span className="permissionsManage_component_card_container_info_other">
                                        Phone: { el.phone && `${el.phone} ` } 
                                    </span>
                                </div>
                                <div className="permissionsManage_component_card_container_arrow">
                                    <span className='arrowRight'></span>
                                </div>

                            </div>
                        ))
                }
            </div>
    </div>
    )
}

UsersPermissionsManagementComponent.propTypes = {
    setUserSelected: PropTypes.any,
    userSelected: PropTypes.any
};
