import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

//const userSelectedId = useSelector(state => state.data.selectedUserId);
//const userList = useSelector(state => state.allUsers.listUsersByRoleId);

/* useEffect(() =>{
    if(userSelectedId){
        setUserSelected(userList.find((userId) => userId.userID === userSelectedId));
     }
  },[userSelectedId])
 */



const UserProfileData = (userData) => {

    const [userSelected,setUserSelected] = useState(null);

const userSelectedId = useSelector(state => state.allUsers.selectedUserId);
const userList = useSelector(state => state.allUsers.listUsersByRoleId);

 useEffect(() =>{
    if(userSelectedId){
        setUserSelected(userList.find((userId) => userId.userID === userSelectedId));
     }
  },[userSelectedId])
//   console.log('aqui',userSelected); 


    const [ userRol, setUserRol ] = useState(null)
    const data = useSelector(state => state.allUsers);
    useEffect(() => {
        if (data.userRolSelected) {
            setUserRol(data.userRolSelected)
        }
    }, [data])
    const doctorsInfo = () => {
        return (
            <>
            {
                <span className={"bigBlueText"}>Dr. </span>
            }
                <span className={"subtitleProfile"}>Cirujano traumatólogo ortopedista</span>
                <span className={"subtitleProfile"}>Hospital San Javier</span>
            </>
        )
    }
    const patientsInfo = () => {
        return (
            <>
                <div className={'patients-right-bar-header'}>
                    <div className={'profile-data'}>
                        <span className={"titleProfile"}>Nombre</span>
                    </div>
                    <div className={'profile-data'}>
                        <span className={"titleProfile"}>Características</span>
                    </div>
                </div>
                <div className={'patien-profile-data'}>
                {
                        
                        <div className={'profile-data'}>
                            <span className={"bigBlueText"}></span>
                        </div>
                    }
                    <div className={"profile-data-content"}>
                        <div className={"profile-data-two-columns"}>
                            <span className={"subtitleProfileDark"}>Tipo de CX</span>
                            <span className={"subtitleProfile"}>Cirugía toracica</span>
                        </div>
                        <div className={"profile-data-two-columns"}>
                            <span className={"subtitleProfileDark"}>Sistema</span>
                            <span className={"subtitleProfile"}>Neon</span>
                        </div>
                        <div className={"profile-data-two-columns"}>
                            <span className={"subtitleProfileDark"}>No. de seguro de social</span>
                            <span className={"subtitleProfile"}>XXXXXXXXXXXXXXX</span>
                        </div>
                        <div className={"profile-data-two-columns"}>
                            <span className={"subtitleProfileDark"}>No. de Afiliación </span>
                            <span className={"subtitleProfile"}>XXXXXXX</span>
                        </div>
                        <div className={"profile-data-two-columns"}>
                            <span className={"subtitleProfileDark"}>Ultima CX</span>
                            <span className={"subtitleProfile"}>En caso de que haya tenido alguna otra CX</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    const institutionsInfo = () => {
        return (
            <>
            <div className={"profile-data-element"}>
                <div className={"profile-content"}>
                    {
                        
                            <span className={"bigBlueText"}></span>
                    }
                </div>
                <div className={"direction_content"}>
                    <p>Calzada Lázaro Cardenas <span>4149</span></p>
                    <p>Col. Jardín de San Ignacio - CP. 45040</p>
                    {
                        
                        <p></p>
                    }
                    <p>33 1078 8900</p>
                </div>
            </div>
            </>
        )
    }
    const otherUsersInfo = () => {
        return (
            <>
            {
                <span className={"bigBlueText"}>{userSelected && userSelected.firstName && userSelected.firstName} {userSelected && userSelected.secondName} 
                {userSelected && userSelected.firstLastName} { userSelected && userSelected.secondLastName} </span>
            }
            {
                <span className={"subtitleProfile"}>{userSelected && userSelected.phone}</span>
            }
            {
                <span className={"subtitleProfile"}>{userSelected && userSelected.email} </span>
            }
            </>
        )
    }
    return (
        <div className={'profile-data'}>
            {
                userRol && userRol == 'doctor' &&
                doctorsInfo()
            }
            {
                userRol && userRol == 'patients' &&
                patientsInfo()
            }
            {
                userRol && userRol == 'institutions' &&
                institutionsInfo()
            }
            {
                userRol && ( userRol != '' &&  userRol != null && userRol != 'doctor' && userRol != 'patients' && userRol != 'institutions' ) &&
                otherUsersInfo()
            }
        </div>
    )
}

export default UserProfileData;