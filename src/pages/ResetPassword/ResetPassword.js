import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logoFromLogin.png';
import loginImage from '../../assets/img/256PX/Icono_Login_256px.png';
import passIcon from '../../assets/img/126PX/Icono_Contrasenia_126px.png';
import { useDispatch, useSelector } from 'react-redux';
import AlertMessage from '../../components/shared/AlertMessage/AlertMessage';
import { resetPass } from '../../actions/userActions';
import resetPassWordImage from '../../assets/img/256PX/Icono_RecuperarContrasena_256px.png';

const ResetPassword = ({}) => {
    const URLactual = window.location;
    const dispatch  = useDispatch();
    const token     = URLactual.search.split('=')[1];
    const [newPassWord, setNewPassWord] = useState('');
    const [repeatPassWord, setRepeatPassWord] = useState('');
    const resetPassOK = useSelector(state => state.user.resetPass)

    const handleChangePassword = () => {
        
        if( newPassWord && newPassWord.length > 0 
            && repeatPassWord && repeatPassWord.length > 0
            && newPassWord === repeatPassWord){
                dispatch( resetPass( newPassWord, token ) );
                
            }
    }

    const renderRecoveryPass = () => 
    (
        <form className={"box-form"}>
            <img src={resetPassWordImage} alt="Login image" className="side-container-logo"/>
            <div className="white-half-line"/>
            <div className={"row-container"}>
                <img src={passIcon} className={"form-images"} alt="Mail image"/>
                <input 
                    className={"form-inputs"} 
                    id={"newPass"}
                    name={"newPass"}
                    type="password" 
                    placeholder="Nueva Contraseña" 
                    autoComplete="off"
                    value={newPassWord}
                    onChange={({target})=> setNewPassWord(target.value)}
                />
            </div>
            <div className="white-half-line"/>
            <div className={"row-container"}>
                <img src={passIcon} className={"form-images"} alt="Mail image"/>
                <input 
                    className={"form-inputs"} 
                    id={"repeatPass"}
                    name={"repeatPass"}
                    type="password" 
                    placeholder="Confirmar contraseña" 
                    autoComplete="off"
                    value={repeatPassWord}
                    onChange={({target})=> setRepeatPassWord(target.value)}
                />
            </div>
            <div className="white-half-line"/>
            <input 
                className={"login-button"} 
                type="button" 
                value="CONTINUAR"
                // Cambiar por funcion para cambiar pass
                onClick={handleChangePassword}
            />
        </form>
    );


    return (
        <div className="back-container">
            {
                newPassWord && newPassWord.length > 0 
                && repeatPassWord && repeatPassWord.length > 0
                && newPassWord !== repeatPassWord 
                &&  <AlertMessage typeMessage={'ERROR'} textInfo={'La contraseña de verificación no coincide'} isActiveAlert={true}/>
            }
            {
                resetPassOK === 200 &&
                    <AlertMessage   typeMessage={'OK'} 
                                    textInfo={'Su contraseña a sido restablecida'} 
                                    isActiveAlert={true} 
                                    redirecName={'/'} 
                                    typeUserAlert={'ResetPASS'}                
                    />

            }
            <div className="side-container">
                <img src={logo} alt="Logo TraumaService" className='side-container-logo'/>
            </div>
            <div className="vertical-line">
                <div className="white-line"/>
            </div>
            <div className="side-container">
              {
                renderRecoveryPass()
              }
            </div>
        </div>
    );
}

ResetPassword.propTypes = {

}

export default ResetPassword
