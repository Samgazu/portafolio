import React from 'react';
import './ListItem2.scss';

// ICONS
import blueArrow from '../../../assets/img/126PX/blue-arrow.png'

const ListItem2 = ({id, title, subtitle, subtitle2}) => {
    const handleClick= () => {
    
    };

    return (
        <>
            <div className={"profile-card-container"} onClick={handleClick}>
                <div className={"blue-line-content"}></div>
                <div className={"profile-card-bar"}>
                    <span className={'title-leftlist'}>{title}</span>
                    {
                        subtitle && <span className={'subtitle-leftlist'}>{subtitle}</span>
                    }
                    {
                        subtitle2 && <span className={'subtitle2-leftlist'}>{subtitle2}</span>
                    }
                    {
                        <img className={"arrowIcon"} src={blueArrow} alt=""/>
                    }
                    {
                        /*<img className={"arrowIcon"} src={whiteArrow} alt=""/>*/
                    }
                </div>
            </div>
        </>
    )
};

export default ListItem2;
