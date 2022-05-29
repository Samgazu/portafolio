import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./sass/styles.sass";
import { SubNavBarComponent } from "../../components/layouts/layout1/subnavbar/SubNavBarComponent";
// import { quoteProductsData } from '../quoteproducts/quoteProductsData';
import { updateNewQuote } from "../../actions/newQuoteAction";
import icoCotizacion from "../../assets/img/256PX/Icono_CotizarProducto_256px.png";
import { useParams, useHistory } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { getBundlesFormSystem } from '../../actions/systemsAction';
import shortid from "shortid";
import { ModalProduct } from "../../components/cardproduct/CardProductModal";
import { setBundle } from "../../actions/JSON/bundleproductJSON";

export const QuoteProductScreen = () => {

  
  const [product, setProduct] = useState({});
  const handleOpenModal = (produc) => {
      openModal.current.handleOpen(produc);
      setProduct(produc);
  } 
  const openModal = useRef();

  const dispatch = useDispatch();
  const history = useHistory();
  const { programarCX, mainSurgeryTypeId, systemId } = useParams();
  const newQuote = useSelector((state) => state.newQuote);

   useEffect( () => {
    dispatch(setBundle());
  },[]); 


  const systems = useSelector((state) => state.systems);
  const mainSurgeryType = systems.mainSurgeryTypes.filter( item => item.id == mainSurgeryTypeId)[0];
  const selectedSystem = systems.systems[mainSurgeryType.description].filter( item => item.systemId == systemId)[0];
  const bundles = useSelector((state) => state.systems.bundles);
  const [infoCard, setInfoCard] = useState(-1);
  
  const selectProductItem = async(item_) =>{
    var item = JSON.parse(JSON.stringify(item_));
    item.configuration.items = item.configuration.items.map( item => {
      item.discountPercentage = 0;
      item.productPrice = 0;
      return item;
    });
    item.configuration.globalDiscountPercentage = 0;

    let newQuoteCopy = JSON.parse(JSON.stringify(newQuote));
      let systemToInsert = {
        ...selectedSystem,
        configuration: [
          {
            ...item,
          },
        ],
        idItem: shortid.generate(), 
      };
      newQuoteCopy.systems.push(systemToInsert);
    dispatch(updateNewQuote(newQuoteCopy));
    history.push('/cotizaciones');
  };

  
  return (
    <div className="c-product ">
    {
      !programarCX&&
      <SubNavBarComponent historyPage={`/cotizaciones`} title={'Configuración'} searchActive={true}/>
    }
    {
      programarCX&&
      <SubNavBarComponent historyPage={`/ProgramarCX/TipoCirugia`} title={'Configuración'} searchActive={true}/>
    }
      <div className="c-product-page animate__animated animate__fadeIn">
        <div className="product-c-info">
          <div className="product-info-c-name">
            <img className="product-info-img" src={icoCotizacion} alt="" />
            <span className="product-info-name">Configuración {selectedSystem.productDescription}</span>
          </div>

          <div className="c-product-c-items">
            <img className="product-item-img" src={selectedSystem.productImage} alt="" />
            <h3 className="product-item-name">{selectedSystem.productDescription}</h3>
          </div>
        </div>

        <div className="product-c-items">
          {bundles &&
            bundles.map((item, index) => {
              return (
                <div key={item.id} className="product-c-item">
                  {infoCard !== index ? (
                    <>
                    {
                      !programarCX &&
                      <button
                        className="product-item-c-name"
                        onClick={() => selectProductItem(item, index)}
                      >
                        <h4 className="product-item-name">{item.configuration.name}</h4>
                      </button>
                    }
                    {
                      programarCX &&
                      <button
                        className="product-item-c-name"
                        onClick={() => { handleOpenModal({product: item, selectedSystem, mainSurgeryType}) }}
                      >
                        <h4 className="product-item-name">{item.configuration.name}</h4>
                      </button>
                    }
                    
                      <button
                        className="product-item-c-img"
                        onClick={() => setInfoCard(index)}
                      >
                        <IoIosArrowUp className="product-item-img" />
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="product-item-c-infoitem">
                        {item.configuration &&
                          item.configuration.items.map((iteminfo) => {
                            return (
                              <button key={iteminfo.id} className="product-item-c-infoitem-item"
                                      onClick={() => !programarCX ? selectProductItem(item) : handleOpenModal(item)} 
                              >
                                <p className="product-infoitem-item-name">
                                  {`${iteminfo.product.productCode} / cant. ${iteminfo.productQuantity}* ` || '-- --'}
                                </p>
                                <p className="product-infoitem-item-desc">
                                  {iteminfo.product.productDescription || '-- --'}
                                </p>
                                <hr></hr>
                              </button>
                            );
                          })}
                      </div>

                        <button
                          className="product-item-c-img"
                          onClick={() => setInfoCard(-1)}
                        >
                          <IoIosArrowDown className="product-item-img" />
                        </button>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
      {
          product&&
              <ModalProduct ref={openModal} productItem={product} programarCX={programarCX} />
      }
    </div>
  );
};
