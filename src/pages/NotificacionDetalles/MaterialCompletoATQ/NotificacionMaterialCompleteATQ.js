import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import shortid from 'shortid';
import { ATQAdministrator_Assign_ATQ_TableUbication_Component } from '../../../components/ATQAdministrator/ATQAdmin_Tranferir_CX/ATQAdministrator_Assign_ATQ_TableUbication_Component';
import { SubNavBarComponent } from '../../../components/layouts/layout1/subnavbar/SubNavBarComponent'
import { StoreHouseListComponent } from '../../../components/StoreHouseComponents/StoreHouseApproveStatusComponent/StoreHouseListComponent';
import './styleMaterialComplete.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointmentNotificacion } from '../../../actions/notification-chatAction';
import { getAppointmentLocationsStoreHose, getAppointmentLocationsStoreHoseSuccess, getProductsToAppointmentStoreHose, getProductsToAppointmentStoreHoseSuccess, setAppointmentsStoreHouse } from '../../../actions/storeHouseAction';
import { getQuotationSeller } from '../../../actions/atqAdministradorAction';
import { handleCompleteBeginLocations, handleCompleteBeginProducts } from '../../../hooks/useFunctionsStoreHouse';


export const NotificacionMaterialCompleteATQ = () => {



    const {id} = useParams();
    const dispatch = useDispatch();
    const appoiment = useSelector((state) => state.notificationChat.appoiment)


    const AppointmentProducts = useSelector(state => state.storeHouse.AppointmentProducts);
    const AppointmentLocations = useSelector(state => state.storeHouse.AppointmentLocations);
    const AppointmentWithLocations = useSelector(state => state.storeHouse.appointmentItem);
    const [newProductsReq, setNewProductsReq] = useState(null);
    const [surtido,setSurtido] = useState(null);
    const [noSurtido, setNoSurtido] = useState(null);
    const surgerySelected = useSelector((state) => state.atqAdministrador.surgeryChosed);


   
 
   useEffect(() => {
    if(appoiment && appoiment.id) {
        dispatch(getProductsToAppointmentStoreHose(appoiment.id))
        dispatch(getAppointmentLocationsStoreHose(appoiment.id))
    }
    return () => {
        dispatch(setAppointmentsStoreHouse(null));
        dispatch(getAppointmentLocationsStoreHoseSuccess(null))
        dispatch(getProductsToAppointmentStoreHoseSuccess(null))
    }
}, [])

useEffect(() => {
    if(appoiment && appoiment.id) {
        dispatch(getProductsToAppointmentStoreHose(appoiment.id))
        dispatch(getAppointmentLocationsStoreHose(appoiment.id))
    }

}, [appoiment])



useEffect(() => {
    if(AppointmentLocations){
        handleCompleteBeginLocations(AppointmentLocations,setNewProductsReq,appoiment)
    }
}, [,AppointmentLocations])


useEffect(() => {
    
        if( (!_.isNil(AppointmentProducts) && AppointmentProducts.length > 0 && AppointmentProducts != null) || (newProductsReq != null)){   
            {  
                if(!AppointmentWithLocations || AppointmentWithLocations === null){
                    dispatch(setAppointmentsStoreHouse(handleCompleteBeginProducts(AppointmentProducts,newProductsReq,appoiment)));
                }
            }
        }

}, [newProductsReq])





    const arrayListFields = [
        {
            uid: shortid.generate(),
            title: 'Institucion',
            value: appoiment && appoiment.hospital.name
        },
        {
            uid: shortid.generate(),
            title: 'Fecha de CX',
            type:'DATE',
            value: appoiment && appoiment.surgeryDate
        },
        {
            uid: shortid.generate(),
            title: 'Hora de CX',
            type:'HOUR',
            value: appoiment && appoiment.surgeryDate
        },

    ];




    useEffect(() => {
        dispatch(getAppointmentNotificacion(15,id))
    }, [])


    


    return (
        <div className='notificaciones_materialCompleto_container'>

            <SubNavBarComponent title={"Notificaciones"} />

            <div className='notificaciones_materialCompleto_subcontainer'>

                <section className='notificaciones_materialCompleto_container_left'>
                    <StoreHouseListComponent
                        typeView={{ type: 'STORE', title: `PQX #${id}` }}
                        listFields={arrayListFields}
                    />

                </section>

                <section className='notificaciones_materialCompleto_container_rigth'>
                    <ATQAdministrator_Assign_ATQ_TableUbication_Component
                        typeListTable={"Sistemas"}
                        info={!AppointmentWithLocations ? [] : AppointmentWithLocations.productRequirements} />

                    <div className="notificaciones_button_materialCompleto_continuar_ATQ">
                        <button className="notificacion_btn_material" >CONTINUAR</button>
                    </div>

                </section>


            </div>

        </div>

    )
}
