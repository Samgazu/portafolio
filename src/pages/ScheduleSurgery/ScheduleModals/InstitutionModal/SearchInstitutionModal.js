/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import icoBuscarGris from '../../../../assets/img/126PX/Icono_Buscar_Gris_126px.png';
import PropTypes from 'prop-types';
import { getInstitutions, getInstitutionsSucess, searchHospital } from '../../../../actions/systemsAction';
import { setInstitutionToSchedule } from '../../../../actions/scheduleSurgeryAction';


export const SearchInstitutionModal = (props) => {

  const dispatch = useDispatch();
  const [searchInstitution, setSearchInstitution] = useState('');
  const systems = useSelector((state) => state.systems);
  const getInstitutionsStore = systems.getInstitutions;
  const searchHospitalStore = useSelector((state) => state.systems.searchHospitals);
  //MODULOS NUEVOS PARA HACER EL MODULO DE LA LISTA
  const [currentPage, setPage] = useState(0);
  const [list, setList] = useState([]);


  useEffect(() => {
    if (list && list.length > 0) {
      setList([...list, ...getInstitutionsStore])
    } else if (getInstitutionsStore && getInstitutionsStore.length > 0) {
      setList(getInstitutionsStore)
    }
  }, [getInstitutionsStore])

  //-----------------------------------------

  useEffect(() => {
    dispatch(getInstitutions(currentPage));
  }, [currentPage])


  useEffect(() => {
    return () => {
      dispatch(getInstitutionsSucess([]));
    }
  }, [])

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - Math.round(scrollTop) === clientHeight) {
      setPage(prev => prev + 1)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchHospital(searchInstitution));
  };

  const [formValuesInput, handleInputChangeInputs] = useForm({
    institution: '',
  });

  const { institution } = formValuesInput;

  const handleInstitution = (e) => {
    e.preventDefault();
    if (institution) {
      dispatch(setInstitutionToSchedule(JSON.parse(institution)));
      props.toggle();
    } else {
      props.setLastOpenModal("INSTITUTION-MODAL");
      props.setMessageModal('¡No se ha seleccionado institución!');
      props.setOpenModal('errorModal');
    }
  };

  return (
    <div className="c-institution1">
      <div className="c-institution-c-search">
        <form onSubmit={handleSearch} className="tools-c-input-search">
          <button className="c-tools-search-icobuscar">
            <img src={icoBuscarGris} alt="" />
          </button>
          <input
            type="text"
            placeholder="Buscar..."
            name="search"
            onChange={({ target }) => setSearchInstitution(target.value)}
            value={searchInstitution}
            className="tools-input-search"
            autoComplete="off"
          />
        </form>
      </div>

      <form
        className="c-institution-c-list-items"
        onSubmit={handleInstitution}
      >
        <div className="c-institution-c-list-items-scroll1" onScroll={handleScroll}>

          {searchHospitalStore &&
            searchInstitution.trim().length > 0 &&
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
            searchInstitution.trim().length === 0 &&
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
    </div>
  );
};
SearchInstitutionModal.propTypes = {
  toggle: PropTypes.any,
};
