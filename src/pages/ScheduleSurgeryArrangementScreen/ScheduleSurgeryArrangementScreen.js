import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { SubNavBarComponent } from '../../components/layouts/layout1/subnavbar/SubNavBarComponent';
import icoCotizacion from "../../assets/img/256PX/Icono_CotizarProducto_256px.png";
import { getSystemSurgeryArrangement, getSystemSurgeryArrangementSuccess, setElementOptionalMaterialSucces, setElementOptRequireMaterialBeing, setElementRequireMaterialBeing, setElementRequireMaterialSucces, setElementTypeSurgeryCompleted, setElementTypeSurgeryPending, setElementTypeSurgerySucces } from '../../actions/scheduleSurgeryAction';
import './styles.sass';
import { ModalProduct } from '../../components/cardproduct/CardProductModal';
import shortid from 'shortid';


export const ScheduleSurgeryArrangementScreen = () => {

    const typeSurgery = {
        1: 'CERVICAL',
        2: 'LUMBAR',
        3: 'TORACICO',
        4: 'COMPLEMENTOS',
    };
    const { systemId, mainSurgeryTypeId } = useParams();
    const [getSystemSelected, setGetSystemSelected] = useState(null);
    const [optionalProductMaterialToComplete, setOptionalProductMaterialToComplete] = useState(null);
    const [optionalMaterialToComplete, setOptionalMaterialToComplete] = useState(null);
    const [arragementSelected, setArragementSelected] = useState(false);
    const surgeryTypeId = typeSurgery[mainSurgeryTypeId];
    const typeSurgerySystem = useSelector(state => state.systems.systems);
    const systemSurgeryArrangement = useSelector(state => state.scheduleSurgery.systemSurgeryArrangement);
    const listElementTypeSurgerySucces = useSelector(state => state.scheduleSurgery.listElementTypeSurgerySucces);
    const listElementTypeSurgeryPending = useSelector(state => state.scheduleSurgery.listElementTypeSurgeryPending);
    const listElementOptionalMaterialBeing = useSelector(state => state.scheduleSurgery.listElementOptionalMaterialBeing);
    const listElementOptionalMaterialSucces = useSelector(state => state.scheduleSurgery.listElementOptionalMaterialSucces);
    const listElementTypeSurgeryCompleted = useSelector(state => state.scheduleSurgery.listElementTypeSurgeryCompleted);
    const listElementRequireMaterialBeing = useSelector(state => state.scheduleSurgery.listElementRequireMaterialBeing);
    const listElementRequireMaterialSucces = useSelector(state => state.scheduleSurgery.listElementRequireMaterialSucces);
    const listElementOptRequireMaterialBeing = useSelector(state => state.scheduleSurgery.listElementOptRequireMaterialBeing);
    const dispatch = useDispatch();
    const history = useHistory();
    const openModal = useRef();


    useEffect(() => {
        if( listElementOptRequireMaterialBeing && listElementOptRequireMaterialBeing.length > 0 
            && listElementTypeSurgeryPending && listElementTypeSurgeryPending.optionalBundle ){
            const newListOptMaterialBeing = listElementOptRequireMaterialBeing.filter(el => el.id !== listElementTypeSurgeryPending.optionalBundle.id);
            dispatch(setElementOptRequireMaterialBeing( newListOptMaterialBeing ));
        }
        return () => {
            dispatch(setElementTypeSurgeryPending(null));
            dispatch(getSystemSurgeryArrangementSuccess(null));
        }
    }, []);

    useEffect(() => {
        if(surgeryTypeId && systemId && typeSurgerySystem){
            const [systemSelected] = typeSurgerySystem[surgeryTypeId].filter(el => el.id === Number(systemId));
            setGetSystemSelected(systemSelected);
        }
    }, [typeSurgerySystem, systemId]);

    useEffect(() => {
        if(systemId){
            dispatch(getSystemSurgeryArrangement(Number(systemId)));
        }
    }, [systemId]);


    const handleAddQuantityToMaterialOptional = () => {

        listElementOptionalMaterialBeing.forEach( item => {
            if( !item.quantity && !item.product.isBundle ){
                setOptionalProductMaterialToComplete(item.product);
                setOptionalMaterialToComplete(item);
            }else if(   !listElementOptionalMaterialBeing && arragementSelected 
                        || listElementOptionalMaterialBeing && listElementOptionalMaterialBeing.length === 0 && arragementSelected 
                        || listElementOptionalMaterialBeing && listElementOptionalMaterialBeing.length > 0 &&
                        listElementOptionalMaterialBeing.every(el =>el.isOptional && el.quantity) && arragementSelected){
                           
                            history.replace('/ProgramarCX/TipoCirugia');
            }  
        })
    }

    useEffect(() => {

        // Add Elements to complete Systems section
        if(
            arragementSelected && 
            listElementRequireMaterialBeing && 
            listElementRequireMaterialBeing.length > 0){

                if( !listElementRequireMaterialSucces || 
                    listElementRequireMaterialSucces && 
                    listElementRequireMaterialSucces.length === 0 ){

                    const arrayUniqueByKey = [...new Map(listElementRequireMaterialBeing.map(item =>
                        [item.product['productCode'], item])).values()];
                    dispatch(setElementRequireMaterialSucces(arrayUniqueByKey));
                    dispatch(setElementRequireMaterialBeing(null));

                }


                if( listElementRequireMaterialSucces && listElementRequireMaterialSucces.length > 0 ){
                    if( listElementRequireMaterialSucces.some( el => el.MandatoryProductDeleted ) ){
                        const deleteMandatoryProductDeleted = [];
                        listElementRequireMaterialBeing.forEach( el=> {
                            listElementRequireMaterialSucces.forEach(i => {
                                if( i.MandatoryProductDeleted && 
                                    el.product.productCode === i.product.productCode &&
                                    deleteMandatoryProductDeleted.every(item => item.product.productCode !== i.product.productCode )){
                                    const newElement = {...i};
                                    delete newElement['MandatoryProductDeleted'];
                                    return deleteMandatoryProductDeleted.push(newElement);
                                }else if(   !i.MandatoryProductDeleted &&
                                            deleteMandatoryProductDeleted.every(item => item.product.productCode !== i.product.productCode )){
                                    return deleteMandatoryProductDeleted.push(i);
                                }
                            })
                        })
                        const newArray = listElementRequireMaterialBeing.concat(deleteMandatoryProductDeleted);
                        const arrayUniqueByKey = [...new Map(newArray.map(item =>
                        [item.product['productCode'], item])).values()];
                        dispatch(setElementRequireMaterialSucces(arrayUniqueByKey));
                        dispatch(setElementRequireMaterialBeing(null));
                    
                    }else if(listElementRequireMaterialSucces.every( el => !el.MandatoryProductDeleted )) {
                        const newArray = listElementRequireMaterialBeing.concat(listElementRequireMaterialSucces);
                        const arrayUniqueByKey = [...new Map(newArray.map(item =>
                            [item.product['productCode'], item])).values()];
                            dispatch(setElementRequireMaterialSucces(arrayUniqueByKey));
                            dispatch(setElementRequireMaterialBeing(null));
                    }
                }

        }

        return () => {
            if( // Validaciones para Agregar elementos cuando ya existen otros en la lista
                listElementTypeSurgerySucces && 
                !listElementTypeSurgerySucces.optionalBundle && 
                listElementTypeSurgeryCompleted && 
                listElementTypeSurgeryCompleted.length > 0
                ){
    
                    const addElementToCompleteSystems = listElementTypeSurgeryCompleted.slice();
                    addElementToCompleteSystems.push(listElementTypeSurgerySucces);
                    dispatch(setElementTypeSurgeryCompleted(addElementToCompleteSystems));
                    dispatch(setElementTypeSurgerySucces(null)); 
    
            }else if(
                // Validaciones para Agregar elementos la primera vez que se agrega un elemento
                listElementTypeSurgerySucces &&
                !listElementTypeSurgerySucces.optionalBundle && 
                (!listElementTypeSurgeryCompleted || listElementTypeSurgeryCompleted && listElementTypeSurgeryCompleted.length === 0) &&  
                arragementSelected){
                dispatch(setElementTypeSurgeryCompleted([listElementTypeSurgerySucces]));
                dispatch(setElementTypeSurgerySucces(null));
                
            }else if(
                // Validaciones para Agregar elementos la primera vez que se agrega un elemento
                listElementTypeSurgerySucces && 
                listElementTypeSurgerySucces.optionalBundle && 
                listElementOptionalMaterialSucces && 
                listElementOptionalMaterialSucces.length > 0 
                ){
                  
                    if( listElementOptionalMaterialSucces.some(el => el.system && el.system.productCode === listElementTypeSurgerySucces.system.productCode )){
                        const addQuantitytoExistElement = listElementOptionalMaterialSucces.map(el => {
                            if(el.system && el.system.productCode === listElementTypeSurgerySucces.system.productCode){
                                return {...el, quantity: el.quantity + listElementTypeSurgerySucces.quantity};
                            }
                            return el;
                        });
                        dispatch(setElementOptionalMaterialSucces( addQuantitytoExistElement ));
                        
                    }else {
                        const newArrayToMaterials = listElementOptionalMaterialSucces.slice();
                        newArrayToMaterials.push(listElementTypeSurgerySucces);
                        dispatch(setElementOptionalMaterialSucces( newArrayToMaterials ));
                    }
                }
                else if(!listElementOptionalMaterialSucces 
                        && listElementTypeSurgerySucces 
                        && listElementTypeSurgerySucces.optionalBundle 
                        ||listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length === 0 
                        && listElementTypeSurgerySucces 
                        && listElementTypeSurgerySucces.optionalBundle){
                    dispatch(setElementOptionalMaterialSucces( [listElementTypeSurgerySucces] ));
                }
                dispatch(setElementTypeSurgerySucces(null));
        }

    }, [listElementTypeSurgerySucces, listElementTypeSurgeryCompleted, arragementSelected, listElementRequireMaterialBeing])

    useEffect(() => {
        // Add quantity to materials
        if(listElementOptionalMaterialBeing && listElementOptionalMaterialBeing.length > 0 && arragementSelected){

            

            handleAddQuantityToMaterialOptional();

        }else if(   !listElementOptionalMaterialBeing && arragementSelected
            || listElementOptionalMaterialBeing && listElementOptionalMaterialBeing.length === 0 && arragementSelected  
            || listElementOptionalMaterialBeing && listElementOptionalMaterialBeing.length > 0 && listElementOptionalMaterialBeing.every(el =>el.isOptional && el.quantity) && arragementSelected){
            history.replace('/ProgramarCX/TipoCirugia');

        }
            

    }, [listElementOptionalMaterialBeing, arragementSelected])


    useEffect(() => {
        if(optionalProductMaterialToComplete  && optionalMaterialToComplete ){
            
            openModal.current.handleOpen(optionalProductMaterialToComplete);
        }
    }, [optionalProductMaterialToComplete, optionalMaterialToComplete])
    
    const handleSelectItem = (arrangement) => {
        // if(listElementTypeSurgerySucces){
            // if(listElementTypeSurgeryPending){
            //     const elementTypeSurgerySucces = {...listElementTypeSurgeryPending, arrangement};
            //     let listSurgerySucces = listElementTypeSurgerySucces.map(el => el);
            //     listSurgerySucces.push(elementTypeSurgerySucces);
            //     dispatch(setElementTypeSurgerySucces(listSurgerySucces));
            //     setArragementSelected(true);
            // }
        // }else if( listElementTypeSurgerySucces ){
            
            
        // }
        const elementTypeSurgerySucces = {...listElementTypeSurgeryPending, arrangement};
        dispatch(setElementTypeSurgerySucces(elementTypeSurgerySucces));
        setArragementSelected(true);
    }


    return (
        <div className="container_schedule_arragement">

          <SubNavBarComponent historyPage={`/ProgramarCX/TipoCirugia`} title={'Programar CX'} searchActive={false}/>

          <div className="container_schedule_arragement-page animate__animated animate__fadeIn">
            <div className="schedule_arragement-c-info">
              <div className="schedule_arragement-info-c-name">
                <img className="schedule_arragement-info-img" src={icoCotizacion} alt="" />
                <span className="schedule_arragement-info-name">Configuración {getSystemSelected && getSystemSelected.productDescription}</span>
              </div>
    
              <div className="container_schedule_arragement-c-items">
                <img className="schedule_arragement-item-img" src={getSystemSelected && getSystemSelected.productImage} alt="" />
                <h3 className="schedule_arragement-item-name">{getSystemSelected && getSystemSelected.productDescription}</h3>
              </div>
            </div>
    
            <div className="schedule_arragement-c-items">
              {systemSurgeryArrangement && systemSurgeryArrangement.length > 0 &&
                systemSurgeryArrangement.map((item) => {
                  return (
                    <div key={item.id} className="schedule_arragement-c-item" onClick={() => handleSelectItem(item)}>
                        <span className="schedule_arragement-item-c-name">
                            <h4 className="schedule_arragement-item-name">{item.title}</h4>
                        </span>
                        <span className="schedule_arragement-item-c-img">
                        </span>
                    </div>
                  );
                })}

                <div className="schedule_arragement-c-item" onClick={() => handleSelectItem({ description: 'NA', id: shortid.generate() })}>
                    <span className="schedule_arragement-item-c-name">
                        <h4 className="schedule_arragement-item-name">Continuar sin especificación</h4>
                    </span>
                    <span className="schedule_arragement-item-c-img">
                    </span>
                </div>
            </div>


          </div>

        {
            optionalProductMaterialToComplete  && optionalMaterialToComplete &&
            <ModalProduct 
                ref={openModal}
                productItem={optionalProductMaterialToComplete}
                optionalMaterialToComplete={optionalMaterialToComplete}
                programarCX={'programarCX'}/>
        }

        </div>
    )
}
