import React from 'react';
// import React, { PropTypes } from 'react';
import { styles as s } from '.';
import { className as c } from '../../utils/style-utils';

const displayName = '<%= pascalEntityName %>';
const propTypes = {};
const defaultProps = {};

const <%= pascalEntityName %> = () => (
  <div {...c(s.container)}>
    <%= pascalEntityName %>
  </div>
);

<%= pascalEntityName %>.displayName = displayName;
<%= pascalEntityName %>.propTypes = propTypes;
<%= pascalEntityName %>.defaultProps = defaultProps;

export default <%= pascalEntityName %>;
