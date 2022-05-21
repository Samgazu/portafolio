import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './SellerHome.scss';
import Structure from '../Structure/Structure';
import { setUserRolSelected } from '../../../actions/allUsersAction';


export const SellerHome = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUserRolSelected('seller'));
    }, [])
    return (
        <>
            <Structure />
        </>
    )
}