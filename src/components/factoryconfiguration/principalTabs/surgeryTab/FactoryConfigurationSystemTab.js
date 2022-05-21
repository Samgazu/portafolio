import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addConfigurationSurgeryTargetsSuccess, postAddNewSurgeryTypeToConfig, postAddNewSurgeryTypeToSystem, postDeleteNewSurgeryTypeToConfig, postDeleteNewSurgeryTypeToSystem, updateBundles } from '../../../../actions/systemsAction';
import { factoryConfigurationDataSurgeryTab } from './factoryConfigurationDataSurgeryTab';
import './sass/styles.sass';
import PropTypes from 'prop-types';

export const FactoryConfigurationSystemTab = (props) => {
    const {system, configuration, activeTab, newConfig, setSystem, setConfiguration } = props;
    const dispatch = useDispatch();

    let surgerySystem = system.targetSurgery;
    let surgeryConfiguration = configuration.surgeryTargets;

    const systemsTemplate = useSelector(state => state.systems.systemsTemplate);
    const bundles = useSelector(state => state.systems.bundles);
    const addSurgerySystem = useSelector(state => state.systems.addSurgerySystem);
    const addSurgeryConfig = useSelector(state => state.systems.addSurgeryConfig);
    const surgeryTargetsConfig = useSelector(state => state.systems.constructNewConfig);

    const [addUpdateSystem, setAddUpdateSystem] = useState(false);
    const [deleteSurgerySystem, setDeleteSurgerySystem] = useState(false);
    const [addUpdateConfig, setAddUpdateConfig] = useState(false);
    const [deleteSurgeryConfig, setDeleteSurgeryConfig] = useState(false);
    const [cxTypeSystem, setCXTypeSystem] = useState(surgerySystem);
    const [cxTypeConfig, setCXTypeConfig] = useState(surgeryConfiguration);
    const [newConfiguration, setNewConfiguration] = useState(false);
    

    useEffect(() => {
        setCXTypeSystem( system.targetSurgery );
    }, [system])

    useEffect(() => {
        setCXTypeConfig([]);
    }, [])


    useEffect(() => {
        systemsTemplate && addSurgerySystem && addUpdateSystem &&
            setSystem( addSurgerySystem );
            setAddUpdateSystem(false);
    }, [addSurgerySystem])
    
    useEffect(() => {
        systemsTemplate && addSurgerySystem && deleteSurgerySystem &&
            setSystem( {...system, targetSurgery: cxTypeSystem});
            setDeleteSurgerySystem(false);
    }, [deleteSurgerySystem])


    useEffect(() => {
        if(systemsTemplate && addSurgeryConfig && addUpdateConfig && bundles){
            setConfiguration( addSurgeryConfig );
            let newListBundle = bundles.filter( item => item.id !== configuration.id );
            newListBundle.unshift(addSurgeryConfig);
            dispatch( updateBundles(newListBundle) );
            setAddUpdateConfig(false);
        }
    }, [addSurgeryConfig])
    
    useEffect(() => {
        if(systemsTemplate && addSurgeryConfig && deleteSurgeryConfig && bundles){
            setConfiguration( {...configuration, surgeryTargets: cxTypeConfig});
            let newListBundle = bundles.filter( item => item.id !== configuration.id );
            newListBundle.unshift({...configuration, surgeryTargets: cxTypeConfig});
            dispatch( updateBundles(newListBundle) );
            setDeleteSurgeryConfig(false);
        }
    }, [deleteSurgeryConfig])


    useEffect(() => {
        if( configuration.surgeryTargets && surgeryTargetsConfig && !surgeryTargetsConfig.surgeryTargets){
            setCXTypeConfig(surgeryConfiguration);
            setNewConfiguration(false);
            newConfig &&
                props.setNewConfig(false);
        }else if( surgeryTargetsConfig && surgeryTargetsConfig.surgeryTargets ){
            setCXTypeConfig(surgeryTargetsConfig.surgeryTargets);
            setNewConfiguration(true);
        }else{
            setNewConfiguration(true);
        }
    }, [configuration, surgeryTargetsConfig])

    const handleCXTypeCardClick = (surgery) => {
        
        if(activeTab === 'SYSTEM'){
            if( cxTypeSystem && cxTypeSystem.filter( (item) => surgery.description === item.description ).length !== 0 ){
                setCXTypeSystem(cxTypeSystem.filter( item => item.description !== surgery.description))
                if( system.targetSurgery.filter( (item) => surgery.description === item.description ).length !== 0 ){
                    dispatch( postDeleteNewSurgeryTypeToSystem(system.id ,surgery.id));
                    setDeleteSurgerySystem(true);
                }
            }else{
                setCXTypeSystem([...cxTypeSystem, surgery])
                if(system.targetSurgery.length === 0 || system.targetSurgery.filter( (item) => surgery.description !== item.description ).length !== 0){
                    dispatch(postAddNewSurgeryTypeToSystem(system.id, surgery.id ));
                    setAddUpdateSystem(true);
                }
            }
        }else if(activeTab === 'CONFIG'){
            if( cxTypeConfig && cxTypeConfig.filter( (item) => surgery.description === item.description ).length !== 0 ){
                let delet = cxTypeConfig.filter( item => item.description !== surgery.description);
                setCXTypeConfig(delet)
                if(!newConfig){
                    dispatch(postDeleteNewSurgeryTypeToConfig( configuration.id , surgery.id ));
                    setDeleteSurgeryConfig(true);
                }
                if(newConfiguration && newConfig){
                    dispatch(addConfigurationSurgeryTargetsSuccess(delet));
                }
            }else{
                let add = [...cxTypeConfig, surgery];
                if(newConfiguration && newConfig){
                    dispatch(addConfigurationSurgeryTargetsSuccess(add));
                }
                if( !newConfig ){
                    dispatch(postAddNewSurgeryTypeToConfig( configuration.id , surgery.id));
                    setAddUpdateConfig(true);
                }
                setCXTypeConfig(add);
            }
        }
    }

    const dataSurgeryTab = factoryConfigurationDataSurgeryTab;

    return (
        <div className="container-FactoryConfigurationSystemTab">
            {
                dataSurgeryTab.map( item => (
                    <button className={
                            activeTab === 'SYSTEM' ? (
                                cxTypeSystem.length !== 0 &&
                                cxTypeSystem.filter( (i) => i.description === item.description ).length !== 0 
                                ? "FactoryConfigurationSystemTab-container-surgery factory-surgery-active"
                                : "FactoryConfigurationSystemTab-container-surgery"
                            ):
                                activeTab === 'CONFIG' && (
                                    cxTypeConfig&&
                                    cxTypeConfig.filter( (i) => i.description === item.description ).length !== 0 
                                    ? "FactoryConfigurationSystemTab-container-surgery factory-surgery-active"
                                    : "FactoryConfigurationSystemTab-container-surgery"
                                )
                            }
                            key={item.idItem}
                            onClick={() => handleCXTypeCardClick(item)}>

                        <div className="FactoryConfigurationSystemTab-surgery-container-img">
                            {
                                activeTab === 'SYSTEM' ? (
                                    cxTypeSystem.length !== 0 &&
                                    cxTypeSystem.filter( (i) => i.description === item.description ).length !== 0 
                                    ? <img src={item.imgBl} alt="" className="FactoryConfigurationSystemTab-surgery-img"/>
                                    : <img src={item.imgNg} alt="" className="FactoryConfigurationSystemTab-surgery-img"/>
                            ):
                                activeTab === 'CONFIG' && (
                                    cxTypeConfig&&
                                    cxTypeConfig.filter( (i) => i.description === item.description ).length !== 0 
                                    ? <img src={item.imgBl} alt="" className="FactoryConfigurationSystemTab-surgery-img"/>
                                    : <img src={item.imgNg} alt="" className="FactoryConfigurationSystemTab-surgery-img"/>
                                )
                            }
                            
                        </div>
                        <div className="FactoryConfigurationSystemTab-surgery-container-title">
                            <h3 className="FactoryConfigurationSystemTab-surgery-title">
                                {item.description}
                            </h3>
                        </div>
                    </button>
                ))
            }
        </div>
    )
}

FactoryConfigurationSystemTab.propTypes = {
    system:             PropTypes.any,
    setSystem:             PropTypes.any,
    configuration:      PropTypes.any,
    activeTab:          PropTypes.any,
    setNewConfig:       PropTypes.any,
    setConfiguration:   PropTypes.any,
    newConfig:          PropTypes.any,
};