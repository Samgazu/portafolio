import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';
import './bodyATQ.scss';
import { getUsersByRoleFailure, getUsersByRoleId, getUsersByRoleSuccess } from '../../actions/atqAdministradorAction';

export const BodyATQ = (props) => {
  const dispatch = useDispatch();
  /*  const searchHospitalStore = useSelector(
     (state) => state.systems.searchHospitals
   ); */
   /* const [searchHospitals, setSearchHospitals] = useState(''); */
   const systems = useSelector((state) => state.systems);
   const listUsersByRoleId = useSelector( (state) => state.atqAdministrador.rols);
   const infoListComplete = useRef();
   const [list, setList]  = useState(null);     
   
 
 
 /*   const handleSearch = (e) => {
     e.preventDefault();
     dispatch(searchHospital(searchHospitals));
   }; */
 
   const [formValuesInput, handleInputChangeInputs] = useForm({
     ATQ: '',
   });

   useEffect(() => {
    dispatch(getUsersByRoleId({roleId:5}));
      return () => {
          dispatch(getUsersByRoleSuccess(null))
      }
   }, [])
 
   useEffect(() => {

          
          if(!list && listUsersByRoleId){
               setList(listUsersByRoleId);            
           }
       
   }, [listUsersByRoleId])
   


   const { ATQ } = formValuesInput;
 
   const handleAtq = (e) => {
     e.preventDefault();
 

       if(ATQ){
         props.setResult(JSON.parse(ATQ));
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
     <div className="c-atq">
       {/* <div className="c-atq-c-search">
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
           className="c-atq-c-list-items"
           onSubmit={handleAtq}
         >
           <div className="c-atq-c-list-items-scroll" >
             {listUsersByRoleId && list &&
               list.length > 0 &&
               list.map((item) => (
                 <div key={item.userID} className="c-atq-c-item">
                   <p className="c-atq-item-name">{item.firstName} {item.secondName} {item.firstLastName} {item.secondLastName}</p>
                   <input
                     className="c-atq-item-check"
                     type="radio"
                     checked={ ATQ&&ATQ.userID&& JSON.parse(ATQ).userID === item.userID}
                     value={JSON.stringify(item)}
                     name="ATQ"
                     onChange={handleInputChangeInputs}
                   />
                 </div>
               ))}
             {/* {list &&
               searchHospitals.trim().length === 0 &&
               list.map((item) => (
                 <div key={item.id} className="c-atq-c-item">
                   <p className="c-atq-item-name">{item.name}</p>
                   <input
                     className="c-atq-item-check"
                     type="radio"
                     checked={ atq&&atq.id&& JSON.parse(atq).id === item.id}
                     value={JSON.stringify(item)}
                     name="ATQ"
                     onChange={handleInputChangeInputs}
                   />
                 </div>
               ))} */}
           </div>
           <button className="c-atq-button" type="submit">
             CONTINUAR
           </button>
         </form>
     </div>
   );
 };
 BodyATQ.propTypes = {
   toggle: PropTypes.any,
 };
 
  