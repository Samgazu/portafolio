import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import { AddPatient } from './FormPatientModa';
import icoBuscarGris from '../../../../assets/img/126PX/Icono_Buscar_Gris_126px.png';
import './sass/styles.sass';
import PropTypes from 'prop-types';
import { setPatientToSchedule } from '../../../../actions/scheduleSurgeryAction';
import { getPatients, getPatientsSuccess } from '../../../../actions/systemsAction';

export const SearchPatientModal = (props) => {
  const dispatch = useDispatch();
  const [searchPatients, setSearchPatients] = useState('');
  const systems = useSelector(state => state.systems);
  const getPatientsStore = systems.getPatients;
  const searchPatienStore = useSelector((state) => state.systems.searchPatients);

  //MODULOS NUEVOS PARA HACER EL MODULO DE LA LISTA
  const [currentPage, setPage] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (list && list.length > 0) {
      setList([...list, ...getPatientsStore])
    } else if (getPatientsStore && getPatientsStore.length > 0) {
      setList(getPatientsStore)
    }
  }, [getPatientsStore])

  useEffect(() => {
    dispatch(getPatients(currentPage));
  }, [currentPage])


  useEffect(() => {
    return () => {
      dispatch(getPatientsSuccess([]));
    }
  }, [])

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - Math.round(scrollTop) === clientHeight) {
      setPage(prev => prev + 1)
    }
  }
  //----------------------------------

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchPatients(searchPatients));
  };

  const [formValuesInput, handleInputChangeInputs] = useForm({
    Patient: '',
  });

  const { Patient } = formValuesInput;

  const handlePatient = (e) => {
    e.preventDefault();
    dispatch(setPatientToSchedule(JSON.parse(Patient)));
    props.toggle();
  };
  const [screen, setScreen] = useState(false);

  const handleChangeScreen = () => {
    setScreen(!screen);
  };

  return (
    <div className="c-Patient">
      <div className="c-Patient-c-search">
        <form onSubmit={handleSearch} className="tools-c-input-search">
          <button className="c-tools-search-icobuscar">
            <img src={icoBuscarGris} alt="" />
          </button>
          <input
            type="text"
            placeholder="Buscar..."
            name="search"
            onChange={({ target }) => setSearchPatients(target.value)}
            value={searchPatients}
            className="tools-input-search"
            autoComplete="off"
          />
        </form>
        <button
          className={
            !screen ? 'c-Patient-button ' : 'c-Patient-button active'
          }
          onClick={handleChangeScreen}
        >
          Datos de Contacto
        </button>
      </div>

      {!screen ? (
        <form
          className="c-Patient-c-list-items"
          onSubmit={handlePatient}
        >
          <div className="c-Patient-c-list-items-scroll" onScroll={handleScroll}>
            {searchPatienStore &&
              searchPatients.trim().length > 0 &&
              searchPatienStore.map((item) => (
                <div key={item.id} className="c-Patient-c-item">
                  <p className="c-Patient-item-name">{`${item.firstName} ${item.firstLastName} ${item.secondLastName}`}</p>
                  <input
                    className="c-Patient-item-check"
                    type="radio"
                    checked={Patient && Patient.id && JSON.parse(Patient).id === item.id}
                    value={JSON.stringify(item)}
                    name="Patient"
                    onChange={handleInputChangeInputs}
                  />
                </div>
              ))}

            {list &&
              searchPatients.trim().length === 0 &&
              list.map((item) => (
                <div key={item.id} className="c-Patient-c-item">
                  <p className="c-Patient-item-name">{`${item.firstName} ${item.firstLastName} ${item.secondLastName}`}</p>
                  <input
                    className="c-Patient-item-check"
                    type="radio"
                    checked={Patient && Patient.id && JSON.parse(Patient).id === item.id}
                    value={JSON.stringify(item)}
                    name="Patient"
                    onChange={handleInputChangeInputs}
                  />
                </div>
              ))}
          </div>
          <button className="c-Patient-button" type="submit">
            CONTINUAR
          </button>
        </form>
      ) : (
        <AddPatient toggle={props.toggle} />
      )}

    </div>
  )
}


SearchPatientModal.propTypes = {
  toggle: PropTypes.any,
};
