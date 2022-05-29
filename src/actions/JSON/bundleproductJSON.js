import { getBundlesFormSystemBegin, getBundlesFormSystemSuccess } from "../systemsAction";

export function setBundle( ) {

    return function (dispatch) {
        dispatch(getBundlesFormSystemBegin());
    const bundle =[
            {
                configuration:{
                    id:58,
                    items:[
                        {
                            configuration: 58,
                            id: 0,
                            product:{
                                availableLocations: 0,
                                groupID: "ADDP",
                                id: 136,
                                identificationNumber: "",
                                isActive: true,
                                isBundle: false,
                                isDeleted: false,
                                manufacturerName: "",
                                productBrand: "",
                                productCode: "CS 2253-12-17",
                                productDescription: "ADDPLUS - D 12 MM, ALTURA 17-26 MM, 6º",
                                productImage: "https://asistenteapi.tsi.mx:8080/images/app/osmium.png",
                                productModel: "UNICO",
                                productObservation: "",
                                productSubmodel: "",
                                productType: "IM",
                                satProdServ: "42321605",
                                shortDescription: "",
                                shouldSendToApp: true,
                            },
                            productQuantity: 1,
                        }
                    ],
                    name: "10 Tornillos",
                    id: 48,
                    isActive: true,
                    isDeleted: false,
                },
                surgeryTargets:[
                    {
                        description:"CERVICAL",
                        id:1,
                    }
                ],
                system:{
                    id: 48,
                    isActive: true,
                    isDeleted: false,
                    product:null,
                    targetSurgery:null
                }
            }
    ]
        dispatch(getBundlesFormSystemSuccess(bundle));
    }
}
