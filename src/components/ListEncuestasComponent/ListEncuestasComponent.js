import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import black_arrow from '../../assets/img/126PX/black_arrow.png';
import './styleEncuestaList.scss';

export const ListEncuestasComponent = ({activeSwitchVentas}) => {

    const history = useHistory();

    const handleNivagateToApproveOrder = (appointment) => {
        
            history.replace(`/Detalles_Encuesta_Ventas/${activeSwitchVentas}`);
            
    }

    const list = [
        {
            id: 1,
            hours: '18:00 hrs',
            surgeryDate: '12/01/2021',
            hospital: 'Clinica de la guadalupe',
            medico: 'Alexis Samuel',
        },
        {
            id: 2,
            hours: '17:00 hrs',
            surgeryDate: '12/01/2021',
            hospital: 'Clinica de la guadalupe',
            medico: 'Alexis Samuel',
        },
        {
            id: 3,
            hours: '22:00 hrs',
            surgeryDate: '12/01/2021',
            hospital: 'Clinica de la guadalupe',
            medico: 'Alexis Samuel',
        },
        {
            id: 4,
            hours: '24:00 hrs',
            surgeryDate: '12/01/2021',
            hospital: 'Clinica de la guadalupe',
            medico: 'Alexis Samuel',
        },
        {
            id: 5,
            hours: '21:00 hrs',
            surgeryDate: '12/01/2021',
            hospital: 'Clinica de la guadalupe',
            medico: 'Alexis Samuel',
        },
        {
            id: 6,
            hours: '10:00 hrs',
            surgeryDate: '12/01/2021',
            hospital: 'Clinica de la guadalupe',
            medico: 'Alexis Samuel',
        },
        {
            id: 7,
            hours: '11:00 hrs',
            surgeryDate: '12/01/2021',
            hospital: 'Clinica de la guadalupe',
            medico: 'Alexis Samuel',
        },
        {
            id: 8,
            hours: '14:00 hrs',
            surgeryDate: '12/01/2021',
            hospital: 'Clinica de la guadalupe',
            medico: 'Alexis Samuel',
        },
        {
            id: 9,
            hours: '20:00 hrs',
            surgeryDate: '12/01/2021',
            hospital: 'Clinica de la guadalupe',
            medico: 'Alexis Samuel',
        },
        {
            id: 10,
            hours: '12:00 hrs',
            surgeryDate: '12/01/2021',
            hospital: 'Clinica de la guadalupe',
            medico: 'Alexis Samuel',
        },

    ]


    return (
        <div className="Survey_Ventas_elements_container_info">
            {
                list &&
                list.map(item => (

                    <div key={item.id} className="Survey_Ventas_elements_info_container" onClick={() => handleNivagateToApproveOrder(item)}>
                        <div className="Survey_Ventas_elements_info_elements_container" >
                            <span className="Survey_Ventas_elements_info_date_container">
                                <p className="Survey_Ventas_elements_info_date">
                                    {item.surgeryDate && item.surgeryDate} -
                                </p>
                                <p className="Survey_Ventas_elements_info_date">
                                    {item.hours && item.hours} -
                                </p>
                                <p className="Survey_Ventas_elements_info_date">
                                    {item.medico && item.medico} 
                                </p>

                            </span>
                            <span className="Survey_Ventas_elements_info_ubicacion_container">
                                <p className="Survey_Ventas_elements_info_ubicacion_element">
                                    {item.hospital && item.hospital}  -
                                </p>
                                <p className="Survey_Ventas_elements_info_ubicacion_element">
                                    {`CX #${item.id && item.id}`}
                                </p>
                            </span>
                        </div>
                        <img src={black_arrow} alt="arrow" className={'Survey_Ventas_elements_img_arrow'} />
                    </div>
                ))
            }
        </div>


    )
}

ListEncuestasComponent.propTypes = {
    activeSwitchVentas: PropTypes.any,
}


