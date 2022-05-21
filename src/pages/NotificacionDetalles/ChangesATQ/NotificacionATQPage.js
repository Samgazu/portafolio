import React from 'react'
import shortid from 'shortid';
import { SubNavBarComponent } from '../../../components/layouts/layout1/subnavbar/SubNavBarComponent'
import { StoreHouseListComponent } from '../../../components/StoreHouseComponents/StoreHouseApproveStatusComponent/StoreHouseListComponent';
import { PreRequerimentsComponent } from '../../../components/PreAddOverviewComponent/PreAddOverviewComponent';
import './ChangesATQ.scss'
import { ATQAdministrator_Assign_ATQ_TableUbication_Component } from '../../../components/ATQAdministrator/ATQAdmin_Tranferir_CX/ATQAdministrator_Assign_ATQ_TableUbication_Component';



export const NotificacionATQPage = () => {

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


    const requierements = [
        {
            hospitalId: 1,
            id: 1,
            requirement: "requirement updated"
        },
        {
            hospitalId: 1,
            id: 1,
            requirement: "requirement updated"
        },
        {
            hospitalId: 1,
            id: 1,
            requirement: "requirement updated"
        },
        {
            hospitalId: 1,
            id: 1,
            requirement: "requirement updated"
        },
    ];

    const arrayRequieremts =
    {
        city: "SAN LUIS POTOSI",
        hospitalCode: "F00001",
        id: 1,
        isActive: true,
        isDeleted: false,
        lastSurgeryId: 0,
        modality: "1003020000",
        name: "H. BENEFICENCIA ESPAÑOLA",
        nextSurgeryDate: "0001-01-01T00:00:00",
        nextSurgeryId: 0,
        priceList: "",
        requirements: [
            {
                hospitalId: 1,
                id: 1,
                requirement: "requirement updated"
            },
            {
                hospitalId: 1,
                id: 1,
                requirement: "requirement updated"
            },
            {
                hospitalId: 1,
                id: 1,
                requirement: "requirement updated"
            },

        ]
    }



    return (

        <div className={'atqAdministrator_Assign_ATQ_container'}>

            <SubNavBarComponent title={"Notificaciones"} />

            <div className='atqAdministrator_Assign_ATQ-section-container'>

                <section className='atqAdministrator_Assign_ATQ-section-left'>
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

                <section className='atqAdministrator_Assign_ATQ-section-rigth'>
                     <ATQAdministrator_Assign_ATQ_TableUbication_Component
                        typeListTable={"Sistemas"} />
                    <ATQAdministrator_Assign_ATQ_TableUbication_Component
                        typeListTable={"noSurtido"} /> 


                    <div className="container_buttons_changes_ATQ">
                        <button className="btn_rechazar_changesATQ" >RECHAZAR</button>
                        <button className="btn_aceptar_changesATQ">ACEPTAR</button>
                    </div>

                </section>


            </div>

        </div>

    )
}
