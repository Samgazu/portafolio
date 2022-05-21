import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import icoBuscarGris from '../../../../assets/img/126PX/Icono_Buscar_Gris_126px.png';

import PropTypes from 'prop-types';
import './sass/styles.sass';
import { getMedics, getMedicsSucess, searchMedics } from '../../../../actions/systemsAction';
import { setMedicToSchedule } from '../../../../actions/scheduleSurgeryAction';

export const FormMedicModal = (props) => {
    /* const getMedics = useSelector(state => state.scheduleSurgery.getMedicsToSchedule);
    const searchMedicStore = useSelector(state => state.scheduleSurgery.searchMedicsToSchedule); */
    const systems = useSelector( state => state.systems);
    const getMedicsStore = systems.getMedics;
    const searchMedicStore = useSelector(state => state.systems.searchMedics);

    const [searchMedic, setSearchMedic] = useState("");
    const dispatch = useDispatch();

    const [medics, setMedics] = useState(getMedics);
    //MODULOS NUEVOS PARA HACER EL MODULO DE LA LISTA
    const [currentPage, setPage] = useState(0);
    const [list, setList] = useState([]);   


    useEffect(() => {
      if(list && list.length > 0){
        //setClientsList([...clientsList,...getClientsStore])
        setList([...list,...getMedicsStore])
      }else if(getMedicsStore && getMedicsStore.length > 0){
        setList(getMedicsStore)
        //setClientsList(getClientsStore)
      }
    },[getMedicsStore])
    
    //-----------------------------------------

  //NUEVOS MODULOS DE BUSQUEDA IMPLEMENTADOS DENTRO DE------
  useEffect(() => {
    dispatch(getMedics(currentPage));
  }, [currentPage])


  useEffect(() => {
    return () => {
      dispatch(getMedicsSucess([]));
    } 
  }, [])

  //----------------------------------
//METODO SCROLL PARA RECARGAR EL PAGINADO ----------
const handleScroll = (event) => {
  const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
  
  if(scrollHeight-Math.round(scrollTop) === clientHeight){
      setPage(prev => prev + 1)
  }
}
//----------------------------------



  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchMedics( searchMedic ));
  }

    const [ formValuesInput, handleInputChangeInputs] = useForm({
      medic: ''
    });
    const { medic } = formValuesInput;
    
    const handleAddMedic = (e) => {

      e.preventDefault();
      
      if(props.type === 'onlyMedics'){
        if(medic){
            props.setResult(JSON.parse(medic));
            props.toggle();
        }
        else{
            props.toggle();
        }
      }

      else {
        if(medic){
          dispatch(setMedicToSchedule(JSON.parse(medic)) );
          props.toggle();
        }else{
          props.setLastOpenModal("MEDICS-MODAL");
          props.setMessageModal('¡No se ha seleccionado médico!');
          props.setOpenModal('errorModal');
        }
    }
    }
    return (
        <>
        <div className="c-medic-c-search">
          <form onSubmit={handleSearch} className="tools-c-input-search">
            <div className="c-tools-search-icobuscar">
              <img src={icoBuscarGris} alt="" />
            </div>
            <input
              type="text"
              placeholder="Buscar..."
              name="search"
              onChange={({target}) => setSearchMedic(target.value)}
              value={searchMedic}
              className="tools-input-search"
            />
          </form>
        </div>
        <form className="c-medic-c-list-items" onSubmit={handleAddMedic}>
          <div className="c-medic-c-list-items-scroll" onScroll={handleScroll}>

        {
          searchMedicStore &&
          searchMedic.trim().length > 0 &&
          searchMedicStore.map((item) => (
              <div key={item.id} className="c-medic-c-item">
                <span className="c-medic-item-name">{item.name} {item.secondName && item.secondName} {item.firstLastname && item.firstLastname} {item.secondLastname && item.secondLastname} </span>
                <input className="c-medic-item-check" 
                  type="radio" 
                  checked={ medic&&medic.id&& JSON.parse(medic).id === item.id}
                  value={JSON.stringify(item)}
                  name='medic'
                  onChange={handleInputChangeInputs}  
                />
              </div>
            ))
            }

          {
            list &&
            searchMedic.trim().length === 0 &&
            list.map((item) => (
              <div key={item.id} className="c-medic-c-item">
                <span className="c-medic-item-name">{item.name} {item.secondName && item.secondName} {item.firstLastname && item.firstLastname} {item.secondLastname && item.secondLastname} </span>
                <input className="c-medic-item-check" 
                  type="radio" 
                  checked={ medic&&medic.id&& JSON.parse(medic).id === item.id}
                  value={JSON.stringify(item)}
                  name='medic'
                  onChange={handleInputChangeInputs}  
                />
              </div>
            ))
            }
            </div>

          <button className='c-medic-button' type='submit'>
            CONTINUAR
          </button>
        </form>



      </>
    )
}
FormMedicModal.propTypes = {
  toggle: PropTypes.any,
};