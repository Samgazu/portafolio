import React from 'react'
import PropTypes from 'prop-types';
import { IoIosArrowUp} from "react-icons/io";
import './sass/styles.sass'

export const NameCardComponent = ({name, handleChangeInfoCard}) => {
    return (
        <>
            <div className="product-item-c-name animate__animated animate__fadeIn">
                <h4 className="product-item-name">{name}</h4>
            </div>
            <button className="product-item-c-img" onClick={handleChangeInfoCard}>
                <IoIosArrowUp className="product-item-img" />
            </button>
        </>
    )
}

NameCardComponent.propTypes = {
    name: PropTypes.any,
    handleChangeInfoCard: PropTypes.any,
};