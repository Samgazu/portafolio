import React, { useEffect, useState } from 'react';
import { FactoryConfigurationSystemTab } from './FactoryConfigurationSystemTab';
import './sass/styles.sass';
import PropTypes from 'prop-types';

export const FactoryConfiguratonSurgeryTab = (props) => {
    const [activeTab, setActiveTab] = useState('SYSTEM');

    const {system, newConfig, configuration, setSystem} = props;
    
    useEffect(() => {
        if(Object.values(configuration).length === 0 ){
            setActiveTab( 'SYSTEM' );
        }
    }, [configuration])

    const handleChangeTab = (type) => {
        setActiveTab( type );
    }
    return (
        <div className="container-factoryConfigurationSecundaryTabs">
            <div className="factoryConfigurationSecundaryTabs-container-tabs">
                    <button className={ activeTab === 'SYSTEM' 
                        ? 'factoryConfigurationSecundaryTabs-tab factoryConfigurationSecundaryTabs-sistem secundary-tab-active'
                        : 'factoryConfigurationSecundaryTabs-tab factoryConfigurationSecundaryTabs-sistem'}
                        onClick={() => handleChangeTab('SYSTEM') }>
                        SISTEMA PARA: 
                    </button>
                    <button className={ activeTab === 'CONFIG'
                        ? "factoryConfigurationSecundaryTabs-tab factoryConfigurationSecundaryTabs-config secundary-tab-active"
                        : "factoryConfigurationSecundaryTabs-tab factoryConfigurationSecundaryTabs-config"}
                        onClick={() => handleChangeTab('CONFIG') } disabled={ Object.values(configuration).length !== 0 ? false : true }>
                        CONFIGURACIÓN PARA:
                    </button>
            </div>
            {
                activeTab === 'SYSTEM'&&
                    <div className="factoryConfigurationSecundaryTabs-tab-system">
                        <FactoryConfigurationSystemTab 
                            system={system} 
                            configuration={configuration} 
                            activeTab={activeTab}
                            newConfig={newConfig}
                            setNewConfig={props.setNewConfig}
                            setSystem={setSystem}
                        />
                    </div>
            }
            {
                activeTab === 'CONFIG'&&
                    <div className="factoryConfigurationSecundaryTabs-tab-system">
                        <FactoryConfigurationSystemTab 
                            system={system} 
                            configuration={configuration} 
                            activeTab={activeTab}
                            setNewConfig={props.setNewConfig}
                            setConfiguration={props.setConfiguration}
                            newConfig={newConfig}
                        />
                    </div>
            }
            
        </div>
    )
}

FactoryConfiguratonSurgeryTab.propTypes = {
    system:             PropTypes.any,
    newConfig:          PropTypes.any,
    configuration:      PropTypes.any,
    setNewConfig:       PropTypes.any,
    setConfiguration:   PropTypes.any,
    setSystem:          PropTypes.any,
};
