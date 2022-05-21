import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './AdminAtqHome.scss';
import Structure from '../Structure/Structure';
import { setUserRolSelected } from '../../../actions/allUsersAction';


export const AdminAtqHome = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUserRolSelected('adminAtq'));
    }, [])
    return (
        <>
            <Structure />
        </>
    )
}