import React, { Component } from 'react';
import Select from 'react-select';
import _ from 'lodash';

export default class CommonSelect extends Component {
  static options = {};

  componentDidMount() {
    this.setState({ value: _.find(this.constructor.options, (o) => o.value === this.props.value) });
  }

  componentDidUpdate(pProps) {
    if (this.props.value !== pProps.value) {
      typeof this.props.value === 'object' ?
        this.setState({ value: this.props.value }) :
        this.setState({ value: _.find(this.constructor.options, (o) => o.value === this.props.value) });
    }
  }

  render() {
    console.log(this.state.value)
    return React.createElement(Select, {
      ...this.props,
      options: this.state.options,
      value: this.state.value
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
