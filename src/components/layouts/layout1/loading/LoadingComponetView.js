import React from 'react';
import './styles.scss';
import logo from '../../../../assets/logo.PNG';

export const LoadingComponetView = () => {
    return (
        <div className='loading-container' >
            <img src={logo} alt="" className='loading-img' />
        </div>
    )
}
