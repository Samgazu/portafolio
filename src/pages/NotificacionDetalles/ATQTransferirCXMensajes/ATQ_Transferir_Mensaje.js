import React from 'react'
//import icoAccept from '../../../assets/img/126PX/ico_mensaje_change.png';
import icoRechazadaCX from '../../../assets/img/126PX/ico_mensaje_rechazadaCX.png';
import icoAceptadaCX from '../../../assets/img/126PX/ico_mensaje_aceptadaCX.png';
import './styleAtqTransferirCX.scss';

export const ATQ_Transferir_Mensaje = ({ type = "rechazado" }) => {

    // const handleNavigate = () => {
    //     page === 'atq'

    //       ? ''//MNADAR AL INICIO DE ATQ
    //       : ''//MANDAR AL INICIO DE COORDINADOR ATQ
    //   }

    return (
        <div className={"mensaje_transferirCX_atq_containes"}>
            <div className={"mensjae_transferirCX_atq_general_c"}>
                <div className={"mensaje_transferirCX-images"}>

                    {
                        type === "rechazado" ?
                            <img className="atq_transferirCX-success-img" src={icoRechazadaCX} alt="" />

                            :
                            <img className="atq_transferirCX-success-img" src={icoAceptadaCX} alt="" />
                    }
                </div>
                {/* {
                    page === 'atq'
                        ? <p className={"Final_encuesta_finish-subtitle"}>{'se ha GUARDADO encuesta de:'} </p>
                        : (comentario === false
                            ? <p className={"Final_encuesta_finish-subtitle"}>{'se ha GUARDADO tu encuesta sobre la:'} </p>
                            : <p className={"Final_encuesta_finish-subtitle"}>{'se ha GUARDADO comentario agregado en:'} </p>)
                } */}


                <p className="mensaje_atq_transferirCX_inf_subtitle_1">{'CX #9'}</p>

                {type === "rechazado" ?

                    <p className="mensaje_atq_transferirCX_inf_subtitle_2">{'TRANSFERENCIA RECHAZADA'}</p>
                    :
                    <p className="mensaje_atq_transferirCX_inf_subtitle_2">{'TRANSFERENCIA ACEPTADA'}</p>

                }

                <div className={"mensaje_atq_transferirCX_order_buttons"}>
                    {
                        <button className="mensaje_atq_transferirCX_white_button"  >
                            <span> NOTIFICAR A COORDINADOR</span>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}
