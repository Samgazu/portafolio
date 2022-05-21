import React, { useState } from 'react';
import './sass/styles.sass';
import { FactoryConfigurationSystemList } from '../../components/factoryconfiguration/systemList/FactoryConfigurationSystemList'
import { FactoryConfigurationConfigList } from '../../components/factoryconfiguration/configurationList/FactoryConfigurationConfigList';
import { SubNavBarComponent } from '../../components/layouts/layout1/subnavbar/SubNavBarComponent';
import { FactoryConfigurationCardComponent } from '../../components/factoryconfiguration/configurationCardInfo/FactoryConfigurationCardComponent';
import { FactoryConfigurationTabs } from '../../components/factoryconfiguration/principalTabs/FactoryConfigurationTabs';

export const FactoryConfigurationScreen = () => {


    const [system, setSystem] = useState({});
    const [configuration, setConfiguration] = useState({})
    const [newConfig, setNewConfig] = useState(false);
    const [activeTab, setActiveTab] = useState('CIRUGIA');

    return (
        <div className="container-factoryConfig">
            <SubNavBarComponent title={'Plantillas de Configuraciónes'} searchActive={false} />
            <div className="container-factoryConfig-structure">
                <div className="factoryConfig-container-select-items">
                    <FactoryConfigurationSystemList  
                        setSystem={setSystem} 
                        system={system}
                        setConfiguration={setConfiguration}
                        setActiveTab={setActiveTab} 
                        className='factoryConfig-container-system'/>
                {
                    Object.values(system).length !== 0 &&(
                        <FactoryConfigurationConfigList 
                        setConfiguration={setConfiguration} 
                        system={system}
                        configuration={configuration}
                        setNewConfig={setNewConfig}
                        setActiveTab={setActiveTab} 
                        className='factoryConfig-container-config'/>
                    )
                }
                    
                </div>
            {
                Object.values(system).length !== 0 &&(
                    <div className="factoryConfig-container-construct-config animate__animated animate__fadeIn">
                        <div className="factoryConfig-construct-container-config-card">
                            <FactoryConfigurationCardComponent
                                className='factoryConfig-construct-config-card'
                                system={system}
                                configuration={configuration} />
                        </div>
                        <div className=" factoryConfig-container-tabs ">
                            <FactoryConfigurationTabs
                                system={system}
                                setSystem={setSystem}
                                newConfig={newConfig}
                                configuration={configuration}
                                setNewConfig={setNewConfig}
                                setConfiguration={setConfiguration}
                                activeTab={activeTab} 
                                setActiveTab={setActiveTab}
                            />
                        </div>
                    </div>
                )
            }


            </div>
        </div>
    )
}
