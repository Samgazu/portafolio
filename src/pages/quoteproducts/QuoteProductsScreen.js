/* eslint-disable no-empty */
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SubNavBarComponent } from '../../components/layouts/layout1/subnavbar/SubNavBarComponent';
import { CardProductComponent } from '../../components/cardproduct/CardProductComponent';
import { DetalleProducto } from '../../components/layouts/layout1/detalleproducto/DetalleProducto';
import { getMainSurgeryType, getProducts, getSystemByMainSurgencyType } from '../../actions/systemsAction';
import { useParams } from 'react-router';
import { ModalProduct } from '../../components/cardproduct/CardProductModal';
import { setReposnseSearch } from '../../actions/storeHouseAction';
import { setSurgeryTypes, setSystems } from '../../actions/JSON/productsJSON';
import _ from 'lodash';


export const QuoteProductsScreen = () => {
    const { tipoCirugia } = useParams();
    const { systemId } = useParams();
    const dispatch = useDispatch();

    const mainSurgeryTypes = useSelector(state => state.systems.mainSurgeryTypes);
    const quoteProductsData = useSelector(state => state.systems.systems);
    const listElementTypeSurgeryCompleted = useSelector(state => state.scheduleSurgery.listElementTypeSurgeryCompleted);
    const listElementTypeSurgeryBeing = useSelector(state => state.scheduleSurgery.listElementTypeSurgeryBeing);

    const newQuote = useSelector(state => state.newQuote);
    const listElementOptionalMaterialSucces = useSelector(state => state.scheduleSurgery.listElementOptionalMaterialSucces);


    const [cervicales, setCervicales] = useState(null);
    const [lumbares, setLumbares] = useState(null);
    const [complementos, setComplementos] = useState(null);
    const [toraxico, setToraxico] = useState(null);
    const [existUniqueProduct, setExistUniqueProduct] = useState(true);
    const [existMainSurgeryTypes, setExistMainSurgeryTypes] = useState(null);
    const [newArray, setNewArray] = useState(null)
    const { programarCX } = useParams();


    useEffect(() => {
        if(Object.keys(quoteProductsData).length === 0){
            dispatch(setSystems());
        }
    }, [quoteProductsData])
    useEffect(() => {
        if(Object.keys(mainSurgeryTypes).length === 0){
            dispatch(setSurgeryTypes());
        }
    }, [mainSurgeryTypes])


    useEffect(() => {

        if (listElementTypeSurgeryBeing) {
            openModal.current.handleOpen(listElementTypeSurgeryBeing.system);
        }
    }, [listElementTypeSurgeryBeing])


    const openModal = useRef();
     useEffect(() => {
        if (mainSurgeryTypes) {
            setExistMainSurgeryTypes(mainSurgeryTypes);
        }
    }, [mainSurgeryTypes]) 

    useEffect(() => {
        if (mainSurgeryTypes.length > 0) {
            mainSurgeryTypes.map(item => dispatch(getSystemByMainSurgencyType(item)));
        } else if (!existMainSurgeryTypes) {
            dispatch(getMainSurgeryType());
        }
    }, [mainSurgeryTypes]); 

    useEffect(() => {
        if (newQuote && newQuote.systems && newQuote.systems.length > 0) {
            newQuote.systems.forEach(item => {
                if (newQuote
                    && newQuote.systems
                    && newQuote.systems.length === 1
                    && item.productDescription === "Productos"
                    && item.configuration[0].configuration.items.length === 0) {
                    setExistUniqueProduct(false);
                } else {
                    setExistUniqueProduct(true);
                }
            })
        }
    }, [newQuote])


    useEffect(() => {
        if (Object.keys(quoteProductsData).length >= 3 && Object.keys(quoteProductsData).length < 4) {
            
        } else if (Object.keys(quoteProductsData).length >= 4) {
            setCervicales(quoteProductsData['CERVICAL']);
            setLumbares(quoteProductsData['LUMBAR']);
            setComplementos(quoteProductsData['COMPLEMENTOS']);
            setToraxico(quoteProductsData['TORACICO']);
        }
    }, [quoteProductsData]);


    return (
        <div className='c-quoteScreen animate__animated animate__fadeIn'>
            {
                !tipoCirugia && systemId
                    ? <SubNavBarComponent title={"Sistemas"} systemId={systemId} historyPage={`/Inicio`} searchActive={true} />
                    : <SubNavBarComponent title={"Sistemas"} historyPage={`/Inicio`} searchActive={true} />
            }
            {
                tipoCirugia &&
                <SubNavBarComponent title={"Programar CX"} historyPage={`/ProgramarCX`} searchActive={true} programarCX={'ProgramarCX'} />
            }
            <div>
            </div>
            <div>
            
                   <CardProductComponent
                        cervicales={cervicales}
                        lumbares={lumbares}
                        complementos={complementos}
                        toraxico={toraxico}
                        tipoCirugia={tipoCirugia}
                        systemId={systemId}
                        existUniqueProduct={existUniqueProduct}

                    />
                {
                    listElementTypeSurgeryBeing &&
                    <ModalProduct
                        ref={openModal}
                        productItem={listElementTypeSurgeryBeing.system}
                        urlToArragement={'ProgramarCX'}
                        mainSurgeryTypeId={listElementTypeSurgeryBeing.system.mainSurgeryTypeId}
                        programarCX={programarCX} />
                }
                {
                    !tipoCirugia && newQuote && newQuote.systems && newQuote.systems.length > 0 && existUniqueProduct &&
                    <DetalleProducto />
                }

                {
                    tipoCirugia && listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length > 0 &&
                    <DetalleProducto />
                }

                {
                    tipoCirugia && listElementTypeSurgeryCompleted && listElementTypeSurgeryCompleted.length > 0 &&
                    <DetalleProducto />
                }
            </div>

        </div>

    );
}
