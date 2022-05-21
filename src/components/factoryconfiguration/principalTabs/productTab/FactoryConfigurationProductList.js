import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchProducts, updateBundles } from '../../../../actions/systemsAction';
import PropTypes from 'prop-types';
import { FactoryConfigContainModalProduct } from './FactoryConfigContainModalProduct';

export const FactoryConfigurationProductList = ( {configuration, newConfig, setConfiguration}) => {

    const [openModal, setOpenModal] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchProduct, setSearchProduct] = useState("");
    const dispatch = useDispatch();
    const [newProductModal, setNewProductModal] = useState(false);
    const bundles = useSelector(state => state.systems.bundles);
    const [searchBy, setSearchBy] = useState("productCode")
    
    const searchProductsStore = useSelector(state => state.systems.searchProduct);
    const toggleModal = () => {
        setOpenModal(null);
    };
    const products = useSelector(state => state.systems.products);
    const newProductConfig = useSelector(state => state.systems.newProductConfig)

    useEffect(() => {
        if(searchProduct.trim().length !== 0 ){
            dispatch(searchProducts( searchProduct, searchBy));
        }
    }, [searchProduct])

    const handleSearchProduct = (e) => {
        e.preventDefault();
        dispatch(searchProducts( searchProduct ));
    }

    const handleAddNewProduct = (product) => {
        setSelectedProduct(product)
        setOpenModal("newProduct");
    }

    useEffect(() => {
        if(newProductConfig && newProductModal && bundles){
            let newBundle = {
                ...configuration,
                configuration: newProductConfig
            };
            let newListBundle = bundles.filter( item => item.id !== configuration.id );
            newListBundle.unshift(newBundle);
            dispatch(updateBundles(newListBundle));
            setConfiguration(newBundle);
            setNewProductModal(false);
        }
        
    }, [newProductModal, newProductConfig])

    return (
        <section className="container-FactoryConfigurationProductList">
            <h3 className="FactoryConfigurationProductList-title">Lista de Productos</h3>
            <form className="FactoryConfigurationProductList-container-search"
                  onSubmit={handleSearchProduct}>
                <input type="text"
                       autoComplete="off"
                       name="searchProduct"
                       value={searchProduct}
                       onChange={({ target }) => setSearchProduct(target.value)}
                       placeholder='Buscar producto...'
                       className="FactoryConfigurationProductList-search"
                />
                <select id="cars" 
                        onChange={(e) => setSearchBy(e.target.value)} 
                        value={[searchBy]} 
                        className='FactoryConfigurationProductList-search-combobox' 
                        multiple={false}>
                    <option 
                            value={'productCode'}>
                            Codigo del producto
                    </option>
                    <option 
                            value={'productDescription'}>
                            Descripción de producto
                    </option>
                </select>
            </form>
            <div className="FactoryConfigurationProductList-container-cards">
                {
                    searchProductsStore && 
                    searchProduct.trim().length !== 0 &&
                    searchProductsStore.map( item => (
                        <button className="FactoryConfigurationProductList-cards-container" key={item.id} onClick={() => handleAddNewProduct( item )}>
                            <div className="FactoryConfigurationProductList-card-container-info">
                                <h3 className="FactoryConfigurationProductList-card-info">
                                    { item.productDescription }
                                </h3> 
                            </div>
                        </button>
                    ))
                }
                {
                    products&&
                    searchProduct.trim().length === 0 &&
                    products.map( item => (
                        <button className="FactoryConfigurationProductList-cards-container" key={item.id} onClick={() => handleAddNewProduct( item )}>
                            <div className="FactoryConfigurationProductList-card-container-info">
                                <h3 className="FactoryConfigurationProductList-card-info">
                                    { item.productDescription }
                                </h3> 
                            </div>
                        </button>
                    ))
                }
            </div>
            {
                openModal === "newProduct" &&
                <FactoryConfigContainModalProduct
                    isOpen
                    toggle={toggleModal}
                    selectedProduct={selectedProduct}
                    configuration={configuration} 
                    newConfig={newConfig}
                    setNewProductModal={setNewProductModal}
                />
            }
        </section>
    )
}
FactoryConfigurationProductList.propTypes = {
    newConfig: PropTypes.any,
    configuration: PropTypes.any,
    setConfiguration: PropTypes.any,
  };