import React from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { updateNameInstitutionQuote } from '../../../../actions/newQuoteAction';
import { useForm } from '../../../../hooks/useForm';
import PropTypes from 'prop-types';


export const AddInstitution = (props) => {
  const dispatch = useDispatch();
    const [formValues, handleInputChange, reset] = useForm({
        institution: '',
      });

    // useEffect(() => {
    //   document.getElementById('institution').autofocus;
    // }, [])
    
      const { institution } = formValues;
    
      const handlInstitution = (e) => {
        e.preventDefault();
        institution 
        ?dispatch(updateNameInstitutionQuote({
          id: shortid.generate(),
          name: institution
          }))
        : dispatch(updateNameInstitutionQuote(null))
        props.toggle();
        reset();
      };
  return (
    <form className="c-institution-add" onSubmit={handlInstitution}>
      <div className="c-institution-add-c-item">
        <input
          className="c-institution-add-item-name"
          placeholder="Nombre: "
          name="institution"
          id="institution"
          value={institution}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
        />
        <button type="submit" className="c-institution-add-button">
            Agregar
        </button>
      </div>
      
    </form>
  );
};

AddInstitution.propTypes = {
  toggle: PropTypes.any,
}