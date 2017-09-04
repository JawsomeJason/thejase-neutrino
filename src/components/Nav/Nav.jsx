import React from 'react';
import { Link } from 'react-router-dom';
import { styles as s } from '.';
import { className as c } from '../../utils/style-utils';

const displayName = 'Nav';
const propTypes = {};
const defaultProps = {};

const Nav = (/* props|{ prop1, prop2 } */) => (
  <ul {...c(s.list)}>
    <li {...c(s.item)}><Link to="/">Home</Link></li>
    <li {...c(s.item)}><Link to="/project-1">Project 1</Link></li>
  </ul>
);

Nav.displayName = displayName;
Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
