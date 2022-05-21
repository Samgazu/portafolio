import React from 'react';
import PropTypes from 'prop-types';
import './layouts/layout1/navbar/sass/styles.sass';
import { NavbarComponent } from './layouts/layout1/navbar/NavbarComponent';
import { FooterComponent } from './layouts/layout1/footer/FooterComponent';
export default function ClippedDrawer(props) {

  return (
    <div>
      <NavbarComponent />
      <main>
        {props.children}
        <FooterComponent />
      </main>
    </div>
  );
}

ClippedDrawer.propTypes = {
  children: PropTypes.any,
};
