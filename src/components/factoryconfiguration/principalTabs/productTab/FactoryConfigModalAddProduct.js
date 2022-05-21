import { toInteger } from 'lodash';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsConfigurationSuccess, postAddNewProductToConfig } from '../../../../actions/systemsAction';
import { useForm } from '../../../../hooks/useForm';
import PropTypes from 'prop-types';

export const FactoryConfigModalAddProduct = (props) => {
  const {configuration, newConfig, selectedProduct, setNewProductModal } = props;
  const dispatch = useDispatch();
  
  const constructNewConfig = useSelector(state => state.systems.constructNewConfig)

  const [formValues, handleInputChange, reset] = useForm({
    numberOfProduct: '',
  });

  const { numberOfProduct } = formValues;

  const handlNumberOfProduct = (e) => {
    e.preventDefault();
    reset();

    if(!newConfig){
      dispatch( postAddNewProductToConfig(
        { productQuantity: toInteger(numberOfProduct),
          ProductId: selectedProduct.id,
          ConfigurationId: configuration.configuration.id
        }));
      setNewProductModal(true);
    }

    let newAddProduct = { productQuantity: toInteger(numberOfProduct), product: selectedProduct };
    if( constructNewConfig && newConfig && constructNewConfig.configuration.items ){
        const addMoreProducts = constructNewConfig.configuration.items.map( items => items );
        dispatch(addProductsConfigurationSuccess( [...addMoreProducts, newAddProduct]));
    }else{
        newConfig&&
          dispatch(addProductsConfigurationSuccess( [newAddProduct] ));
    }
    props.toggle();
  };

  return (
    <form className="c-FactoryConfigModalNewConfig" onSubmit={handlNumberOfProduct}>
      <div className="c-FactoryConfigModalNewConfig-c-item">
        <input
          className="c-FactoryConfigModalNewConfig-item-name"
          type="number"
          placeholder="Cantidad..."
          name="numberOfProduct"
          value={numberOfProduct}
          onChange={handleInputChange}
          autoComplete="off"
          min={1}
          required
        />
      </div>
      <button type="submit" className="c-FactoryConfigModalNewConfig-button">
        CONTINUAR
      </button>
    </form>
  );
};

FactoryConfigModalAddProduct.propTypes = {
  newConfig: PropTypes.any,
  selectedProduct: PropTypes.any,
  configuration: PropTypes.any,
  toggle: PropTypes.any,
  setNewProductModal: PropTypes.any,
};

