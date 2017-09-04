// import React from 'react';
import React, { PropTypes } from 'react';
import Project from '../Project';
import { styles as s } from '.';
import { className as c } from '../../utils/style-utils';
import { PROP_TYPES } from '../../state/projects/data';

const displayName = 'Projects';
const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(PROP_TYPES)),
};
const defaultProps = {
  items: [],
};

const Projects = ({
  items,
}) => (
  <div {...c(s.container)}>
    {items.length && (
      <ul {...c(s.list)}>
        {items.map(project => (
          <li {...c(s.item)} key={project.id}>
            <Project card {...project} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

Projects.displayName = displayName;
Projects.propTypes = propTypes;
Projects.defaultProps = defaultProps;

export default Projects;
