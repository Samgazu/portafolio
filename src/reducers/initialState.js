export default {
  user:{
    user:{},
    isAuthenticated: false,
    isRegistered: false,
    getPendingApprovalUsers:[],
    role: '',
    request: {
        headers:{
            'Content-Type': 'application/json',
            'Cache-control': 'no-store',
            'Access-Controll-Allow-Origin': '*',
        },
        body: {
            Environment: {
                "EnvironmentName": "",
                "EnvironmentIndex": 1,
                "IsProduction": false
            },
            "AppBuildVersion": 10,
        },        
    },
    loading: false,
    error: null,
  },
  notification:{
    title: null,
    message: null,
    notificationType: '',
    insert: 'bottom',
    container: 'bottom-right',
    dismiss: {
      duration: 5000,
      showIcon: true,
      click: false,
      touch: false,
      onScreen: false,
      pauseOnHover: false,
      waitForAnimation: false,
    },
  },
  fuelSavings: { // remove
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    },
    leo: false,
  },
  systems: {
    mainSurgeryTypes: [],
    systems: {},
    systemsTemplate: [],
    bundles: null,
    productListPrices: [],
    getMedics: [],
    getInstitutions: [],
    getClients: [],
    getPatients:[],
    quotesFinished:[],
  },
  newQuote: {
    isCreated: false,
    createdQuote: {},
    data: {
        date: null,
        atn: null,
        patient: null,
        hospital: null,
        cityAndState: null,
        wayToPay: null,
        paymentCondition: null,
        deliveryTime: null,
        offerValidity: null,
        email: null,
        phoneNumber: null,
        priceList: null
    },
    systems: [],
    SpecificDescriptionQuotationItems: null
  },
  storeHouse: {
  },
  scheduleSurgery: {
  },
  allUsers: {
  },
  schedule: {
  },
  notificationChat:{
  },
  atqAdministrador:{
  },
  guardGroupHoliday:{
  },
};
