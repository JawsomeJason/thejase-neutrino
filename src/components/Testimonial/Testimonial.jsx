import React from 'react';
// import React, { PropTypes } from 'react';
import { styles as s } from '.';
import { className as c } from '../../utils/style-utils';

const displayName = 'Testimonial';
const propTypes = {};
const defaultProps = {};

const Testimonial = () => (
  <div {...c(s.container)}>
    Testimonial
  </div>
);

Testimonial.displayName = displayName;
Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
