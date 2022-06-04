import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import icoBuscarGris from '../../../../assets/img/126PX/Icono_Buscar_Gris_126px.png';
import { updateAtnMedicQuote} from '../../../../actions/newQuoteAction';
import { searchMedics, getMedicsSucess } from '../../../../actions/systemsAction';
import PropTypes from 'prop-types';
import { setMedicsAtq } from '../../../../actions/JSON/atnJSON';

export const AtnMedicos = (props) => {
    const systems = useSelector( state => state.systems);
    const searchMedicStore = useSelector(state => state.systems.searchMedics);
    const getMedicsStore = systems.getMedics;

    const [searchMedic, setSearchMedic] = useState("");
    const dispatch = useDispatch();

    const [currentPage, setPage] = useState(0);
    
    const [list, setList] = useState([]);     
  
    useEffect(() => {
      if(list && list.length > 0){
      setList([...list,...getMedicsStore])
      }else if(getMedicsStore && getMedicsStore.length > 0){
        setList(getMedicsStore)
      }
    },[getMedicsStore])

    const handleScroll = (event) => {
        const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
        
        if(scrollHeight-Math.round(scrollTop) === clientHeight){
            setPage(prev => prev + 1)
        }
    }


    useEffect(() => {
      
      dispatch(setMedicsAtq());
  }, [currentPage])

  useEffect(() => {
    return () => {
    dispatch(getMedicsSucess([]));
    }
}, [])

    useEffect(() => {
      if(searchMedic.trim().length !== 0 ){
          dispatch(searchMedics( searchMedic ));
      }
  }, [searchMedic])


  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchMedics( searchMedic ));
  }

    const [ formValuesInput, handleInputChangeInputs] = useForm({
      atn: ''
    });
    const { atn } = formValuesInput;
    
    const handleAtn = (e) => {
      e.preventDefault();
      atn ? dispatch(updateAtnMedicQuote(JSON.parse(atn)))
      : dispatch(updateAtnMedicQuote(atn))
      props.toggle();
    }
    return (
        <>
        <div className="c-atn-c-search">
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
        <form className="c-atn-c-list-items" onSubmit={handleAtn}>
          <div className="c-atn-c-list-items-scroll" onScroll={handleScroll}>

          {
            searchMedicStore &&
            searchMedic.trim().length > 0 &&
            searchMedicStore.map((item) => (
              <div key={item.id} className="c-atn-c-item">
                <span className="c-atn-item-name">{item.name} {item.firstLastname} {item.secondLastname}</span>
                <input className="c-atn-item-check" 
                       type="radio" 
                       checked={ atn&&atn.id&& JSON.parse(atn).id === item.id}
                       value={JSON.stringify(item)}
                       name='atn'
                       onChange={handleInputChangeInputs}  
                />
              </div>
            ))
            }

          {
            list &&
            searchMedic.trim().length === 0&&
            list.map((item) => (
              <div key={item.id} className="c-atn-c-item">
                <span className="c-atn-item-name">{item.name} {item.firstLastname} {item.secondLastname}</span>
                <input className="c-atn-item-check" 
                       type="radio" 
                       checked={ atn&&atn.id&& JSON.parse(atn).id === item.id}
                       value={JSON.stringify(item)}
                       name='atn'
                       onChange={handleInputChangeInputs}  
                />
              </div>
            ))
            }
            </div>

          <button className='c-atn-button' type='submit'>
            CONTINUAR
          </button>
        </form>

      </>
    )
}
AtnMedicos.propTypes = {
  toggle: PropTypes.any,
};