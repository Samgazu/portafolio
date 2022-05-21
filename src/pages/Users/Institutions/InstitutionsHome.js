import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './InstitutionsHome.scss';
import Structure from '../Structure/Structure';
import { setUserRolSelected } from '../../../actions/allUsersAction';


export const InstitutionsHome = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUserRolSelected('institutions')); 
    }, [])
    return (
        <>
            <Structure />
        </>
    )
}