import React from 'react';
import PropTypes from 'prop-types';
import {IoIosArrowDown } from "react-icons/io";
import './sass/styles.sass';

export const ItemsCardComponent = ({infoItems ,handleChangeInfoCard }) => {
    return (
        <>
          <div className="c-product-item-c-infoitem animate__animated animate__fadeIn">
            {infoItems
              ? infoItems.map((iteminfo) => {
                  return (
                    <div key={iteminfo.uid} className="product-item-c-infoitem">
                      <h4 className="product-infoitem-name">{iteminfo.name}</h4>
                      <p className="product-infoitem-desc">{iteminfo.desc}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <button className="product-item-c-img" onClick={handleChangeInfoCard}>
            <IoIosArrowDown className="product-item-img" />
          </button>
        </>
    )
}

ItemsCardComponent.propTypes = {
  infoItems: PropTypes.any,
  handleChangeInfoCard: PropTypes.any,
};
