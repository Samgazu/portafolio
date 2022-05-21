import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import PropTypes from "prop-types";
import React from "react";
import AppBar from './components/AppBar';
import { routes } from './Routers';

import Login from './pages/LogIn/Login';

import ResetPassword from "./pages/ResetPassword/ResetPassword";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  render() {
    const CustomRoute = ({ exact, path = null, Component, layout = null, index }) => {
      return (
        <Route key={index} exact={exact} path={`/${path}`} render={(routeProps) => {
          if (layout) {
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
          <Route exact path={`/password/:token`} component={ResetPassword} />
          {
            routes(
              {
                isSideBarLinks: false
              }).map((r, index) => CustomRoute({ ...r, index }))
          }
          <Redirect to={'/'} />
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
