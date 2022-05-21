import React, { useEffect, useRef, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { withRouter } from "react-router-dom";
// import './DoctorsLeftBar.sass';
import ListItem1 from '../../../../../components/shared/Molecules/ListItem1';
import SearchInput from '../../../../../components/shared/Atoms/SearchInput';

import grayBorderImage from '../../../../../assets/img/512PX/Logo_TSI_512PX.jpg';
// import grayBorderImage from '../../../../../assets/img/126PX/boy-border-gray.png';
import { getSellers, getUserIdSelected, getUsersByRoleId, getUsersByRoleIdSuccess, setUserIdSelected } from '../../../../../actions/allUsersAction';

import { getMedicsList } from '../../../../../actions/allUsersAction';
import { routesFilt, responsesFilt, rolsTypes } from '../../Vars';
import PropTypes from 'prop-types';
// STYLES 
import './UserLeftBar.scss';
import { useParams } from 'react-router-dom';

const UserLeftBar = ( {selectedSeller, setSelectedSeller} ) => {

    const {vendedores} = useParams();
    const dispatch = useDispatch();
    const [ doctors, setDoctors ] = useState(null)
    const data = useSelector(state => state.allUsers);
    const listUsersByRoleId = useSelector(state => state.allUsers.listUsersByRoleId);
    const [selectedTabId, setSelectedTabId] = useState(null);
    const [list, setList] = useState(null);
    const infoListComplete = useRef();



    useEffect(() => {
        if ( data.userRolSelected ) { 
            dispatch(getMedicsList(0, 10, routesFilt[data.userRolSelected])); 
        }
    }, [data.userRolSelected])
    useEffect(() => {
        if ( data.getMedicsList ) {
            setDoctors(data.getMedicsList[responsesFilt[data.userRolSelected]])
        }
    }, [data])

    useEffect(() => {
        if(vendedores){
            if(!list && !listUsersByRoleId){
                dispatch(getUsersByRoleId({currentPage: 0, offset: 100, roleId: 1}))
            }
            else if(list && !infoListComplete.current){
                infoListComplete.current = 'begin';
                dispatch(getUsersByRoleId({currentPage: 0, offset: 100, roleId: 6}))
            }
           else if(!list && listUsersByRoleId){
                setList(listUsersByRoleId);
                dispatch(getUsersByRoleIdSuccess(null))
            }
           else if(list && listUsersByRoleId && infoListComplete.current === 'begin'){
                infoListComplete.current = 'complete';
                setList([...list,...listUsersByRoleId])
            }
        }
    }, [listUsersByRoleId])
    
    
    useEffect(() => {
        return () => {dispatch(getUsersByRoleIdSuccess(null))}
    }, [])





    const selectedTabIdContent = (item) => {
        setSelectedTabId(item.userID)
        dispatch(setUserIdSelected(item.userID));
        dispatch(getUserIdSelected(item.userID, [responsesFilt[data.userRolSelected]]));
        setSelectedSeller(item)
    }
    
    const renderProfileCard = (item) => { 

        return (
            <div onClick={() => selectedTabIdContent(item)}>
                {
                    vendedores && listUsersByRoleId && listUsersByRoleId.length > 0 &&
                        <ListItem1 
                            id={item.userID} 
                            userSeller={selectedSeller}
                            key = {item.userID}
                            img={grayBorderImage} 
                            title = { item.sellerShortName&& item.sellerShortName }
                            subtitle2 = {item.email}
                            selectedTabId={selectedTabId}
                        />
                }

            </div>
        );
    };

    return (
        <div>
            <h1 className={"leftTitle"}>Directorio {rolsTypes[data.userRolSelected]}</h1>
            <div className={"search_container"}>
                {/* <SearchInput /> */}
            </div>
            <div className={'profile-list'}>
                {
                    vendedores && list && list.length > 0 && 
                    list.map(renderProfileCard)
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

UserLeftBar.propTypes = {
    selectedSeller: PropTypes.any,
    setSelectedSeller: PropTypes.any,
}


export default withRouter(connect(mapStateToProps)(UserLeftBar));