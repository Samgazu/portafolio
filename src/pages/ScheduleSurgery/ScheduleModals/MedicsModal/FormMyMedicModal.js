import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setMedicToSchedule } from '../../../../actions/scheduleSurgeryAction';
import { useForm } from '../../../../hooks/useForm';

export const FormMyMedicModal = ({toggle, setOpenModal, setLastOpenModal, setMessageModal}) => {

    const dispatch = useDispatch();
    const getMyMedicsToSchedule = useSelector(state => state.scheduleSurgery.getMyMedicsToSchedule);
    /* const searchMedicStore = useSelector(state => state.scheduleSurgery.searchMedicsToSchedule);
    const [medics, setMedics] = useState(getMyMedics);
    const [searchMedic, setSearchMedic] = useState("");

  useEffect(() => {
  if(!searchMedicStore || searchMedicStore.length === 0 ){
       setMedics(getMyMedics)
     }else{
       setMedics(searchMedicStore)
     }
   }, [searchMedicStore]) */

    const [ formValuesInput, handleInputChangeInputs] = useForm({
        medic: ''
      });
    const { medic } = formValuesInput;
      
    const handleAddMedic = (e) => {
        e.preventDefault();
        if(medic){
          dispatch(setMedicToSchedule(JSON.parse(medic)) );
          toggle();
        }else{
          setLastOpenModal("MEDICS-MODAL");
          setMessageModal('¡No se ha seleccionado médico!');
          setOpenModal('errorModal');
        }
      }

      /* const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchMedicsToSchedule( searchMedic ));
      } */


    return (
      /*   <>
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
        </div> */
        <form className="c-medic-c-list-items" onSubmit={handleAddMedic}>
            <div className="c-medic-c-list-items-scroll c-medic-c-list-items-scroll-MyMedics">
                {
                    getMyMedicsToSchedule && getMyMedicsToSchedule.length > 0 ?
                    (getMyMedicsToSchedule.map((item) => (
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
                    )))
                    : ( 
                        <div className="c-medic-c-item-not-found">
                            <span className="c-medic-item-name-not-found">No se encontraron médicos en tu lista</span> 
                        </div>
                    )
                }
            </div>

            <button className='c-medic-button' type='submit'>
                CONTINUAR
            </button>
        </form>
        //</>
    )
}

FormMyMedicModal.propTypes = {
    toggle: PropTypes.any,
    setOpenModal: PropTypes.any,
    setLastOpenModal: PropTypes.any,
    setMessageModal: PropTypes.any,
}


