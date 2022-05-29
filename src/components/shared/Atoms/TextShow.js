/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import './TextShow.scss';


const TextShow = ({ title, description }) => {
    return (
        <div className={"text-element"}>
            <span className={"text-title"}>{title}</span>
            {
                description.length != 2 &&
                <p>{description}</p>
            }
            {
                description.length == 2 &&
                <><p>A</p></>
            }
        </div>
    );
}


function mapStateToProps (state) {
    return {
        ...state,
    };
}


export default withRouter(connect(mapStateToProps)(TextShow));