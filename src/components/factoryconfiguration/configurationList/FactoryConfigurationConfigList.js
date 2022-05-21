import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './sass/styles.sass';
import icoCerrar from '../../../assets/img/126PX/Icono_Cerrar2_126px.png';
import icoAdd from '../../../assets/img/126PX/Icono_Mas_126px.png';
import { FactoryConfigurationNewConfigModal } from './FactoryConfigurationNewConfigModal';
import { deleteBundleToConfig, deleteConstructNewConfig, updateBundles } from '../../../actions/systemsAction';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

export const FactoryConfigurationConfigList = (props) => {

    const {system} = props;
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(null);
    const [deleteConfig, setDeleteConfig] = useState(false);
    const bundles = useSelector(state => state.systems.bundles);
    const [selectedConfig, setSelectedConfig] = useState({})
    const configurationSelected = props.configuration;
    const systems = useSelector((state) => state.systems);
    const newConfig = useSelector((state) => state.systems.constructNewConfig);
    

    const toggleModal = () => {
        setOpenModal(null);
    };

    const [configBySystem, setConfigBySystem] = useState(systems.bundles);

    useEffect(() => {
        setConfigBySystem(systems.bundles);
    }, [systems.bundles]);

    useEffect(() => {
        if(deleteConfig && selectedConfig){
            let newListBundle = bundles.filter( item => item.id !== selectedConfig.id );
            dispatch( updateBundles(newListBundle) );
            props.setConfiguration({});
            setDeleteConfig(false);
        }

    }, [deleteConfig])
    

    useEffect(() => {
        if( newConfig && Object.values(newConfig).length !== 0 && configBySystem.filter( (item) => newConfig.id === item.id ).length === 0){
            setConfigBySystem( [...configBySystem, newConfig] );
        }else if(newConfig && configBySystem && configBySystem.filter( (item) => newConfig.id === item.id ).length !== 0){
            let remplaceOldNewConfig = configBySystem.filter( (item) => newConfig.id !== item.id );
            remplaceOldNewConfig = [...remplaceOldNewConfig, newConfig];
            setConfigBySystem( remplaceOldNewConfig )
        }
    }, [newConfig]);



    const handleConfigCardClick = (configuration) => {
        props.setConfiguration(configuration);
        props.setActiveTab( 'CIRUGIA' );
        if(systems.bundles&& systems.bundles.filter( (item) => configuration.id !== item.id ).length +1 === (systems.bundles.length )  ){
            setConfigBySystem(systems.bundles);
            dispatch( deleteConstructNewConfig() );
        }
    }

    const handleDeleteConfig = (config) => {
        setSelectedConfig(config);
        Swal.fire({
            title: 'Estás seguro?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteBundleToConfig(config.id));
                setDeleteConfig(true);
              Swal.fire(
                '',
                'Configuración Eliminada.',
                'success'
              )
            }
          })
    }


    return (
        <div className="container-factoryConfigList">
            <div className="factoryConfigList-container-title">
                <h3 className="factoryConfigList-title"> Configuraciones </h3>
            </div>
            <div className="factoryConfigList-container-cards factoryListConfig-cards">
                {
                    system && configBySystem && configBySystem.map( (item) => (
                        <div className={ 'factoryConfigList-container-configuration-card factoryListConfig-configuration-card' }
                             key={item.id}>
                            <div className={configurationSelected && configurationSelected.id === item.id ? 'factoryConfigList-container-configuration-info-card factoryListConfig-configuration-info-card-selected' :"factoryConfigList-container-configuration-info-card factoryListConfig-configuration-info-card"}
                                onClick={() => handleConfigCardClick(item)}
                                key={item.id}
                            >
                                <div className="factoryConfigList-card-container-configuration-info factoryListConfig-card-info-configuration">
                                    <span className="">{item.configuration.name}</span>
                                </div>
                            </div>
                            <button className="factoryConfigList-delete-button" onClick={() => handleDeleteConfig(item)}>
                                <img className='factoryConfigList-delete-buttons-img' src={icoCerrar} alt=""/>
                            </button>
                        </div>
                        ))
                }
            </div>
            <div className="factoryConfigList-container-buttons">
                <button className="factoryConfigList-button" onClick={ () => setOpenModal("newConfiguration") }>
                    <img className='factoryConfigList-buttons-img' src={icoAdd} alt=""/>
                    <span> Agregar Configuración</span>
                </button>
            </div>

            {
                openModal === "newConfiguration" &&
                <FactoryConfigurationNewConfigModal
                    isOpen
                    toggle={toggleModal}
                    system={system}
                    setConfiguration={props.setConfiguration}
                    setNewConfig={props.setNewConfig}
                />
            }
        </div>
    )
}

FactoryConfigurationConfigList.propTypes = {
    setConfiguration: PropTypes.any,
    system:           PropTypes.any,
    setNewConfig:     PropTypes.any,
    setActiveTab:     PropTypes.any,
};
