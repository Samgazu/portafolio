import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './sass/styles.scss';
import { RiDeleteBin6Line } from "react-icons/ri";

import { setManageObservationSucces } from '../../actions/scheduleSurgeryAction';
import PropTypes from 'prop-types';
import { AddObservationOrNoteModal } from './AddObservationOrNoteModal';
import { addSellerNotes } from '../../actions/storeHouseAction';

export const PreAddOverviewComponent = ({listElements, title = '', messageEmpty = '', messageButton = '', type}) => {

    const [openModalObservation, setOpenModalObservation] = useState(null);
    const [listObservationItems, setListObservationItems] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        if(listElements){
            setListObservationItems(listElements);
        }

    }, [listElements])

    const handleToggleModal = () => {
        setOpenModalObservation(null);
    }

    const handleDeleteItem = (observationId) => {
        const newListObservations = listObservationItems && listObservationItems.filter( el => el.id !== observationId.id );
        if(type === 'VENTAS'){
            dispatch(setManageObservationSucces(newListObservations));
        }else if (type === 'ALMACEN'){
            dispatch(addSellerNotes(newListObservations));
        }
    }

    return (
        <article className="schedulePreOrder-left-item">
            
            <div className='schedulePreOrder-left-item-items'>
                    <h3 className='schedulePreOrder-left-item-item-title'>{title}</h3>
                    <ol className='schedulePreOrder-left-item-list'>
                        {
                            listObservationItems &&
                            listObservationItems.length > 0 &&
                            listObservationItems.map((el, index) => (
                                <li className='schedulePreOrder-left-item-list-item' key={el.id}>
                                   <span>{`${index + 1}.- ${el.description}`}</span>
                                   <RiDeleteBin6Line className={'schedulePreOrder-left-item-list-item-img-delete'} onClick={() => handleDeleteItem(el)} />
                                </li>
                            ))
                        }
                        {
                            (listObservationItems &&
                            listObservationItems.length === 0
                            ||
                            !listObservationItems)&&
                            <li className='schedulePreOrder-left-item-list-item'>
                                {messageEmpty}
                            </li>
                        }
                    </ol>
            </div>
            <div className='schedulePreOrder-section-left-subTitle-container schedulePreOrder-section-left-subTitle-container-observation ' onClick={() => setOpenModalObservation('NEW_OBSERVATION')}>
                    <p className='schedulePreOrder-left-subTitem-title'>{messageButton}</p>
            </div>
            {
                openModalObservation && type === 'VENTAS' && 
                <AddObservationOrNoteModal
                    toggle={handleToggleModal}
                    nameAndTypeModal={{ title: "Nueva Observación", type, titleModal: "Nueva Observación" }}
                    isOpen={!!openModalObservation}
                />
            }
            {
                openModalObservation && type === 'ALMACEN' && 
                <AddObservationOrNoteModal
                    toggle={handleToggleModal}
                    nameAndTypeModal={{ title: "NOTAS DE ALMACÉN", type, titleModal: 'NOTAS ALMACÉN' }}
                    isOpen={!!openModalObservation}
                />
            }
        </article>
    )
}


PreAddOverviewComponent.propTypes = {
    listElements: PropTypes.any,
    title: PropTypes.any,
    messageEmpty: PropTypes.any,
    messageButton: PropTypes.any,
    type: PropTypes.any,
}

