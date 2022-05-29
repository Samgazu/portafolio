import icoHistorial from '../../../../assets/img/126PX/Icono_Hist.CotizacionesMenu_126px.png';
import icoFacturacion from '../../../../assets/img/126PX/Icono_FacturacionMenu_126px.png';
import icoProgramar from '../../../../assets/img/126PX/Icono_ProgramarCXMenu_126px.png';
import icoCotizar from '../../../../assets/img/126PX/Icono_CotizarProducto_126px.png';
import shortid from 'shortid';

export const sideBarData = [
    {
        uid: shortid.generate(),
        title:'Mis cotizaciones',
        path: 'cotizaciones_finalizadas',
        icon: icoHistorial,
    },
    {
        uid: shortid.generate(),
        title:'Cotizaciones',
        path: 'facturacion',
        icon: icoFacturacion,
    },
    {
        uid: shortid.generate(),
        title:'Cotizar Productos',
        path: 'cotizaciones',
        icon: icoCotizar,
    },
    {
        uid: shortid.generate(),
        title:'Programar',
        path: 'ProgramarCX',
        icon: icoProgramar,
    },
];
