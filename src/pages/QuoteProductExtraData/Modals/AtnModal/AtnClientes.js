import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import icoBuscarGris from '../../../../assets/img/126PX/Icono_Buscar_Gris_126px.png';
import {updateAtnClientQuote} from '../../../../actions/newQuoteAction';
import { getClients, getClientsSucess, searchClients } from '../../../../actions/systemsAction';
import PropTypes from 'prop-types';
import { setclients } from '../../../../actions/JSON/atnJSON';

export const AtnClientes = (props) => {

    const dispatch = useDispatch();
    const searchClientsStore = useSelector(state => state.systems.searchClients);
    const [searchClient, setSearchClient] = useState("");
    const systems = useSelector( state => state.systems);
    const getClientsStore = systems.getClients;
  
    const [currentPage, setPage] = useState(0);
    const [list, setList] = useState([]);     
  
  useEffect(() => {
    if(list && list.length > 0){
    setList([...list,...getClientsStore])
    }else if(getClientsStore && getClientsStore.length > 0){
      setList(getClientsStore)
    }
  },[getClientsStore])
   
    const handleScroll = (event) => {
        const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
        
        if(scrollHeight-Math.round(scrollTop) === clientHeight){
            setPage(prev => prev + 1)
        }
    }
    useEffect(() => {
      dispatch(setclients());
  }, [])


  useEffect(() => {
    return () => {
      dispatch(getClientsSucess([]));
    } 
    
}, [])



    useEffect(() => {
      if(searchClient.trim().length !== 0 ){
          dispatch(searchClients( searchClient ));
      }
    }, [searchClient])

    const handleSearch = (e) => {
      e.preventDefault();
      dispatch(searchClients( searchClient ));
    }
 
    const [ formValuesInput, handleInputChangeInputs] = useForm({
      atn: ''
  });
    const { atn } = formValuesInput;



    const handleAtn = (e) => {
      e.preventDefault();
      atn ? dispatch(updateAtnClientQuote(JSON.parse(atn)))
      : dispatch(updateAtnClientQuote(atn));
      
      props.toggle();
  }


  return (
    <>
      <div className="c-atn-c-search">
        <form onSubmit={handleSearch} className="tools-c-input-search">
          <button className="c-tools-search-icobuscar" type='submit'>
            <img src={icoBuscarGris} alt="" />
          </button>
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
      <form className="c-atn-c-list-items" onSubmit={handleAtn}>
        <div className="c-atn-c-list-items-scroll" onScroll={handleScroll}>

        {
          searchClientsStore &&
          searchClient.trim().length > 0 &&
          searchClientsStore.map((item) => (
            <div key={item.id} className="c-atn-c-item">
              <span className="c-atn-item-name">{item.clientName}</span>
              <input className="c-atn-item-check" 
                     type="radio" 
                     checked={ atn&&atn.id&& JSON.parse(atn).id === item.id}
                     value={JSON.stringify(item)}
                     name='atn'
                     onChange={handleInputChangeInputs}
              />
            </div>
          ))}

        {
          list &&
          searchClient.trim().length === 0 &&
          list.map((item) => (
            <div key={item.id} className="c-atn-c-item">
              <span className="c-atn-item-name">{item.clientName}</span>
              <input className="c-atn-item-check" 
                     type="radio" 
                     checked={ atn&&atn.id&& JSON.parse(atn).id === item.id}
                     value={JSON.stringify(item)}
                     name='atn'
                     onChange={handleInputChangeInputs}
              />
            </div>
          ))}
          </div>
      <button className='c-atn-button' type='submit'>
        CONTINUAR
      </button>
      </form>

    </>
  );
};
AtnClientes.propTypes = {
  toggle: PropTypes.any,
};