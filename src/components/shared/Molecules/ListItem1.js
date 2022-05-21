import React from 'react';
import './ListItem1.scss';
import PropTypes from 'prop-types';

// ICONS

import blueArrow from '../../../assets/img/126PX/blue-arrow.png'
import whiteArrow from '../../../assets/img/126PX/white-arrow.png'


const ListItem1 = ({id, selectedTabId, img=null,title='', subtitle='', subtitle2='', page=null}) => {

    // const handleClick= () => {
    //   };

    return (
        <>
            <div className={['profile-card-container', id == selectedTabId ? 'profile-blue-card-container' : ''].join(' ')}>
                <div className={"blue-line-content"}></div>
                {
                    img &&
                    <div className={['profile-card-left-bar', !img ? 'noImage' : ''].join(' ')}>
                        <div className={"image-circle"}>
                            <img src={img} alt={title} />
                        </div>
                    </div>
                }
                <div className={['profile-card-right-bar', !img ? 'allwidthpart' : ''].join(' ')}>
                {
                    page 
                    ?<span className={'title-left'}>{title}</span>
                    :<span className={'title-leftlist'}>{title}</span>
                }
                    
                    {
                        subtitle && <span className={'subtitle-leftlist'}>{subtitle}</span>
                    }
                    {
                        subtitle2 && <span className={'subtitle2-leftlist'}>{subtitle2}</span>
                    }
                    {
                        id != selectedTabId &&
                        <img className={"arrowIcon"} src={blueArrow} alt=""/>
                    }
                    {
                        id == selectedTabId &&
                        <img className={"arrowIcon"} src={whiteArrow} alt=""/>
                    }
                </div>
            </div>
        </>
    )
};

export default ListItem1;


ListItem1.propTypes = {
    id: PropTypes.any,
    selectedTabId: PropTypes.any,
    img: PropTypes.any,
    title: PropTypes.any,
    subtitle: PropTypes.any,
    subtitle2: PropTypes.any,
}