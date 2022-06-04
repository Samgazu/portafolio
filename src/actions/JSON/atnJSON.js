import { getClientsBegin, getClientsSucess, getInstitutionsBegin, getInstitutionsSucess, getMedicsBegin, getMedicsSucess, getPatientsBegin, getPatientsSuccess } from "../systemsAction";

export function setclients( ) {
    return function (dispatch) {
        dispatch(getClientsBegin());
    const clients =[
            {
                address: "AV. AMERICAS # 1946",
                billingAccount: "106002",
                city: "GUADALAJARA",
                clientBusiness: "01",
                clientCode: "HR0009",
                clientCommercialRole: "J",
                clientName: "HOSPITAL DE ESPECIALIDADES SAN FRANCISCO DE ASIS DE GUADALAJARA MEXICO S.A DE C.V",
                clientShortName: "H. SAN FRANCISCO",
                clientType: 1,
                costCenter: "OCCIDENTE",
                cp: "44610",
                email: "a.proveedores@sanatoriosanfranciscodeasis.com.mx;ssanfrancisco@megared.net.mx",
                id: 1,
                isActive: true,
                isDeleted: false,
                neighborhood: "COL. LOMAS DEL COUNTRY",
                paymentCondition: "030",
                paymentMethod: "99",
                phone: "38175013",
                priceList: "571",
                rfc: "SSF720731FG3",
                salesGroup: "HPRI",
                sellerID: "VL0001",
                state: "JAL",
            },
            {
                address: "BLVD SANCHEZ TABOADA #10291-11",
                billingAccount: "106001",
                city: "TIJUANA",
                clientBusiness: "01",
                clientCode: "DI0003",
                clientCommercialRole: "F",
                clientName: "DISTRIBUIDORA ORTOPEDICA ZAYAGO SA DE CV",
                clientShortName: "ZAYAGO",
                clientType: 2,
                costCenter: "NORTE",
                cp: "22010",
                email: "facturas.zayago@hotmail.com",
                id: 2,
                isActive: true,
                isDeleted: false,
                neighborhood: "ZONA RIO PTE",
                paymentCondition: "030",
                paymentMethod: "99",
                phone: "9710421",
                priceList: "009",
                rfc: "XAXX010101000",
                salesGroup: "DIST",
                sellerID: "VF0001",
                state: "BC",
            },
            {
                address: "CALLE 7 # 212 LOCAL 2 ENTRE LA 32 Y 34",
                billingAccount: "106001",
                city: "MERIDA",
                clientBusiness: "01",
                clientCode: "DI0007",
                clientCommercialRole: "F",
                clientName: "INSTYEQ SA DE CV",
                clientShortName: "INSTYEQ",
                clientType: 2,
                costCenter: "SUR",
                cp: "97219",
                email: "instyeqfacturas@gmail.com;ilianamarilinxixpech@yahoo.com.mx",
                id: 3,
                isActive: true,
                isDeleted: false,
                neighborhood: "PENSIONES",
                paymentCondition: "030",
                paymentMethod: "99",
                phone: "9252018",
                priceList: "009",
                rfc: "INS040322BCA",
                salesGroup: "DIST",
                sellerID: "VL0003",
                state: "YUC",
            },
    ]
        dispatch(getClientsSucess(clients));
    }
}

export function setMedicsAtq( ) {
    return function (dispatch) {
        dispatch(getMedicsBegin());
    const clients =[
            {
                allowReceiveEmail: false,
                city: "GUADALAJARA",
                email: "joelmadrigalr@yahoo.com",
                firstLastname: "MADRIGAL",
                id: 1,
                isActive: true,
                isDeleted: false,
                lastSurgeryId: 0,
                medicCode: "D00001",
                name: "JOEL",
                nextSurgeryDate: "0001-01-01T00:00:00",
                nextSurgeryId: 0,
                phone: "-",
                requirements:[
                    {
                        id: 23,
                        medicId: 1,
                        requirement: "Taladro para cx ADD",
                    },
                    {
                        id: 64,
                        medicId: 1,
                        requirement: "Tornillos de perforacion",
                    },
                ],
                secondLastname: "MADRIGAL",
                secondName: "",
                sellerId: "A00001",
                state: "JAL",

            },
            {
                allowReceiveEmail: false,
                city: "GUADALAJARA",
                email: "galigrof@yahoo.com.mx",
                firstLastname: "GUERRERO",
                id: 2,
                isActive: true,
                isDeleted: false,
                lastSurgeryId: 0,
                medicCode: "D00002",
                name: "RAFAEL",
                nextSurgeryDate: "0001-01-01T00:00:00",
                nextSurgeryId: 0,
                phone: "35859401",
                requirements:[
                    {
                        id: 23,
                        medicId: 1,
                        requirement: "Taladro para cx ADD",
                    },
                    {
                        id: 64,
                        medicId: 1,
                        requirement: "Tornillos de perforacion",
                    },
                ],
                secondLastname: "GALINDO",
                secondName: "",
                sellerId: "VL0003",
                state: "JAL",       
            },
            {
                allowReceiveEmail: false,
                city: "GUADALAJARA",
                email: "vegf@terra.com.mx",
                firstLastname: "VELAZQUEZ",
                id: 3,
                isActive: true,
                isDeleted: false,
                lastSurgeryId: 0,
                medicCode: "D00003",
                name: "FRANCISCO",
                nextSurgeryDate: "0001-01-01T00:00:00",
                nextSurgeryId: 0,
                phone: "36151099",
                requirements:[
                    {
                        id: 23,
                        medicId: 1,
                        requirement: "Taladro para cx ADD",
                    },
                    {
                        id: 64,
                        medicId: 1,
                        requirement: "Tornillos de perforacion",
                    },
                ],
                secondLastname: "",
                secondName: "",
                sellerId: "0",
                state: "JAL",               
            },
    ]
        dispatch(getMedicsSucess(clients));
    }
}
export function setPatients() {
    return function (dispatch) {
        dispatch(getPatientsBegin());
    const clients =[
            {
                firstLastName: "Martinez",
                firstName: "Fernando",
                id: 4,
                isActive: true,
                isDeleted: false,
                secondLastName: "Gutierrez",
                secondName: "",
            },
            {
                firstLastName: "Rodriguez",
                firstName: "Maria",
                id: 5,
                isActive: true,
                isDeleted: false,
                secondLastName: "",
                secondName: "Martinez",  
            },
            {
                firstLastName: "barrio",
                firstName: "Maria",
                id: 6,
                isActive: true,
                isDeleted: false,
                secondLastName: "si señor",
                secondName: "la del",         
            },
    ]
        dispatch(getPatientsSuccess(clients));
    }
}


export function setInstitutions() {
    return function (dispatch) {
        dispatch(getInstitutionsBegin());
    const clients =[
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
                requirements:[
                    {
                        hospitalId: 1,
                        id: 1,
                        requirement: "requirement updated",
                    },
                    {
                        hospitalId: 1,
                        id: 21,
                        requirement: "Tornillos",
                    },
                ],
                state: "SLP",
                sucursal: "",
            },
            {
                city: "night city223",
                hospitalCode: "1234223",
                id: 2,
                isActive: true,
                isDeleted: false,
                lastSurgeryId: 0,
                modality: "mod223",
                name: "tje name223",
                nextSurgeryDate: "0001-01-01T00:00:00",
                nextSurgeryId: 0,
                priceList: "pricelist223",
                requirements:[
                    {
                        hospitalId: 1,
                        id: 1,
                        requirement: "requirement updated",
                    },
                    {
                        hospitalId: 1,
                        id: 21,
                        requirement: "Tornillos",
                    },
                ],
                state: "SLP",
                sucursal: "",    
            },
            {
                city: "MERIDA",
                hospitalCode: "F00005",
                id: 4,
                isActive: true,
                isDeleted: false,
                lastSurgeryId: 0,
                modality: "1005020000",
                name: "H. CENTRO DE ESPECIALIDADES",
                nextSurgeryDate: "0001-01-01T00:00:00",
                nextSurgeryId:0,
                priceList: "",
                requirements:[
                    {
                        hospitalId: 1,
                        id: 1,
                        requirement: "requirement updated",
                    },
                    {
                        hospitalId: 1,
                        id: 21,
                        requirement: "Tornillos",
                    },
                ],
                state: "SLP",
                sucursal: "",              
            },
    ]
        dispatch(getInstitutionsSucess(clients));
    }
}