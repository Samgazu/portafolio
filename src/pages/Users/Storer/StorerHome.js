import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './StorerHome.scss';
import Structure from '../Structure/Structure';
import { setUserRolSelected } from '../../../actions/allUsersAction';


export const StorerHome = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUserRolSelected('storer'));
    }, [])
    return (
        <>
            <Structure />
        </>
    )
}