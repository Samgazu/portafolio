import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import CustomModal from '../../components/shared/Modal';
import { dataVersionInfo } from './dataVersionInfo';

export const LoginVersionModal = ({isOpen, toggle}) => {
    const modalBody = () => {
        return (
            <div className='container-LoginVersionModal'>
                <ul className="container-LoginVersionModal-elements" >
                    {
                        dataVersionInfo&&
                        dataVersionInfo.map(item => (
                            <div key={item.version} className="container-LoginVersionModal-text">
                                <h3 className="LoginVersionModal-title">
                                        {item.version}
                                </h3>
                                    {
                                        item.changes.map(el => (
                                            <li key={el.id} className="container-LoginVersionModal-list-items">
                                                {el.msg}
                                            </li>
                                        ))
                                    }
                            </div>
                        ))
                    }

                </ul>

                <button className="LoginVersionModal-button" onClick={() => toggle()}>
                    OK
                </button>
            </div>
        );
    };

    return (
        <CustomModal
                isOpen={isOpen}
                toggle={toggle}
                title="Versión"
                body={modalBody()}
        />
    );
}

LoginVersionModal.propTypes = {
    isOpen: PropTypes.any,
    toggle: PropTypes.any,
};
  