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
        rolePermissions: '',
        title:'Usuario',
        path: 'usuarios',
        icon: icoUsuario,
        rols: ['4']
    },
    {
        uid: shortid.generate(),
        rolePermissions: 'Manage Users',
        title:'Usuarios pendientes',
        path: `usuarios-pendientes`,
        icon: icoUsuario,
        rols: ['4']
    },
    {
        uid: shortid.generate(),
        rolePermissions: 'Manage Users',
        title:'Permisos de Usuario',
        path: `permisos_usuarios`,
        icon: icoUsuario,
        rols: ['4']
    },
    {
        uid: shortid.generate(),
        rolePermissions: 'Quotations History',
        title:'Mis cotizaciones',
        path: 'cotizaciones_finalizadas',
        icon: icoHistorial,
        rols: ['1','4']
    },
    {
        uid: shortid.generate(),
        rolePermissions: 'Quotations History',
        title:'Cotizaciones',
        path: 'facturacion',
        icon: icoFacturacion,
        rols: ['4']
    },
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Surtir Cx',
        path: 'StoreHouse',
        icon: icoSurtir,
        rols:['13']
    },
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Logística',
        path: 'AppointmentLogistics/:Logistics',
        icon: ico_log,
        rols:['13']
    },
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Disponibilidad de Equipos',
        path: 'StoreHomeAbailableSystemsScreen',
        icon: icoDisp,
        rols:['13']
    },
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Estatus',
        path: 'ATQAdmin_EstatusCX',
        icon: icoEstatus,
        rols:['1','4','6','12','11','13']
    },
    {
        uid: shortid.generate(),
        rolePermissions: 'Templates Configuration',
        title:'Configuración de Plantillas',
        path: 'configuracionPlantillas',
        icon: icoPaquetes,
        rols: ['4']
    },
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Ajustes',
        path: 'Inicio',
        icon: icoAjustes,
    },
    {
        uid: shortid.generate(),
        rolePermissions: 'MakeQuotation',
        title:'Cotizar Productos',
        path: 'cotizaciones',
        icon: icoCotizar,
        rols: ['1','4']
    },
    {
        uid: shortid.generate(),
        rolePermissions: 'Templates Configuration',
        title:'Configuración de Materiales',
        path: `materialFactory`,
        icon: icoProductos,
        rols: ['4']
    }, 
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Programar',
        path: 'ProgramarCX',
        icon: icoProgramar,
        rols:['1','4','6'],
    },
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Información producto TSI',
        icon: icoProgramar,
        type:'extern',
        rols:['1','4','5'],
    },
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Requerimientos Médicos',
        path: 'Messenger_Menu/medics_requ',
        icon: icoReqMed,
        rols:['1','12'],
    }, 
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Requerimientos Hospitales',
        path: 'Messenger_Menu/hospitals_requ',
        icon: icoReqHos,
        rols:['1','12'],
    }, 
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Requerimientos Médicos y Hospitales',
        path: 'Quality_Menu/Requeriments/',
        icon: icoReqMedHos,
        rols:['5'],
    }, 
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Reporte de experiencia',
        path: 'ATQ_Inicio/Reporte_de_experiencia',
        icon: icoRepExp,
        rols:['5'],
    }, 
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Asignar ATQ',
        path: 'ATQAdmin_Asignar_CX',
        icon: icoAsigAtq,
        rols:['11'],
    },
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Dispobilidad de ATQs',
        path: 'ATQAdministrator_atq_availability',
        icon: icoAsigAtq,
        rols:['11'],
    },
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Transferir ATQ',
        path: 'ATQAdministrator_Transferir_CX',
        icon: icoTransAtq ,
        rols:['11'],
    },
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Rol de Guardias',
        path: 'ATQ_GuardRole_View',
        icon: icoRolGuard,
    },
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'ATQ TRANSFERENCIA DE CX',
        path: 'ATQ_Inicio/Transfer_CX_List',
        icon: icoTransAtq,
        rols: ['5']
    },
];
