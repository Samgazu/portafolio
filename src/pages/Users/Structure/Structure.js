import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from "react-router-dom";
import { SubNavBarComponent } from '../../../components/layouts/layout1/subnavbar/SubNavBarComponent';
import './Structure.scss';
import UserLeftBar from './Bar/UserLeftBar/UserLeftBar';
import UserRightBar from './Bar/UserRightBar/UserRightBar';


export const DoctorsHome = ( ) => {
    const [selectedSeller, setSelectedSeller] = useState(null);

    return (
        <div className="DoctorsHome-principal-container">
            <SubNavBarComponent title={`Usuario`} historyPage={"/usuarios"}/>
            <div className={"DoctorsHome-main-page-container"}>
                <div className={"DoctorsHome-left-bar"}>
                    <UserLeftBar  selectedSeller={selectedSeller} setSelectedSeller={setSelectedSeller} />
                </div>
                <div className={"DoctorsHome-right-bar"}>
                    <UserRightBar selectedSeller={selectedSeller} setSelectedSeller={setSelectedSeller} />
                </div>
            </div>
        </div>
    )
}


function mapStateToProps (state) {
    return {
        ...state,
    };
}


export default withRouter(connect(mapStateToProps)(DoctorsHome));