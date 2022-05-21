import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import { IoCaretForwardCircleSharp } from "react-icons/io5";
import icoCervicales from '../../assets/img/126PX/Icono_Cervical-Bco_126px.png';
import icoComplementos from '../../assets/img/126PX/Icono_Complemento-Bco_126px.png';
import icoLumbares from '../../assets/img/126PX/Icono_Lumbar-Bco_126px.png';
import imgToraxicoBl from '../../assets/img/126PX/Icono_Toracica-Bco_126px.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { ModalProduct } from "./CardProductModal";
import './sass/styles.sass';
import { ScheduleSurgeryModal } from "./ScheduleSurgeryModal";
import { ScheduleSurgeryConfirmModal } from "./ScheduleSurgeryConfirmModal";

export const CardProductComponent = ({ cervicales, lumbares, complementos, toraxico, tipoCirugia, systemId, existUniqueProduct,search }) => {

    const [openModalSchedule, setOpenModalSchedule] = useState(null);
    const [openModalConfirm, setOpenModalConfirm] = useState(null);
    const [itemProduct, setItemProduct] = useState({});
    const [itemProductBundle, setItemProductBundle] = useState(null);
    const [modalOrSystem, setModalOrSystem] = useState('');
    const [product, setProduct] = useState({});
    const [uniqueProduct, setUniqueProduct] = useState({});

    const newQuote = useSelector(state => state.newQuote);
    const getProductsforQuote = useSelector(state => state.systems.products);
    const listElementTypeSurgeryCompleted = useSelector(state => state.scheduleSurgery.listElementTypeSurgeryCompleted);
    const listElementOptionalMaterialBeing = useSelector(state => state.scheduleSurgery.listElementOptionalMaterialBeing);
    const listElementOptRequireMaterialBeing = useSelector(state => state.scheduleSurgery.listElementOptRequireMaterialBeing);
    const listElementOptionalMaterialSucces = useSelector(state => state.scheduleSurgery.listElementOptionalMaterialSucces);





    const toggleModal = () => {
        setOpenModalSchedule(null);
    };
    const toggleModalConfirm = () => {
        setOpenModalConfirm(null);
    };

    const handleOpenModalToSchedule = (item, typeModal, uniqueProductItem) => {

        if (listElementTypeSurgeryCompleted &&
            listElementTypeSurgeryCompleted.length > 0 &&
            listElementTypeSurgeryCompleted.some(el => el.system.productCode === item.productCode)) {
            setOpenModalConfirm({ item, typeModal });

        } else if (uniqueProductItem) {
            setUniqueProduct(uniqueProductItem);
            setProduct(item);
            openModal.current.handleOpen(item);
        } else {
            setItemProduct(item);
            setModalOrSystem(typeModal);
            setOpenModalSchedule("SUGGESTED_MATERIAL");
        }
    }

    const handleOpenModal = (produc) => {
        openModal.current.handleOpen(produc);
        setProduct(produc);
    }
    const openModal = useRef();

    const updateMainObject = () => { };



    useEffect(() => {
        if (listElementOptRequireMaterialBeing &&
            listElementOptRequireMaterialBeing.length > 0 &&
            !listElementOptionalMaterialBeing
            ||
            listElementOptRequireMaterialBeing &&
            listElementOptRequireMaterialBeing.length > 0 &&
            listElementOptionalMaterialBeing.length === 0
        ) {
            listElementOptRequireMaterialBeing.forEach(el => {
                setItemProduct(el.product);
                setModalOrSystem('SYSTEM');
                setOpenModalSchedule("SUGGESTED_MATERIAL");
                setItemProductBundle(el);
            });
        }
    }, [listElementOptRequireMaterialBeing, listElementOptionalMaterialBeing])

    return (
        <>
            <div className={(existUniqueProduct && !tipoCirugia && newQuote && newQuote.systems && newQuote.systems.length > 0 
            || tipoCirugia === 'TipoCirugia' && ( listElementTypeSurgeryCompleted   && listElementTypeSurgeryCompleted.length > 0 
            || listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length > 0)) ?
                "c-quote-whit-products" : 'c-quote'}>

                {
                    (cervicales && cervicales.length > 0 && !systemId) && (
                        <div className="quote-c-section quote-c-cervicales">
                            <header className="quote-c-section-c-title quote-c-cervicales-c-title">
                                <img className="quote-c-section-img" src={icoCervicales} alt="" />
                                <h2 className="quote-c-section-title">Soluciones Cervicales</h2>
                            </header>

                            <section className={(existUniqueProduct && !tipoCirugia && newQuote && newQuote.systems && newQuote.systems.length > 0 
                            || tipoCirugia === 'TipoCirugia' && (listElementTypeSurgeryCompleted && listElementTypeSurgeryCompleted.length > 0
                            ||  listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length > 0)) ?
                                "c-items-whit-products quote-c-section-c-items quote-c-cervicales-c-items"
                                : 'c-items quote-c-section-c-items quote-c-cervicales-c-items'}>
                                {
                                    cervicales.map((item) => {
                                        return (
                                            <div className="quote-c-item" key={item.id}>
                                                <img className="quote-c-item-img" src={item.productImage} alt="" />
                                                {
                                                    !tipoCirugia &&
                                                    <NavLink
                                                        className="quote-c-item-button"
                                                        to={`/cotizaciones/${item.mainSurgeryTypeId}/${item.systemId}`}
                                                    >
                                                        <span className="quote-item-button-name"> {item.productDescription} </span>
                                                        <span className="quote-item-button-ico">
                                
                                                            {" "}
                                                            <IoCaretForwardCircleSharp />{" "}
                                                        </span>
                                                    </NavLink>
                                                }
                                                {
                                                    tipoCirugia &&
                                                    <button className=" quote-c-item-button " onClick={() => handleOpenModalToSchedule(item, 'SYSTEM')}>
                                                        <span className="quote-item-button-name"> {item.productDescription} </span>
                                                        <span className="quote-item-button-ico">
                                                            {" "}
                                                            <IoCaretForwardCircleSharp />{" "}
                                                        </span>
                                                    </button>
                                                }
                                            </div>
                                        );
                                    })}
                            </section>
                        </div>
                    )
                }

                {
                    (lumbares && lumbares.length > 0 && !systemId) && (
                        <div className="quote-c-section quote-c-Lumbares">
                            <header className="quote-c-section-c-title quote-c-lumbares-c-title">
                                <img className="quote-c-section-img" src={icoLumbares} alt="" />
                                <h2 className="quote-c-section-title"> Soluciones Lumbares </h2>
                            </header>

                            <section className={(existUniqueProduct && !tipoCirugia && newQuote && newQuote.systems && newQuote.systems.length > 0 
                            || tipoCirugia === 'TipoCirugia' && (listElementTypeSurgeryCompleted && listElementTypeSurgeryCompleted.length > 0
                            ||  listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length > 0)) ?
                                "c-items-whit-products quote-c-section-c-items quote-c-lumbares-c-items"
                                : "c-items quote-c-section-c-items quote-c-lumbares-c-items"}>
                                {
                                    lumbares.map((item) => {
                                        return (
                                            <div className="quote-c-item" key={item.id}>
                                                <img className="quote-c-item-img" src={item.productImage} alt="" />
                                                {
                                                    !tipoCirugia &&
                                                    <NavLink
                                                        to={`/cotizaciones/${item.mainSurgeryTypeId}/${item.systemId}`}
                                                        className="quote-c-item-button">
                                                        <span className="quote-item-button-name"> {item.productDescription} </span>
                                                        <span className="quote-item-button-ico">

                                                            <IoCaretForwardCircleSharp />{" "}
                                                        </span>
                                                    </NavLink>
                                                }

                                                {
                                                    tipoCirugia &&
                                                    <button className=" quote-c-item-button " onClick={() => handleOpenModalToSchedule(item, 'SYSTEM')}>
                                                        <span className="quote-item-button-name"> {item.productDescription} </span>
                                                        <span className="quote-item-button-ico">
                                                            {" "}
                                                            <IoCaretForwardCircleSharp />{" "}
                                                        </span>
                                                    </button>
                                                }
                                            </div>
                                        );
                                    })}
                            </section>
                        </div>

                    )

                }

                {
                    (toraxico && toraxico.length > 0 && !systemId) && (
                        <div className="quote-c-section quote-c-toraxicos">
                            <header className="quote-c-section-c-title quote-c-toraxicos-c-title">
                                <img className="quote-c-section-img" src={imgToraxicoBl} alt="" />
                                <h2 className="quote-c-section-title"> Torácicos </h2>
                            </header>

                            <section className={(existUniqueProduct && !tipoCirugia && newQuote && newQuote.systems && newQuote.systems.length > 0 
                            || tipoCirugia  === "TipoCirugia" && (listElementTypeSurgeryCompleted && listElementTypeSurgeryCompleted.length > 0
                            ||  listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length > 0))
                             ?
                                "c-items-whit-products quote-c-section-c-items quote-c-toraxicos-c-items"
                                : "c-items quote-c-section-c-items quote-c-toraxicos-c-items"}>
                                {
                                    toraxico.map((item) => {
                                        return (
                                            <div className="quote-c-item" key={item.id}>
                                                <img className="quote-c-item-img" src={item.productImage} alt="" />
                                                {
                                                    !tipoCirugia &&
                                                    <NavLink
                                                        to={`/cotizaciones/${item.mainSurgeryTypeId}/${item.systemId}`}
                                                        className="quote-c-item-button">
                                                        <span className="quote-item-button-name"> {item.productDescription} </span>
                                                        <span className="quote-item-button-ico">
                                                            {" "}
                                                            <IoCaretForwardCircleSharp />{" "}
                                                        </span>
                                                    </NavLink>
                                                }

                                                {
                                                    tipoCirugia &&
                                                    <button className=" quote-c-item-button " onClick={() => handleOpenModalToSchedule(item, 'SYSTEM')}>
                                                        <span className="quote-item-button-name"> {item.productDescription} </span>
                                                        <span className="quote-item-button-ico">
                                                            {" "}
                                                            <IoCaretForwardCircleSharp />{" "}
                                                        </span>
                                                    </button>
                                                }
                                            </div>
                                        );
                                    })}
                            </section>
                        </div>
                    )
                }


                {
                    (complementos && complementos.length > 0 && !systemId) && (
                        <div className="quote-c-section quote-c-complementos">
                            <header className="quote-c-section-c-title quote-c-complementos-c-title">
                                <img className="quote-c-section-img" src={icoComplementos} alt="" />
                                <h2 className="quote-c-section-title"> Complementos </h2>
                            </header>

                            <section className={(existUniqueProduct && !tipoCirugia && newQuote && newQuote.systems && newQuote.systems.length > 0 
                            || tipoCirugia && (listElementTypeSurgeryCompleted && listElementTypeSurgeryCompleted.length > 0
                            ||  listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length > 0)) ?
                                "c-items-whit-products quote-c-section-c-items quote-c-complementos-c-items"
                                : "c-items quote-c-section-c-items quote-c-complementos-c-items"}>
                                {
                                    complementos.map((item) => {
                                        return (
                                            <div className="quote-c-item" key={item.id}>
                                                <img className="quote-c-item-img" src={item.productImage} alt="" />
                                                {
                                                    !tipoCirugia &&
                                                    <NavLink
                                                        to={`/cotizaciones/${item.mainSurgeryTypeId}/${item.systemId}`}
                                                        className="quote-c-item-button">
                                                        <span className="quote-item-button-name"> {item.productDescription} </span>
                                                        <span className="quote-item-button-ico">
                                                            {" "}
                                                            <IoCaretForwardCircleSharp />{" "}
                                                        </span>
                                                    </NavLink>
                                                }
                                                {
                                                    tipoCirugia &&
                                                    <button className=" quote-c-item-button " onClick={() => handleOpenModalToSchedule(item, 'SYSTEM')}>
                                                        <span className="quote-item-button-name"> {item.productDescription} </span>
                                                        <span className="quote-item-button-ico">
                                                            {" "}
                                                            <IoCaretForwardCircleSharp />{" "}
                                                        </span>
                                                    </button>
                                                }
                                            </div>
                                        );
                                    })}
                            </section>
                        </div>

                    )

                }

                {
                    (!search && getProductsforQuote && getProductsforQuote.length > 0) && (
                        <div className="quote-c-section quote-c-products">
                            <header className="quote-c-section-c-title quote-c-products-c-title">
                                <img className="quote-c-section-img" src={icoComplementos} alt="" />
                                <h2 className="quote-c-section-title"> Productos </h2>
                            </header>

                            <section className={(existUniqueProduct && !tipoCirugia && newQuote && newQuote.systems && newQuote.systems.length > 0 
                            || tipoCirugia === "TipoCirugia" && (listElementTypeSurgeryCompleted && listElementTypeSurgeryCompleted.length > 0
                            ||  listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length > 0))

                             ?
                                "c-items-whit-products quote-c-section-c-items quote-c-products-c-items"
                                : "c-items quote-c-section-c-items quote-c-products-c-items"}>
                                {
                                    getProductsforQuote.map((item) => {
                                        return (
                                            <div className="quote-c-item" key={item.id}>

                                                <img className="quote-c-item-img" src={item.productImage} alt="" />

                                                {/*Cotizar Productos //Inicio*/}
                                                {
                                                    !tipoCirugia &&
                                                    <div className="quote-c-item-button"
                                                        onClick={() => handleOpenModal(item)} >
                                                        <span className="quote-item-button-name"> {item.productDescription} </span>
                                                        <span className="quote-item-button-ico">
                                                
                                                          
                                                            {" "}<IoCaretForwardCircleSharp />{" "}
                                                        </span>
                                                    </div>
                                                }

                                                {/*Este es de ProgramarCX  //ATQAdmin*/}
                                                {
                                                    tipoCirugia &&
                                                    <button className=" quote-c-item-button " onClick={() => handleOpenModalToSchedule(item, 'MODAL', 'UNIQUE')}>
                                                        <span className="quote-item-button-name"> {item.productDescription} </span>
                                                        <span className="quote-item-button-ico">
                                                           
                                                            {" "}
                                                            <IoCaretForwardCircleSharp />{" "}
                                                        </span>
                                                    </button>
                                                }
                                            </div>
                                        );
                                    })}
                                {
                                    product &&
                                    <ModalProduct ref={openModal} productItem={product} systemId={systemId} uniqueProduct={uniqueProduct} />
                                }
                            </section>
                        </div>

                    )

                }


                {
                    openModalSchedule === "SUGGESTED_MATERIAL" &&
                    <ScheduleSurgeryModal
                        isOpen={!!openModalSchedule}
                        toggle={toggleModal}
                        itemProduct={itemProduct}
                        itemProductBundle={itemProductBundle}
                        modalOrSystem={modalOrSystem}
                        updateMainObject={updateMainObject}
                    />
                }


                {
                    openModalConfirm &&
                    <ScheduleSurgeryConfirmModal
                        isOpen={openModalConfirm}
                        toggle={toggleModalConfirm}
                        messageModal={'El sistema seleccionado ya existe, ¿Deseas continuar?'}
                        setItemProduct={setItemProduct}
                        setModalOrSystem={setModalOrSystem}
                        setOpenModalSchedule={setOpenModalSchedule}

                    />
                }
            </div>
        </>
    );
};



CardProductComponent.propTypes = {
    cervicales: PropTypes.any,
    lumbares: PropTypes.any,
    complementos: PropTypes.any,
    toraxico: PropTypes.any,
    tipoCirugia: PropTypes.any,
    systemId: PropTypes.any,
    existUniqueProduct: PropTypes.any,
};
