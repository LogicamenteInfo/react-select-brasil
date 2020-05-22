import React, { Component } from 'react';
import Select from 'react-select';

export default class CommonSelect extends Component {
  render() {
    return React.createElement(Select, {
      options: this.state.options,
      ...this.props
    });
  }
}

CommonSelect.propTypes = {
  ...Select.propTypes
};

CommonSelect.defaultProps = {
  ...Select.defaultProps,
  isClearable: true
}
