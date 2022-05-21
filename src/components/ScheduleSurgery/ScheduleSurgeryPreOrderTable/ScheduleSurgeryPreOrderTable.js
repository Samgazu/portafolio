import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { RiDeleteBin6Line } from "react-icons/ri";
import addImgButton from '../../../assets/img/512PX/Icono_Mas_512px.png';
import checkImgButton from '../../../assets/img/126PX/Icono_Check_126px.png';
import alertImgButton from '../../../assets/img/126PX/Icono_Warning_126px.png';
import errorImgButton from '../../../assets/img/126PX/Icono_Advertencia_126px.png';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { ScheduleSurgeryConfirmModalToPreOrderTable } from './ScheduleSurgeryConfirmModalToPreOrderTable';

export const ScheduleSurgeryPreOrderTable = ({listItems, typeList}) => {

    const history = useHistory();

    const [message, setMessage] = useState(null);
    const [openModalConfirm, setOpenModalConfirm] = useState(null);
    const [productToDelete, setProductToDelete] = useState(null);
    const [deleteType, setDeleteType] = useState(null);
    const [typeListMessage, setTypeListMessage] = useState(null);

    const handleNavigate = () => {
        history.replace('/ProgramarCX/TipoCirugia');
    }

    
    const handleDeleteItem = (item) =>{
        if(typeList === 'SYSTEMS'){
            setMessage('¿Quieres eliminar sistema?');
            setDeleteType('SYSTEMS');
            setTypeListMessage('SISTEMA')
        }
        if(typeList === 'REQUIRE_ITEMS'){
            setMessage('Estás eliminando material obligatorio para el sistema ¿Estás seguro de querer eliminarlo?');
            setDeleteType('REQUIRE_ITEMS');
            setTypeListMessage('MATERIAL');
        }
        if(typeList === 'OPTIONAL_ITEMS'){
            setMessage('Estás eliminando material opcional para el sistema ¿Estás seguro de querer eliminarlo?');
            setDeleteType('OPTIONAL_ITEMS');
            setTypeListMessage('MATERIAL')
        }
        setOpenModalConfirm('CONFIRM');
        setProductToDelete(item);
    }
    
    const handleDeleteCard = () =>{
        if(typeList === 'SYSTEMS'){
            setMessage('¿Quieres eliminar tabla de sistemas?');
            setDeleteType('ALL_SYSTEMS');
            setTypeListMessage('SISTEMA')
        }
        if(typeList === 'REQUIRE_ITEMS'){
            setMessage('¿Quieres eliminar tabla de material?');
            setDeleteType('ALL_REQUIRE_ITEMS');
            setTypeListMessage('MATERIAL');
        }
        if(typeList === 'OPTIONAL_ITEMS'){
            setMessage('¿Quieres eliminar tabla de material?');
            setDeleteType('ALL_OPTIONAL_ITEMS');
            setTypeListMessage('MATERIAL')
        }
        setOpenModalConfirm('CONFIRM');
    }

    const toggleModalConfirm = () => {
        setOpenModalConfirm(null);
    };

    return (
        <div className={'schedulePreOrder-section-rigth-card-container' }>
                        <button className='schedulePreOrder-section-rigth-card-container-delete-container' onClick={handleDeleteCard}>
                            <CloseIcon className='schedulePreOrder-section-rigth-card-container-delete'></CloseIcon>
                        </button>
                        <table  className='schedulePreOrder-section-rigth-table-container'>
                            <thead  className='schedulePreOrder-section-rigth-table-head'>
                                <tr className='schedulePreOrder-section-rigth-table-head-row'>
                                    <th className='schedulePreOrder-section-rigth-table-title'>
                                        Item
                                    </th>
                                    <th className='schedulePreOrder-section-rigth-table-title'>
                                        {typeList === 'SYSTEMS' && `Sistema solicitado` }
                                        {typeList === 'REQUIRE_ITEMS' && 'Material Obligatorio'}
                                        {typeList === 'OPTIONAL_ITEMS' && 'Material Opcional'}
                                    </th>
                                    <th className='schedulePreOrder-section-rigth-table-title'>
                                        Equipo
                                    </th>
                                    <th className='schedulePreOrder-section-rigth-table-title'>
                                        Tornillos/Nivel
                                    </th>
                                    <th className='schedulePreOrder-section-rigth-table-title'>
                                        
                                    </th>

                                </tr>
                            </thead>
                            <tbody  className='schedulePreOrder-section-rigth-table-body'>
                                {
                                    listItems &&
                                    listItems.map((el, index) => 
                                        !el.MandatoryProductDeleted&&(
                                        <tr className='schedulePreOrder-section-rigth-table-body-row' key={el.id}>
                                            <td className='schedulePreOrder-section-rigth-table-data'>
                                                {(index + 1) < 9  ? '0' + `${index + 1}`: `${index + 1}` }
                                            </td>
                                            <td className='schedulePreOrder-section-rigth-table-data'>
                                                 {typeList === 'SYSTEMS' && `${el.system.productDescription} / ${el.arrangement.description}` }
                                                 {typeList === 'REQUIRE_ITEMS' && el.product.productDescription }
                                                 {typeList === 'OPTIONAL_ITEMS' && el.product && el.product.productDescription }
                                                 {typeList === 'OPTIONAL_ITEMS' && !el.product && `${el.system.productDescription} / ${el.arrangement.description}` }

                                            </td>
                                            <td className='schedulePreOrder-section-rigth-table-data'>
                                            {   typeList === 'REQUIRE_ITEMS' && el.product.isBundle && el.product.availableLocations && el.product.availableLocations > 1 
                                                ?   <img src={checkImgButton} alt="" className={`schedulePreOrder-section-rigth-table-data-img-check`} />
                                                :   typeList === 'REQUIRE_ITEMS' && el.product.isBundle &&  el.product.availableLocations && el.product.availableLocations === 1 
                                                ?   <img src={alertImgButton} alt="" className={`schedulePreOrder-section-rigth-table-data-img-check`} />
                                                :   typeList === 'REQUIRE_ITEMS'  && el.product.availableLocations === 0 && el.product.isBundle
                                                &&   <img src={errorImgButton} alt="" className={`schedulePreOrder-section-rigth-table-data-img-check`} />

                                                
                                            }
                                            {   typeList === 'OPTIONAL_ITEMS' && el.system && el.system.availableLocations && el.system.availableLocations > 1 
                                                ?   <img src={checkImgButton} alt="" className={`schedulePreOrder-section-rigth-table-data-img-check`} />
                                                :   typeList === 'OPTIONAL_ITEMS' && el.system && el.system.availableLocations && el.system.availableLocations === 1 
                                                ?   <img src={alertImgButton} alt="" className={`schedulePreOrder-section-rigth-table-data-img-check`} />
                                                :   typeList === 'OPTIONAL_ITEMS' && el.system && el.system.availableLocations === 0
                                                &&   <img src={errorImgButton} alt="" className={`schedulePreOrder-section-rigth-table-data-img-check`} />
                                            }
                                            {   typeList === 'SYSTEMS' && el.system.availableLocations && el.system.availableLocations > 1 
                                                ?   <img src={checkImgButton} alt="" className={`schedulePreOrder-section-rigth-table-data-img-check`} />
                                                :   typeList === 'SYSTEMS' && el.system.availableLocations && el.system.availableLocations === 1 
                                                ?   <img src={alertImgButton} alt="" className={`schedulePreOrder-section-rigth-table-data-img-check`} />
                                                :   typeList === 'SYSTEMS' && el.system.availableLocations === 0
                                                &&   <img src={errorImgButton} alt="" className={`schedulePreOrder-section-rigth-table-data-img-check`} />
                                            }
                                                
                                            </td>
                                            <td className='schedulePreOrder-section-rigth-table-data'>
                                                {typeList === 'SYSTEMS' && el.quantity}
                                                {typeList === 'REQUIRE_ITEMS' && 'NA'}
                                                {typeList === 'OPTIONAL_ITEMS' && el.quantity}
                                            </td>
                                            <td className='schedulePreOrder-section-rigth-table-data'>
                                                <button className='schedulePreOrder-section-rigth-table-data-delete-container' onClick={() => handleDeleteItem(el)}>
                                                    <RiDeleteBin6Line className='schedulePreOrder-section-rigth-table-data-delete'>
                                                    </RiDeleteBin6Line>
                                                </button>
                                            
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <button className='schedulePreOrder-section-rigth-card-container-add-container' onClick={ handleNavigate }>
                            {/* <CloseIcon ></CloseIcon> */}
                            <img className='schedulePreOrder-section-rigth-card-container-add' src={addImgButton} alt="" />
                        </button>
                        {
                            openModalConfirm&& 
                            <ScheduleSurgeryConfirmModalToPreOrderTable
                                isOpen={!!openModalConfirm}
                                toggle={toggleModalConfirm}
                                messageModal={message}
                                itemProduct={productToDelete}
                                deleteType={deleteType}
                                typeList={typeListMessage}
                            />
                        }
                    </div>
    )
}

ScheduleSurgeryPreOrderTable.propTypes = {
    listItems: PropTypes.any,
    typeList: PropTypes.any,
}