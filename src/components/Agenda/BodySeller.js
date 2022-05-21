import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsersByRoleId, getUsersByRoleIdSuccess } from '../../actions/allUsersAction';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';
import './bodySeller.scss';

export const BodySeller = (props) => {
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
       SELLER: '',
     });

     useEffect(() => {
        dispatch(getUsersByRoleId({currentPage: 0, offset: 100, roleId: 1}))
        return () => {
            dispatch(getUsersByRoleIdSuccess(null))
        }
     }, [])
   
     useEffect(() => {
 
            
            if(!list && listUsersByRoleId){
                 setList(listUsersByRoleId);            
             }
         
     }, [listUsersByRoleId])
     
 
 
     const { SELLER } = formValuesInput;
   
     const handleSeller = (e) => {
       e.preventDefault();
   
 
         if(SELLER){
           props.setResult(SELLER);
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
       <div className="c-seller">
         {/* <div className="c-seller-c-search">
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
             className="c-seller-c-list-items"
             onSubmit={handleSeller}
           >
             <div className="c-seller-c-list-items-scroll" >
               {listUsersByRoleId && list &&
                 list.length > 0 &&
                 list.map((item) => (
                   <div key={item.userID} className="c-seller-c-item">
                     <p className="c-seller-item-name">{item.firstName} {item.secondName} {item.firstLastName} {item.secondLastName}</p>
                     <input
                       className="c-seller-item-check"
                       type="radio"
                       checked={ SELLER&&SELLER.userID&& JSON.parse(SELLER).userID === item.userID}
                       value={JSON.stringify(item)}
                       name="SELLER"
                       onChange={handleInputChangeInputs}
                     />
                   </div>
                 ))}
               {/* {list &&
                 searchHospitals.trim().length === 0 &&
                 list.map((item) => (
                   <div key={item.id} className="c-seller-c-item">
                     <p className="c-seller-item-name">{item.name}</p>
                     <input
                       className="c-seller-item-check"
                       type="radio"
                       checked={ seller&&seller.id&& JSON.parse(seller).id === item.id}
                       value={JSON.stringify(item)}
                       name="SELLER"
                       onChange={handleInputChangeInputs}
                     />
                   </div>
                 ))} */}
             </div>
             <button className="c-seller-button" type="submit">
               CONTINUAR
             </button>
           </form>
       </div>
     );
   };
   BodySeller.propTypes = {
     toggle: PropTypes.any,
   };
   
