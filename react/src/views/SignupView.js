import React from 'react';
import { connect } from 'react-redux';
import { Snackbar } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import SignupForm from '../components/form/SignupForm';
import signupAction from '../actions/signup';
import { ClassesType, HistoryType, SignupType } from '../types';

const styles = theme => ({
  signupContainer: {
    maxWidth: 450,
    margin: '0 auto',
  },
  button: {
    margin: '0 auto',
    display: 'block',
    width: 150,
  },
});

class SignupView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signup) {
      if (nextProps.signup.signupError) {
        this.setState({ error: nextProps.signup.signupError });
      } else if (nextProps.signup.signupSuccess) {
        this.props.history.push('/login');
        this.props.signupAction();
      }
    }
  }

  render() {
    const { classes: { signupContainer } } = this.props;

    return (
      <div>
        <div className={signupContainer}>
          <SignupForm
            onSubmit={this.props.signupAction}
          />
        </div>
        <Snackbar
          autoHideDuration={4000}
          open={!!this.state.error}
          message={this.state.error || ''}
          onClose={() => null}
        />
      </div>
    );
  }
}

SignupView.propTypes = {
  classes: ClassesType.isRequired,
  history: HistoryType.isRequired,
  signup: SignupType,
  signupAction: PropTypes.func.isRequired,
};

SignupView.defaultProps = {
  signup: null,
};

const mapStateToProps = ({ signup }) => ({
  signup,
});

export default withStyles(styles)(connect(mapStateToProps, { signupAction })(SignupView));
