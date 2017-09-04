// import React from 'react';
import React, { PropTypes } from 'react';
import { styles as s } from '.';
import {
  PROP_TYPES,
  DEFAULT_PROPS,
} from '../../state/projects/data';
import { className as c } from '../../utils/style-utils';

const displayName = 'Project';
const propTypes = {
  card: PropTypes.bool,
  ...PROP_TYPES,
};
const defaultProps = {
  card: false,
  ...DEFAULT_PROPS,
};

const Project = ({
  card,
  id,
  employer,
}) => (
  <div {...c(card ? s.card : s.container)}>
    Project: {id} {employer}
  </div>
);

Project.displayName = displayName;
Project.propTypes = propTypes;
Project.defaultProps = defaultProps;

export default Project;
