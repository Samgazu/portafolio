import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './DoctorsHome.scss';
import Structure from '../Structure/Structure';
import { setUserRolSelected } from '../../../actions/allUsersAction';


export const DoctorsHome = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUserRolSelected('doctor'));
    }, [])
    return (
        <>
            <Structure />
        </>
    )
}