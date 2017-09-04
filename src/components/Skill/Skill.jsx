import React from 'react';
// import React, { PropTypes } from 'react';
import { styles as s } from '.';
import { className as c } from '../../utils/style-utils';

const displayName = 'Skill';
const propTypes = {};
const defaultProps = {};

const Skill = () => (
  <div {...c(s.container)}>
    Skill
  </div>
);

Skill.displayName = displayName;
Skill.propTypes = propTypes;
Skill.defaultProps = defaultProps;

export default Skill;
