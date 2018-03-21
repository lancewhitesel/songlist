import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { withFormsy } from 'formsy-react';

import DEFAULT_FN from '../../utils';

class DefaultInput extends Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
    this.state = { currentText: null };
  }

  changeValue(e) {
    this.setState({ currentText: e.target.value });
    this.props.setValue(e.target.value);
    this.props.onChange(e);
  }

  render() {
    return (
      <div>
        <TextField
          helperText={this.props.title}
          name={this.props.name}
          onChange={this.changeValue}
          required={this.props.required}
          type={this.props.type}
          value={this.state.currentText || this.props.value}
        />
        {this.props.children}
      </div>
    );
  }
}

DefaultInput.propTypes = {
  children: PropTypes.object,
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
  setValue: PropTypes.func,
};

DefaultInput.defaultProps = {
  children: null,
  required: false,
  name: null,
  value: '',
  type: null,
  title: null,
  onChange: DEFAULT_FN,
  setValue: DEFAULT_FN,
};

export default withFormsy(DefaultInput);
