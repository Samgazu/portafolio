import React, { useEffect, useState } from 'react';
import './sass/styles.scss';
import { useDispatch } from 'react-redux';
import { cleanStateUserAprove, cleanStateUserUnapprove, resetPassClean, userSignupClean } from '../../../actions/userActions';
import CheckCircleOutlineRounded from '@material-ui/icons/CheckCircleOutlineRounded';
import HighlightOffRounded from '@material-ui/icons/HighlightOffRounded';
import ErrorOutlineRounded from '@material-ui/icons/ErrorOutlineRounded';
import CloseRounded from '@material-ui/icons/CloseRounded';
import { useHistory } from 'react-router';

// eslint-disable-next-line react/prop-types
const AlertMessage = ({typeMessage = 'OK', textInfo, isActiveAlert=true, typeUserAlert=null, redirecName=null, setFormToShow}) => {

    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(isActiveAlert);
    const history = useHistory();
    useEffect(() => {
        if(typeUserAlert && typeUserAlert  === 'AproveUser' && !isActive){
            return dispatch(cleanStateUserAprove());  
        } 
        if(typeUserAlert && typeUserAlert  === 'UnapproveUser' && !isActive){
            return dispatch(cleanStateUserUnapprove());
        }
        if(typeUserAlert && typeUserAlert  === 'ResetPASS' && !isActive){
            return dispatch(resetPassClean());
        }
        if(typeUserAlert && typeUserAlert  === 'RegisterUser' && !isActive){
            return dispatch(userSignupClean());
        }
    }, [typeUserAlert])

    useEffect(() => {
        !isActive && (
            dispatch(cleanStateUserAprove()),
            dispatch(cleanStateUserUnapprove()),
            dispatch(resetPassClean()),
            dispatch(userSignupClean())
        )
    }, [])

    const handleClosetAlert = () => {
        setIsActive(false);
        if(typeUserAlert && typeUserAlert  === 'AproveUser'){
            return dispatch(cleanStateUserAprove());  
        } 
        if(typeUserAlert && typeUserAlert  === 'UnapproveUser'){
            return dispatch(cleanStateUserUnapprove());
        }
        if(typeUserAlert  === 'ResetPASS' && redirecName){
            return history.replace(`${redirecName}`);
        }
        if(typeUserAlert  === 'RegisterUser' && redirecName){
            return history.replace(`${redirecName}`);
        }
        if(typeUserAlert  === 'ResetPASS' && redirecName && setFormToShow){
            return setFormToShow('login');
        }
    }

    useEffect(() => {
        if( isActive ){
            setTimeout( () => {
                setIsActive(false);
                if(typeUserAlert && typeUserAlert  === 'AproveUser'){
                    return dispatch(cleanStateUserAprove());  
                } 
                if(typeUserAlert && typeUserAlert  === 'UnapproveUser'){
                    return dispatch(cleanStateUserUnapprove());
                }
                if(typeUserAlert  === 'ResetPASS' && redirecName && !setFormToShow){
                    return history.replace(`${redirecName}`);
                }
                if(typeUserAlert  === 'ResetPASS' && redirecName && setFormToShow){
                    return (
                        setFormToShow('login'),
                        dispatch(resetPassClean())
                    )
                }
                if(typeUserAlert  === 'RegisterUser' && redirecName){
                    return history.replace(`${redirecName}`);
                }
                if(typeUserAlert && typeUserAlert  === 'AproveUser'){
                    return dispatch(cleanStateUserAprove());  
                } 
            }, 3000)
        }

    }, [isActive])

    return (
        <>
            {
                isActive &&
                <section className={`alert-message-container alert-message-container-${typeMessage}`}>
                    <section className="alert-message-subContainer">
                        <div className="alert-message-img-type">
                        {
                            typeMessage === 'OK' &&
                                <CheckCircleOutlineRounded  className="alert-message-img-type-img"/> 
                        }
                        {
                            typeMessage === 'ERROR' &&
                                <HighlightOffRounded  className="alert-message-img-type-img"/> 
                        }
                        {
                           typeMessage === 'WARNING' && 
                                <ErrorOutlineRounded  className="alert-message-img-type-img"/>
                        }
                            
                        </div>
                        <div className="alert-message-Text">{textInfo}</div>
                        <button className="alert-message-close" onClick={handleClosetAlert}>
                            <CloseRounded className="alert-message-close-img" />
                        </button>
                    </section>
                </section>
            }
        </>
    )
}

AlertMessage.propTypes = {

}

export default AlertMessage
