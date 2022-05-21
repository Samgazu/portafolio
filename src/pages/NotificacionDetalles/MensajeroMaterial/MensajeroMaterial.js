import React from 'react'
import shortid from 'shortid'
import { ATQAdministrator_Assign_ATQ_TableUbication_Component } from '../../../components/ATQAdministrator/ATQAdmin_Tranferir_CX/ATQAdministrator_Assign_ATQ_TableUbication_Component'
import { SubNavBarComponent } from '../../../components/layouts/layout1/subnavbar/SubNavBarComponent'
import { StoreHouseListComponent } from '../../../components/StoreHouseComponents/StoreHouseApproveStatusComponent/StoreHouseListComponent'
import './styleMensajeroMaterial.scss';

export const MensajeroMaterial = () => {

    const arrayListFields = [
        {
            uid: shortid.generate(),
            title: 'Institucion',
            value: 'Cervical',
        },
        {
            uid: shortid.generate(),
            title: 'Fecha de CX',
            value: '22/04/30',
        },
        {
            uid: shortid.generate(),
            title: 'Hora de CX',
            value: '',
        },
        {
            uid: shortid.generate(),
            title: 'Medico',
            value: 'Ricardo L.',
        },

    ];


  return (
    <div className='notificaciones_mensajero_materialCompleto_container'>

            <SubNavBarComponent title={"Notificaciones"} />

            <div className='notificaciones_mensajero_materialCompleto_subcontainer'>

                <section className='notificaciones_mensajero_materialCompleto_container_left'>
                    <StoreHouseListComponent
                        typeView={{ type: 'STORE', title: `PQX #${5}` }}
                        listFields={arrayListFields}
                    />

                </section>

                <section className='notificaciones_mensajero_materialCompleto_container_rigth'>
                    <ATQAdministrator_Assign_ATQ_TableUbication_Component
                        typeListTable={"Sistemas"} />

                    <div className="notificaciones_button_mensajero_materialCompleto_continuar_ATQ">
                        <button className="notificacion_btn_material_mensajero" >CONTINUAR</button>
                    </div>

                </section>


            </div>

        </div>
  )
}
