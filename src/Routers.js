import icoUsuario from './assets/img/126PX/Icono_Usuarios_Blanco_126px.png';

import icoHistorial from './assets/img/126PX/Icono_Hist.CotizacionesMenu_126px.png';
import icoFacturacion from './assets/img/126PX/Icono_FacturacionMenu_126px.png';
import icoProgramar from './assets/img/126PX/Icono_ProgramarCXMenu_126px.png';
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
import { ScheduleSurgeryScreen } from './pages/ScheduleSurgery/ScheduleSurgeryScreen';
import { ScheduleQuoteFinished } from './pages/ScheduleSurgery/ScheduleQuoteFinished/ScheduleQuoteFinished';

import { ScheduleSurgeryArrangementScreen } from './pages/ScheduleSurgeryArrangementScreen/ScheduleSurgeryArrangementScreen';
import { ScheduleSurgeryPreOrderView } from './pages/ScheduleSurgery/ScheduleSurgeryPreOrderView/ScheduleSurgeryPreOrderView';
import { ScheduleSurgeryFinishScreen } from './pages/ScheduleSurgery/ScheduleSurgeryFinishScreen/ScheduleSurgeryFinishScreen';

export const routes = () =>{
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
            Component: NotFoundPage,
        },
    ];

    if(availableRoutes){
        return availableRoutes;
    }
};