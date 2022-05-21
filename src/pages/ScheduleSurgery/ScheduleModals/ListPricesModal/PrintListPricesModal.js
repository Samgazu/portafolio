import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../../../hooks/useForm';
import './sass/printListPricesModalStyles.scss';

export const PrintListPricesModal = ({setWithList}) => {

   
    const [formValues , handleInputChange ] = useForm({

        isWithPricesList: 'SIN'

    });

    const {isWithPricesList} = formValues;

    useEffect(() => {
        isWithPricesList === 'SIN'&&
            setWithList({ isWithPricesList: false, msg: 'No imprimir lista'});
        isWithPricesList === 'CON'&&
            setWithList({isWithPricesList: true, msg: 'Imprimir lista'});
    }, [isWithPricesList])

    return (
        <section className="container_printListPricesModal">

            <div className="printListPricesModal_container_title">
                <h3 className="printListPricesModal_title"> Imprimir lista de precios </h3>
            </div>
            <form action="" className="printListPricesModal_container_form">
            <div>
                <span className="printListPricesModal_title_element"> Imprimir lista </span>
                <input  type="radio"
                        name="isWithPricesList"
                        value={ 'CON' }
                        checked={isWithPricesList && isWithPricesList === 'CON' }
                        onChange={handleInputChange}
                />
            </div>
            <div>
                <span className="printListPricesModal_title_element"> No imprimir lista </span>
                <input  type="radio"
                        name="isWithPricesList"
                        value={'SIN'}
                        checked={isWithPricesList && isWithPricesList === 'SIN' }
                        onChange={handleInputChange}
                />
            </div>
            </form>

        </section>
    )
}

PrintListPricesModal.propTypes = {
    setWithList: PropTypes.any,
}