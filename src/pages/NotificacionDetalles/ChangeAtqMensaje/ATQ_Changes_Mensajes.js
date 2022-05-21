import React from 'react'
import icoAccept from '../../../assets/img/126PX/ico_mensaje_change.png';
import icoRechazado from '../../../assets/img/126PX/ico_mensage_rechazado.png';
import './styleMensajesChanges.scss';

export const ATQ_Changes_Mensajes = ({ type = "rechazados" }) => {

    // const handleNavigate = () => {
    //     page === 'atq'

    //       ? ''//MNADAR AL INICIO DE ATQ
    //       : ''//MANDAR AL INICIO DE COORDINADOR ATQ
    //   }

    return (
        <div className={"mensaje_changes_atq_containes"}>
            <div className={"mensjae_changes_atq_general_c"}>
                <div className={"mensaje_changes-images"}>

                    {
                        type === "rechazado" ?
                            <img className="atq_changes-success-img" src={icoRechazado} alt="" />

                            :
                            <img className="atq_changes-success-img" src={icoAccept} alt="" />
                    }
                </div>
                {/* {
                    page === 'atq'
                        ? <p className={"Final_encuesta_finish-subtitle"}>{'se ha GUARDADO encuesta de:'} </p>
                        : (comentario === false
                            ? <p className={"Final_encuesta_finish-subtitle"}>{'se ha GUARDADO tu encuesta sobre la:'} </p>
                            : <p className={"Final_encuesta_finish-subtitle"}>{'se ha GUARDADO comentario agregado en:'} </p>)
                } */}


                <p className="mensaje_atq_inf_subtitle_1">{'CAMBIO DE ATQ'}</p>

                {type === "rechazado" ?

                    <p className="mensaje_atq_inf_subtitle_2">{'RECHAZADO'}</p>
                    :
                    <p className="mensaje_atq_inf_subtitle_2">{'ACEPTADO'}</p>

                }



                <p className="mensaje_atq_inf_subtitle_3">{'(Se ha enviado notificación a los involucrados )'}</p>


                <div className={"mensaje_atq_order_buttons"}>
                    {
                        <button className="mensaje_atq_white_button"  >
                            <span> ACEPTAR</span>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}
