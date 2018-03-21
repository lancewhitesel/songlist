import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { Button, Paper } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import DefaultInput from './DefaultInput';
import DEFAULT_FN from '../../utils';

const styles = theme => ({
  paper: {
    padding: theme.spacing * 4,
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

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes: { paper, button, btnContainer } } = this.props;
    console.log('render login form...');

    return (
      <Formsy onValidSubmit={this.props.onSubmit}>
        <Paper elevation={1} className={paper}>
          <h3>Log in</h3>
          <DefaultInput
            onChange={(event) => { }}
            name="username"
            title="Username (admin)"
            required
          />

          <DefaultInput
            onChange={(event) => { }}
            type="password"
            name="password"
            title="Password (123456)"
            required
          />

          <div className={btnContainer}>
            <Button
              variant="raised"
              color="secondary"
              type="submit"
              className={button}
            >
              Log In
            </Button>
          </div>
        </Paper>
      </Formsy>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

LoginForm.defaultProps = {
  onSubmit: DEFAULT_FN,
};

export default withStyles(styles)(LoginForm);
