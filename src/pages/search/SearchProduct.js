import React, { useRef, useState } from 'react';
import '../../components/cardproduct/sass/styles.sass';
import { useSelector } from 'react-redux';
import { SubNavBarComponent } from '../../components/layouts/layout1/subnavbar/SubNavBarComponent';
import { IoCaretForwardCircleSharp } from "react-icons/io5";
import icoComplementos from '../../assets/img/512PX/Icono_Complementos_512px.png';
import { ModalProduct } from '../../components/cardproduct/CardProductModal';
import { DetalleProducto } from '../../components/layouts/layout1/detalleproducto/DetalleProducto';
import { useParams } from 'react-router';

export const SearchProduct = () => {

    const newQuote = useSelector( state => state.newQuote);
    const listElementOptionalMaterialSucces = useSelector(state => state.scheduleSurgery.listElementOptionalMaterialSucces);
    const listElementTypeSurgeryCompleted = useSelector(state => state.scheduleSurgery.listElementTypeSurgeryCompleted);
    const {systemId, searchToProgramCX} = useParams();
    const searchProductsStore = useSelector(state => state.systems.searchProduct);
    const [product, setProduct] = useState({});

    
    const handleOpenModal = (produc) => {
        openModal.current.handleOpen(produc);
        setProduct(produc);
    } 

/* 
    console.log("SearcParams", searchToProgramCX);  
    console.log("systemId",systemId); */

    
    const openModal = useRef();
    return (
        <>
        {
            systemId && !searchToProgramCX
            ?   <SubNavBarComponent systemId={systemId} historyPage={`/cotizaciones`} searchActive={true}/>
            :searchToProgramCX ? 
                <SubNavBarComponent title={"Programar CX"} historyPage={`/ProgramarCX`} searchActive={true} programarCX={'ProgramarCX'} />
            :   <SubNavBarComponent historyPage={`/cotizaciones`} searchActive={true} />
        }
        <div className={(newQuote && newQuote.systems && newQuote.systems.length > 0) ||
          (  listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length > 0)
          || (  listElementTypeSurgeryCompleted && listElementTypeSurgeryCompleted.length > 0)? 
                    "c-quote-whit-products" : 'c-quote'}>
            <div className='c-quoteScreen animate__animated animate__fadeIn'>
            {
            (searchProductsStore && searchProductsStore.length > 0) && (
                <div className="quote-c-section quote-c-products">
                    <header className="quote-c-section-c-title quote-c-products-c-title">
                        <img className="quote-c-section-img" src={icoComplementos} alt="" />
                        <h2 className="quote-c-section-title"> Productos </h2>
                    </header>

                    <section className={ (newQuote && newQuote.systems && newQuote.systems.length > 0) ||
                      (  listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length > 0)
                      || (  listElementTypeSurgeryCompleted && listElementTypeSurgeryCompleted.length > 0) ?
                                        "c-items-whit-products quote-c-section-c-items quote-c-products-c-items"
                                        : "c-items quote-c-section-c-items quote-c-products-c-items" }>
                    {
                        searchProductsStore.map((item) => {
                            return (
                            <div className="quote-c-item" key={item.id}>
                                <img className="quote-c-item-img" src={item.productImage} alt="" />
                                    <div className="quote-c-item-button"
                                        onClick={() => { handleOpenModal(item) }} >
                                        <span className="quote-item-button-name"> {item.productDescription} </span>
                                        <span className="quote-item-button-ico">
                                            {" "}<IoCaretForwardCircleSharp />{" "}
                                        </span>
                                    </div>
                            </div>
                            );
                    })}
                    </section>
                    {
                        product && !searchToProgramCX &&
                            <ModalProduct ref={openModal} productItem={product} systemId={systemId} />
                    }
                    {
                        product && searchToProgramCX &&
                            <ModalProduct ref={openModal} productItem={product} systemId={systemId} programarCX={'programarCX'} uniqueProduct={'UNIQUE'} />
                    }

                   
                </div>

            )

        }
            </div>
            {
              newQuote && newQuote.systems && newQuote.systems.length > 0 &&
                <DetalleProducto />
            }


            {
               listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length > 0 &&
                <DetalleProducto 
                    tipoCX = { searchToProgramCX ? "TipoCirugira" : null}
                />
            }

             {
                listElementTypeSurgeryCompleted && listElementTypeSurgeryCompleted.length > 0 &&
                <DetalleProducto 
                   
                />
            }



           
        </div>

        </>
    )
}

