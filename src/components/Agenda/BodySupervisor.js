import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsersByRoleId, getUsersByRoleIdSuccess } from '../../actions/allUsersAction';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';
import './bodySupervisor.scss';

export const BodySupervisor = (props) => {
    const dispatch = useDispatch();
    /*  const searchHospitalStore = useSelector(
       (state) => state.systems.searchHospitals
     ); */
     /* const [searchHospitals, setSearchHospitals] = useState(''); */
     const systems = useSelector((state) => state.systems);
     const listUsersByRoleId = useSelector(state => state.allUsers.listUsersByRoleId);
     const infoListComplete = useRef();
     const [list, setList]  = useState(null);     
     
   
   
   /*   const handleSearch = (e) => {
       e.preventDefault();
       dispatch(searchHospital(searchHospitals));
     }; */
   
     const [formValuesInput, handleInputChangeInputs] = useForm({
       SUPERVISOR: '',
     });

     useEffect(() => {
        dispatch(getUsersByRoleId({currentPage: 0, offset: 100, roleId: 6}))
        return () => {
          dispatch(getUsersByRoleIdSuccess(null))
      }
     }, [])
   
     useEffect(() => {
 
            
            if(!list && listUsersByRoleId){
                 setList(listUsersByRoleId);            
             }
         
     }, [listUsersByRoleId])
     
 
 
     const { SUPERVISOR } = formValuesInput;
   
     const handleSupervisor = (e) => {
       e.preventDefault();
   
 
         if(SUPERVISOR){
           props.setResult(SUPERVISOR);
           props.toggle();
         }
         else{
             props.toggle();
         }
       
     };
     const [screen, setScreen] = useState(false);
   
     const handleChangeScreen = () => {
       setScreen(!screen);
     };
   
     return (
       <div className="c-supervisor">
         {/* <div className="c-supervisor-c-search">
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
         </div>      */}   
           <form
             className="c-supervisor-c-list-items"
             onSubmit={handleSupervisor}
           >
             <div className="c-supervisor-c-list-items-scroll" >
               {listUsersByRoleId && list &&
                 list.length > 0 &&
                 list.map((item) => (
                   <div key={item.userID} className="c-supervisor-c-item">
                     <p className="c-supervisor-item-name">{item.firstName} {item.secondName} {item.firstLastName} {item.secondLastName}</p>
                     <input
                       className="c-supervisor-item-check"
                       type="radio"
                       checked={ SUPERVISOR&&SUPERVISOR.userID&& JSON.parse(SUPERVISOR).userID === item.userID}
                       value={JSON.stringify(item)}
                       name="SUPERVISOR"
                       onChange={handleInputChangeInputs}
                     />
                   </div>
                 ))}
               {/* {list &&
                 searchHospitals.trim().length === 0 &&
                 list.map((item) => (
                   <div key={item.id} className="c-supervisor-c-item">
                     <p className="c-supervisor-item-name">{item.name}</p>
                     <input
                       className="c-supervisor-item-check"
                       type="radio"
                       checked={ supervisor&&supervisor.id&& JSON.parse(supervisor).id === item.id}
                       value={JSON.stringify(item)}
                       name="SUPERVISOR"
                       onChange={handleInputChangeInputs}
                     />
                   </div>
                 ))} */}
             </div>
             <button className="c-supervisor-button" type="submit">
               CONTINUAR
             </button>
           </form>
       </div>
     );
   };
   BodySupervisor.propTypes = {
     toggle: PropTypes.any,
   };
   
