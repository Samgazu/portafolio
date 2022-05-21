import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

export const FormsInputs = ({className = 'form-inputs', placeholder, onChange, value, productItem, name}) => {

    const handleChange = (value) => {
        if( typeof onChange  === 'function' ){
            onChange(value, productItem);
            // console.log(value)
            // console.log(productItem)
        }
    }
    // console.log(value)
    return (
        <NumberFormat 
            thousandSeparator={true} 
            prefix={'$'}
            name={name}
            placeholder={placeholder}
            className={className}
            inputmode="numeric"
            decimalScale={2}
            value={value && value.productPrice && value.productPrice}
            allowNegative={false}
            fixedDecimalScale={true}
            onValueChange={handleChange} 
            />  
    )
}
FormsInputs.propTypes = {
    className: PropTypes.any,
    id: PropTypes.any,
    placeholder: PropTypes.any,
    onChange: PropTypes.any,
    formattedValue: PropTypes.any,
    value: PropTypes.any,
    productItem: PropTypes.any,
    name: PropTypes.any,
};
