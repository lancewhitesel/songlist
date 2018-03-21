import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Snackbar } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import RegisterForm from '../components/form/RegisterForm';
import falcorModel from '../model/falcorModel';

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
    this.register = this.register.bind(this);
    this.state = {
      error: null,
    };
  }

  async register(newUserModel) {
    console.info('newUserModel ', newUserModel);

    await falcorModel
      .call(['register'], [newUserModel])
      .then(result => result);

    const newUserId = await falcorModel.getValue(['register', 'newUserId']);

    if (newUserId === 'INVALID') {
      const errorRes = await falcorModel.getValue('register.error');

      this.setState({ error: errorRes });
    } else if (newUserId) {
      this.props.history.push('/login');
    }
  }

  render() {
    const { classes: { registerContainer } } = this.props;

    return (
      <div>
        <h1>Register</h1>
        <div className={registerContainer}>
          <RegisterForm
            onSubmit={this.register}
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
};

const mapStateToProps = state => ({
  ...state
});
// const mapDispatchToProps = (dispatch) => {};

export default withStyles(styles)(connect(mapStateToProps)(RegisterView));
