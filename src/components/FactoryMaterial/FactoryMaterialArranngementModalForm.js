import React from 'react';
import { useForm } from '../../hooks/useForm';
import PropTypes from 'prop-types';
import { AddSystemSurgeryArrangemenRequirement } from '../../actions/scheduleSurgeryAction';
import { useDispatch } from 'react-redux';

export const FactoryMaterialArranngementModalForm = ({itemselected, toggle}) => {

    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        nameRequeriment: '',
    });

    
    
    const { nameRequeriment } = formValues;


    const handlNewNameRequeriment = (e) => {
        e.preventDefault(); 
        dispatch(AddSystemSurgeryArrangemenRequirement({
            systemId: itemselected.product.id, 
            descruption: nameRequeriment, 
            title: nameRequeriment})
        );
        toggle();
    };

    return (
        <form className="c-MedicHospitalModalNewRequeriment" onSubmit={handlNewNameRequeriment}>
            <div className="c-MedicHospitalModalNewRequeriment-c-item">
                <textarea
                        className="c-MedicHospitalModalNewRequeriment-item-name"
                        type="text"
                        placeholder="Nombre Configuración"
                        name="nameRequeriment"
                        value={nameRequeriment}
                        onChange={handleInputChange}
                        autoComplete="off"
                        required
                        cols="40" rows="5">
                </textarea>
            </div>
            <button type="submit" className="c-MedicHospitalModalNewRequeriment-button">
                CONTINUAR
            </button>
      </form>
    )
}


FactoryMaterialArranngementModalForm.propTypes = {
    isOpen:             PropTypes.any,
    toggle:             PropTypes.any,
    itemselected:       PropTypes.any,
};