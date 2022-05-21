import React from 'react';
import PropTypes from 'prop-types';
import './sass/schedule-surgery-modal.sass';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSystemRequirements, getSystemRequirementsSuccess, setElementOptionalMaterialBeing, setElementOptRequireMaterialBeing, setElementRequireMaterialBeing, setElementTypeSurgeryBeing } from '../../actions/scheduleSurgeryAction';
import { useState } from 'react';
import { ErrorModal } from '../../pages/ScheduleSurgery/ScheduleModals/ErrorModal/ErrorModal';

export const ScheduleSurgeryTypeSurgeyModal = ({itemProduct, toggle, itemProductBundle}) => {
  

  const dispatch = useDispatch();
  const listSystemRequirements = useSelector( (state) => state.scheduleSurgery.listSystemRequirements);
  const listElementOptRequireMaterialBeing = useSelector( (state) => state.scheduleSurgery.listElementOptRequireMaterialBeing);
  const listElementRequireMaterialSucces = useSelector( (state) => state.scheduleSurgery.listElementRequireMaterialSucces);
  const listElementTypeSurgeryCompleted = useSelector( (state) => state.scheduleSurgery.listElementTypeSurgeryCompleted);
  const listElementOptionalMaterialSucces = useSelector( (state) => state.scheduleSurgery.listElementOptionalMaterialSucces);
  const [listOptionalItems, setListOptionalItems] = useState(null);
  const [listRequireItems, setListRequireItems] = useState(null);
  const [openModalError, setOpenModalError] = useState(null);
  

  useEffect(() => {
    dispatch(getSystemRequirements(itemProduct.id));
  }, [itemProduct])

  useEffect(() => {
    return () => {
      dispatch(getSystemRequirementsSuccess(null));
    }
  }, [])

  

  useEffect(() => {
    let filterOptionalItems = [];
    let filterRequireItems = [];
    let newListOfElementsToCheck = [];
    
    if(listElementTypeSurgeryCompleted && newListOfElementsToCheck.length > 0){
      newListOfElementsToCheck = newListOfElementsToCheck.concat( listElementTypeSurgeryCompleted);
    }else if( listElementTypeSurgeryCompleted && newListOfElementsToCheck.length === 0 ){
      newListOfElementsToCheck = listElementTypeSurgeryCompleted;
    }
    if(listElementRequireMaterialSucces && newListOfElementsToCheck.length > 0){
      newListOfElementsToCheck = newListOfElementsToCheck.concat(listElementRequireMaterialSucces);
    }else if( listElementRequireMaterialSucces && newListOfElementsToCheck.length === 0 ){
      newListOfElementsToCheck = listElementRequireMaterialSucces;
    }
    
    if(listElementOptionalMaterialSucces && newListOfElementsToCheck.length > 0){
      newListOfElementsToCheck = newListOfElementsToCheck.concat(  listElementOptionalMaterialSucces);
    }else if( listElementOptionalMaterialSucces &&  newListOfElementsToCheck.length === 0 ){
      newListOfElementsToCheck = listElementOptionalMaterialSucces;
    }

    // console.log(newListOfElementsToCheck)

    if(listSystemRequirements){
      if(newListOfElementsToCheck && newListOfElementsToCheck.length >= 1){
        filterRequireItems = listSystemRequirements.filter(el => {
          if( newListOfElementsToCheck.some(item => 
            item.product && el.product.productCode === item.product.productCode 
            && el.isRequired 
            || item.system && el.product.productCode === item.system.productCode && el.isRequired ) ){
            return ;
          }
          if( el.isRequired ){
            return el;
          }else{
            return ;
          }
        });
        filterOptionalItems = listSystemRequirements.filter(el => {
          if( newListOfElementsToCheck.some(item => 
            item.product && el.product.productCode === item.product.productCode 
            && el.isOptional
            || item.system &&  el.product.productCode === item.system.productCode 
            && el.isOptional ) ){
            return ;
          }
          if( el.isOptional ){
            return el;
          }else{
            return ;
          }
        });
        setListRequireItems( filterRequireItems );
        setListOptionalItems(filterOptionalItems);
      }else if(!newListOfElementsToCheck || newListOfElementsToCheck.length === 0){
        filterOptionalItems = listSystemRequirements.filter(el => el.isOptional);
        filterRequireItems = listSystemRequirements.filter(el => el.isRequired);
        setListRequireItems( filterRequireItems );
        setListOptionalItems(filterOptionalItems);
      }
      
    }

  }, [listSystemRequirements, listElementRequireMaterialSucces, listElementTypeSurgeryCompleted, listElementOptionalMaterialSucces])

  const [scheduleSurgeryModal, setScheduleSurgeryModal] = useState([]);

  const handleAddOptionalItem = (item) => {
    let newArray = [];

    if(scheduleSurgeryModal.some( el => el.id === item.id )){
      newArray = scheduleSurgeryModal.filter(el => el.id !== item.id);
    }else{
      newArray = scheduleSurgeryModal.map(el => el);
      newArray.push(item);
    }

    setScheduleSurgeryModal(newArray);
  }

  const handleSelectMaterial = (e) => {
    e.preventDefault();

    //setElementOptionalMaterialBeing []
    //setElementOptionalMaterialSucces []

    //setElementOptionalBundleBeing []
    //setElementOptionalBundleSucces []

    if(listSystemRequirements && scheduleSurgeryModal && scheduleSurgeryModal.length > 0 && !itemProductBundle ){

      const optionalMaterialsList = scheduleSurgeryModal.filter(el => el.isOptional && !el.product.isBundle);
      const requireMaterialsList = scheduleSurgeryModal.filter(el => el.isOptional && el.product.isBundle);
      const optionalMaterials = {system: itemProduct, id: itemProduct.id};
      dispatch(setElementTypeSurgeryBeing(optionalMaterials));
      optionalMaterialsList && optionalMaterialsList.length > 0 && dispatch(setElementOptionalMaterialBeing( optionalMaterialsList ));
      requireMaterialsList && requireMaterialsList.length > 0 && dispatch(setElementOptRequireMaterialBeing( requireMaterialsList ));
      listRequireItems && listRequireItems.length > 0 && dispatch(setElementRequireMaterialBeing( listRequireItems ));
      toggle();

    }
    else if(listSystemRequirements && scheduleSurgeryModal && scheduleSurgeryModal.length > 0 && itemProductBundle){

      // dispatch(setElementOptRequireMaterialBeing( null ));
      const optionalMaterialsList = scheduleSurgeryModal.filter(el => el.isOptional && !el.product.isBundle);
      const requireMaterialsList = scheduleSurgeryModal.filter(el => el.isOptional && el.product.isBundle);
      const optionalMaterials = {system: itemProduct,  optionalBundle: itemProductBundle};
      if( listElementOptRequireMaterialBeing && listElementOptRequireMaterialBeing.length > 0 ){
        const newListOptMaterialBeing =  listElementOptRequireMaterialBeing.concat( requireMaterialsList && requireMaterialsList.length > 0 && requireMaterialsList);
         dispatch(setElementOptRequireMaterialBeing( newListOptMaterialBeing ));
      }else if(!listElementOptRequireMaterialBeing || listElementOptRequireMaterialBeing.length === 0){
        requireMaterialsList && requireMaterialsList.length > 0 && dispatch(setElementOptRequireMaterialBeing( requireMaterialsList ));
      }
      optionalMaterialsList && optionalMaterialsList.length > 0 && dispatch(setElementOptionalMaterialBeing( optionalMaterialsList ));
      listRequireItems && listRequireItems.length > 0 && dispatch(setElementRequireMaterialBeing( listRequireItems ));
      dispatch(setElementTypeSurgeryBeing(optionalMaterials));
      toggle();
    }

    else if ( listSystemRequirements  && scheduleSurgeryModal.length === 0 ){

      setOpenModalError("errorModal");
    }

  };

  const handleWithoutMaterial = () => {
    if(!itemProductBundle){
      listRequireItems && listRequireItems.length > 0 &&  dispatch(setElementRequireMaterialBeing( listRequireItems ));
      const optionalMaterials = {system: itemProduct};
      dispatch(setElementTypeSurgeryBeing(optionalMaterials));
    }
    if(itemProductBundle){
      listRequireItems && listRequireItems.length > 0 &&  dispatch(setElementRequireMaterialBeing( listRequireItems ));
      const optionalMaterials = {system: itemProduct,  optionalBundle: itemProductBundle};
      dispatch(setElementTypeSurgeryBeing(optionalMaterials));
      // dispatch(setElementOptRequireMaterialBeing( null ));
    }
    toggle();
  };


  return (
    <div className="c-scheduleSurgeryModal">
      <h3 className="c-scheduleSurgeryModal-title">{itemProduct && itemProduct.productDescription}</h3>
      <form
        className="c-scheduleSurgeryModal-c-list-items"
        onSubmit={handleSelectMaterial}
      >
        <div className="c-scheduleSurgeryModal-c-list-items-scroll">
          <h3 className="scheduleSurgeryModal-title-list" > Productos Opcionales </h3>
          {
            listOptionalItems && listOptionalItems.length > 0 &&
              listOptionalItems.map((item) => (
                <div key={item.id} className="c-scheduleSurgeryModal-c-item">
                  <p className="c-scheduleSurgeryModal-item-name">{item.product.productDescription}</p>
                  <input
                    className="c-scheduleSurgeryModal-item-check"
                    type="checkbox"
                    checked={ scheduleSurgeryModal.some(el=> el.id === item.id) }
                    value={item.id}
                    name={item.id}
                    onChange={() => handleAddOptionalItem(item)}
                  />
                </div>
              ))
          }
          <h3 className="scheduleSurgeryModal-title-list" > Productos Obligatorios </h3>
          {
            listRequireItems && listRequireItems.length > 0 &&
              listRequireItems.map((item) => (
                <div key={item.id} className="c-scheduleSurgeryModal-c-item">
                  <p className="c-scheduleSurgeryModal-item-name">{item.product.productDescription}</p>
                </div>
              ))
          }
          {
            (!listOptionalItems || listOptionalItems && listOptionalItems.length === 0 ) &&
            <h3 className="c-scheduleSurgeryModal-item-title-errror"> No existen sugerencias para {itemProduct && itemProduct.productDescription} </h3>
          }
          {
            (!listRequireItems || listRequireItems && listRequireItems.length === 0 ) &&
            <h3 className="c-scheduleSurgeryModal-item-title-errror"> No existen elementos obligatorios para {itemProduct && itemProduct.productDescription} </h3>
          }
        </div>
        {
          listOptionalItems && listOptionalItems.length > 0 && 
          <button className="c-scheduleSurgeryModal-button c-scheduleSurgeryModal-button-submit" type="submit">
            ACEPTAR
          </button>

        }
      </form>
        <button className="c-scheduleSurgeryModal-button c-scheduleSurgeryModal-button-reject" onClick={handleWithoutMaterial}>
          {!listOptionalItems || listOptionalItems && listOptionalItems.length === 0 ? 'Continuar' :`NO, GRACIAS`}
        </button>

      {
        openModalError === "errorModal" &&
        <ErrorModal
            isOpen
            toggle={toggle}
            setOpenModalError={setOpenModalError}
            messageModal={'¡No se ha seleccionado materiales!'}
        />
      }
    </div>
  );
};

ScheduleSurgeryTypeSurgeyModal.propTypes = {
  toggle: PropTypes.any,
  modalOrSystem: PropTypes.any,
  itemProduct: PropTypes.any,
  itemProductBundle: PropTypes.any,
};
