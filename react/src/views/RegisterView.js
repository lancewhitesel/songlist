import React from 'react';
import { connect } from 'react-redux';
import { Snackbar } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import RegisterForm from '../components/form/RegisterForm';
import register from '../actions/register';

const styles = theme => ({
  registerContainer: {
    maxWidth: 450,
    margin: '0 auto',
  },
  button: {
    margin: '0 auto',
    display: 'block',
    width: 150,
  },
});

class RegisterView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.registration) {
      if (nextProps.registration.registrationError) {
        this.setState({ error: nextProps.registration.registrationError });
      } else if (nextProps.registration.registrationSuccess) {
        this.props.history.push('/login');
        this.props.register();
      }
    }
  }

  render() {
    const { classes: { registerContainer } } = this.props;

    return (
      <div>
        <div className={registerContainer}>
          <RegisterForm
            onSubmit={this.props.register}
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

RegisterView.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  registration: PropTypes.object,
  register: PropTypes.func.isRequired,
};

RegisterView.defaultProps = {
  registration: null,
};

const mapStateToProps = ({ registration }) => ({
  registration,
});

export default withStyles(styles)(connect(mapStateToProps, { register })(RegisterView));
