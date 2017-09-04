import React from 'react';
import { styles as s } from '.';
import { className as c } from '../../utils/style-utils';

const displayName = 'HireMe';
const propTypes = {};
const defaultProps = {};

const HireMe = (/* props|{ prop1, prop2 } */) => (
  <div {...c(s.container)}>
    Hire me.
  </div>
);

HireMe.displayName = displayName;
HireMe.propTypes = propTypes;
HireMe.defaultProps = defaultProps;

export default HireMe;
