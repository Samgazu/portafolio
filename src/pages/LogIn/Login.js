import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter } from "react-router-dom";
import { recoveryPass, userSignupClean } from '../../actions/userActions';
import '../../styles/styles.scss';
import './login.scss';
import logo from '../../assets/logoFromLogin.png';
import loginImage from '../../assets/img/256PX/Icono_Login_256px.png';
import newLoginImage from '../../assets/img/256PX/Icono_RecuperarContrasena_256px.png';
import mailIcon from '../../assets/img/126PX/Icono_Correo_126px.png';

import { useForm } from '../../hooks/useForm';
import AlertMessage from '../../components/shared/AlertMessage/AlertMessage';
import { LoginVersionModal } from './LoginVersionModal';

const Login = (props) =>{
        const dispatch = useDispatch();
        const environment = useSelector(state => state.user.request.body.Environment);
        const recoveryPassStatus = useSelector(state => state.user.recoveryPass);
        const [openModal, setOpenModal] = useState(null);
        
        if(props.isAuthenticated){
            props.history.push(`/${props.role}`);
        }

        const [formToShow, setFormToShow] = useState('login');

        const [ formValues, handleInputChange ] = useForm({
            mail: '',
            pass: '',
        });

        const toggleModal = () => {
            setOpenModal(null);
        }

        const onClickLogin = (e) => {
            e.preventDefault();
            props.history.replace(`Inicio`);
        }

        const handleSignUp = () => {
            dispatch(userSignupClean());
            props.history.replace(`/signup`);

        }

        const onClickForgotPassword = () => {
            if( formValues.mail.trim().length >= 1 && environment && environment.EnvironmentIndex === 0 
                || formValues.mail.trim().length >= 1 && environment && environment.EnvironmentIndex === 1 ){
                dispatch(recoveryPass(formValues.mail, environment));
            }
        }

        const logingStatus = useSelector(state => state.user.error);

        const renderLoginform = () => {
            return (
                <form className={"box-form"} onSubmit={onClickLogin}>
                    <img src={loginImage} alt="Login image" className="side-container-logo"/>
                    {
                        logingStatus && logingStatus === 401 &&
                        <div style={{paddingTop: '40px', paddingBottom: '22px'}}>
                            <span className={"recover-button"}>Tu email o contraseña son incorrectas</span>
                        </div>
                    }
                    <div className="white-half-line"/>
                    <a 
                        style={{marginBottom: '8px', marginTop: '8px', cursor: 'pointer'}}
                        onClick={() => setFormToShow('forgotPassword')}
                    >
                        <span className={"recover-button"}>¿Olvidaste tu contraseña?</span>
                    </a>
                    <button 
                        className={"login-button"} 
                        type='submit'
                    >
                        CONTINUAR
                    </button>
                    <span className="signup-button"
                        onClick={handleSignUp}
                    >
                    <span className="quote-item-button-name"> Crear cuenta </span>
                    </span>
                    <a 
                        style={{marginBottom: '8px', marginTop: '2vw', cursor: 'pointer'}}
                        onClick = {()=> setOpenModal("errorModal")}
                    >
                        <span className={"version-button"}>versión. 1.0.15</span>
                    </a>
                    {
                        openModal === "errorModal" &&
                        <LoginVersionModal
                            isOpen
                            toggle={toggleModal}
                        />
                    }
                </form>
                
            );
        };

        const renderForgotPassword = () => {
            return (
                <form className={"box-form"}>
                    <img src={newLoginImage} alt="Login image" className="side-container-logo"/>
                    <div className="white-half-line"/>
                    <div className={"row-container"}>
                        <img src={mailIcon} className={"form-images"} alt="Mail image"/>
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
                    <div className="white-half-line"/>
                    <a 
                        style={{marginBottom: '.5vw', cursor:'pointer'}}
                        onClick={() => setFormToShow('login')}
                    >
                        <span className={"recover-button"}>¿Ya tienes cuenta?</span>
                    </a>

                      <span className={"recover-button"} 
                            onClick={handleSignUp}
                            style={{marginBottom: '.5vw', cursor:'pointer'}}
                      >Registrate</span>

                    {
                        recoveryPassStatus === 200 &&
                            <AlertMessage   typeMessage={'OK'} 
                                            textInfo={'Se a enviado un mensaje al correo solicitado'} 
                                            isActiveAlert={true} 
                                            redirecName={'/'} 
                                            typeUserAlert={'ResetPASS'}  
                                            setFormToShow={setFormToShow}              
                            />
                    }
                      
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
            <div className="back-container">
                <div className="side-container">
                    <img src={logo} alt="Logo TraumaService" className='side-container-logo'/>
                </div>
                <div className="vertical-line">
                    <div className="white-line"/>
                </div>
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

function mapStateToProps (state) {
    return {
        isAuthenticated: state.user.isAuthenticated,
        role: state.user.user.identity && 'Inicio'
    };
}

Login.propTypes = {
    history: PropTypes.any,
    isAuthenticated: PropTypes.any,
    role: PropTypes.any,
    dispatch: PropTypes.any,
};

export default withRouter(connect(mapStateToProps)(Login));
