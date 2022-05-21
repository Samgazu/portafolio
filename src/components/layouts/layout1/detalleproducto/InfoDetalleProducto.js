import React from "react";
import PropTypes from 'prop-types';
import './sass/styles.sass';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";


export const InfoDetalleProducto = ( { product, deteleProductHandler }) => {


  const onClickDeteleProduct = () => {
    if(deteleProductHandler) {
      deteleProductHandler(product);
    }
  };

  const [{infoItems, name}] = product.configuration;

  return (
    
    <div className="detalleproducto-c-info">
      <div className="detalleproducto-info-configuration">
        <div className="info-configuration-c">
          <h4 className="info-configuration-title">Configuración:</h4>
          <p className="info-configuration-type">{name}</p>
        </div>
        <button className="ico-delete info-configuration-delete"
                onClick={onClickDeteleProduct}>
          <RiDeleteBin6Line />
        </button>
      </div>

      {
        infoItems && (
            infoItems.map( item => (
              <div key={item.uid} className="detalleproducto-info-tipo">
                  <div className="info-configuration-c">
                    <h4 className="info-configuration-title">{item.name}</h4>
                    <p className="detalleproducto-info-tipo-name">{item.desc}</p>
                  </div>
                  <div className="info-configuration-c-buttons">
                    <NavLink className="info-configuration-add"
                            to={`/cotizaciones/${product.id}`}
                    >
                      <MdAdd />
                    </NavLink>
                    <button className="ico-delete info-configuration-delete">
                      <RiDeleteBin6Line />
                    </button>
                  </div>
              </div>

            ))
        )
      }
      
    </div>
  );
};

InfoDetalleProducto.propTypes = {
  product: PropTypes.any,
  deteleProductHandler: PropTypes.any,
};
