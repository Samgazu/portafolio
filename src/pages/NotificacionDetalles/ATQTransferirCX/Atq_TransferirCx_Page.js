import React from 'react'
import shortid from 'shortid';
import { SubNavBarComponent } from '../../../components/layouts/layout1/subnavbar/SubNavBarComponent'
import { NotificacionTableComponent } from '../../../components/NotificationComponent/NotificacionTableComponent';
import { StoreHouseListComponent } from '../../../components/StoreHouseComponents/StoreHouseApproveStatusComponent/StoreHouseListComponent'
import './styleAtq_Transferir.scss';


export const Atq_TransferirCx_Page = () => {

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
        <div className='notificaciones_ATQ_TransferirCX_container'>

            <SubNavBarComponent title={"Notificaciones"} />

            <div className='notificaciones_ATQ_TransferirCX_subcontainer'>

                <section className='notificaciones_ATQ_TransferirCX_container_left'>
                    <StoreHouseListComponent
                        typeView={{ type: 'TRANSFERIR-CX', title: `PQX #${5}` }}
                        listFields={arrayListFields}
                    />

                </section>

                <section className='notificaciones_ATQ_TransferirCX_container_rigth'>
                    <div className='notificacion_ATQ_TransferirCX_div_container'>
                        <NotificacionTableComponent
                            type={"surtido"}
                            typeListTable={typeListTable} />

                        <NotificacionTableComponent
                            type={"no-surtido"}
                            typeListTable={typeListTable} />

                    </div>

                    <div className="container_buttons_ATQ_TransferirCX">
                        <button className="btn_rechazar_ATQ_TransferirCX" >RECHAZAR</button>
                        <button className="btn_aceptar_ATQ_TransferirCX">ACEPTAR</button>
                    </div>


                </section>


            </div>

        </div>
    )
}
