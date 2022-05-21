import React from 'react'
import shortid from 'shortid'
import { SubNavBarComponent } from '../../../components/layouts/layout1/subnavbar/SubNavBarComponent'
import { NotificacionTableComponent } from '../../../components/NotificationComponent/NotificacionTableComponent'
import { StoreHouseListComponent } from '../../../components/StoreHouseComponents/StoreHouseApproveStatusComponent/StoreHouseListComponent'
import "./styleAtq_Transferir_Rechazada.scss";

export const Atq_Transferir_Rechazada = () => {


    const arrayListFields = [
        {
            uid: shortid.generate(),
            title: 'Tipo de CX',
            value: 'Cervical',
        },
        {
            uid: shortid.generate(),
            title: 'Médico',
            value: 'Ricardo L.',
        },
        {
            uid: shortid.generate(),
            title: 'Institución',
            value: '',
        },
        {
            uid: shortid.generate(),
            title: 'Paciente',
            value: '',
        },
        {
            uid: shortid.generate(),
            title: 'Fecha y hora de CX',
            type: 'DATE',
            value: '',
        },
        {
            uid: shortid.generate(),
            title: 'Cliente',
            value: '',
        },
        {
            uid: shortid.generate(),
            title: 'Lista de Precios',
            value: '',
        },
        {
            uid: shortid.generate(),
            title: 'Vendedor',
            value: '',
        },
        {
            uid: shortid.generate(),
            type: "ATQ-Before",
            value: "Rodrigo Javier",

        },
        {
            uid: shortid.generate(),
            type: "ATQ-Later",
            value: "Leo oliva Perez Duran",

        }

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
    <div className={'atqAdministrator_ATQ_TransferirCX_Rechazada_container'}>

            <SubNavBarComponent title={"Notificaciones"} />

            <div className='atqAdministrator_ATQ_TransferirCX_Rechazada-section-container'>

                <section className='atqAdministrator_ATQ_TransferirCX_Rechazada-section-left'>
                    <StoreHouseListComponent
                        typeView={{ type: 'STORE', title: `PQX #${5}` }}
                        listFields={arrayListFields}
                    />
                    {/* 
             <PreRequerimentsComponent
                requirementsInstitution={surgerySelected.hospital}
                requirementsSales={surgerySelected.appointmentNotes}
                requirementsMedic={surgerySelected.medic}
                requirementsStore={[]}
                listElements={[]}
                type={'ATQ'}
            />   */}

                </section>

                <section className='atqAdministrator_ATQ_TransferirCX_Rechazada-section-rigth'>

                    <NotificacionTableComponent
                        type={"surtido"}
                        typeListTable={typeListTable} />

                    <NotificacionTableComponent
                        type={"no-surtido"}
                        typeListTable={typeListTable} />



                    <div className="container_buttons_changes_ATQ_Transferir_Rechazada">
                        <button className="container_buttons_changes_ATQ_Transferir_Rechazada">ACEPTAR</button>
                    </div>

                </section>

            </div>
        </div>
    )
}
