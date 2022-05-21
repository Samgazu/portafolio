import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter } from "react-router-dom";
import Button from '../../../../../components/shared/Atoms/Button';
import { useHistory } from 'react-router-dom';
import './UserRightBar.scss';
import PropTypes from 'prop-types';


import UserProfileData from './UserProfileData';
import UsersTabBase from './UsersTabBase';
import PatientsRightBarInfo from './PatientsRightBarInfo';

import bigBlueBorderImage from '../../../../../assets/img/512PX/Logo_TSI_512PX.jpg';
// import bigBlueBorderImage from '../../../../../assets/img/512PX/boy-blue-border.png';
import { setSellerUser } from '../../../../../actions/allUsersAction';



const UserRightBar = ( {selectedSeller, setSelectedSeller} ) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [ userRol, setUserRol ] = useState(null)
    const [ userInfo, setUserInfo ] = useState(null)
    const data = useSelector(state => state.allUsers);
    const userId = useSelector(state => state.user.user.identity);

    useEffect(() => {
        if (data.selectedUserInfo && data.selectedUserInfo.length > 0) {
            setUserInfo(data.selectedUserInfo[0])
        }
        if (data.userRolSelected) {
            setUserRol(data.userRolSelected)
        }
    }, [data])

    const renderSecondPartUserInstitutions = () => {
        return (
            <div className={'doctor-right-bar-header second-part-header'}>
                <div className={'profile-image'}>
                </div>
                <div className={'profile-data'}>
                    <div className={"profile-data-element"}>
                        <div className={"profile-content"}>
                            <span className={"requirements_title"}>Requerimientos</span>
                        </div>
                        <div className={"requirements_content"}>
                        { 
                            userInfo.requirements &&  
                            userInfo.requirements.map((item) => {
                                return (
                                    <p>{item.description}</p>
                                );
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
            )
    }

    const renderHeader = () => {
        return (
            <>
            <div className={'doctor-right-bar-header'}>
                <div className={'profile-image'}>
                    <div className={"profile-image-border"}>
                        <img src={bigBlueBorderImage} alt={"image"} />
                    </div>
                </div>
                <UserProfileData userData={userInfo}/>
            </div>
                {
                    userRol && userRol == 'institutions' &&
                    renderSecondPartUserInstitutions()
                }
            </>
        );
    };

    const usersOnClick = () => {
        history.goBack();
    };

    const permisosVentorsView = () => {
        dispatch(setSellerUser(selectedSeller));
        setSelectedSeller(null);
        history.replace('/usuarios/vendedores/permisos');
    }

    return (
        <div className={'doctor-right-bar'}>
            <div className={'doctor-right-bar-buttons-container'}>
            {
                userRol=== 'seller' && selectedSeller &&userId&&(userId.roleID === -1 ||userId.roleID === 4)&&
                <Button color={"blue_light"} title={"PERMISOS"} onClick={permisosVentorsView}/>
            }
                <Button color={"blue_light"} title={"USUARIOS"} onClick={usersOnClick}/>
            </div>
            {
                
                <div>
                    {
                        selectedSeller &&
                        userRol && userRol != 'patients' &&
                        renderHeader()
                    }
                    {
                        userRol=== 'seller' && selectedSeller &&userId&&(userId.roleID === -1 ||userId.roleID === 4)&&
                        <>
                             <UserProfileData userData={userInfo}/> 
                             <PatientsRightBarInfo/> 
                        </>

                    }
                    {
                        userRol && userRol == 'institutions' &&
                        <>
                            <div className={'institutions-right-bar-buttons-container'}>
                                <Button color={"blue_light_reverse"} title={"UBICACIÓN"} onClick={usersOnClick}/>
                            </div>
                            <hr className={"separate-dark-line"}/>
                        </>

                    } 
                    {userRol && ( userRol != 'patients' && userRol != 'institutions' ) && 
                    
                        userRol=== 'seller' && selectedSeller &&userId&&(userId.roleID === -1 ||userId.roleID === 4)&&
                        <UsersTabBase/>
                       
                    
                    }
                </div>
            }
        </div>
    );
}


function mapStateToProps (state) {
    return {
        ...state,
    };
}

UserRightBar.propTypes = {
    selectedSeller: PropTypes.any,
    setSelectedSeller: PropTypes.any,
}

export default withRouter(connect(mapStateToProps)(UserRightBar));