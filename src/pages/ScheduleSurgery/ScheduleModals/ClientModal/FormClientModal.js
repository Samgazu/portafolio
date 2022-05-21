import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import PropTypes from 'prop-types';
import icoBuscarGris from '../../../../assets/img/126PX/Icono_Buscar_Gris_126px.png';

import './styles.sass';
import { getClients, getClientsSucess, searchClients } from '../../../../actions/systemsAction';
import { setClientToSchedule } from '../../../../actions/scheduleSurgeryAction';

export const FormClientModal = (props) => {
  
   const systems = useSelector( state => state.systems);
  const getClientsStore = systems.getClients; 


  const searchClientStore = useSelector(state => state.systems.searchClients); 
  const [searchClient, setSearchClient] = useState("");
  const dispatch = useDispatch();

//MODULOS NUEVOS PARA HACER EL MODULO DE LA LISTA
  const [currentPage, setPage] = useState(0);
  const [list, setList] = useState([]);     

useEffect(() => {
  if(list && list.length > 0){
    //setClientsList([...clientsList,...getClientsStore])
    setList([...list,...getClientsStore])
  }else if(getClientsStore && getClientsStore.length > 0){
    setList(getClientsStore)
    //setClientsList(getClientsStore)
  }
},[getClientsStore])

//-----------------------------------------

 /*  useEffect(() => {
    if(!searchClientStore || searchClientStore.length === 0){
      setClientsList(list);
    }else{
      setClientsList(searchClientStore);
    }
  }, [searchClientStore]) */




const handleSearch = (e) => {
  e.preventDefault();
  dispatch(searchClients( searchClient ));
}


//NUEVOS MODULOS DE BUSQUEDA IMPLEMENTADOS DENTRO DE------
useEffect(() => {
  dispatch(getClients(currentPage));
}, [currentPage])


useEffect(() => {
  return () => {
    dispatch(getClientsSucess([]));
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


  const [ formValuesInput, handleInputChangeInputs] = useForm({
    client: null
  });
  const { client } = formValuesInput;
  
  const handleAddclient = (e) => {
    e.preventDefault();
    if(client){
      dispatch(setClientToSchedule(JSON.parse(client)) );
      props.toggle();

    }else{
      props.setLastOpenModal("CLIENT-MODAL");
      props.setMessageModal('¡No se ha seleccionado cliente!');
      props.setOpenModal('errorModal');
    }
  }
  return (
    <div className='c-client'>
      <div className="c-client-c-search">
        <form onSubmit={handleSearch} className="tools-c-input-search">
          <div className="c-tools-search-icobuscar">
            <img src={icoBuscarGris} alt="" />
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            name="search"
            onChange={({target}) => setSearchClient(target.value)}
            value={searchClient}
            className="tools-input-search"
          />
        </form>
      </div>
      <form className="c-client-c-list-items" onSubmit={handleAddclient}>
        <div className="c-client-c-list-items-scroll" onScroll={handleScroll}>

        {
          searchClientStore &&
          searchClient.trim().length > 0 &&
          searchClientStore.map((item) => (
            <div key={item.id} className="c-client-c-item">
              <span className="c-client-item-name">{item.clientName}</span>
              <input className="c-client-item-check" 
                     type="radio" 
                     checked={ client&&client.id&& JSON.parse(client).id === item.id}
                     value={JSON.stringify(item)}
                     name='client'
                     onChange={handleInputChangeInputs}  
              />
            </div>
          ))
          }

        {
          list &&
          searchClient.trim().length === 0 &&
          list.map((item) => (
            <div key={item.id} className="c-client-c-item">
              <span className="c-client-item-name">{item.clientName}</span>
              <input className="c-client-item-check" 
                     type="radio" 
                     checked={ client&&client.id&& JSON.parse(client).id === item.id}
                     value={JSON.stringify(item)}
                     name='client'
                     onChange={handleInputChangeInputs}  
              />
            </div>
          ))
          }
          </div>

        <button className='c-client-button' type='submit'>
          CONTINUAR
        </button>
      </form>

    </div>
  );
};
FormClientModal.propTypes = {
  toggle: PropTypes.any,
  setLastOpenModal: PropTypes.any,
  setMessageModal: PropTypes.any,
  setOpenModal: PropTypes.any,
};