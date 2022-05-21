import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import PropTypes from 'prop-types';
import { setManageObservationSucces } from '../../actions/scheduleSurgeryAction';
import shortid from 'shortid';
import { addNoteSurgeryAppointmentStoreHose, addSellerNotes } from '../../actions/storeHouseAction';


export const AddObservationModalForm = ({toggle, nameAndTypeModal}) => {
    
    const listObservations = useSelector(state => state.scheduleSurgery.listObservations);
    const listSellerNotes = useSelector(state => state.storeHouse.listSellerNotes);
    const appointmentItem = useSelector(state => state.storeHouse.appointmentItem);
    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nameRequeriment: '',
    });
    
    const { nameRequeriment } = formValues;


    const handlNewNameRequeriment = (e) => {
        e.preventDefault();
        if(listObservations && listObservations.length > 0){
            const newObservationsList = listObservations.slice();
            newObservationsList.push({ id: shortid.generate(), description: nameRequeriment });
            dispatch(setManageObservationSucces( newObservationsList));
        } else if(!listObservations || listObservations && listObservations.length === 0){
            dispatch(setManageObservationSucces([{ id: shortid.generate(), description: nameRequeriment }]));
        }
        toggle();
    };

    const handleNewNoteStore = (e) => {
      e.preventDefault();
      if(listSellerNotes && listSellerNotes.length > 0){
          const newListSellerNotes = listSellerNotes.slice();
          newListSellerNotes.push({ id: shortid.generate(), description: nameRequeriment });
          dispatch(addSellerNotes( newListSellerNotes));
          appointmentItem&&dispatch(addNoteSurgeryAppointmentStoreHose({description: nameRequeriment, SurgeryAppointmentId:appointmentItem.id}));
      } else if(!listSellerNotes || listSellerNotes.length === 0){
          dispatch(addSellerNotes([{ id: shortid.generate(), description: nameRequeriment }]));
          appointmentItem&&dispatch(addNoteSurgeryAppointmentStoreHose({description: nameRequeriment, SurgeryAppointmentId:appointmentItem.id}));
      }
      toggle();
    }

    return (
        <form className="c-MedicHospitalModalNewRequeriment" onSubmit={nameAndTypeModal.type === 'VENTAS' ? handlNewNameRequeriment  : nameAndTypeModal.type === 'ALMACEN' && handleNewNoteStore }>
          <div className="c-MedicHospitalModalNewRequeriment-c-item">
            <textarea
              className="c-MedicHospitalModalNewRequeriment-item-name"
              type="text"
              placeholder="Descripción de Observación"
              name="nameRequeriment"
              value={nameRequeriment}
              onChange={handleInputChange}
              autoComplete="off"
              required
              cols="40" rows="5">
              </textarea>
          </div>
          <button type="submit" className="c-MedicHospitalModalNewRequeriment-button" >
            CONTINUAR
          </button>
        </form>
    )
}

AddObservationModalForm.propTypes = {
  setItemselected: PropTypes.any,
  itemselected: PropTypes.any,
  typeView: PropTypes.any,
  toggle: PropTypes.any,
  nameAndTypeModal: PropTypes.any,
}
