import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../actions/leoAction';
import Button from '@material-ui/core/Button';
export class Leo extends React.Component {
  
  render() {
    return (
        <div>
            <h1>Holas!!!</h1>
            <br/>
            <h2>4</h2>
            <br />
            <button onClick={() => this.props.dispatch(actions.getSaludo())}>Hey!!</button>
            <Button variant="contained" color="primary">
      Hello World
    </Button>
        </div>
    );
  }
}

Leo.propTypes = {
  dispatch: PropTypes.any,
 // fuelSavings: PropTypes.object.isRequired
};

export default connect(
  //mapDispatchToProps
)(Leo);
