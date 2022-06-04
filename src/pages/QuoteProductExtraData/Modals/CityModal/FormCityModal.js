import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCityAndStateQuote } from '../../../../actions/newQuoteAction';
import PropTypes from 'prop-types';
import { getCities, getCitiesSucess } from '../../../../actions/systemsAction';
import shortid from 'shortid';
import { setCities } from '../../../../actions/JSON/cities_state_JSON';

export const FormCityModal = (props) => {
  const getStates = useSelector((state) => state.systems.getStates);
  const getCity = useSelector((state) => state.systems.getCities);
  const [state, setState] = useState('');
  const [fisrtRender, setFisrtRender] = useState(0);
  const [whiteCampState, setWhiteCampState] = useState('');
  const [city, setCity] = useState('');
  const [whiteCampCity, setWhiteCampCity] = useState([/* { 
    cityNumber: shortid.generate(),
    id: shortid.generate(),
    name: "Por favor selecciÃ³ne un Estado",
    stateId: shortid.generate(),
    value: false,
  } */]);
  const dispatch = useDispatch();

  useEffect(() => {
    
    const nameState = state ? JSON.parse(state) :'' ;
    // if(nameState && nameState.name.toLowerCase() !== 'jalisco' && !fisrtRender.current){
    //   setCity('');
    // }

   
      dispatch(getCities(nameState.id)); 
    
  }, [state])

  useEffect(() => {
    return () => {
      dispatch(setCities()); 
    }
  }, [])

  useEffect(() => {
    

    if(getStates && !state){
      let newObject = getStates.filter((item) => item.name.toLowerCase() !== 'jalisco');
      let principalState = getStates.find(item => item.name.toLowerCase() === 'jalisco');
      
      newObject.unshift(principalState);
      setWhiteCampState([ ...newObject])
      
      setState(JSON.stringify(principalState));
      
    }
    const nameState = state ? JSON.parse(state) :'' ;

    if( nameState && getCity && !city && nameState.name.toLowerCase() === 'jalisco' && !fisrtRender){
      let newObject = getCity.filter((item) => item.name.toLowerCase() !== 'guadalajara');
      let principalCity = getCity.find(item => item.name.toLowerCase() === 'guadalajara');
      newObject.unshift(principalCity);
      setWhiteCampCity([ ...newObject])
      setCity(JSON.stringify(principalCity));
      setFisrtRender(1);
      
    }

    /* if(getStates && !state){
      setWhiteCampState([{ 
        id: shortid.generate(),
        name: "SelecciÃ³ne un Estado",
        value: false,
      } ,...getStates])
    } */
    /* if(state && getCity && !city){
      setWhiteCampCity([{ 
        cityNumber: shortid.generate(),
        id: shortid.generate(),
        name: "SelecciÃ³ne una ciudad",
        stateId: shortid.generate(),
        value: true,
      } ,...getCity])
    } */
    

  }, [state, getCity]);


  useEffect(() => {
    const nameState = state ? JSON.parse(state) :'' ;
    if(state && nameState && getCity && !city && fisrtRender){
      setWhiteCampCity([{ 
        cityNumber: shortid.generate(),
        id: shortid.generate(),
        name: "Seleccione una ciudad",
        stateId: shortid.generate(),
        value: true,
      } ,...getCity])
      
    }
  }, [getCity])
  
  
  const handleAddState = (e) => {
    e.preventDefault();
    if(city && state){
    let itemState = JSON.parse(state);
    let nameCity = JSON.parse(city);
    //let itemState = state;
    dispatch(updateCityAndStateQuote({  state: itemState.name, city: nameCity.name }));
    props.toggle(); 
    }
  };

  return (
    <>
      <form className="c-cityAndState" onSubmit={handleAddState}>
        <select
          id="cars"
          className="c-cityAndState-item-name"
          onChange={(e) => setState(e.target.value)}
        >
          {whiteCampState &&
            whiteCampState.map((item) => (
              <option key={item.id} className="" value={JSON.stringify(item)}>
                {item.name}
              </option>
            ))}
        </select>
        <select
          id="cars"
          onChange={(e) => setCity(e.target.value)}
          className="c-cityAndState-item-name"
        >
          { whiteCampCity &&
            whiteCampCity.map((item) => (
              <option key={item.id} className="" value={JSON.stringify(item)}>
                {item.name}
              </option>
            ))}
        </select>
        <button type="submit" className="c-cityAndState-button">
          CONTINUAR
        </button>
      </form>
    </>
  );
};
FormCityModal.propTypes = {
  toggle: PropTypes.any,
};