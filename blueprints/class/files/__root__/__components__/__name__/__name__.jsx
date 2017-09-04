import React, { PropTypes, Component } from 'react';
import { styles as s } from '.';
import { className as c } from '../../utils/style-utils';

const displayName = '<%= pascalEntityName %>';
const propTypes = {};
const defaultProps = {};

class <%= pascalEntityName %> extends Component {
  constructor(props) {
    super(props);

    // this.state = {};
  }

  render() {
    // const {} = this.props;
  }
}
<%= pascalEntityName %>.displayName = displayName;
<%= pascalEntityName %>.propTypes = propTypes;
<%= pascalEntityName %>.defaultProps = defaultProps;

export default <%= pascalEntityName %>;
