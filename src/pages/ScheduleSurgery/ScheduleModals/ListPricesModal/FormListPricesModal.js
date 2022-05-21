import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import PropTypes from 'prop-types';
import './styles.sass';

import { setListPricesToSchedule, setWithPricesListSucces } from '../../../../actions/scheduleSurgeryAction';
import { SearchListPrices } from './SearchListPrices';
import { PrintListPricesModal } from './PrintListPricesModal';

export const FormListPricesModal = (props) => {

    const getListPrice = useSelector(state => state.scheduleSurgery.getListPricesToSchedule);
    const searchListPrice = useSelector(state => state.scheduleSurgery.searchListPricesToSchedule);
    const dispatch = useDispatch();
    const [pricelistElements, setPricelistElements] = useState("");
    const [withList, setWithList] = useState("");
  
    const [ formValuesInput, handleInputChangeInputs] = useForm({
      listPrices: null,
      
    });

    const { listPrices } = formValuesInput;
    
    const handleAddListPrices = (e) => {
      e.preventDefault();
      if(listPrices){
        dispatch(setWithPricesListSucces(withList));
        dispatch(setListPricesToSchedule(JSON.parse(listPrices)));
        props.toggle();
      }else{
        props.setLastOpenModal("LIST-PRICES-MODAL");
        props.setMessageModal('¡No se ha seleccionado lista de precio!');
        props.setOpenModal('errorModal');
      }
    }

    useEffect(() => {
      if(!searchListPrice || searchListPrice.length === 0){
        setPricelistElements(getListPrice);
      }else{
        setPricelistElements(searchListPrice);
      }
    }, [getListPrice, searchListPrice]);




    return (
      <div className='c-listPrices'>
        <div className="c-listPrices-c-list-items-c-title">
          <span className="c-listPrices-c-list-items-title">Seleccionar lista de precios:</span>
        </div>
        {
          listPrices&&
          <PrintListPricesModal setWithList={setWithList} className={'animate__animated animate__fadeIn'}/>

        }
        <SearchListPrices />
        <form className="c-listPrices-c-list-items" onSubmit={handleAddListPrices}>
          <div className="c-listPrices-c-list-items-scroll">
  
          {
            pricelistElements &&
            pricelistElements.map((item) => (
              <div key={item.id} className="c-listPrices-c-item">
                <span className="c-listPrices-item-name">{item.description}</span>
                <input className="c-listPrices-item-check" 
                       type="radio" 
                       checked={ listPrices&&listPrices.id&& JSON.parse(listPrices).id === item.id}
                       value={JSON.stringify(item)}
                       name='listPrices'
                       onChange={handleInputChangeInputs}  
                />
              </div>
            ))
            }
            </div>
  
          <button className='c-listPrices-button' type='submit'>
            CONTINUAR
          </button>
        </form>
  
      </div>
    );
}

FormListPricesModal.propTypes = {
    toggle: PropTypes.any,
    setLastOpenModal: PropTypes.any,
    setMessageModal: PropTypes.any,
    setOpenModal: PropTypes.any,
};
  