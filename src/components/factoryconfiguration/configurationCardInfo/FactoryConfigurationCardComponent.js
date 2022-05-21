import React from 'react';
import './sass/styles.sass';
import PropTypes from 'prop-types';

export const FactoryConfigurationCardComponent = (props) => {

    return (
        <div className="container-factoryConfigCard">
            <div className="factoryConfigCard-container-structure">
                <div className="factoryConfigCard-container-img">
                {
                    props.system.product &&
                        <img className='factoryConfigCard-img' src={props.system.product.productImage} alt=""/>
                }
                </div>
                <section className="factoryConfigCard-container-info">
                    {
                        props.system.product &&
                            <div className="factoryConfigCard-info-container-sistem">
                                <h3 className='factoryConfigCard-info-sistem-title'>
                                    Sistema:
                                </h3> 
                                <span className='factoryConfigCard-info-sistem-info'>
                                    {props.system.product.productDescription}
                                </span>
                            </div>

                    }
                    {
                        props.configuration.configuration&&
                        props.configuration.configuration.name&&
                            <div className="factoryConfigCard-info-container-config">
                                <h3 className='factoryConfigCard-info-config-title'>
                                    Configuración:
                                </h3> 
                                <span className='factoryConfigCard-info-config-info'>
                                    {props.configuration.configuration.name}
                                </span>
                            </div>
                    }
                </section>
            </div>
        </div>
    )
}

FactoryConfigurationCardComponent.propTypes = {
    system:        PropTypes.any,
    configuration: PropTypes.any,
};
