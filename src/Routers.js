import icoUsuario from './assets/img/126PX/Icono_Usuarios_Blanco_126px.png';

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

import { UsersHome } from './pages/Users/UsersHome';
import { DoctorsHome } from './pages/Users/Doctors/DoctorsHome';
import { InstitutionsHome } from './pages/Users/Institutions/InstitutionsHome';
import { PatientsHome } from './pages/Users/Patients/PatientsHome';
import { RepartidorHome } from './pages/Users/Repartidor/RepartidorHome';
import { SellerHome } from './pages/Users/Seller/SellerHome';


import { PendingApprovalUsers } from './pages/PendingApprovalUsers/PendingApprovalUsers';
import { PermissionsManagementScreen } from './pages/PermissionsManagement/PermissionsManagementScreen';

import { FactoryMaterialScreen } from './pages/FactoryMaterial/FactoryMaterialScreen';
import { ScheduleSurgeryArrangementScreen } from './pages/ScheduleSurgeryArrangementScreen/ScheduleSurgeryArrangementScreen';
import { ScheduleSurgeryPreOrderView } from './pages/ScheduleSurgery/ScheduleSurgeryPreOrderView/ScheduleSurgeryPreOrderView';
import { ScheduleSurgeryFinishScreen } from './pages/ScheduleSurgery/ScheduleSurgeryFinishScreen/ScheduleSurgeryFinishScreen';
import { Schedule } from './pages/Schedule/Schedule';
import { SellerPermisions } from './pages/Users/Seller/SellerPermisions';

export const routes = ({ permissions }) =>{
    const availableRoutes = [
        {
            uid: shortid.generate(),
            title:'Inicio',
            path: 'Inicio',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,
            isSideBarLinks: true,
            layout: AppBar,
            Component: HomePage,
        },
        {
            uid: shortid.generate(),
            title:'Usuario',
            path: 'usuarios',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,
            isSideBarLinks: true,
            layout: AppBar,
            Component: UsersHome,
        },
        {
            uid: shortid.generate(),
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
            title:'Facturación',
            path: 'facturacion/:id',
            exact: true,
            layout: AppBar,
            authenticatedAccess:true,
            Component: QuoteDescription,
        },
        {
            uid: shortid.generate(),
            title:'Cotizacion',
            path: 'facturacion2/:id/:value/:idCX',
            exact: true,
            layout: AppBar,
            authenticatedAccess:true,
            Component: QuoteDescription,
        },
        {
            uid: shortid.generate(),
            title:'Productos',
            path: 'Inicio',
            icon: icoProductos,
            exact: true,
            authenticatedAccess:false,
            Component: HomePage,
        },
        {
            uid: shortid.generate(),
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
            title:'searchproduct',
            path: `ProgramarCX/search/:searchToProgramCX`,
            authenticatedAccess: true,
            layout: AppBar,
            Component: SearchProduct,
        },
        {
            uid: shortid.generate(),
            title:'ScheduleSurgeryPreOrderView',
            path: 'ProgramarCX/ScheduleSurgeryPreOrderView',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ScheduleSurgeryPreOrderView,
        },
        {
            uid: shortid.generate(),
            title:'Estatus',
            path: 'Inicio',
            icon: icoEstatus,
            exact: true,
            authenticatedAccess:false,
            Component: HomePage,
        },
        {
            uid: shortid.generate(),
            title:'Encuestas',
            path: 'Inicio',
            icon: icoEncuestas,
            exact: true,
            authenticatedAccess:false,
            Component: HomePage,
        },
        {
            uid: shortid.generate(),
            title:'Perfil',
            path: 'Inicio',
            icon: icoPerfil,
            exact: true,
            authenticatedAccess:false,
            Component: HomePage,
        },
        {
            uid: shortid.generate(),
            title:'PQX',
            path: 'Inicio',
            icon: icoPQX,
            exact: true,
            authenticatedAccess:false,
            Component: HomePage,
        },
        {
            uid: shortid.generate(),
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
            title:'Ajustes',
            path: 'Inicio',
            icon: icoAjustes,
            exact: true,
            authenticatedAccess:false,
            Component: HomePage,
        },
        {
            uid: shortid.generate(),
            title:'Perfil',
            path: 'Inicio',
            icon: icoProgramarCX,
            exact: true,
            authenticatedAccess:false,
            Component: HomePage,
        }, 
        {
            uid: shortid.generate(),
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
            title:'Cotizar productos',
            path: 'cotizaciones',
            icon: icoCotizar,
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuoteProductsScreen,
        },
        {
            uid: shortid.generate(),
            title:'cotizaciones',
            path: 'cotizacion/:systemId',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuoteProductsScreen,
        },
        {
            uid: shortid.generate(),
            title:'TipoCirugia',
            path: 'ProgramarCX/:tipoCirugia',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuoteProductsScreen,
        },
        {
            uid: shortid.generate(),
            title:'orden_solicitada_1',
            path: 'cotizacion_finalizacion/:orden_solicitada_1',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuoteFinished,
        },
        {
            uid: shortid.generate(),
            title:'cotizaciones_finalizadas',
            path: 'cotizaciones_finalizadas/searchQuote/:searchQuoteFinished',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuotesCompleted,
        },
        {
            uid: shortid.generate(),
            title:'cotizaciones_finalizadas',
            path: 'ProgramarCX/searchQuote/:searchQuoteFinishedSchedule',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuotesCompleted,
        },
        {
            uid: shortid.generate(),
            title:'Facturación_Search',
            path: 'facturacion/searchFactura/:factura',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuotesCompleted,
        },
        {
            uid: shortid.generate(),
            title:'orden_solicitada',
            path: 'orden_solicitada',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuoteSuccess,
        },
        {
            uid: shortid.generate(),
            title:'schedule_surgery',
            path: 'Cirugia_Programada',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: ScheduleSurgeryFinishScreen,
        },
        {
            uid: shortid.generate(),
            title:'orden_solicitada',
            path: 'cotizaciones_finalizadas/:id',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuoteDescription,
        },
        {
            uid: shortid.generate(),
            title:'cotizacion_schedule',
            path: 'cotizacion_cirugia/:schedule/:id',
            exact: true,
            authenticatedAccess:true,
            layout: AppBar,
            Component: QuoteDescription,
        },
        {
            uid: shortid.generate(),
            title:'product',
            path: 'cotizaciones/datos',
            exact: true,
            authenticatedAccess: true,
            layout: AppBar,
            Component: QuoteProductExtraData,
        },
        {
            uid: shortid.generate(),
            title:'product',
            path: 'cotizaciones/ordenes',
            exact: true,
            authenticatedAccess: true,
            layout: AppBar,
            Component: QuoteOrders,
        },
        {
            uid: shortid.generate(),
            title:'product',
            path: 'cotizaciones/:mainSurgeryTypeId/:systemId',
            exact: true,
            authenticatedAccess: true,
            layout: AppBar,
            Component: QuoteProductScreen,
        },
        {
            uid: shortid.generate(),
            title:'product',
            path: 'programarCX/:mainSurgeryTypeId/:systemId',
            exact: true,
            authenticatedAccess: true,
            layout: AppBar,
            Component: ScheduleSurgeryArrangementScreen,
        },
        {
            uid: shortid.generate(),
            title:'search',
            path: `search`,
            authenticatedAccess: true,
            layout: AppBar,
            Component: SearchProduct,
        },
        {
            uid: shortid.generate(),
            title:'searchproduct',
            path: `searchproduct/:systemId`,
            authenticatedAccess: true,
            layout: AppBar,
            Component: SearchProduct,
        },
        {
            uid: shortid.generate(),
            title:'scheduleQuoteFinished',
            path: `CotizacionesFinalizadas`,
            authenticatedAccess: true,
            layout: AppBar,
            Component: ScheduleQuoteFinished,
        },
        {
            uid: shortid.generate(),
            title:'Configuración de Materiales',
            path: `materialFactory`,
            authenticatedAccess: true,
            icon: icoUsuario,
            layout: AppBar,
            Component: FactoryMaterialScreen,
        }, 
        {
            uid: shortid.generate(),
            title:'Médicos',
            path: 'usuarios/medicos',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,
            isSideBarLinks: true,
            layout: AppBar,
            Component: DoctorsHome,
        },
        {
            uid: shortid.generate(),
            title:'Instituciones',
            path: 'usuarios/instituciones',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,
            isSideBarLinks: true,
            layout: AppBar,
            Component: InstitutionsHome,
        },
        {
            uid: shortid.generate(),
            title:'Pacientes',
            path: 'usuarios/pacientes',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,
            isSideBarLinks: true,
            layout: AppBar,
            Component: PatientsHome,
        },
        {
            uid: shortid.generate(),
            title:'Repartidores',
            path: 'usuarios/repartidores',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,
            isSideBarLinks: true,
            layout: AppBar,
            Component: RepartidorHome,
        },
        {
            uid: shortid.generate(),
            title:'Vendedores',
            path: 'usuarios/:vendedores',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,
            isSideBarLinks: true,
            layout: AppBar,
            Component: SellerHome,
        },
        {
            uid: shortid.generate(),
            title:'Permiso de Vendedores',
            path: 'usuarios/vendedores/permisos',
            icon: icoUsuario,
            exact: true,
            authenticatedAccess: true,
            isSideBarLinks: true,
            layout: AppBar,
            Component: SellerPermisions,
        },
    
        {
            Component: NotFoundPage,
        },
    ];

    if(availableRoutes){
        return availableRoutes;
    }
};