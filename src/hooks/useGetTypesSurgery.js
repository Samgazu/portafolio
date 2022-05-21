const handleGetTypeSurgery = async(listElements) => {
    const typeSurgery = {
        1: 'CERVICAL',
        2: 'LUMBAR',
        3: 'TORACICO',
        4: 'COMPLEMENTOS',
    };

    try {
        const newObjElements = {};
    
        listElements.forEach(el => {
            let newElDescription = typeSurgery[el.system.mainSurgeryTypeId];
            let newElSystem = el.system.productDescription;
    
            if( !( newElDescription in newObjElements) ){
                newObjElements[newElDescription] = [newElSystem];
            }else{
                newObjElements[newElDescription] = [...newObjElements[newElDescription], newElSystem];
            }
        })

        return await newObjElements;
        
    } catch (error) {
        throw new Error('Error al iterar con la Lista de Elementos ' + error);
    }
}


export {
    handleGetTypeSurgery
}