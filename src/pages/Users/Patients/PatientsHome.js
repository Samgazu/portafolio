
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './PatientsHome.scss';
import Structure from '../Structure/Structure';
import { setUserRolSelected } from '../../../actions/allUsersAction';


export const PatientsHome = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUserRolSelected('patients')); 
    }, [])
    return (
        <>
            <Structure />
        </>
    )
}