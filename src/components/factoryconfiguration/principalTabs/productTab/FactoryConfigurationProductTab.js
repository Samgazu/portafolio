import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postNewConfiguration } from '../../../../actions/systemsAction';
import { FactoryConfigurationProductList } from './FactoryConfigurationProductList';
import { FactoryConfigurationProductListAdd } from './FactoryConfigurationProductListAdd';
import './sass/styles.sass';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

export const FactoryConfigurationProductTab = ({configuration, newConfig, setSystem, setConfiguration }) => {
  const dispatch = useDispatch();
  const systems = useSelector((state) => state.systems);

  const handleCreateConfig = () => {
    if (
      systems.constructNewConfig &&
      systems.constructNewConfig.configuration.name &&
      systems.constructNewConfig.configuration.items &&
      systems.constructNewConfig.surgeryTargets &&
      systems.constructNewConfig.system.id
    ) {
      const newQuoteDB = {
        configuration: {
          name: systems.constructNewConfig.configuration.name,
          items: systems.constructNewConfig.configuration.items,
        },
        surgeryTargets: systems.constructNewConfig.surgeryTargets.map(
          (item) => ({ id: item.id })
        ),
        system: { id: systems.constructNewConfig.system.id },
      };
      dispatch(postNewConfiguration(newQuoteDB));
      setSystem({});
      Swal.fire({
        icon: 'success',
        title: 'Configuración Creada',
        text: 'Se creo la configuración con exito',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error ',
        text: 'Parece que faltan elementos para crear una configuración',
      });
    }
  };

  return (
    <section className="container-FactoryConfigurationProductTab">
      {newConfig && (
        <div className="FactoryConfigurationProductTab-container-button-create">
          <button
            className="FactoryConfigurationProductTab-button-create"
            onClick={handleCreateConfig}
          >
            Crear Configuración
          </button>
        </div>
      )}
      <div className="FactoryConfigurationProductTab-container-list-products">
        <div className="FactoryConfigurationProductTab-container-card-product-list">
          <FactoryConfigurationProductList
            configuration={configuration}
            newConfig={newConfig}
            setConfiguration={setConfiguration}
          />
        </div>
        <div className="FactoryConfigurationProductTab-container-card-product-add">
          <FactoryConfigurationProductListAdd
            configuration={configuration}
            newConfig={newConfig}
            setConfiguration={setConfiguration}
          />
        </div>
      </div>
    </section>
  );
};
FactoryConfigurationProductTab.propTypes = {
  configuration: PropTypes.any,
  newConfig: PropTypes.any,
  setSystem: PropTypes.any,
  setConfiguration: PropTypes.any,
};
