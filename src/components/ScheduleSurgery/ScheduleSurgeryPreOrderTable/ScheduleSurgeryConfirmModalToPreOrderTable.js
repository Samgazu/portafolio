import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../components/shared/Modal';
import errorMessage from '../../../assets/img/512PX/Icono_Advertencia_512px.png';
import './sass/styles_confirm_modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setElementOptionalMaterialSucces, setElementRequireMaterialSucces, setElementTypeSurgeryCompleted} from '../../../actions/scheduleSurgeryAction';


export const ScheduleSurgeryConfirmModalToPreOrderTable = ({isOpen, toggle, messageModal='Error', itemProduct, deleteType, typeList}) => {

    const listElementTypeSurgeryCompleted = useSelector(state => state.scheduleSurgery.listElementTypeSurgeryCompleted);
    const listElementRequireMaterialSucces = useSelector(state => state.scheduleSurgery.listElementRequireMaterialSucces);
    const listElementOptionalMaterialSucces = useSelector(state => state.scheduleSurgery.listElementOptionalMaterialSucces);
    const dispatch = useDispatch();

    const handleReturnOpenModal = (response) => {


        if( response === 'CONTINUE'){
            
            if(deleteType === 'SYSTEMS'){
                if(listElementTypeSurgeryCompleted && listElementTypeSurgeryCompleted.length > 0){
                    const newList = listElementTypeSurgeryCompleted.filter((el, index) => 
                        el.system.productCode !== itemProduct.system.productCode || el.system.productCode === itemProduct.system.productCode&&
                        el.quantity !== itemProduct.quantity &&
                        listElementTypeSurgeryCompleted.indexOf(el) === index
                        );
                    dispatch( setElementTypeSurgeryCompleted(newList));
                }
            }
            if(deleteType === 'REQUIRE_ITEMS'){
                if(listElementRequireMaterialSucces && listElementRequireMaterialSucces.length > 0){
                    const newList = listElementRequireMaterialSucces.map(el => {
                        if(el.product.productCode === itemProduct.product.productCode){
                            return {
                                ...itemProduct,
                                MandatoryProductDeleted: true
                            }
                        }
                        return el;
                    });
                    dispatch( setElementRequireMaterialSucces(newList));
                }
            }
            if(deleteType === 'OPTIONAL_ITEMS'){
                if(listElementOptionalMaterialSucces && listElementOptionalMaterialSucces.length > 0){

                    const newList = listElementOptionalMaterialSucces.filter(el => {
                        if(!!el.system && !!itemProduct.system && el.system.productCode === itemProduct.system.productCode ){
                            return ;
                        }
                        if(!!el.product && !!itemProduct.product  && el.product.productCode === itemProduct.product.productCode ){
                            return ;
                        }
                        return el;
                    });
                    dispatch( setElementOptionalMaterialSucces(newList));
                }
            }
            if(deleteType === 'ALL_SYSTEMS'){
                dispatch( setElementTypeSurgeryCompleted([]));
            }
            if(deleteType === 'ALL_REQUIRE_ITEMS'){
                dispatch( setElementRequireMaterialSucces([]));
            }
            if(deleteType === 'ALL_OPTIONAL_ITEMS'){
                dispatch( setElementOptionalMaterialSucces([]));
            }


        }
        toggle();
    }

    


    const modalBody = () => {
        return (
            <div className='container-errorModal'>
                <img src={errorMessage} alt="" className="errorModal-img" />
                <h3 className="errorModal-text">
                    {messageModal}
                </h3>

                <button className="errorModal-button" onClick={() => handleReturnOpenModal('CONTINUE')}>
                    Continuar
                </button>
                <button className="errorModal-button" onClick={() => handleReturnOpenModal('CANCEL')}>
                    Cancelar
                </button>
            </div>
        );
    };

    return (
        <CustomModal
                isOpen={isOpen}
                toggle={toggle}
                title={`ELIMINAR ${typeList}`}
                body={modalBody()}
        />
    );
}

ScheduleSurgeryConfirmModalToPreOrderTable.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
    messageModal: PropTypes.any,
    itemProduct: PropTypes.any,
    deleteType: PropTypes.any,
    typeList: PropTypes.any,
};