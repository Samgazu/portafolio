
export const useNewScheduleSurgery = (scheduleSurgery) => {

    const newSystemList = scheduleSurgery.listElementTypeSurgeryCompleted && scheduleSurgery.listElementTypeSurgeryCompleted.map(el => {
        const newObject = 
        { 
            IsSystem: true, 
            Product: {id: el.system.id},   
            SystemLevels: el.quantity,
            isMandarory: false
        }
        if(el.arrangement.description !== 'NA'){
            newObject['SystemArrangement'] = {id: el.arrangement.id};
        }
        return newObject;
    });

    const newRequireItemsList = scheduleSurgery.listElementRequireMaterialSucces && scheduleSurgery.listElementRequireMaterialSucces.map(el => {
        const newObject = 
        { 
            Product: {id: el.product.id},   
            isMandarory: true
        }
        el.product.isBundle ? newObject['IsSystem'] = true : newObject['IsSystem'] = false  
        el.product.isBundle ? newObject['SystemLevels'] = 1 : newObject['ProductQuantity'] = 1  
        
        if( el.MandatoryProductDeleted ){
            newObject['MandatoryProductDeleted'] = el.MandatoryProductDeleted;
        }
        return newObject;
    });

    const newOptionalItemsList = scheduleSurgery.listElementOptionalMaterialSucces && scheduleSurgery.listElementOptionalMaterialSucces.map(el => {
        const newObject = 
        {    
            isMandarory: false
        }
           
        if(el.system && el.system.isBundle){
            newObject['IsSystem'] = true;
            newObject['SystemLevels'] = el.quantity; 
            newObject['Product'] = {id: el.system.id};
        }   
        if(el.product && !el.product.isBundle){
            newObject['IsSystem'] = false;
            newObject['ProductQuantity'] = el.quantity;
            newObject['Product'] = {id: el.product.id};
            
        }
        if( el.system && el.arrangement.description !== 'NA'){
            newObject['SystemArrangement'] = {id: el.arrangement.id};
        }   
        return newObject;
    });

    let newListItems = newSystemList.concat(newRequireItemsList).concat(newOptionalItemsList);
    newListItems = newListItems.filter(el => !!el );
    const dataToCreateNewSchedule =
        {
            Client: {id: scheduleSurgery.ClientToSchedule.id},
            Hospital: {id: scheduleSurgery.InstitutionToSchedule.id},
            Medic: {id: scheduleSurgery.MedicToSchedule.id},
            PriceListId: scheduleSurgery.PriceListToSchedule && scheduleSurgery.PriceListToSchedule.id || null,
            SurgeryDate: scheduleSurgery.HourToSchedule.completeDate,
            // SurgeryHour: scheduleSurgery.HourToSchedule.hourDateToAPI,
            ATQNeeded: scheduleSurgery.ATQToSchedule && scheduleSurgery.ATQToSchedule === "Asignar ATQ"? true : false,
            ProductRequirements: newListItems,
            DisplayPricelist: scheduleSurgery.withPricesList && scheduleSurgery.withPricesList.isWithPricesList ?scheduleSurgery.withPricesList.isWithPricesList : false,
        };
    if(scheduleSurgery.listObservations && scheduleSurgery.listObservations.length > 0){

        dataToCreateNewSchedule['AppointmentNotes'] = scheduleSurgery.listObservations.map(el => ({Description: el.description}));
    }
    if(scheduleSurgery.QuoteToSchedule){
        dataToCreateNewSchedule['QuotationId'] = scheduleSurgery.QuoteToSchedule.id;
    }
    if(scheduleSurgery.PatientToSchedule){
        dataToCreateNewSchedule['Patient'] = { id: scheduleSurgery.PatientToSchedule.id};
    }
    return dataToCreateNewSchedule;
}
