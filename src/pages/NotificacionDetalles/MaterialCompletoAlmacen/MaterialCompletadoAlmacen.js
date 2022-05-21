import React from 'react'
import shortid from 'shortid';
import { ATQAdministrator_Assign_ATQ_TableUbication_Component } from '../../../components/ATQAdministrator/ATQAdmin_Tranferir_CX/ATQAdministrator_Assign_ATQ_TableUbication_Component';
import { SubNavBarComponent } from '../../../components/layouts/layout1/subnavbar/SubNavBarComponent'
import { NotificacionTableComponent } from '../../../components/NotificationComponent/NotificacionTableComponent';
import { StoreHouseListComponent } from '../../../components/StoreHouseComponents/StoreHouseApproveStatusComponent/StoreHouseListComponent';
import './styleMaterialRecolectarEntregar.scss';

export const MaterialCompletadoAlmacen = () => {


    const arrayListFields = [
        {
            uid: shortid.generate(),
            title: 'Institucion',
            value: 'Cervical',
        },
        {
            uid: shortid.generate(),
            title: 'Fecha de CX',
            value: 'Ricardo L.',
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

    const typeListTable = [
        {
            uid:shortid.generate(),
            material:"ADD 12",
            cantidad: 34,
        },
        {
            uid:shortid.generate(),
            material:"ADD 12",
            cantidad: 34,
        },
        {
            uid:shortid.generate(),
            material:"ADD 12",
            cantidad: 34,
        },
        {
            uid:shortid.generate(),
            material:"ADD 12",
            cantidad: 34,
        }
    ]


    return (
        <div className='notificaciones_materialRecolectar_Entregar_container'>

            <SubNavBarComponent title={"Notificaciones"} />

            <div className='notificaciones_materialRecolectar_Entregar_subcontainer'>

                <section className='notificaciones_materialRecolectar_Entregar_container_left'>
                    <StoreHouseListComponent
                        typeView={{ type: 'STORE', title: `PQX #${5}` }}
                        listFields={arrayListFields}
                    />

                </section>

                <section className='notificaciones_materialRecolectar_Entregar_container_rigth'>
                <div className='notificacion_materialReolectar_div_container'>
                    <NotificacionTableComponent 
                    type = {"surtido"}
                    typeListTable={typeListTable} />

                    <NotificacionTableComponent 
                    type={"no-surtido"}
                    typeListTable={typeListTable} />

                    </div>

                    <div className="notificaciones_button_materialRecolectar_Entregar_continuar_ATQ">
                        <button className="notificacion_btn_materialRecolectar_Entregar" >CONTINUAR</button>
                    </div>

                </section>


            </div>

        </div>

    )
}
