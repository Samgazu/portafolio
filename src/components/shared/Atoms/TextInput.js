/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import './TextInput.scss';


const TextInput = ({ title }) => {
    return (
        <div className={'text-input'}>
            <span className={'text-input-title'}>{title}</span>
            <input className={'text-input-input'} type={"text"} />
        </div>
    );
}


function mapStateToProps (state) {
    return {
        ...state,
    };
}


export default withRouter(connect(mapStateToProps)(TextInput));