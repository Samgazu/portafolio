import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createAppointmentToScheduleSurgery } from '../../../actions/scheduleSurgeryAction';
import { SubNavBarComponent } from '../../../components/layouts/layout1/subnavbar/SubNavBarComponent';
import { ScheduleSurgeryPreOrderTable } from '../../../components/ScheduleSurgery/ScheduleSurgeryPreOrderTable/ScheduleSurgeryPreOrderTable';
import { ScheduleSurgery_OverviewCX } from '../../../components/ScheduleSurgery/ScheduleSurgeryPreOrderView/ScheduleSurgery_OverviewCX';
import { useNewScheduleSurgery } from '../../../hooks/useNewScheduleSurgery';
import './sass/styless.scss';
import Swal from 'sweetalert2';
import shortid from 'shortid';
import { PreRequerimentsComponent } from '../../../components/PreRequerimentsComponent/PreRequerimentsComponent';

export const ScheduleSurgeryPreOrderView = () => {
    
    const listElementTypeSurgeryCompleted = useSelector(state => state.scheduleSurgery.listElementTypeSurgeryCompleted);
    const listElementRequireMaterialSucces = useSelector(state => state.scheduleSurgery.listElementRequireMaterialSucces);
    const listElementOptionalMaterialSucces = useSelector(state => state.scheduleSurgery.listElementOptionalMaterialSucces);
    const requirementsInstitution = useSelector(state => state.scheduleSurgery.InstitutionToSchedule);
    const requirementsMedic = useSelector(state => state.scheduleSurgery.MedicToSchedule);
    const listObservations = useSelector(state => state.scheduleSurgery.listObservations);
    const scheduleSurgery = useSelector(state => state.scheduleSurgery);
    
    const history = useHistory();
    const dispatch = useDispatch();

    const [surgeryList, setSurgeryList] = useState(null);
    const [requireMaterialList, setRequireMaterialList] = useState(null);
    const [optionalMaterialList, setOptionalMaterialList] = useState(null);
    const [formValid, setFormValid] = useState({
            TipoCirugia: null ,
            medics: null ,
            Institucion: null ,
            Fecha: null ,
            Cliente: null ,
            PriceList: null ,
    });

    const handleValidForm = () => {
        let formValidCopy = {...formValid};
        formValidCopy['TipoCirugia'] = !!scheduleSurgery.MedicToSchedule
        formValidCopy['medics']  = !!scheduleSurgery.MedicToSchedule
        formValidCopy['Institucion'] = !!scheduleSurgery.InstitutionToSchedule
        formValidCopy['Fecha'] = !!scheduleSurgery.HourToSchedule
        formValidCopy['Cliente'] = !!scheduleSurgery.ClientToSchedule
        formValidCopy['PriceList'] = !!scheduleSurgery.PriceListToSchedule
        setFormValid(formValidCopy);
    }

    useEffect(() => {
        handleValidForm();
    }, [])

    useEffect(() => {

        setSurgeryList(listElementTypeSurgeryCompleted);
        setRequireMaterialList(listElementRequireMaterialSucces);
        setOptionalMaterialList(listElementOptionalMaterialSucces);

        if( listElementTypeSurgeryCompleted && listElementTypeSurgeryCompleted.length === 0 && 
            listElementRequireMaterialSucces && listElementRequireMaterialSucces.every(el => el.MandatoryProductDeleted) && 
            listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length === 0 
            || 
            !listElementTypeSurgeryCompleted&&
            !listElementRequireMaterialSucces&&
            !listElementOptionalMaterialSucces){
                history.replace('/ProgramarCX/TipoCirugia');
            }

    }, [listElementTypeSurgeryCompleted, listElementRequireMaterialSucces, listElementOptionalMaterialSucces])



    const handleSendNewScheduleSurgery = () => {
        handleValidForm();
        if( Object.values(formValid).some( item => !item ) ){
            Swal.fire({
            icon: 'error',
            title: '',
            text: '¡No se han completado algunos campos obligatorios!',
          })
        }else if( Object.values(formValid).every( item => !!item === true ) ){
            dispatch(createAppointmentToScheduleSurgery(useNewScheduleSurgery(scheduleSurgery)));
            history.replace('/Cirugia_Programada');
        }
    }
    
    return (
        <div className='schedulePreOrder-container'>
            <SubNavBarComponent title={"Programar CX"} historyPage={`/ProgramarCX/CompletarCampos/${shortid.generate()}`} />
            <div className='schedulePreOrder-section-container'>
                <section className='schedulePreOrder-section-left'>
                    
                    <ScheduleSurgery_OverviewCX />

                    <PreRequerimentsComponent 
                        requirementsInstitution={requirementsInstitution} 
                        listElements={listObservations} 
                        requirementsMedic={requirementsMedic} 
                        listNameToAdd={'Observaciones Ventas'}
                        messageEmpty={'Actualemnte no existen observaciones.'}
                        messageButton={'AGREGAR OBSERVACIÓN'}
                        type={'VENTAS'}
                        />

                </section>
                <section className='schedulePreOrder-section-rigth'>
                {
                    surgeryList &&
                    surgeryList.length > 0 &&
                    <ScheduleSurgeryPreOrderTable listItems={surgeryList} typeList={'SYSTEMS'} />
                }
                {
                    optionalMaterialList &&
                    optionalMaterialList.length > 0 &&   
                    <ScheduleSurgeryPreOrderTable listItems={optionalMaterialList} typeList={'OPTIONAL_ITEMS'} />
                }
                {
                    
                    requireMaterialList &&
                    requireMaterialList.length > 0 &&
                    <ScheduleSurgeryPreOrderTable listItems={requireMaterialList} typeList={'REQUIRE_ITEMS'} />
                }
                </section>

            </div>

            <button className='schedulePreOrder-section-bottom-button-continue' onClick={handleSendNewScheduleSurgery}>
                CONTINUAR
            </button>

        </div>
    )
}
