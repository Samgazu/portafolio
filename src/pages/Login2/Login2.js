import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { withRouter } from "react-router-dom";
import './login.scss';
import logo from '../../assets/img/126PX/Logo_TSI_126px.png';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';

import { useForm } from '../../hooks/useForm';

const Login2 = (props) => {

    if (props.isAuthenticated) {
        props.history.push(`/${props.role}`);
    }

    const [formToShow, setFormToShow] = useState('login');

    const [formValues, handleInputChange] = useForm({
        mail: '',
        pass: '',
    });

    const onClickForgotPassword = () => {
        setFormToShow('login')
    }

    const logingStatus = useSelector(state => state.user.error);

    useEffect(() => {
        if (logingStatus) {
            handleInputChange({ target: { name: 'mail', value: '' } });
            handleInputChange({ target: { name: 'pass', value: '' } });
        }
    }, [logingStatus]);


    const renderLoginform = () => {
        return (
            <form className={"box-form"}>
                <img src={logo} alt="Logo TraumaService" className='side-container-logo' />
                {
                    logingStatus &&
                    <div style={{ paddingTop: '40px', paddingBottom: '22px' }}>
                        <span className={"recover-button"}>Tu email o contraseña son incorrectas</span>
                    </div>
                }
                <div className="blue-half-line" />
                <div className={"row-container"}>
                    <MailIcon className={"input-icon"} />
                    <input
                        className={"form-inputs"}
                        id={"mail"}
                        name={"mail"}
                        type="text"
                        placeholder="Correo"
                        autoComplete="off"
                        value={formValues.mail}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="blue-half-line" />
                <div className="row-container">
                    <LockIcon className={"input-icon"} />
                    <input
                        className={"form-inputs"}
                        id={"pass"}
                        name={"pass"}
                        type="password"
                        placeholder="Contraseña"
                        autoComplete="off"
                        value={formValues.pass}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="blue-half-line" />
                <a
                    className={'recover-content'}
                    onClick={() => setFormToShow('forgotPassword')}
                >
                    <span className={"recover-button"}>¿Olvidaste tu contraseña?</span>
                </a>
                <input
                    className={"login-button"}
                    type="button"
                    value="CONTINUAR"
                />
            </form>
        );
    };

    const renderForgotPassword = () => {
        return (
            <form className={"box-form"}>
                <img src={logo} alt="Logo TraumaService" className='side-container-logo' />
                <div className="blue-half-line" />
                <div className={"row-container"}>
                    <MailIcon className={"input-icon"} />
                    <input
                        className={"form-inputs"}
                        id={"mail"}
                        name={"mail"}
                        type="text"
                        placeholder="Correo"
                        autoComplete="off"
                        value={formValues.mail}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="blue-half-line" />
                <a
                    style={{ marginBottom: '60px' }}
                    onClick={() => setFormToShow('login')}
                >
                    <span className={"recover-button"}>¿Ya tienes cuenta?</span>
                </a>
                <input
                    className={"login-button"}
                    type="button"
                    value="CONTINUAR"
                    onClick={onClickForgotPassword}
                />
            </form>
        );
    };

    return (
        <div className="back-container2">
            <div className="side-container">
                {
                    formToShow === 'login' && renderLoginform()
                }
                {
                    formToShow === 'forgotPassword' && renderForgotPassword()
                }
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.user.isAuthenticated,
        role: state.user.role.lenght > 0 ? state.user.role.lenght : 'test'
    };
}

Login2.propTypes = {
    history: PropTypes.any,
    isAuthenticated: PropTypes.any,
    role: PropTypes.any,
    dispatch: PropTypes.any,
};


export default withRouter(connect(mapStateToProps)(Login2));

