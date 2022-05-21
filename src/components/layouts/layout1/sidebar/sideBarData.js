import icoUsuario from '../../../../assets/img/126PX/Icono_Usuarios_Blanco_126px.png';
// import iAdministracion from '../../../../assets/img/126PX/Icono_Administracion_126px.png';
import icoHistorial from '../../../../assets/img/126PX/Icono_Hist.CotizacionesMenu_126px.png';
import icoFacturacion from '../../../../assets/img/126PX/Icono_FacturacionMenu_126px.png';
import icoProductos from '../../../../assets/img/126PX/Icono_ProductosMenu_126px.png';
import icoProgramar from '../../../../assets/img/126PX/Icono_ProgramarCXMenu_126px.png';
import icoEstatus from '../../../../assets/img/126PX/Icono_StatusMenu_126px.png';
import icoEncuestas from '../../../../assets/img/126PX/Icono_EncuestasMenu_126px.png';
import icoPerfil from '../../../../assets/img/126PX/Icono_PerfilMenu_126px.png';
// import icoPQX from '../../../../assets/img/126PX/Icono_PQXMenu_126px.png';
import icoPaquetes from '../../../../assets/img/126PX/Icono_PaqueteBudles_126px.png';
import icoAjustes from '../../../../assets/img/126PX/Icono_AjustesMenu_126px.png';
// import icoProgramarCX from '../../../../assets/img/126PX/Icono_ProgramaCX_126px.png';
import icoCotizar from '../../../../assets/img/126PX/Icono_CotizarProducto_126px.png';
import icoInfoProductos from '../../../../assets/img/126PX/Icono_InfoPProductoTSI_126px.png';
import icoAgenda from '../../../../assets/img/126PX/IcoAgenda.png';
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
// import { QuotesCompleted } from '../../../../pages/quotescompleted/QuotesCompleted';



export const sideBarData = [
    /* {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'Inicio',
        path: 'Inicio',
        icon: icoUsuario
    }, */
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
    // {
    //     uid: shortid.generate(),
    //     rolePermissions: '',
    //     title:'Productos',
    //     path: 'Inicio',
    //     icon: icoProductos,
    // },
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
    // {
    //     uid: shortid.generate(),
    //     rolePermissions: '',
    //     title:'Encuestas',
    //     path: 'Inicio',
    //     icon: icoEncuestas,
    // },
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
    /* {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'Perfil',
        path: 'Inicio',
        icon: icoPerfil,
    }, */
    {
        uid: shortid.generate(),
        rolePermissions: 'MakeQuotation',
        title:'Cotizar Productos',
        path: 'cotizaciones',
        icon: icoCotizar,
        rols: ['1','4']
    },
  /*   {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'InfoProductos',
        path: 'Inicio',
        icon: icoInfoProductos,
        rols: ['4']
    }, */
 /*    {

        uid: shortid.generate(),
        rolePermissions: 'Templates Configuration',
        title:'Requerimientos Hospital & Medicos',
        path: `Medic&HospitalRequeriments`,
        icon: icoUsuario,
    }, */
  
     
    {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'Agenda',
        path: `agenda/inicio`,
        icon: icoAgenda,
        rols: ['1','4','6','12','5','11','13']
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
    /* {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'Almacén',
        path: 'StoreHouse',
        icon: icoCotizar,
    }, */



    //Eliminar
   /*  {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'Sistemas disponibles',
        path: 'StoreHouse/StoreHomeAbailableSystemsScreen',
    /* {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'ATQ Menu Encuesta',
        path: 'ATQAdministratorMenuSurvery',
        icon: icoCotizar,
    },
    {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'ATQ Historial de Material',
        path: 'ATQAdministrator_Material_History',
        icon: icoCotizar,
    },
    {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'ATQ Estatus CX',
        path: 'ATQAdmin_EstatusCX',
        icon: icoCotizar,
    }, */
   /*  {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'Almacen',
        path: 'StoreHouseMenu',
        icon: icoCotizar,
    }, */
    /* {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'ATQ Coordinador',
        path: 'ATQAdmin_Inicio',
        icon: icoCotizar,
    }, */
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
    //  <----------Vista de notificacion de ATQ-------------->
    // {
    //     uid: shortid.generate(),
    //     rolePermissions: 'Login',
    //     title:'Notificacion mensajero',
    //     path: 'Messenger_Menu/notification',
    //     icon: icoCotizar,
    // }, 

     //MENU DE ATQ
     /* {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'ATQ MENU',
        path: 'ATQ_Inicio',
        icon: icoCotizar,
    },
    {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'MENSAJERO',
        path: 'Messenger_Menu',
        icon: icoCotizar,
    }, */


    //<-----------Mensaje cuando se aigna un ATQ a una cirugia------------>
    // {
    //     uid: shortid.generate(),
    //     rolePermissions: 'Login',
    //     title:'MENSAJE AZUL',
    //     path: 'ATQ_Asignado_Message',
    //     icon: icoCotizar,
    // },


    /* {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'ATQ MENSAJE NOTIFICACION',
        path: 'ATQ_messagge_notification',
        icon: icoCotizar,
    }, */

    /* {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'ATQ MENSAJE',
        path: 'ATQ_Inicio/com_report/menssage',
        icon: icoCotizar,
    }, */
    // {
    //     uid: shortid.generate(),
    //     rolePermissions: 'Login',
    //     title:'ATQ DisponibleAsignar',
    //     path: 'ATQAdmin_Disponible_Asignar/:page',
    //     icon: icoCotizar,
    // },
    // {
    //     uid: shortid.generate(),
    //     rolePermissions: 'Login',
    //     title:'ATQ CX SIN ASIGNAR ATQ',
    //     path: 'ATQAdmin_CX_Sin_Asignar_ATQ',
    //     icon: icoCotizar,
    // },
     {
         uid: shortid.generate(),
         rolePermissions: '',
         title:'Rol de Guardias',
         path: 'ATQ_GuardRole_View',
         icon: icoRolGuard,
     },
    // {
    //     uid: shortid.generate(),
    //     rolePermissions: 'Login',
    //     title:'Recepción y revisión de material',
    //     path: 'StoreHouse/StoreHomeReceivingMaterialReportScreen',
    //     icon: icoCotizar,
    // },

    //<----------vista de almacen entrada--------->
    // {
    //  uid: shortid.generate(),
    //      rolePermissions: 'Login',
    //     title:'Almacén entrada',
    //      path: 'StoreHouse/StoreHomeReceivingMaterialReportIncomingScreen',
    //      icon: icoCotizar,
    //  },



   

   //<------- Vista Gerente de calidad------->
   /*  {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'GERENTE DE CALIDAD',
        path: 'Quality_Menu',
        icon: icoCotizar,
    }, */

    //<------------Quality Message Cuando se guarda una encuesta --------->

    // {
    //     uid: shortid.generate(),
    //     rolePermissions: 'Login',
    //     title:'Quality_Messages',
    //     path: 'Quality_Messages_Page/15',
    //     icon: icoCotizar,
    // },


    //<---Modal analisis Description,id producto,cantidad---->
    // {
    //     uid: shortid.generate(),
    //     rolePermissions: 'Login',
    //     title:'Modal Analisis',
    //     path: 'Modal_Analisis_Question',
    //     icon: icoCotizar,
    // },

    //<-----Modal cuando una encuesta cerrada---->
    // {
    //     uid: shortid.generate(),
    //     rolePermissions: 'Login',
    //     title:'Modal Encuestas Cerrada',
    //     path: 'Modal_Encuestas_Cerrada',
    //     icon: icoCotizar,
    // },


    //LISTA DE TRANSFERENCIAS ATQ
    {
        uid: shortid.generate(),
        rolePermissions: '',
        title:'ATQ TRANSFERENCIA DE CX',
        path: 'ATQ_Inicio/Transfer_CX_List',
        icon: icoTransAtq,
        rols: ['5']
    },


    //MENSAJE DE ENCUESTA cuando se guarda un comentario
    // {
    //     uid: shortid.generate(),
    //     rolePermissions: 'Login',
    //     title:'MENSAJE ENCUESTA',
    //     path: 'ATQ_Inicio/Encuesta/menssage',
    //     icon: icoCotizar,
    // },

    //Mensajes de notificacion cambio de atq
   /*  {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'MENSAJE CABIO ATQ',
        path: 'Quality_Mensajes',
        icon: icoCotizar,
    },

    {
        uid: shortid.generate(),
        rolePermissions: 'Login',
        title:'ATQ_ACEPTADA',
        path: 'ATQ_TransfirerCX_Aceptada/:id',
        icon: icoCotizar,
    },
 */




]



