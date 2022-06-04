import { updateSystemsNewQuote } from "../newQuoteAction";
import { getPriceListsBegin, getPriceListsSuccess } from "../systemsAction";

export function setPriceList( ) {
    return function (dispatch) {
        dispatch(getPriceListsBegin());
    const listprice =[
            {
                contractDescCteTSI: false,
                description: "PRECIOS PRODUCTOS 2022",
                endDate: "12/30/2022",
                endHour: "23:59:00",
                id: 1,
                isActive: true,
                isDeleted: false,
                paymentCondition: "NA",
                shouldSendToApp: false,
                startDate: "9/1/2020",
                startHour: "00:00:00",
                tableCode: "017",
            }
    ]
        dispatch(getPriceListsSuccess(listprice));
    }
}


export function setProductsPrice( ) {
    return function (dispatch) {
        dispatch(getPriceListsBegin());
    const listprice =[
            {
                currency: "MXN",
                id: 10,
                item: "0021",
                priceForSale: 49000,
                product:{
                            availableLocations: 0,
                            groupID: null,
                            id: 0,
                            identificationNumber: null,
                            isActive: false,
                            isBundle: false,
                            isDeleted: false,
                            manufacturerName: null,
                            productBrand: null,
                            productCode: "CS 2253-12-17",
                            productDescription: null,
                            productImage: null,
                            productModel: null,
                            productObservation: null,
                            productSubmodel: null,
                            productType: null,
                            satProdServ: null,
                            shortDescription: null,
                            shouldSendToApp: false,
                        },
                productCode: "CS 2253-12-17",
                tableCode: "017",
                tsiGroup: "NA",
            }
    ]
        dispatch(getPriceListsSuccess(listprice));
    }
}



export function setPrice( ) {
    return function (dispatch) {
    const Updateprice =[
            {
                availableLocations: 11,
                configuration:[
                    {
                        configuration:{
                            globalDiscountPercentage: 0,
                            globalSubTotal: 49000,
                            globalTotal: 56840,
                            id: 58,
                            items:[
                                {
                                    configurationId: 58,
                                    discountPercentage: 0,
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
                                        productPrice: 49000,
                                        productSubmodel: "",
                                        productType: "IM",
                                        satProdServ: "42321605",
                                        shortDescription: "",
                                        shouldSendToApp: true,
                                    },
                                    productPrice: 49000,
                                    productQuantity: 1,
                                },
                            ],
                            name: "10 Tornillos",
                        },
                        id: 48,
                        isActive: true,
                        isDeleted: false,
                        surgeryTargets:[
                            {
                                description: "CERVICAL",
                                id: 1,
                            },
                        ],
                        system:{
                                id: 1,
                                isActive: false,
                                isDeleted: false,
                                product: null,
                                targetSurgery: null,
                        },
                    },
                ],
                groupID: "ZIST",
                id: 1,
                idItem: "VqiOmmLhz",
                identificationNumber: "",
                isActive: true,
                isBundle: true,
                isDeleted: false,
                mainSurgeryTypeId: 1,
                manufacturerName: "",
                productBrand: "",
                productCode: "ADD",
                productDescription: "ADD",
                productImage: "https://asistenteapi.tsi.mx:8080/images/app/osmium.png",
                productModel: "UNICO",
                productObservation: "",
                productSubmodel: "",
                productType: "SI",
                satProdServ: "",
                shortDescription: null,
                shouldSendToApp: true,
                systemId: 1,
                
            }
    ]
        dispatch(updateSystemsNewQuote(Updateprice));
    }
}