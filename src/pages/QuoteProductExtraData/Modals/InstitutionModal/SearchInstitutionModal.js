/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import icoBuscarGris from '../../../../assets/img/126PX/Icono_Buscar_Gris_126px.png';
import { AddInstitution } from './AddInstitution';
import { updateInstitutionQuote } from '../../../../actions/newQuoteAction';
import { getInstitutions, searchHospital } from '../../../../actions/systemsAction';
import PropTypes from 'prop-types';

export const SearchInstitutionModal = (props) => {
  const dispatch = useDispatch();
  const searchHospitalStore = useSelector(
    (state) => state.systems.searchHospitals
  );
  const [searchHospitals, setSearchHospitals] = useState('');
  const [currentPage, setPage] = useState(0);
  const systems = useSelector((state) => state.systems);

  const getInstitutionsStore = systems.getInstitutions;

  const [list, setList] = useState([]);

  useEffect(() => {
    if (list && list.length > 0) {
      setList([...list, ...getInstitutionsStore])
    } else if (getInstitutionsStore && getInstitutionsStore.length > 0) {
      setList(getInstitutionsStore)
    }
  }, [getInstitutionsStore])
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - Math.round(scrollTop) === clientHeight) {
      setPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    dispatch(getInstitutions(currentPage));
  }, [currentPage])

  useEffect(() => {
    if (searchHospitals.trim().length !== 0) {
      dispatch(searchHospital(searchHospitals));
    }
  }, [searchHospitals]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchHospital(searchHospitals));
  };

  const [formValuesInput, handleInputChangeInputs] = useForm({
    institution: '',
  });

  const { institution } = formValuesInput;

  const handleInstitution = (e) => {
    e.preventDefault();

    if (props.type === 'onlyInstitution') {
      if (institution) {
        props.setResult(JSON.parse(institution));
        props.toggle();
      }
      else {
        props.toggle();
      }
    }
    else {

      institution ? dispatch(updateInstitutionQuote(JSON.parse(institution)))
        : dispatch(updateInstitutionQuote(null))
      props.toggle();
    }
  };
  const [screen, setScreen] = useState(false);

  const handleChangeScreen = () => {
    setScreen(!screen);
  };

  return (
    <div className="c-institution">
      <div className="c-institution-c-search">
        <form onSubmit={handleSearch} className="tools-c-input-search">
          <button className="c-tools-search-icobuscar">
            <img src={icoBuscarGris} alt="" />
          </button>
          <input
            type="text"
            placeholder="Buscar..."
            name="search"
            onChange={({ target }) => setSearchHospitals(target.value)}
            value={searchHospitals}
            className="tools-input-search"
            autoComplete="off"
          />
        </form>
        {
          !props.type &&
          <button
            className={
              !screen ? 'c-institution-button ' : 'c-institution-button active'
            }
            onClick={handleChangeScreen}
          >
            Datos de Contacto
          </button>
        }
      </div>


      {!screen ? (
        <form
          className="c-institution-c-list-items"
          onSubmit={handleInstitution}
        >
          <div className="c-institution-c-list-items-scroll" onScroll={handleScroll}>
            {searchHospitalStore &&
              searchHospitals.trim().length > 0 &&
              searchHospitalStore.map((item) => (
                <div key={item.id} className="c-institution-c-item">
                  <p className="c-institution-item-name">{item.name}</p>
                  <input
                    className="c-institution-item-check"
                    type="radio"
                    checked={institution && institution.id && JSON.parse(institution).id === item.id}
                    value={JSON.stringify(item)}
                    name="institution"
                    onChange={handleInputChangeInputs}
                  />
                </div>
              ))}
            {list &&
              searchHospitals.trim().length === 0 &&
              list.map((item) => (
                <div key={item.id} className="c-institution-c-item">
                  <p className="c-institution-item-name">{item.name}</p>
                  <input
                    className="c-institution-item-check"
                    type="radio"
                    checked={institution && institution.id && JSON.parse(institution).id === item.id}
                    value={JSON.stringify(item)}
                    name="institution"
                    onChange={handleInputChangeInputs}
                  />
                </div>
              ))}
          </div>
          <button className="c-institution-button" type="submit">
            CONTINUAR
          </button>
        </form>
      ) : (
        <AddInstitution toggle={props.toggle} />
      )}
    </div>
  );
};
SearchInstitutionModal.propTypes = {
  toggle: PropTypes.any,
};
