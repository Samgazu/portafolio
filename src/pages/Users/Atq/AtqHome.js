import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './AtqHome.scss';
import Structure from '../Structure/Structure';
import { setUserRolSelected } from '../../../actions/allUsersAction';


export const AtqHome = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUserRolSelected('atq'));
    }, [])
    return (
        <>
            <Structure />
        </>
    )
}