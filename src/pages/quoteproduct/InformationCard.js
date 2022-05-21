import React, { useState } from "react";
import PropTypes from 'prop-types';
import { ItemsCardComponent } from "./ItemsCardComponent";
import { NameCardComponent } from "./NameCardComponent";

export const InformationCard = ({ name, infoItems }) => {
  const [infoCard, setInfoCard] = useState(false);
  const handleChangeInfoCard = () => {
    setInfoCard(!infoCard);
  };

  return (
    <>
      {!infoCard ? (
        <NameCardComponent name={name} handleChangeInfoCard={handleChangeInfoCard} />
      ) : (
        <ItemsCardComponent infoItems={infoItems} handleChangeInfoCard={handleChangeInfoCard} />
      )}
    </>
  );
};

InformationCard.propTypes = {
  name: PropTypes.any,
  infoItems: PropTypes.any,
};
