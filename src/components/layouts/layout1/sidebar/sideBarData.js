import icoUsuario from '../../../../assets/img/126PX/Icono_Usuarios_Blanco_126px.png';
import icoHistorial from '../../../../assets/img/126PX/Icono_Hist.CotizacionesMenu_126px.png';
import icoFacturacion from '../../../../assets/img/126PX/Icono_FacturacionMenu_126px.png';
import icoProductos from '../../../../assets/img/126PX/Icono_ProductosMenu_126px.png';
import icoProgramar from '../../../../assets/img/126PX/Icono_ProgramarCXMenu_126px.png';
import icoEstatus from '../../../../assets/img/126PX/Icono_StatusMenu_126px.png';
import icoPaquetes from '../../../../assets/img/126PX/Icono_PaqueteBudles_126px.png';
import icoAjustes from '../../../../assets/img/126PX/Icono_AjustesMenu_126px.png';
import icoCotizar from '../../../../assets/img/126PX/Icono_CotizarProducto_126px.png';
import icoReqMed from '../../../../assets/img/126PX/req_Med.png';
import icoReqHos from '../../../../assets/img/126PX/req_Hos.png';
import icoReqMedHos from '../../../../assets/img/126PX/req_med_hos.png';
import icoRepExp from '../../../../assets/img/126PX/ico_rep_exp.png';
import icoTransAtq from '../../../../assets/img/126PX/ico_trans_atq.png';
import icoRolGuard from '../../../../assets/img/126PX/icon_Rol_Guard.png';
import icoAsigAtq from '../../../../assets/img/126PX/ico_Asig_Atq.png';
import ico_log from '../../../../assets/img/126PX/ico_log.png';
import icoDisp from '../../../../assets/img/126PX/ico_disp.png';
import icoSurtir from '../../../../assets/img/126PX/ico_surtir.png';
import shortid from 'shortid';

export const sideBarData = [
    {
        uid: shortid.generate(),
        title:'Usuario',
        path: 'usuarios',
        icon: icoUsuario,
    },
    {
        uid: shortid.generate(),
        title:'Usuarios pendientes',
        path: `usuarios-pendientes`,
        icon: icoUsuario,
    },
    {
        uid: shortid.generate(),
        title:'Permisos de Usuario',
        path: `permisos_usuarios`,
        icon: icoUsuario,
    },
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
        title:'Surtir Cx',
        path: 'StoreHouse',
        icon: icoSurtir,
    },
    {
        uid: shortid.generate(),
        title:'Logística',
        path: 'AppointmentLogistics/:Logistics',
        icon: ico_log,
    },
    {
        uid: shortid.generate(),
        title:'Disponibilidad de Equipos',
        path: 'StoreHomeAbailableSystemsScreen',
        icon: icoDisp,
    },
    {
        uid: shortid.generate(),
        title:'Estatus',
        path: 'ATQAdmin_EstatusCX',
        icon: icoEstatus,
    },
    {
        uid: shortid.generate(),
        title:'Configuración de Plantillas',
        path: 'configuracionPlantillas',
        icon: icoPaquetes,
    },
    {
        uid: shortid.generate(),
        title:'Ajustes',
        path: 'Inicio',
        icon: icoAjustes,
    },
    {
        uid: shortid.generate(),
        title:'Cotizar Productos',
        path: 'cotizaciones',
        icon: icoCotizar,
    },
    {
        uid: shortid.generate(),
        title:'Configuración de Materiales',
        path: `materialFactory`,
        icon: icoProductos,
    }, 
    {
        uid: shortid.generate(),
        title:'Programar',
        path: 'ProgramarCX',
        icon: icoProgramar,
    },
    {
        uid: shortid.generate(),
        title:'Información producto TSI',
        icon: icoProgramar,
        type:'extern',
    },
    {
        uid: shortid.generate(),
        title:'Requerimientos Médicos',
        path: 'Messenger_Menu/medics_requ',
        icon: icoReqMed,
    }, 
    {
        uid: shortid.generate(),
        title:'Requerimientos Hospitales',
        path: 'Messenger_Menu/hospitals_requ',
        icon: icoReqHos,
    }, 
    {
        uid: shortid.generate(),
        title:'Requerimientos Médicos y Hospitales',
        path: 'Quality_Menu/Requeriments/',
        icon: icoReqMedHos,
    }, 
    {
        uid: shortid.generate(),
        title:'Reporte de experiencia',
        path: 'ATQ_Inicio/Reporte_de_experiencia',
        icon: icoRepExp,
    }, 
    {
        uid: shortid.generate(),
        title:'Asignar ATQ',
        path: 'ATQAdmin_Asignar_CX',
        icon: icoAsigAtq,
    },
    {
        uid: shortid.generate(),
        title:'Dispobilidad de ATQs',
        path: 'ATQAdministrator_atq_availability',
        icon: icoAsigAtq,
    },
    {
        uid: shortid.generate(),
        title:'Transferir ATQ',
        path: 'ATQAdministrator_Transferir_CX',
        icon: icoTransAtq ,
    },
    {
        uid: shortid.generate(),
        title:'Rol de Guardias',
        path: 'ATQ_GuardRole_View',
        icon: icoRolGuard,
    },
    {
        uid: shortid.generate(),
        title:'ATQ TRANSFERENCIA DE CX',
        path: 'ATQ_Inicio/Transfer_CX_List',
        icon: icoTransAtq,
    },
];
