import React from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addConfigurationNameSuccess } from '../../../actions/systemsAction';
import { useForm } from '../../../hooks/useForm';
import './sass/styles.sass';
import PropTypes from 'prop-types';

export const FactoryConfigModalNewConfig = (props) => {

        const dispatch = useDispatch();

        const [formValues, handleInputChange, reset] = useForm({
            nameConfig: '',
          });
        
          const { nameConfig } = formValues;
        
          const handlNameConfig = (e) => {
            e.preventDefault();
            reset();
            const newConfig = {
                id: shortid.generate(),
                system: props.system,
                configuration: {
                    id: shortid.generate(),
                    name: nameConfig
                }
            }
            props.setConfiguration(newConfig)
            props.setNewConfig(true)
            dispatch( addConfigurationNameSuccess(newConfig));
            props.toggle();
          };
      return (
        <form className="c-FactoryConfigModalNewConfig" onSubmit={handlNameConfig}>
          <div className="c-FactoryConfigModalNewConfig-c-item">
            <input
              className="c-FactoryConfigModalNewConfig-item-name"
              type="text"
              placeholder="Nombre Configuración"
              name="nameConfig"
              value={nameConfig}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className="c-FactoryConfigModalNewConfig-button">
            CONTINUAR
          </button>
        </form>
    )
}


FactoryConfigModalNewConfig.propTypes = {
    toggle:           PropTypes.any,
    system:           PropTypes.any,
    setConfiguration: PropTypes.any,
    setNewConfig:     PropTypes.any,
};
