import icoUsuario from './assets/img/126PX/Icono_Usuarios_Blanco_126px.png';
// import iAdministracion from './assets/img/126PX/Icono_Administracion_126px.png';
import icoHistorial from './assets/img/126PX/Icono_Hist.CotizacionesMenu_126px.png';
import icoFacturacion from './assets/img/126PX/Icono_FacturacionMenu_126px.png';
import icoProductos from './assets/img/126PX/Icono_ProductosMenu_126px.png';
import icoProgramar from './assets/img/126PX/Icono_ProgramarCXMenu_126px.png';
import icoEstatus from './assets/img/126PX/Icono_StatusMenu_126px.png';
import icoEncuestas from './assets/img/126PX/Icono_EncuestasMenu_126px.png';
import icoPerfil from './assets/img/126PX/Icono_PerfilMenu_126px.png';
import icoPQX from './assets/img/126PX/Icono_PQXMenu_126px.png';
import icoPaquetes from './assets/img/126PX/Icono_PaqueteBudles_126px.png';
import icoAjustes from './assets/img/126PX/Icono_AjustesMenu_126px.png';
import icoProgramarCX from './assets/img/126PX/Icono_ProgramaCX_126px.png';
import icoCotizar from './assets/img/126PX/Icono_CotizarProducto_126px.png';
import icoInfoProductos from './assets/img/126PX/Icono_InfoPProductoTSI_126px.png';

import Agenda from './components/Agenda/Agenda';
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";

import AppBar from './components/AppBar';
import { QuoteProductsScreen } from './pages/quoteproducts/QuoteProductsScreen';
import { QuoteProductScreen } from './pages/quoteproduct/QuoteProductScreen';
import { QuoteProductExtraData } from './pages/QuoteProductExtraData/QuoteProductExtraData';
import shortid from 'shortid';
import { QuoteFinished } from './pages/quotefinished/QuoteFinished';
import { QuoteSuccess } from './pages/quoteSuccess/QuoteSuccess';
import { QuoteOrders } from './pages/QuoteOrders/QuoteOrders';

import { QuoteDescription } from './pages/quotedescription/QuoteDescription';
import { SearchProduct } from './pages/search/SearchProduct';
import { QuotesCompleted } from './pages/quotescompleted/QuotesCompleted';
import { FactoryConfigurationScreen } from './pages/factoryconfiguration/FactoryConfigurationScreen';
import { ScheduleSurgeryScreen } from './pages/ScheduleSurgery/ScheduleSurgeryScreen';
import { ScheduleQuoteFinished } from './pages/ScheduleSurgery/ScheduleQuoteFinished/ScheduleQuoteFinished';
// import { ScheduleSurgeryPreOrderView } from './pages/ScheduleSurgery/ScheduleSurgeryPreOrderView/ScheduleSurgeryPreOrderView';

import { UsersHome } from './pages/Users/UsersHome';
import { DoctorsHome } from './pages/Users/Doctors/DoctorsHome';
import { InstitutionsHome } from './pages/Users/Institutions/InstitutionsHome';
import { PatientsHome } from './pages/Users/Patients/PatientsHome';
import { RepartidorHome } from './pages/Users/Repartidor/RepartidorHome';
import { SellerHome } from './pages/Users/Seller/SellerHome';
import { AdminAtqHome } from './pages/Users/AdminAtq/AdminAtqHome';
import { AtqHome } from './pages/Users/Atq/AtqHome';
import { StorerHome } from './pages/Users/Storer/StorerHome';


import { PendingApprovalUsers } from './pages/PendingApprovalUsers/PendingApprovalUsers';
import { PermissionsManagementScreen } from './pages/PermissionsManagement/PermissionsManagementScreen';
import { MedicHospitalRequrimentsScreen } from './pages/MedicHospitalRequrimentsScreen/MedicHospitalRequrimentsScreen';
// import { Schedule } from './pages/Schedule/Schedule';
import { FactoryMaterialScreen } from './pages/FactoryMaterial/FactoryMaterialScreen';
import { ScheduleSurgeryArrangementScreen } from './pages/ScheduleSurgeryArrangementScreen/ScheduleSurgeryArrangementScreen';
import { ScheduleSurgeryPreOrderView } from './pages/ScheduleSurgery/ScheduleSurgeryPreOrderView/ScheduleSurgeryPreOrderView';
import { ScheduleSurgeryFinishScreen } from './pages/ScheduleSurgery/ScheduleSurgeryFinishScreen/ScheduleSurgeryFinishScreen';
import { StoreHouseStockScreen } from './pages/StoreHouseScreen/StoreHouseStockScreen/StoreHouseStockScreen';
import { StoreHouseApproveOrderScreen } from './pages/StoreHouseScreen/StoreHouseApproveOrderScreen/StoreHouseApproveOrderScreen';
import { StoreHouseApproveOrderPreViewScreen } from './pages/StoreHouseScreen/StoreHouseApproveOrderPreViewScreen/StoreHouseApproveOrderPreViewScreen';
import { Schedule } from './pages/Schedule/Schedule';
import { StoreHouseApproveStatusScreen } from './pages/StoreHouseScreen/StoreHouseApproveStatusScreen/StoreHouseApproveStatusScreen';
import { StoreHouseAssignSystemsScreen } from './pages/StoreHouseScreen/StoreHouseAssignSystemsScreen/StoreHouseAssignSystemsScreen';
import { StoreHomeAvailableMaterialToAddScreen } from './pages/StoreHouseScreen/StoreHomeAvailableMaterialToAddScreen/StoreHomeAvailableMaterialToAddScreen';
import { StoreHomeAbailableSystemsScreen } from './pages/StoreHouseScreen/StoreHomeAbailableSystemsScreen/StoreHomeAbailableSystemsScreen';
import { StoreHomeReceivingMaterialReportScreen } from './pages/StoreHouseScreen/StoreHomeReceivingMaterialReportScreen/StoreHomeReceivingMaterialReportScreen';
import { StoreHomeReceivingMaterialReportIncomingScreen } from './pages/StoreHouseScreen/StoreHomeReceivingMaterialReportIncomingScreen/StoreHomeReceivingMaterialReportIncomingScreen';
import { StoreHouseFinishedView } from './pages/StoreHouseScreen/StoreHouseFinishedView/StoreHouseFinishedView';
import { SellerPermisions } from './pages/Users/Seller/SellerPermisions';
import { ATQAdministrator_TableUbication_Pages } from './pages/ATQAdministrator/ATQAdministrator_Survey/ATQAdministrator_TableUbication_Pages';
import { StoreHouseMenuScreen } from './pages/StoreHouseScreen/StoreHouseMenu/storeHouseMenuScreen';
import { ATQAdministrator_Material_History_List_Page } from './pages/ATQAdministrator/ATQAdministrator_Material_History/ATQAdministrator_Material_History_List_Page';
import { ATQAdministrator_Mat_History_List_Info_Page } from './pages/ATQAdministrator/ATQAdministrator_Material_History/ATQAdministrator_Mat_History_List_Info_Page';
import { Atq_Availability_Page } from './pages/ATQAdministrator/ATQ_Availability/Atq_Availability_Page';
import { Atq_Availability_Inf_Page } from './pages/ATQAdministrator/ATQ_Availability/Atq_Availability_Inf_Page';
import { ATQAdmin_Transferir_CX_Page } from './pages/ATQAdministrator/ATQAdministrator_Transferir_CX/ATQAdmin_Transferir_CX_Page';
import { ATQAdministrator_Assign_ATQ } from './components/ATQAdministrator/ATQAdmin_Tranferir_CX/ATQAdministrator_Assign_ATQ';
import { ATQAdministrator_Finally_Survery } from './pages/ATQAdministrator/ATQAdministrator_Survey/ATQAdministrator_Finally_Survery';
import { ATQAdmin_EstatusCX_Page } from './pages/ATQAdministrator/ATQ_Status_CX/ATQAdmin_EstatusCX_Page';
import { ATQAadmin_StatusCX_Info_Page } from './pages/ATQAdministrator/ATQ_Status_CX/ATQAadmin_StatusCX_Info_Page';
import { ATQAdmin_Home } from './pages/ATQAdministrator/ATQ_Home/ATQAdmin_Home';
import { ATQAdmin_CX_ASIGNAR_ATQ_Page } from './pages/ATQAdministrator/ATQ_CX_ASIGNAR_ATQ/ATQAdmin_CX_ASIGNAR_ATQ_Page';
import { ATQAdmin_ATQ_Disponible_Page } from './pages/ATQAdministrator/ATQ_CX_ASIGNAR_ATQ/ATQAdmin_ATQ_Disponible_Page';
import { ATQ_Disponibilidad_MasCX_Page } from './pages/ATQAdministrator/ATQ_CX_ASIGNAR_ATQ/ATQ_Disponibilidad_MasCX_Page';
import { ATQ_GuardRole_View } from './pages/ATQAdministrator/ATQ_GuardRole_View/ATQ_GuardRole_View';
import { ATQ_GuardRole_CreateTeam_View } from './pages/ATQAdministrator/ATQ_GuardRole_CreateTeam_View/ATQ_GuardRole_CreateTeam_View';
import { ATQ_GuardDays_View } from './pages/ATQAdministrator/ATQ_GuardDays_View/ATQ_GuardDays_View';
import { ATQ_Administrator_GuardRol_View } from './pages/ATQAdministrator/ATQ_Administrator_GuardRol_View/ATQ_Administrator_GuardRol_View';
import { ATQAdminViewMessageAsignar } from './pages/ATQAdministrator/ATQ_CX_ASIGNAR_ATQ/ATQAdminViewMessageAsignar';
import { AsignarAtqMessagePage } from './pages/ATQAdministrator/ATQ_CX_ASIGNAR_ATQ/AsignarAtqMessagePage';
import { ATQAdminFinalMessage } from './pages/ATQAdministrator/ATQ_GuardRole_CreateTeam_View/ATQAdminFinalMessage';
import { Message_Final_Notification } from './pages/ATQAdministrator/AtqAdministrator_Change_ATQ_Notification/Message_Final_Notification';
import { ATQAdminMessageTransfered } from './pages/ATQAdministrator/ATQAdministrator_Transferir_CX/ATQAdminMessageTransfered';
import { ATQ_Menu_Page } from './pages/ATQ/ATQ_Menu_Page';
import { ATQ_Consum_Report_List_Page } from './pages/ATQ/ATQ_CONSUM_REPORT/ATQ_CONSUM_REPORT_LIST_PAGE';
import { ATQ_List_Encuesta_Page } from './pages/ATQ/ATQ_ENCUESTA/ATQ_LIST_ENCUESTA_PAGE';
import { ATQ_Rep_Exp_List_Page } from './pages/ATQ/ATQ_EXPERIENCE_REPORT/ATQ_REP_EXP_LIST_PAGE';
import { ATQ_not_mensage } from './pages/ATQ/ATQ_NOTIFICATION/ATQ_not_mensage';
import { ATQ_com_rep_men } from './pages/ATQ/ATQ_CONSUM_REPORT/ATQ_com_rep_men';
import { ATQ_exp_rep_men_sav } from './pages/ATQ/ATQ_EXPERIENCE_REPORT/ATQ_ exp_rep_men_sav';
import { ATQ_encuesta_men_save } from './pages/ATQ/ATQ_ENCUESTA/ATQ_encuesta_men_save';
import { ATQ_Add_Rep_Exp } from './pages/ATQ/ATQ_EXPERIENCE_REPORT/ATQ_Add_Rep_Exp';
import { ATQ_Products_Page } from './pages/ATQ/ATQ_PROUCTS/ATQ_Products_Page';
import { Messenger_Menu_Page } from './pages/Messenger/Messenger_Menu_Page';
import { Mess_medics_Requ_Page } from './pages/Messenger/ MedicsRequirements/Mess_medics_Requ_Page';
import { Messenger_hosp_Requ_Page } from './pages/Messenger/HospitalsRequirements/Messenger_hosp_Requ_Page';
import { Mess_Noti_Page } from './pages/Messenger/Notifications/Mess_Noti_Page';
import { ATQ_Enc_Ped_Page } from './pages/ATQ/ATQ_ENCUESTA/ATQ_Enc_Ped_Page';
import { ATQ_Con_Rep_Pen } from './pages/ATQ/ATQ_CONSUM_REPORT/ATQ_Con_Rep_Pen';
import { Quality_Manager_Page } from './pages/QualityManager/Quality_Manager_Page';
import Quality_Encuestas_Page from './pages/QualityManager/QualityManager_Encuestas/Quality_Encuestas_Page';
import { Quality_Analisis_Page } from './pages/QualityManager/QualityManager_Analisis/Quality_Analisis_Page';
import {Quiality_Messages_Page} from './pages/QualityManager/QualityMessage_Encuestas/Quiality_Messages_Page';
import { StoreHouseStockReceptionMaterial } from './pages/StoreHouseScreen/StoreHouseStockReceptionMaterialPage/StoreHosueStockReceptionMaterial';
import { QualityManagerRequerimentsPage } from './pages/QualityManager/QualityManagerRequeriments/QualityManagerRequerimentsPage';
import { Quality_Modal_Analisis } from './pages/QualityManager/QualityModal_Analisis/Quality_Modal_Analisis';
import { Quality_Modal_Encuestas } from './pages/QualityManager/QualityModal_Encuestas/Quality_Modal_Encuestas';
import { StoreHouseReceivingEncuestas } from './pages/StoreHouseScreen/StoreHouseReceivingEncuestasPage/StoreHouseReceivingEncuestas';
import { StoreHomeReceivingEncuestasScreen } from './pages/StoreHouseScreen/StoreHomeReceivingEncuestasScreen/StoreHomeReceivingEncuestasScreen';

import { StoreHouseMessage_Encuesta_Page } from './pages/StoreHouseScreen/StoreHouseMessage_Encuestas/StoreHouseMessage_Encuesta_Page';
import { StoreHouseMessage_Encuestas_Notify_Page } from './pages/StoreHouseScreen/StoreHouseMessage_Encuestas/StoreHouseMessage_Encuestas_Notify_Page';
import { QualityManager_InfoEncuesta_Page } from './pages/QualityManager/QualityManager_Encuestas/QualityManager_InfoEncuesta_Page';
import {EncuestaVentasPage} from './pages/EncuestasVentas/EncuestaVentasPage';



import { ATQ_Trans_CX_List } from './pages/ATQ/ATQ_NOTIFICATION/ATQ_Trans_CX_List';
import { ATQ_Not_Transf_CX } from './pages/ATQ/ATQ_NOTIFICATION/ATQ_Not_Transf_CX';
import { DetalleEncuestasPage } from './pages/EncuestasVentas/DetallesEncuestaVentas/DetalleEncuestasPage';
import { Quality_Details_Page } from './pages/QualityManager/QualityManager_Analisis/QualityDetails_Analisis/Quality_Details_Page';
import { ATQAdmin_StatusAsignar_Page } from './pages/ATQAdministrator/ATQ_CX_ASIGNAR_ATQ/ATQAdmin_StatusAsignar_Page';
import { NotificacionATQPage } from './pages/NotificacionDetalles/ChangesATQ/NotificacionATQPage';
import { NotificacionMaterialCompleteATQ } from './pages/NotificacionDetalles/MaterialCompletoATQ/NotificacionMaterialCompleteATQ';
import { ATQ_Changes_Mensajes } from './pages/NotificacionDetalles/ChangeAtqMensaje/ATQ_Changes_Mensajes';
import { Atq_TransferirCx_Page } from './pages/NotificacionDetalles/ATQTransferirCX/Atq_TransferirCx_Page';
import { MaterialCompletadoAlmacen, MaterialRecolectarEntregar } from './pages/NotificacionDetalles/MaterialCompletoAlmacen/MaterialCompletadoAlmacen';
import { ATQ_Transferir_Mensaje } from './pages/NotificacionDetalles/ATQTransferirCXMensajes/ATQ_Transferir_Mensaje';
import { MensajeroMaterial } from './pages/NotificacionDetalles/MensajeroMaterial/MensajeroMaterial';
import { Atq_Transferir_Aceptada } from './pages/NotificacionDetalles/ATQTransferirCX/Atq_Transferir_Aceptada';
import { Atq_Transferir_Rechazada } from './pages/NotificacionDetalles/ATQTransferirCX/Atq_Transferir_Rechazada';




// Elementos que estaban anteriormente dentro de los parametros de Routes
// role
// isSideBarLinks = false
export const routes = ({ permissions}) =>{

    
    
    // Si tiene icono es porque se van a mostar sobre la barra lateral
    const availableRoutes = [
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Inicio',
            path: 'Inicio',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,// Requirer validación de sesión
            isSideBarLinks: true,
            layout: AppBar,
            Component: HomePage,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Usuario',
            path: 'usuarios',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,// Requirer validación de sesión
            isSideBarLinks: true,
            layout: AppBar,
            Component: UsersHome,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Manage Users',
            title:'Usuarios pendientes',
            path: `usuarios-pendientes`,
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,
            layout: AppBar,
            Component: PendingApprovalUsers,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Manage Users',
            title:'PermissionsManage',
            path: `permisos_usuarios`,
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,
            layout: AppBar,
            Component: PermissionsManagementScreen,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Quotations History',
            title:'Mis cotizaciones',
            path: 'cotizaciones_finalizadas',
            icon: icoHistorial,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuotesCompleted,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Quotations History',
            title:'Cotizaciones',
            path: 'facturacion',
            icon: icoFacturacion,
            exact: true,
            layout: AppBar,
            authenticatedAccess:true,
            Component: QuotesCompleted,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'All Quotations',
            title:'Facturación',
            path: 'facturacion/:id',
            exact: true,
            layout: AppBar,
            authenticatedAccess:true,
            Component: QuoteDescription,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'All Quotations',
            title:'Cotizacion',
            path: 'facturacion2/:id/:value/:idCX',
            exact: true,
            layout: AppBar,
            authenticatedAccess:true,
            Component: QuoteDescription,
        },
        {
            uid: shortid.generate(),
            rolePermissions: '',
            title:'Productos',
            path: 'Inicio',
            icon: icoProductos,
            exact: true,
            authenticatedAccess:false,
            Component: HomePage,
        },
         {
            uid: shortid.generate(),
            role:4,
            rolePermissions: 'Login',
            title:'Programar',
            path: 'ProgramarCX',
            icon: icoProgramar,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ScheduleSurgeryScreen,
        }, 
                
        {
            uid: shortid.generate(),
            role:4,
            rolePermissions: 'Login',
            title:'Programar',
            path: 'ProgramarCX/CompletarCampos/:RestElements',
            icon: icoProgramar,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ScheduleSurgeryScreen,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'searchproduct',
            path: `ProgramarCX/search/:searchToProgramCX`,
            authenticatedAccess: true,
            layout: AppBar,
            Component: SearchProduct,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            role:'test',
            title:'ScheduleSurgeryPreOrderView',
            path: 'ProgramarCX/ScheduleSurgeryPreOrderView',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ScheduleSurgeryPreOrderView,
        },
        {
            uid: shortid.generate(),
            role:'test',
            rolePermissions: '',
            title:'Estatus',
            path: 'Inicio',
            icon: icoEstatus,
            exact: true,
            authenticatedAccess:false,
            Component: HomePage,
        },
        {
            uid: shortid.generate(),
            rolePermissions: '',
            title:'Encuestas',
            path: 'Inicio',
            icon: icoEncuestas,
            exact: true,
            authenticatedAccess:false,
            Component: HomePage,
        },
        {
            uid: shortid.generate(),
            rolePermissions: '',
            title:'Perfil',
            path: 'Inicio',
            icon: icoPerfil,
            exact: true,
            authenticatedAccess:false,
            Component: HomePage,
        },
        {
            uid: shortid.generate(),
            rolePermissions: '',
            title:'PQX',
            path: 'Inicio',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:false,
            Component: HomePage,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Templates Configuration',
            title:'Configuración de Plantillas',
            path: 'configuracionPlantillas',
            icon: icoPaquetes,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component:  FactoryConfigurationScreen,
        },
        {
            uid: shortid.generate(),
            rolePermissions: '',
            title:'Ajustes',
            path: 'Inicio',
            icon: icoAjustes,
            exact: true,
            authenticatedAccess:false,
            Component: HomePage,
        },
        {
            uid: shortid.generate(),
            rolePermissions: '',
            title:'Perfil',
            path: 'Inicio',
            icon: icoProgramarCX,
            exact: true,
            authenticatedAccess:false,
            Component: HomePage,
        },
        //  {
        //      uid: shortid.generate(),
        //      rolePermissions: 'MakeAppointment',
        //      title:'Agenda',
        //      path: `agenda/:llamada`,
        //      icon: icoProgramar,
        //      exact: true,
        //      authenticatedAccess: true,
        //      layout: AppBar,
        //      Component: Schedule,
        //  },  
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Agenda',
            path: `agenda/:page`,
            icon: icoProgramar,
            exact: true,
            authenticatedAccess: true,
            layout: AppBar,
            Component: Schedule,
        }, 
        {
            uid: shortid.generate(),
            rolePermissions: 'MakeQuotation',
            title:'Cotizar productos',
            path: 'cotizaciones',
            icon: icoCotizar,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuoteProductsScreen,
        },
        /* {
             uid: shortid.generate(),
             rolePermissions: 'Login',
             title:'InfoProductos',
             path: 'agenda',
             icon: icoInfoProductos,
             exact: true,
             authenticatedAccess:false,
             Component: Agenda,
         }, */
        {
            uid: shortid.generate(),
            rolePermissions: 'MakeQuotation',
            title:'cotizaciones',
            path: 'cotizacion/:systemId',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuoteProductsScreen,
        },
        {
            uid: shortid.generate(),
            role:4,
            rolePermissions: 'Login',
            title:'TipoCirugia',
            path: 'ProgramarCX/:tipoCirugia',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuoteProductsScreen,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'MakeQuotation',
            title:'orden_solicitada_1',
            path: 'cotizacion_finalizacion/:orden_solicitada_1',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuoteFinished,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Quotations History',
            title:'cotizaciones_finalizadas',
            path: 'cotizaciones_finalizadas/searchQuote/:searchQuoteFinished',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuotesCompleted,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'cotizaciones_finalizadas',
            path: 'ProgramarCX/searchQuote/:searchQuoteFinishedSchedule',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuotesCompleted,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'All Quotations',
            title:'Facturación_Search',
            path: 'facturacion/searchFactura/:factura',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuotesCompleted,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'MakeQuotation',
            title:'orden_solicitada',
            path: 'orden_solicitada',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuoteSuccess,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'MakeQuotation',
            title:'schedule_surgery',
            path: 'Cirugia_Programada',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ScheduleSurgeryFinishScreen,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'MakeQuotation',
            title:'orden_solicitada',
            path: 'cotizaciones_finalizadas/:id',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuoteDescription,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'MakeQuotation',
            title:'cotizacion_schedule',
            path: 'cotizacion_cirugia/:schedule/:id',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuoteDescription,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'MakeQuotation',
            title:'product',
            path: 'cotizaciones/datos',
            exact: true,
            authenticatedAccess: true,
            layout: AppBar,
            Component: QuoteProductExtraData,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'MakeQuotation',
            title:'product',
            path: 'cotizaciones/ordenes',
            exact: true,
            authenticatedAccess: true,
            layout: AppBar,
            Component: QuoteOrders,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'MakeQuotation',
            title:'product',
            path: 'cotizaciones/:mainSurgeryTypeId/:systemId',
            exact: true,
            authenticatedAccess: true,
            layout: AppBar,
            Component: QuoteProductScreen,
        },
        {
            uid: shortid.generate(),
            role:4,
            rolePermissions: 'Login',
            title:'product',
            path: 'programarCX/:mainSurgeryTypeId/:systemId',
            exact: true,
            authenticatedAccess: true,
            layout: AppBar,
            Component: ScheduleSurgeryArrangementScreen,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'MakeQuotation',
            title:'search',
            path: `search`,
            authenticatedAccess: true,
            layout: AppBar,
            Component: SearchProduct,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'MakeQuotation',
            title:'searchproduct',
            path: `searchproduct/:systemId`,
            authenticatedAccess: true,
            layout: AppBar,
            Component: SearchProduct,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Quotations History',
            title:'scheduleQuoteFinished',
            path: `CotizacionesFinalizadas`,
            authenticatedAccess: true,
            layout: AppBar,
            Component: ScheduleQuoteFinished,
        },
        /* {
            uid: shortid.generate(),
            rolePermissions: 'Templates Configuration',
            title:'Requerimientos Hospital & Medicos',
            path: `Medic&HospitalRequeriments`,
            authenticatedAccess: true,
            icon: icoUsuario,
            layout: AppBar,
            Component: MedicHospitalRequrimentsScreen,
        }, */
        {
            uid: shortid.generate(),
            rolePermissions: 'Templates Configuration',
            title:'Configuración de Materiales',
            path: `materialFactory`,
            authenticatedAccess: true,
            icon: icoUsuario,
            layout: AppBar,
            Component: FactoryMaterialScreen,
        }, 
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Médicos',
            path: 'usuarios/medicos',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,// Requirer validación de sesión
            isSideBarLinks: true,
            layout: AppBar,
            Component: DoctorsHome,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Instituciones',
            path: 'usuarios/instituciones',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,// Requirer validación de sesión
            isSideBarLinks: true,
            layout: AppBar,
            Component: InstitutionsHome,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Pacientes',
            path: 'usuarios/pacientes',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,// Requirer validación de sesión
            isSideBarLinks: true,
            layout: AppBar,
            Component: PatientsHome,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Repartidores',
            path: 'usuarios/repartidores',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,// Requirer validación de sesión
            isSideBarLinks: true,
            layout: AppBar,
            Component: RepartidorHome,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Vendedores',
            path: 'usuarios/:vendedores',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,// Requirer validación de sesión
            isSideBarLinks: true,
            layout: AppBar,
            Component: SellerHome,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Permiso de Vendedores',
            path: 'usuarios/vendedores/permisos',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,// Requirer validación de sesión
            isSideBarLinks: true,
            layout: AppBar,
            Component: SellerPermisions,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Coordinador ATQ',
            path: 'usuarios/coordinadores_atq',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,// Requirer validación de sesión
            isSideBarLinks: true,
            layout: AppBar,
            Component: AdminAtqHome,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ',
            path: 'usuarios/atq',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,// Requirer validación de sesión
            isSideBarLinks: true,
            layout: AppBar,
            Component: AtqHome,
        },

        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Almacenista',
            path: 'usuarios/almacenistas',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,// Requirer validación de sesión
            isSideBarLinks: true,
            layout: AppBar,
            Component: StorerHome,
        },
        
//Prueba material
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Recepsion de material',
            path: 'Reception',
            icon: icoCotizar,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHouseStockReceptionMaterial,
        }, 
//Prueba Encuestas
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Encuestas almacen',
            path: 'Encuestas',
            icon: icoCotizar,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHouseReceivingEncuestas,
        }, 
         {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Surtir CX',
            path: 'StoreHouse',
            icon: icoCotizar,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHouseStockScreen,
        }, 
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Surtir Orden',
            path: 'StoreHouse/StoreHouseApproveOrder',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHouseApproveOrderScreen,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Surtir Orden',
            path: 'StoreHouse/StoreHouseApproveOrder/OrderPreView/:OrderPreView',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHouseApproveOrderScreen,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Aprobar Orden',
            path: 'StoreHouse/StoreHouseApproveOrderPreView/:status',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHouseApproveOrderPreViewScreen,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Status CX',
            path: 'StoreHouseApproveStatus',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHouseApproveStatusScreen,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Cotización Finalizada',
            path: 'StoreHouse/ReviewCotizacionFinalizada/:idStoreQuote',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuoteDescription,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Logística',
            path: 'StoreHouse/StoreHouseAssignSystemsScreen',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHouseAssignSystemsScreen,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Disponibilidad de sistemas',
            path: 'StoreHouse/StoreHomeAvailableMaterialToAddScreen',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHomeAvailableMaterialToAddScreen,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Sistemas disponibles',
            path: 'StoreHomeAbailableSystemsScreen',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHomeAbailableSystemsScreen,
        }, 
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Recepción y revisión de material',
            path: 'StoreHouse/StoreHomeReceivingMaterialReportScreen',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHomeReceivingMaterialReportScreen,
        }, 
        //Encuestras Almacen
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Encuestas',
            path: 'Encuestas/StoreHomeReceivingEncuestasScreen/:activeSwitch',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHomeReceivingEncuestasScreen,
        }, 
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Menu Almacen',
            path: 'StoreHouseMenu',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHouseMenuScreen,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Almacén entrada',
            path: 'StoreHouse/StoreHomeReceivingMaterialReportIncomingScreen',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHomeReceivingMaterialReportIncomingScreen,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'StoreHouseFinishedView',
            path: `StoreHouseFinishedView`,
            authenticatedAccess: true,
            layout: AppBar,
            Component: StoreHouseFinishedView,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'StoreHouseFinished',
            path: `StoreHouseFinishedLogistics/:logistics`,
            authenticatedAccess: true,
            layout: AppBar,
            Component: StoreHouseFinishedView,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Almacén/LOGÍSTICA',
            path: 'AppointmentLogistics/:Logistics',
            icon: icoCotizar,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHouseStockScreen,
        },

        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Encuesta',
            path: 'ATQAdministratorMenuSurvery/ATQAdministrator/:Switch',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQAdministrator_TableUbication_Pages,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Historial de Material',
            path: 'ATQAdministrator_Material_History',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQAdministrator_Material_History_List_Page,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Informacion de Material',
            path: 'ATQAdministrator_Materials_History/Material_Info',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQAdministrator_Mat_History_List_Info_Page,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Informacion de Material',
            path: 'ATQAdministrator_Material_History/transfer_CX/:tipo',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQAdministrator_Assign_ATQ,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Disponibilidad',
            path: 'ATQAdministrator_atq_availability',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Atq_Availability_Page,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Informacion Disponibilidad',
            path: 'ATQAdministrator_atq_availability/Atq_Info/:activeSwitch/:page',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Atq_Availability_Inf_Page,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Transferir CX',
            path: 'ATQAdministrator_Transferir_CX',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQAdmin_Transferir_CX_Page,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Menu Encuesta',
            path: 'ATQAdministratorMenuSurvery',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQAdministrator_Finally_Survery,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Estatus CX',
            path: 'ATQAdmin_EstatusCX',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQAdmin_EstatusCX_Page,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Estatus CX',
            path: 'Atq_Admin_Estatus_Info',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQAadmin_StatusCX_Info_Page,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Rol de Guardias',
            path: 'ATQ_GuardRole_View',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_GuardRole_View,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Coordinador',
            path: 'ATQAdmin_Inicio',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQAdmin_Home,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Crear Guardia',
            path: 'ATQ_GuardRole_View/ATQ_GuardRole_CreateTeam_View',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_GuardRole_CreateTeam_View,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Asignar ATQ',
            path: 'ATQAdmin_Asignar_CX',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQAdmin_CX_ASIGNAR_ATQ_Page,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Crear Dias de Guardia',
            path: 'ATQ/ATQ_GuardDays_View',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_GuardDays_View,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ DisponibleAsignar',
            path: 'ATQAdmin_Disponible_Asignar/:page',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQAdmin_ATQ_Disponible_Page,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Asignar rol de Guardias',
            path: 'ATQ/ATQ_Administrator_GuardRol_View',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_Administrator_GuardRol_View,
        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ CX SIN ASIGNAR ATQ',
            path: 'ATQAdmin_CX_Sin_Asignar_ATQ',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_Disponibilidad_MasCX_Page,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ ASIGNADO',
            path: 'ATQ_Asignado',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQAdminViewMessageAsignar,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ ASIGNADO',
            path: 'ATQ_Asignado_Message',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: AsignarAtqMessagePage,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ MENSAJE GUARDIAS',
            path: 'ATQ_message_guard',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQAdminFinalMessage,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ MENSAJE NOTIFICACION',
            path: 'ATQ_messagge_notification',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Message_Final_Notification,
        },
            {
                uid: shortid.generate(),
                rolePermissions: 'Login',
                title:'ATQ MENSAJE NOTIFICACION TRANSFERENCIA',
                path: 'ATQ_messagge_notification_transfered',
                icon: icoPQX,
                exact: true,
                authenticatedAccess:true,
                layout: AppBar,
                Component: ATQAdminMessageTransfered,
            },

        //DE AQUI PARA ADELANTE SE EMPEZARA CON LA SECCION DE ATQ
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ MENSAJE TRANSFERENCIA',
            path: 'ATQ_Inicio/Mensaje',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Message_Final_Notification,
        },

        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ MENU',
            path: 'ATQ_Inicio',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_Menu_Page,
        },

        
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ ',
            path: 'ATQ_Inicio/Reporte_de_experiencia',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_Rep_Exp_List_Page,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ ',
            path: 'ATQ_Inicio/Encuesta_List',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_List_Encuesta_Page,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Listado de Reporte',
            path: 'ATQ_Inicio/Rep_Con',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_Consum_Report_List_Page,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Reporte Consumo',
            path: 'ATQ_Inicio/Rep_Con/Report/:Switch/:id',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_Con_Rep_Pen,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Mensaje notificacion',
            path: 'ATQ_Inicio/notification/menssage',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_not_mensage,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ reporte consumo guardado',
            path: 'ATQ_Inicio/com_report/menssage',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_com_rep_men,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ reporte de experiencia guardado',
            path: 'ATQ_Inicio/exp_report/menssage',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_exp_rep_men_sav,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Encuesta guardada',
            path: 'ATQ_Inicio/Encuesta/menssage',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_encuesta_men_save,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Encuesta guardada',
            path: 'ATQ_Inicio/exp_report/Add',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_Add_Rep_Exp,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Informacion Productos',
            path: 'ATQ_Inicio/informationProd',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_Products_Page,

        },

        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Lista de Transferencia',
            path: 'ATQ_Inicio/Transfer_CX_List',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_Trans_CX_List,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Notificacion Transferencia',
            path: 'ATQ_Inicio/Transfer_CX_List/:Notification',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_Not_Transf_CX,

        },

        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ Encuesta',
            path: 'ATQ_Inicio/Encuesta/:Switch',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_Enc_Ped_Page,

        },
        //AQUI INICIA MENSAJERO -------------------------------------------
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'MENSAJERO',
            path: 'Messenger_Menu',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Messenger_Menu_Page,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'REQUERIEMIENTOS MEDICOS',
            path: 'Messenger_Menu/medics_requ',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Mess_medics_Requ_Page,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'REQUERIMIENTOS HOSPITALES',
            path: 'Messenger_Menu/hospitals_requ',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Messenger_hosp_Requ_Page,

        },
       
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'NOTIFICACION Mensajero',
            path: 'Messenger_Menu/notification',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Mess_Noti_Page,

        },

        //Aqui comienza las ruta del gerente de calidad
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Gerente Calidad',
            path: 'Quality_Menu',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Quality_Manager_Page,

        },
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Requerimientos',
            path: 'Quality_Menu/Requeriments',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QualityManagerRequerimentsPage,
        },
        //Section Encuestas_Page
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Quality_Encuesta',
            path: 'Quality_Encuestas_Page',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Quality_Encuestas_Page,

        },
        //Seccion de info encuestas
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Quality_InfoEncuesta',
            path: 'Quality_InfoEncuestas_Page/:type',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component:QualityManager_InfoEncuesta_Page,

        },
        //Section Quality Analisis
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Quality_Analisis',
            path: 'Quality_Analisis_Page',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Quality_Analisis_Page,

        },

        //Seccion Message Encuestas

        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'MENSAJE',
            path: 'Quality_Messages_Page/:id',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: StoreHouseMessage_Encuesta_Page,
            //StoreHouseMessage_Encuesta_Page,
            // OR Quiality_Messages_Page,

        },
        //Modal de analisis de encuestas
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Modal',
            path: 'Modal_Analisis_Question',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Quality_Modal_Analisis,

        },
        //Modal encuesta cerrada
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Modal Encuesta Cerrada',
            path: 'Modal_Encuestas_Cerrada',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Quality_Modal_Encuestas,

        },
        //Page Encuesta Ventas
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Encuesta_Page',
            path: 'Encuestas_Page_Ventas',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: EncuestaVentasPage,

        },

        //Detalles Encuesta Ventas
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Detalles_Encuesta_Page',
            path: 'Detalles_Encuesta_Ventas/:switch',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component:DetalleEncuestasPage,

        },
        //Detalles Encuesta Quality Analisis
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Quality_Details_Page',
            path: 'Quality_Details_Analisis',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Quality_Details_Page,
            

        },

        //AsignrATQ Disponible- No disponible
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQAdmin_Disponibilidad',
            path: 'ATQAdmin_Disponibilidad/:page',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            Component: ATQAdmin_StatusAsignar_Page,
        },
        //Cambio de ATQ \\ notificaciones
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ_Cambio_Page',
            path: 'ATQ_Cambio/:id',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: NotificacionATQPage,
            

        },


        //Material completo ATTQ \\ notificaciones
                
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ_MaterialCompleto',
            path: 'ATQ_Material/:id',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: NotificacionMaterialCompleteATQ,
            

        },

        //Mensajes de cambio de atq finales
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ_Changes_Mensajes',
            path: 'ATQ_Mensajes/:id',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_Changes_Mensajes,
            

        },

        //Material completo - Almacen
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Almacen_Material_Complete',
            path: 'Almacen_Material_Completo/:id',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: MaterialCompletadoAlmacen,
        },

        //ATQ Transferencia CX (Aceptada/Rechazada)
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ_TransferirCX',
            path: 'ATQ_TransfirerCX/:id',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Atq_TransferirCx_Page,
        },

        // Transferencia Aceptada
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ_TransferirCX_Aceptada',
            path: 'ATQ_TransfirerCX_Aceptada/:id',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Atq_Transferir_Aceptada,
        },

       // Transferencia Rechazada
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ_TransferirCX_Rechazada',
            path: 'ATQ_TransfirerCX_Rechazada/:id',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: Atq_Transferir_Rechazada,
        },


        //Mensajes de transferir
        {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'ATQ_TransferirCX_Mensaje',
            path: 'ATQ_TransfirerCX_Mensaje/:id',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ATQ_Transferir_Mensaje,
        },
       
         //Mensajero Material (Material recolectar y/o entregar)
         {
            uid: shortid.generate(),
            rolePermissions: 'Login',
            title:'Mensajero_Material',
            path: 'Mensajero_Material/:id',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: MensajeroMaterial,
        },



        

        {
            //role:'',
            //route: '',
            //icon: '',
            Component: NotFoundPage,
        },
    ];


    // if(isSideBarLinks){
    //     return availableRoutes.filter((ar) => ar.role === role && ar.icon);
    // }
    if(availableRoutes && permissions){
        const array = [];
        for (let i = 0; i < availableRoutes.length; i++) {
            for (let j = 0; j < permissions.length; j++) {
                if(availableRoutes[i]['rolePermissions'] === permissions[j]['permissionTypeDescription']){
                    array.push(availableRoutes[i]);
                } 
            }
        }
        return array;
    }
    // Mostrar Elementos por Rol
    // return availableRoutes.filter((ar) => ar.role === role);

    

};