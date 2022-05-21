import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetPermission } from '../../actions/userActions';
import { SubNavBarComponent } from '../../components/layouts/layout1/subnavbar/SubNavBarComponent';
import { PermissionsManagementComponent } from '../../components/PermissionsManagement/PermissionsManagementComponent';
import { UsersPermissionsManagementComponent } from '../../components/PermissionsManagement/UsersPermissionsManagementComponent';
import './sass/styles.scss';

export const PermissionsManagementScreen = () => {
    const dispatch = useDispatch();
    const [userSelected, setUserSelected] = useState(null);

    useEffect(() => {
        dispatch( GetPermission() )
        // return () => {
        // }
    }, [])


    return (

        <div className="container_PermissionsManage">

            <SubNavBarComponent title={'Permisos de Usuario'} searchActive={false} />
            <div className="container_PermissionsManage_Components">

                <UsersPermissionsManagementComponent setUserSelected={setUserSelected} userSelected={userSelected}/>
                <PermissionsManagementComponent setUserSelected={setUserSelected} userSelected={userSelected} />
            </div>

        </div>
    )
}
