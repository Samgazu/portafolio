import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../components/shared/Atoms/Button';
import { cleanUserAprove_Unaprove, setApproveUser } from '../../actions/userActions';

import './ApproveUnapproveFormModal.scss'; 
import { useForm } from '../../hooks/useForm';
export const ApproveUnapproveFormModal = (props) => {
    const dispatch = useDispatch();
    const rols = useSelector((state) => state.user.rols);
    const [rolSelected, setRolSelected] = useState(1);

    const approveUser = (item) => {
        dispatch(setApproveUser(item.id, rolSelected, formValues.sellerCode, formValues.atqCode, formValues.zoneSupervisorCode, formValues.distributorCode, formValues.bidderCode, rolSelected));
        dispatch(cleanUserAprove_Unaprove(props.users.filter(el => el.id !== item.id)));
        props.setUsers(props.users.filter(el => el.id !== item.id));
        props.updateInfo();
        props.toggle();
    }
    const rolsName = {
        'Sales': 'Vendedor',
        'Doctor': 'Médico',
        'Totvs': 'Integración',
        'Admin': 'Administrador',
        'ATQ': 'ATQ',
        'ZoneSupervisor': 'Supervisor de zona',
        'Distributor': 'Distribuidor',
        'Bidder': 'Licitador',
        'Director': 'Director',
        'Billing Department': 'Departamento de Facturación',
        'AdminATQ': 'Administrador ATQ',
        'Courier': 'Mensajero',
        'Warehouse': 'Almacen',
        'TSISystemManager': 'Administrador del Sistema',
        'COO':  'Gerente de operaciones',
        'QualityEnsurance': 'Gerente de calidad',
        'Maintenance': 'Mantenimiento',
        }
    const [ formValues, handleInputChange ] = useForm({
        sellerCode: '',
        atqCode: '',
        zoneSupervisorCode: '',
        distributorCode: '',
        bidderCode: '',
    });
    return (
            <div>
                <div className={"codes-inputs"}>
                    <div className={'modal-text-input'}>
                        <span className={'modal-text-input-title'}>Código de vendedor</span>
                        <input className={'modal-text-input-input'} type={"text"}
                        id={"sellerCode"}
                        name={"sellerCode"}
                        placeholder="Código"
                        value={formValues.sellerCode}
                        onChange={handleInputChange} />
                    </div>
                    <div className={'modal-text-input'}>
                        <span className={'modal-text-input-title'}>Código de atq</span>
                        <input className={'modal-text-input-input'} type={"text"}
                        id={"atqCode"}
                        name={"atqCode"}
                        placeholder="Código"
                        value={formValues.atqCode}
                        onChange={handleInputChange}/>
                    </div>
                    <div className={'modal-text-input'}>
                        <span className={'modal-text-input-title'}>Código supervisor</span>
                        <input className={'modal-text-input-input'} type={"text"}
                        id={"zoneSupervisorCode"}
                        name={"zoneSupervisorCode"}
                        placeholder="Código"
                        value={formValues.zoneSupervisorCode}
                        onChange={handleInputChange}/>
                    </div>
                    <div className={'modal-text-input'}>
                        <span className={'modal-text-input-title'}>Código distribuidor</span>
                        <input className={'modal-text-input-input'} type={"text"}
                        id={"distributorCode"}
                        name={"distributorCode"}
                        placeholder="Código"
                        autoComplete="off"
                        value={formValues.distributorCode}
                        onChange={handleInputChange}/>
                    </div>
                    <div className={'modal-text-input'}>
                        <span className={'modal-text-input-title'}>Código licitador</span>
                        <input className={'modal-text-input-input'} type={"text"}
                        id={"bidderCode"}
                        name={"bidderCode"}
                        placeholder="Código"
                        autoComplete="off"
                        value={formValues.bidderCode}
                        onChange={handleInputChange}/>
                    </div>
                    <div className={"modal-select"}>
                        <span className={'modal-text-select-title'}>Rol</span>
                        <select name="rol" className={"form-selects"}
                            defaultValue={1}
                            onChange={(e) => setRolSelected(e.target.value)}>
                                {
                                    rols && rols.map(item => (
                                        <option key={item.roleID} value={item.roleID}>{rolsName[item.roleDescription]}</option>
                                    ))
                                }
                        </select>
                    </div>
                </div>
                <div className={'approve_unapprove_button'}>
                    <Button color={"blue_medium"} title={"Aprobar"} onClick={() => { approveUser(props.bodyElement) }} />
                </div>
            </div>
    );
}

ApproveUnapproveFormModal.propTypes = {
    bodyElement: PropTypes.any,
    toggle: PropTypes.any,
    updateInfo: PropTypes.any,
};
  