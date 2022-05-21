import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductNewConfig, postDeleteNewProductToConfig, updateBundles } from '../../../../actions/systemsAction';
import imgDelete from '../../../../assets/img/126PX/Icono_Cerrar2_126px.png';
import './sass/styles.sass';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

export const FactoryConfigurationProductListAdd = (props) => {
    const {configuration, newConfig, setConfiguration } = props;
    const dispatch = useDispatch();
    const bundles = useSelector(state => state.systems.bundles);
    const constructNewConfig = useSelector(state => state.systems.constructNewConfig)
    const [deleteProductToConfig, setDeleteProductToConfig] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});

    const [itemsToConfig, setItemsToConfig] = useState([]);

    useEffect(() => {
        newConfig&& 
        constructNewConfig&&
        constructNewConfig.configuration&&
        constructNewConfig.configuration.items&&
            setItemsToConfig( constructNewConfig.configuration.items )
        !newConfig&&
        configuration&&
        configuration.configuration&&
        configuration.configuration.items&&
            setItemsToConfig( configuration.configuration.items )
    }, [configuration, constructNewConfig ])

    useEffect(() => {
        if(!newConfig &&
            configuration &&
            configuration.configuration.items &&
            bundles && 
            deleteProductToConfig &&
            selectedProduct){
            let newListProducts = configuration.configuration.items.filter( item => item.id !== selectedProduct.id );
            let newConfig = {...configuration, configuration: {...configuration.configuration, items: newListProducts }};
            let newListBundle = bundles.filter( item => item.id !== newConfig.id );
            newListBundle.unshift(newConfig);
            dispatch( updateBundles(newListBundle) );
            setConfiguration(newConfig)
            setDeleteProductToConfig(false);
        }
    }, [deleteProductToConfig])

    const handleDeleteProductToConfig = ( product ) => {
        setSelectedProduct(product)
        if(!newConfig && configuration && configuration.configuration.items && bundles){
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
                    dispatch(postDeleteNewProductToConfig(configuration.configuration.id, product.product.id ));
                    setDeleteProductToConfig(true);
                  Swal.fire(
                    '',
                    'Producto Eliminado.',
                    'success'
                  )
                }
              })
            
        }
        newConfig&&
        constructNewConfig&&
        constructNewConfig.configuration&&
        constructNewConfig.configuration.items&&
            dispatch(deleteProductNewConfig(constructNewConfig.configuration.items.filter( item => item.product.id !== product.product.id )));
    }

    

    return (
        <section className="container-FactoryConfigurationProductListAdd">
            <h3 className="FactoryConfigurationProductListAdd-container-title">
                Productos de Configuración
            </h3>
            <div className="FactoryConfigurationProductListAdd-container-cards">
                {
                    itemsToConfig&&
                    itemsToConfig.map(item => (
                        <div className="FactoryConfigurationProductListAdd-card-container" key={item.id}>
                            <div className="FactoryConfigurationProductListAdd-card-name-container">
                                {`${item.productQuantity} - ${item.product.productDescription}`}
                            </div>
                            <div className="FactoryConfigurationProductListAdd-card-delete-container" onClick={() => handleDeleteProductToConfig(item)}>
                                <img src={imgDelete} alt="" className='FactoryConfigurationProductListAdd-card-delete' />
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </section>
    )
}

FactoryConfigurationProductListAdd.propTypes = {
    configuration: PropTypes.any,
    newConfig: PropTypes.any,
    setConfiguration: PropTypes.any,
};
