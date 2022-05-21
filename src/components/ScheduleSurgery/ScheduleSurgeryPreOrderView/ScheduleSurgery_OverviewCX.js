import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { handleGetTypeSurgery } from '../../../hooks/useGetTypesSurgery';
import { ListElementsCXAbstractComponent } from '../../ListElementsCXAbstractComponent/ListElementsCXAbstractComponent';

export const ScheduleSurgery_OverviewCX = () => {

    const scheduleSurgery = useSelector(state => state.scheduleSurgery);

    const [typeSurgeryList, setTypeSurgeryList] = useState(null);
    const [medicSchedule, setMedicSchedule] = useState(null);
    const [patientSchedule, setPatientSchedule] = useState(null);
    const [priceListSchedule, setPriceListSchedule] = useState(null);

    useEffect(() => {
        scheduleSurgery.listElementTypeSurgeryCompleted&&
            handleGetTypeSurgery(scheduleSurgery.listElementTypeSurgeryCompleted).then( setTypeSurgeryList )
            // .catch( console.warn );

        if(scheduleSurgery.MedicToSchedule){
            const { name, secondName, firstLastname, secondLastname } = scheduleSurgery.MedicToSchedule;
            setMedicSchedule({ name, secondName, firstLastname, secondLastname });
        }
        if(scheduleSurgery.PatientToSchedule){
            const { firstName, secondName, firstLastName, secondLastName } = scheduleSurgery.PatientToSchedule;
            setPatientSchedule({ firstName, secondName, firstLastName, secondLastName });
        }

        if(scheduleSurgery.PriceListToSchedule){
            const { tableCode, description } = scheduleSurgery.PriceListToSchedule;
            setPriceListSchedule({ tableCode, description  });
        }

    }, [scheduleSurgery])

    return (
        
        <ListElementsCXAbstractComponent
            typeView={ { title: 'Resumen CX', type: 'PQX'} }
            typeSurgeryList={typeSurgeryList}
            medicSchedule={medicSchedule}
            patientSchedule={patientSchedule}
            priceListSchedule={priceListSchedule}
            InstitutionToSchedule={ scheduleSurgery.InstitutionToSchedule}
            HourToSchedule={scheduleSurgery.HourToSchedule}
            ClientToSchedule={scheduleSurgery.ClientToSchedule}
            ATQToSchedule={scheduleSurgery.ATQToSchedule}
        />
    )
}
