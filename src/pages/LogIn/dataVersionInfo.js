import shortid from "shortid";

export const dataVersionInfo = [
   /*  {
        version: '1.0.16',
        changes: [ 
            {id: shortid.generate(), msg: 'Implementación de modulo Agenda'},
            {id: shortid.generate(), msg: 'Agenda, Implementación de busqueda y visualización de resultados'},
            {id: shortid.generate(), msg: 'Implementación de modulo Almacén'},
            {id: shortid.generate(), msg: 'Almacen, Implementación de modulo Surtir CX'},
            {id: shortid.generate(), msg: 'Almacen, Implementación de modulo Logística'},
        ]
    }, */
    {
        version: '1.0.15',
        changes: [ 
            {id: shortid.generate(), msg: 'Actualización, ahora se muestran los items obligatorios en la seccion de sugerencias, modulo Programación de cirugia'},
            {id: shortid.generate(), msg: 'Actualización, se agrego sección para preguntar si desea imprimir lista de precios, modulo Programación de cirugia'},
            {id: shortid.generate(), msg: 'Actualización, ahora se permite continuar hasta ver el detalle del appointment (productos seleccionados, opcionales y obligatorios) sin necesidad de llenar todos los datos de la programación de cirugia'},
            {id: shortid.generate(), msg: 'Actualización, ahora se muestra una alerta si intenta completar el appointment sin los datos completos'},
            {id: shortid.generate(), msg: 'Actualización, se evita el duplicados de productos obligatorios dentro del modulo Programación de cirugia'},
        ]
    },
    {
        version: '1.0.14',
        changes: [ 
            {id: shortid.generate(), msg: 'Creación de modulo Programación de cirugía'},
            {id: shortid.generate(), msg: 'Actualización, se agrego boton de descuento general para card de productos para el modulo de cotización'},
            {id: shortid.generate(), msg: 'Actualización, de estilos en vista de información de cotización'},
            {id: shortid.generate(), msg: 'Actualización, de estilos en modal de eliminación de card de productos para modulo de cotización'},
        ]
    },

]

