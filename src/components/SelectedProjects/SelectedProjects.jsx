import React from 'react';
// import React, { PropTypes } from 'react';
import Project from '../Project';
import { styles as s } from '.';
import { className as c } from '../../utils/style-utils';

const displayName = 'SelectedProjects';
const propTypes = {};
const defaultProps = {};

const SelectedProjects = ({
  items,
}) => (
  <div {...c(s.container)}>
    {items.length && (
      <ul {...c(s.list)}>
        {items.map(project => (
          <li {...c(s.item)}>
            <Project card {...project} key={project.id} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

SelectedProjects.displayName = displayName;
SelectedProjects.propTypes = propTypes;
SelectedProjects.defaultProps = defaultProps;

export default SelectedProjects;
