import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter, NavLink } from "react-router-dom";
import { userSignup } from '../../actions/userActions';
import '../../styles/styles.scss';
import './signup.scss';
import logo from '../../assets/logoFromLogin.png';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import passIcon from '../../assets/img/126PX/Icono_Contrasenia_126px.png';
import registerImage from '../../assets/img/256PX/Icono_NuevoRegistro_256px.png';
import mailIcon from '../../assets/img/126PX/Icono_Correo_126px.png';

import { useForm } from '../../hooks/useForm';
import AlertMessage from '../../components/shared/AlertMessage/AlertMessage';

export const Signup = (props) => {
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        firstname: '',
        secondname: '',
        lastname: '',
        lastname2: '',
        phone: '',
        mail: '',
        pass: '',
        rol: 4,
    });

    const onClickLogin = () => {
        dispatch(userSignup(formValues.firstname, formValues.secondname, formValues.lastname, formValues.lastname2, formValues.phone, formValues.mail, formValues.pass, formValues.rol));
    }

    const signupStatus = useSelector(state => state.user.error);
    const aceptado = useSelector(state => state.user.isRegistered)

    useEffect(() => {
        if (signupStatus) {
            handleInputChange({ target: { name: 'firstname', value: '' } });
            handleInputChange({ target: { name: 'secondname', value: '' } });
            handleInputChange({ target: { name: 'lastname', value: '' } });
            handleInputChange({ target: { name: 'lastname2', value: '' } });
            handleInputChange({ target: { name: 'phone', value: '' } });
            handleInputChange({ target: { name: 'mail', value: '' } });
            handleInputChange({ target: { name: 'pass', value: '' } });
            handleInputChange({ target: { name: 'rol', value: 4 } });
        }
    }, [signupStatus]);


    const renderSignupform = () => {
        return (
            <form className={"box-form box-form-signup"}>
                <img src={registerImage} alt="Login image" className="side-container-logo" />
                {/* {
                        props && props.isRegistered &&
                        <div style={{paddingTop: '20px', paddingBottom: '10px'}}>
                            <span className={"recover-button"}>Se ha registrado con éxito</span>
                        </div>
                    } */}
                {
                    signupStatus && !props.isRegistered &&
                    <div style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                        <span className={"recover-button"}>Los datos son incorrectos</span>
                    </div>
                }
                <div className={"two_columns_input"}>
                    <div className="white-half-line" />
                    <div className="white-half-line" />
                </div>
                <div className={"two_columns_input"}>
                    <div className={"row-container"}>
                        <PersonOutlineIcon className={"icon_input"} />
                        <input
                            className={"form-inputs"}
                            id={"firstname"}
                            name={"firstname"}
                            type="text"
                            placeholder="Nombre"
                            autoComplete="off"
                            value={formValues.firstname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row-container">
                        <PersonOutlineIcon className={"icon_input"} />
                        <input
                            className={"form-inputs"}
                            id={"secondname"}
                            name={"secondname"}
                            type="text"
                            placeholder="Segundo nombre"
                            autoComplete="off"
                            value={formValues.secondname}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={"two_columns_input"}>
                    <div className="white-half-line" />
                    <div className="white-half-line" />
                </div>
                <div className={"two_columns_input"}>
                    <div className={"row-container"}>
                        <PersonOutlineIcon className={"icon_input"} />
                        <input
                            className={"form-inputs"}
                            id={"lastname"}
                            name={"lastname"}
                            type="text"
                            placeholder="Apellido paterno"
                            autoComplete="off"
                            value={formValues.lastname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row-container">
                        <PersonOutlineIcon className={"icon_input"} />
                        <input
                            className={"form-inputs"}
                            id={"lastname2"}
                            name={"lastname2"}
                            type="text"
                            placeholder="Apellido materno"
                            autoComplete="off"
                            value={formValues.lastname2}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={"two_columns_input"}>
                    <div className="white-half-line" />
                    <div className="white-half-line" />
                </div>
                <div className="row-container">
                    <PhoneIcon className={"icon_input smaller_icon"} />
                    <input
                        className={"form-inputs"}
                        id={"phone"}
                        name={"phone"}
                        type="text"
                        placeholder="Teléfono"
                        autoComplete="off"
                        value={formValues.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="white-half-line" />
                <div className="row-container">
                    <img src={mailIcon} className={"form-images"} alt="Password image" />
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
                <div className="white-half-line" />
                <div className="row-container">
                    <img src={passIcon} className={"form-images"} alt="Password image" />
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

                <div className="white-half-line" />
                <NavLink
                    className=""
                    to={'/'}
                >
                    <span className={"recover-button"}>¿Ya tienes cuenta?</span>
                </NavLink>
                <input
                    className={"login-button"}
                    type="button"
                    value="CONTINUAR"
                    onClick={onClickLogin}
                />
            </form>
        );
    };

    return (
        <div className="back-container">
            {
                signupStatus && aceptado === false &&
                <AlertMessage typeMessage={'WARNING'} textInfo={'Los datos son incorrectos'} isActiveAlert={true} />
            }
            {
                aceptado === true &&
                <AlertMessage typeMessage={'OK'}
                    textInfo={'Usuario Registrado'}
                    isActiveAlert={true}
                    redirecName={'/'}
                    typeUserAlert={'RegisterUser'}
                />
            }
            <div className="side-container">
                <img src={logo} alt="Logo TraumaService" className='side-container-logo' />
            </div>
            <div className="vertical-line">
                <div className="white-line" />
            </div>
            <div className="side-container">
                {
                    renderSignupform()
                }
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        isRegistered: state.user.isRegistered,
        role: state.user.role.lenght > 0 ? state.user.role.lenght : 'test'
    };
}

Signup.propTypes = {
    history: PropTypes.any,
    isRegistered: PropTypes.any,
    role: PropTypes.any,
    dispatch: PropTypes.any,
};


export default withRouter(connect(mapStateToProps)(Signup));

