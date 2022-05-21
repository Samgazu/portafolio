import React, { useEffect, useState } from 'react';
import './sass/styles.sass';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getBundlesBySystemId, getMainSurgeryType, getSystems } from '../../../actions/systemsAction';

export const FactoryConfigurationSystemList = (props) => {
    
    const systemSelected = props.system;
    const dispatch = useDispatch();
    const systems = useSelector((state) => state.systems);
    
    // const [currentPage, setPage] = useState(0);
    
    // const handleScroll = (event) => {
    //     const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
        
    //     if(scrollHeight-Math.round(scrollTop) === clientHeight){
    //         setPage(prev => prev + 1)
    //     }
    // }

    // useEffect( () => {
    //     dispatch(getSystems(currentPage));
    //     dispatch(getMainSurgeryType(currentPage));
    //  },[currentPage]);
    useEffect( () => {
        dispatch(getSystems());
        dispatch(getMainSurgeryType());
     },[]);

    const handleSystemCardClick = (system) => {
        props.setSystem(system);
        props.setConfiguration({});
        props.setActiveTab('CIRUGIA');
        dispatch(getSystems());
        dispatch(getBundlesBySystemId(system.id));
    }

    return (
        <div className="container-factoryConfigList">
            <div className="factoryConfigList-container-title">
                <h3 className="factoryConfigList-title"> Sistemas </h3>
            </div>
            <div className="factoryConfigList-container-cards" >
                {
                    systems && systems.systemsTemplate && systems.systemsTemplate.map( (system) => (
                        <div className={ system && systemSelected && systemSelected.product && systemSelected.product.id === system.product.id ? 'factoryConfigList-container-card-selected' : 'factoryConfigList-container-card'}
                            onClick={() => handleSystemCardClick(system)} 
                            key={system.product.id}
                        >
                            {/* <div className="factoryConfigList-card-container-img">
                                <img className="factoryConfigList-card-img" src={system.product.productImage} alt=""/>
                            </div> */}

                            <div className="factoryConfigList-card-container-info">
                                <span className="">{system.product.productDescription}</span>
                            </div>
                            <div className="factoryConfigList-card-container-arrow">
                                <span className='arrowRight'></span>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

FactoryConfigurationSystemList.propTypes = {
    setSystem:        PropTypes.any,
    setConfiguration: PropTypes.any,
    setActiveTab:     PropTypes.any,
};





