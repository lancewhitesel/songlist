import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { Button, Paper } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import DefaultInput from './DefaultInput';
import { ClassesType } from '../../types';

const styles = theme => ({
  paper: {
    padding: 32,
  },
  btnContainer: {
    marginTop: 24,
  },
  button: {
    margin: '0 auto',
    display: 'block',
    width: 150,
  },
});

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes: { paper, button, btnContainer } } = this.props;

    return (
      <Formsy onValidSubmit={this.props.onSubmit}>
        <Paper elevation={1} className={paper}>
          <h3>Sign Up</h3>
          <DefaultInput
            onChange={(event) => { }}
            name="username"
            title="Username"
            required
          />

          <DefaultInput
            onChange={(event) => { }}
            name="firstName"
            title="Firstname"
            required
          />

          <DefaultInput
            onChange={(event) => { }}
            name="lastName"
            title="Lastname"
            required
          />

          <DefaultInput
            onChange={(event) => { }}
            name="email"
            title="Email"
            required
          />

          <DefaultInput
            onChange={(event) => { }}
            type="password"
            name="password"
            title="Password"
            required
          />

          <div className={btnContainer}>
            <Button
              variant="raised"
              color="secondary"
              type="submit"
              className={button}
            >
              Sign Up
            </Button>
          </div>
        </Paper>
      </Formsy>
    );
  }
}

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  classes: ClassesType.isRequired,
};

export default withStyles(styles)(SignupForm);
