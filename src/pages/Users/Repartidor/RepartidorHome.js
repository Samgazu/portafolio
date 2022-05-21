import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './RepartidorHome.scss';
import Structure from '../Structure/Structure';
import { setUserRolSelected } from '../../../actions/allUsersAction';


export const RepartidorHome = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUserRolSelected('delivery'));
    }, [])
    return (
        <>
            <Structure />
        </>
    )
}