import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../actions/systemsAction';
import { FactoryConfigurationProductTab } from './productTab/FactoryConfigurationProductTab';
import './sass/styles.sass';
import PropTypes from 'prop-types';
import { FactoryConfiguratonSurgeryTab } from './surgeryTab/FactoryConfiguratonSurgeryTab';

export const FactoryConfigurationTabs = (props) => {

    const products = useSelector(state => state.systems.products);
    const {configuration, system, newConfig, activeTab, setActiveTab, setSystem, setConfiguration } = props;

    const dispatch = useDispatch();
    
    const handleChangeTab = (type) => {
        setActiveTab( type );
        if( type === 'PRODUCTO' && !products ){
            dispatch( getProducts() );
        }
    }


    return (
        <div className="container-factoryConfigurationPrincipalTabs">
            <div className="factoryConfigurationPrincipalTabs-container-tabs">
                    <button className={ activeTab === 'CIRUGIA' 
                        ? 'factoryConfigurationPrincipalTabs-tab factoryConfigurationPrincipalTabs-cirugia tab-active'
                        : 'factoryConfigurationPrincipalTabs-tab factoryConfigurationPrincipalTabs-cirugia'}
                        onClick={() => handleChangeTab('CIRUGIA') }>
                        Tipo Cirugía
                    </button>
                    <button className={ activeTab === 'PRODUCTO'
                        ? "factoryConfigurationPrincipalTabs-tab factoryConfigurationPrincipalTabs-product tab-active"
                        : "factoryConfigurationPrincipalTabs-tab factoryConfigurationPrincipalTabs-product"}
                        onClick={() => handleChangeTab('PRODUCTO') } disabled={ Object.values(configuration).length !== 0 ? false : true }>
                        Producto
                    </button>
            </div>
            
            {
                activeTab === 'CIRUGIA' &&
                <div className="factoryConfigurationPrincipalTabs-container-surgery">
                    <FactoryConfiguratonSurgeryTab 
                        system={system} 
                        configuration={configuration}
                        setNewConfig={props.setNewConfig}
                        setConfiguration={props.setConfiguration}
                        newConfig={newConfig}
                        setSystem={setSystem}
                    />
                </div>
            }

            {
                activeTab === 'PRODUCTO' &&
                <div className="factoryConfigurationPrincipalTabs-container-products">
                    <FactoryConfigurationProductTab 
                        className='factoryConfigurationPrincipalTabs-products'
                        configuration={configuration}
                        newConfig={newConfig}
                        setSystem={props.setSystem}
                        setConfiguration={setConfiguration}
                    />
                </div>
            }

        </div>
    )
}


FactoryConfigurationTabs.propTypes = {
    system:             PropTypes.any,
    setSystem:          PropTypes.any,
    newConfig:          PropTypes.any,
    configuration:      PropTypes.any,
    setNewConfig:       PropTypes.any,
    setConfiguration:   PropTypes.any,
    activeTab:          PropTypes.any,
    setActiveTab:       PropTypes.any,
};

