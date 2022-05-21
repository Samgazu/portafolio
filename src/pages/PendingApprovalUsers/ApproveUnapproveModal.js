import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CustomModal from '../../components/shared/Modal';
import Button from '../../components/shared/Atoms/Button';
import './ApproveUnapproveModal.scss';
import { ApproveUnapproveFormModal } from './ApproveUnapproveFormModal';
import { cleanUserAprove_Unaprove, setUnapproveUser } from '../../actions/userActions';

import { useForm } from '../../hooks/useForm';
export const ApproveUnapproveModal = (props) => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState({});

    const unApproveUser = (item) => {
        dispatch(setUnapproveUser(item.id, item.role.roleID));
        dispatch(cleanUserAprove_Unaprove(props.users.filter(el => el.id !== item.id)));
        props.setUsers(props.users.filter(el => el.id !== item.id));
        props.updateInfo();
        props.toggle();
    }
    const modalBody = () => {
        return (
            <div className={"approve_unapprove_modal"}>
                {
                    props.approve_unapprove == "Aprobar" &&
                        <div>
                            <ApproveUnapproveFormModal 
                                toggle={props.toggle}
                                updateInfo = {props.updateInfo}
                                bodyElement={props.bodyElement}
                                setUsers={props.setUsers}
                                users={props.users}
                            />
                            
                        </div>
                }
                {
                    props.approve_unapprove == "Rechazar" &&
                        <div>
                            <p className={"a_ua_modalTitle"}>¿Estas seguro que quieres rechazar este usuario?</p>
                            <div className={'approve_unapprove_button'}>
                                <Button color={"blue_medium"} title={"Rechazar"} onClick={() => { unApproveUser(props.bodyElement) }} />
                            </div>
                        </div>
                }
            </div>
        );
    };
    return (
        <CustomModal
                isOpen={props.isOpen}
                toggle={props.toggle}
                title={props.approve_unapprove}
                body={modalBody()}
        />
    );
}

ApproveUnapproveModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
    approve_unapprove: PropTypes.any,
    bodyElement: PropTypes.any,
    updateInfo: PropTypes.any,
};
  