import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PendingApprovalUsers.scss';
import { SubNavBarComponent } from '../../components/layouts/layout1/subnavbar/SubNavBarComponent';
import { getPendingApprovalUsers, getRols } from '../../actions/userActions';
import { ApproveUnapproveModal } from './ApproveUnapproveModal';

// ASSETS
import userIcon from '../../assets/img/126PX/Iconawesome-user-circle.png';

// ICONS
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import AlertMessage from '../../components/shared/AlertMessage/AlertMessage';

export const PendingApprovalUsers = () => {
    const dispatch = useDispatch();
    const [users, setUsers] = useState(null);
    const [openModal, setOpenModal] = useState(null);
    const [modalType, setModalType] = useState(null);
    const [modalElement, setModalElement] = useState(null);
    const data = useSelector(state => state.user);
    const isAproveUser = useSelector(state => state.user.aproveUser);
    const isUnapproveUser = useSelector(state => state.user.unapproveUser);

    useEffect(() => {
        dispatch(getPendingApprovalUsers());
    }, [isAproveUser, isUnapproveUser])

    useEffect(() => {
        if ( data.getPendingApprovalUsers ) {
            setUsers(data.getPendingApprovalUsers)
        }
    }, [data])

    useEffect(() => {
        dispatch(getRols());
    }, [])

    const getAllPendingUsers = () => {
        dispatch(getPendingApprovalUsers());
        toggleModal()
    }
    const openAppUnppModal = (item, typeMod) => {
        setOpenModal(true);
        setModalType(typeMod);
        setModalElement(item);
        // console.log(item)
    };

    const toggleModal = () => {
        setOpenModal(null);
        setModalType(null);
        setModalElement(null);
    };
    const renderUserCard = (item) => {
        return (
            <div key={item.id} className={"userCardContent"}>
                <div className={'userCardContent-image'}>
                    <img src={userIcon} alt={'IMG'}/>
                </div>
                <div className={'userCardContent-data'}>
                    <div className={"user-fullname"}>
                        <p>{item.firstName && item.firstName}</p>
                        <p>{item.secondName && item.secondName}</p>
                        <p>{item.firstLastName && item.firstLastName}</p>
                        <p>{item.secondLastName && item.secondLastName}</p>
                    </div>
                    <div className={"second-data-element"}>
                        <p className={"dark_gray_color"}>Email: </p>
                        <p className={"light_gray_color"}>{item.email}</p>
                    </div>
                    <div className={"second-data-element"}>
                        <p className={"dark_gray_color"}>Telefono: </p>
                        <p className={"light_gray_color"}>{item.phone}</p>
                    </div>
                </div>
                <div className={"user-approve-unapprove"}>
                    <CheckIcon className={"a_u_icon approve_icon"} onClick={() => openAppUnppModal(item, 'Aprobar') }/>
                    <CloseIcon className={"a_u_icon unapprove_icon"} onClick={() => openAppUnppModal(item, 'Rechazar') }/>
                </div>
            </div>
        );
    };
    return (
        <>
        {
            openModal &&
            <ApproveUnapproveModal
                isOpen
                toggle={toggleModal}
                approve_unapprove={modalType}
                bodyElement={modalElement}
                updateInfo = {getAllPendingUsers}
                users={users}
                setUsers={setUsers}
            />
        }
        <SubNavBarComponent title={`Aprobar / rechazar`} searchActive={false} />
        {
            isAproveUser && isAproveUser.statusCode === 200 &&
                <AlertMessage typeMessage={'OK'} textInfo={'Usuario Autorizado correctamente'} isActiveAlert={true} typeUserAlert={'AproveUser'}/>
        }
        {
            isUnapproveUser && isUnapproveUser.statusCode === 200 && (
                <AlertMessage typeMessage={'OK'} textInfo={'Usuario rechazado correctamente'} isActiveAlert={true} typeUserAlert={'UnapproveUser'}/>
            )
        }
        <div className={"pending_users_content"}>
            {
                users && users.length > 0 &&
                users.map(renderUserCard)
            }
        </div>
        </>
    )
}