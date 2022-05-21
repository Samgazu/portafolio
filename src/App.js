/* eslint-disable import/no-named-as-default */
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

// import NotFoundPage from "./components/NotFoundPage";
import PropTypes from "prop-types";
import React, { useState } from "react";
import AppBar from './components/AppBar';
import { routes } from './Routers';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

import Login from './pages/LogIn/Login';

import ResetPassword from "./pages/ResetPassword/ResetPassword";
import { Signup } from "./pages/SignUp/SignUp";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





class App extends React.Component {



  render() {


    const CustomRoute = ({ exact, path = null, Component, layout = null, index, authenticatedAccess = false }) => {


      return (



        <Route key={index} exact={exact} path={`/${path}`} render={(routeProps) => {

          if (authenticatedAccess && !this.props.isAuthenticated) {
            return (
              <Redirect
                to={{
                  pathname: '/',
                  state: { from: routeProps.location },
                }}
              />
            );
          }
          else if (layout) {
            return (
              <AppBar>
                <Component {...routeProps} />
              </AppBar>
            );
          } else {
            return (
              <Route key={index} exact={exact} path={`/${path}`} component={Component} />
            );
          }
        }} />
      );
    }


    return (

      <div>

        <ToastContainer />

         

        
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path={`/password/:token`} component={ResetPassword} />
          {
            this.props.roleUserPermissions.identity &&
            routes(
              {
                permissions: this.props.roleUserPermissions.identity && this.props.roleUserPermissions.identity.permissions,
                role: this.props.roleUser.identity && this.props.roleUser.identity.roleID,
                isSideBarLinks: false
              }).map((r, index) => CustomRoute({ ...r, index }))
          }
          <Redirect to={'/'} />
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </div>


    );



  }



}

App.propTypes = {
  isAuthenticated: PropTypes.any,
  roleUser: PropTypes.any,
  roleUserPermissions: PropTypes.any,

};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.isAuthenticated,
    roleUser: state.user.user,
    roleUserPermissions: state.user.user,
  };
}

export default withRouter(connect(mapStateToProps)(App));

//export default hot(module)(App); //

