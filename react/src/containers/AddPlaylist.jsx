import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

import createPlaylist from '../actions/createPlaylist';
import { ClassesType, HistoryType } from '../types';

const styles = t => ({
  inputContainer: {
    marginBottom: 25,
  },
  button: {
    marginRight: 15,
  },
});

const isError = field => !!(field.meta.touched && field.meta.error);

const renderField = field => (
  <FormGroup>
    <FormControl error={isError(field)}>
      <InputLabel>{field.label}</InputLabel>
      <Input
        value=""
        type="text"
        {...field.input}
      />
      <FormHelperText>{isError(field) && field.meta.error}</FormHelperText>
    </FormControl>
  </FormGroup>
);

class AddPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit(values) {
    this.props.createPlaylist(values, () => {
      this.props.history.push('/playlists');
    });
  }

  render() {
    const { handleSubmit, classes } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className={classes.inputContainer}>
          <Field
            name="title"
            label="Enter Playlist Title"
            component={renderField}
          />
        </div>
        <div className={classes.inputContainer}>
          <Field
            name="description"
            component={renderField}
            label="Enter Playlist Description"
          />
        </div>
        <Button type="submit" color="primary" variant="raised" className={classes.button}>
          Submit
        </Button>
        <Link to="/playlists">
          <Button color="secondary" variant="raised">Cancel</Button>
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'You must supply a title for your playlist.';
  }

  return errors;
}

AddPlaylist.propTypes = {
  classes: ClassesType.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  createPlaylist: PropTypes.func.isRequired,
  history: HistoryType.isRequired,
};

const formedComponent = reduxForm({
  validate,
  form: 'PlaylistsNewForm',
})(AddPlaylist);

const connectedComponent = connect(null, { createPlaylist })(formedComponent);

export default withStyles(styles)(connectedComponent);
