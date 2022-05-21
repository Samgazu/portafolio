import React, { useState } from 'react';
import PropTypes from 'prop-types';
import deleteImg from '../../assets/img/512PX/Icono_Eliminar_512px.png';
import { FactoryMaterialArranngementModal } from './FactoryMaterialArranngementModal';
import { useDispatch } from 'react-redux';
import { deleteSystemSurgeryArrangement } from '../../actions/scheduleSurgeryAction';

export const FactoryMaterialArrangementList = ({arrangementList, bundleSelected}) => {

    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(null);

    const toggleModal = () => {
        setOpenModal(null);
    };


    const handleDeleteItemCardClick = (element) => {
        dispatch(deleteSystemSurgeryArrangement(element.id));
    }

    return (
        <section className="container_medic_hospital_list_component medic_hospital_list_component_rigth">
        <div className="medic_hospital_list_component_container_title">
            <h3 className="medic_hospital_list_component_title"> Especificaciones </h3>
        </div>
        <div className="medic_hospital_list_component_container_cards medic_hospital_list_component_cards_rigth">
            {
                arrangementList && arrangementList.length > 0 &&
                    arrangementList.map(el => (
                        <div className={ 'medic_hospital_list_component_container_card medic_hospital_list_component_container_card_requeriment'}
                            key={el.id}
                        >
                            <div className="medic_hospital_list_component_card_container_info medic_hospital_list_component_card_container_info_requeriments">
                                <span className="medic_hospital_list_component_card_info_text">{el.title}</span>
                                <div className="medic_hospital_list_component_card_container_info_img" 
                                onClick={() => handleDeleteItemCardClick(el)}
                                >
                                    <img src={deleteImg} alt="" className="medic_hospital_list_component_card_info_img" />
                                </div>
                            </div>

                        </div>
                    ))
            }
        </div>
        <div className="medic_hospital_list_component_cards_rigth_container_button">
            <button className={'medic_hospital_list_component_cards_rigth_button'} onClick={ () => setOpenModal("NewArrangement") } >
                Agregar
            </button>

        </div>

        {
            openModal === "NewArrangement" &&
            <FactoryMaterialArranngementModal
                isOpen
                toggle={toggleModal}
                itemselected={bundleSelected}
            />
        }
    </section>
    )
}

FactoryMaterialArrangementList.propTypes = {
    arrangementList: PropTypes.any,
    bundleSelected: PropTypes.any,
}
