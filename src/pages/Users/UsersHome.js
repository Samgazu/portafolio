import React from 'react';

import icoAdminatq from '../../assets/img/UserMenuImages/adminatq.png';
import icoAtq from '../../assets/img/UserMenuImages/atq.png';
import icoDeliveryman from '../../assets/img/UserMenuImages/deliveryman.png';
import icoInstitutions from '../../assets/img/UserMenuImages/institutions.png';
import icoMedics from '../../assets/img/UserMenuImages/medics.png';
import icoPatients from '../../assets/img/UserMenuImages/patients.png';
import icoSeller from '../../assets/img/UserMenuImages/seller.png';
import icoStore from '../../assets/img/UserMenuImages/store.png';

import './sass/styles.sass';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter } from "react-router-dom";


export const UsersHome = () => {
    return (
        <div className='c-users-principal'>
            <div className='c-users animate__animated animate__fadeIn'>

                <div className='c-users-sec c-users-sec1' >
                    {/* <NavLink 
                        className='c-users-item-horizontalform c-users-item c-users-c-programar'
                        to={`/usuarios/medicos`}
                    >
                        <img src={icoMedics} alt="" className='c-users-c-programar-img'/>
                        <h3 className='users-item-title'> Médicos </h3>
                    </NavLink> */}
                    
                    {/* --------------------LA PARTE DE ARRIBA ES LA ORIGINAL------------------------ */}

                    <button
                        className='c-users-item-horizontalform c-users-item c-users-c-programar  c-user-item-simpleform-disabled'
                        to={`/usuarios/medicos`}
                        disabled
                    >
                        <img src={icoMedics} alt="" className='c-users-c-programar-img'/>
                        <h3 className='users-item-title'> Médicos </h3>
                    </button>

                    <NavLink 
                        className='c-users-item-simpleform c-users-item c-users-c-facturas'
                        to={`/usuarios/vendedores`}
                    >
                        <img src={icoMedics} alt="" className='c-users-c-facturas-img'/>
                        <h3 className='users-item-title'> Vendedor </h3>
                    </NavLink>
                    
                     <NavLink className='c-users-item-simpleform c-users-item c-users-c-historial'
                            to={`/usuarios/instituciones`}
                    >
                        <img src={icoInstitutions} alt="" className='c-users-c-historial-img'/>
                        <h3 className='users-item-title'> Instituciones </h3>
                    </NavLink> 
                   {/*  <button className='c-users-item-simpleform c-users-item c-users-c-historial  c-user-item-simpleform-disabled'
                            to={`/usuarios/instituciones`}
                            disabled
                    >
                        <img src={icoInstitutions} alt="" className='c-users-c-historial-img'/>
                        <h3 className='users-item-title'> Instituciones </h3>
                    </button> */}

                    <NavLink
                        className='c-users-item-horizontalform c-users-item c-users-c-cotizar'
                        to={`/usuarios/coordinadores_atq`}
                    >
                        <img src={icoAdminatq } alt="" className='c-users-c-cotizar-img'/>
                        <h3 className='users-item-title'> Coordinador ATQ </h3>
                    </NavLink> 
                    
                   {/*  <button
                        className='c-users-item-horizontalform c-users-item c-users-c-cotizar c-user-item-simpleform-disabled'
                        to={`/usuarios/coordinadores_atq`}
                    >
                        <img src={icoAdminatq } alt="" className='c-users-c-cotizar-img'/>
                        <h3 className='users-item-title'> Coordinador ATQ </h3>
                    </button> */}

                </div>


                <div className='c-users-sec c-users-sec2' >
                     <NavLink 
                        className='c-users-item-simpleform c-users-item c-users-c-pedidos'
                        to={`/usuarios/pacientes`}
                    >
                        <img src={icoPatients} alt="" className='c-users-c-pedidos-img'/> 
                        <h3 className='users-item-title'> Pacientes </h3>
                    </NavLink> 
                    {/* <button
                        className='c-users-item-simpleform c-users-item c-users-c-pedidos  c-user-item-simpleform-disabled'
                        to={`/usuarios/pacientes`}
                    >
                        <img src={icoPatients} alt="" className='c-users-c-pedidos-img'/> 
                        <h3 className='users-item-title'> Pacientes </h3>
                    </button> */}
                    
                     <NavLink 
                        className='c-users-item-horizontalform c-users-item c-users-c-encuestas'
                        to={`/usuarios/atq`}
                    >
                        <img src={icoAtq} alt="" className='c-users-c-encuestas-img'/>
                        <h3 className='users-item-title'> ATQ </h3>
                    </NavLink> 

                    {/* <button 
                        className='c-users-item-horizontalform c-users-item c-users-c-encuestas  c-user-item-simpleform-disabled'
                        to={`/usuarios/atq`}
                        disabled
                    >
                        <img src={icoAtq} alt="" className='c-users-c-encuestas-img'/>
                        <h3 className='users-item-title'> ATQ </h3>
                    </button>
 */}
                    

                   {/*  <NavLink 
                         className='c-users-item-horizontalform c-users-item c-users-c-informacion isDisabled'
                        to={`/usuarios/repartidores`}
                        disabled
                    >
                        <img src={icoDeliveryman} alt="" className='c-users-c-informacion-img'/> 
                        <h3 className='users-item-title c-users-c-informacion-title'> Repartidor </h3>
                    </NavLink> */}
                    <button
                         className='c-users-item-horizontalform c-users-item c-users-c-informacion isDisabled c-user-item-simpleform-disabled'
                        to={`/usuarios/repartidores`}
                        disabled
                    >
                        <img src={icoDeliveryman} alt="" className='c-users-c-informacion-img'/> 
                        <h3 className='users-item-title c-users-c-informacion-title'> Repartidor </h3>
                    </button>

                   {/*  <NavLink 
                        className='c-users-item-simpleform c-users-item c-users-c-estatus'
                        to={`/usuarios/almacenistas`}
                    >
                        <img src={icoStore} alt="" className='c-users-c-estatus-img'/> 
                        <h3 className='users-item-title'> Almacenista </h3>
                    </NavLink> */}
                    <button
                        className='c-users-item-simpleform c-users-item c-users-c-estatus c-user-item-simpleform-disabled'
                        to={`/usuarios/almacenistas`}
                    >
                        <img src={icoStore} alt="" className='c-users-c-estatus-img'/> 
                        <h3 className='users-item-title'> Almacenista </h3>
                    </button>
                    
                </div>

            </div>
        </div>
    )
}


function mapStateToProps (state) {
    return {
        ...state,
    };
}


export default withRouter(connect(mapStateToProps)(UsersHome));