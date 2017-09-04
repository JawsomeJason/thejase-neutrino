// import React from 'react';
import React, { PropTypes } from 'react';
import { styles as s } from '.';
import { className as c } from '../../utils/style-utils';

const displayName = 'Arrow';
const propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
};
const defaultProps = {
  href: null,
  title: null,
};

const Arrow = ({
  href,
  title,
}) => {
  const Container = href ? 'a' : 'div';
  const top = '37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3';
  const middle = '37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7';
  const bottom = '37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1';
  return (
    <Container href={href} title={title} {...c(s.container)}>
      <svg {...c(s.shapes)}>
        <polygon {...c(s.top)} points={top} />
        <polygon {...c(s.middle)} points={middle} />
        <polygon {...c(s.bottom)} points={bottom} />
      </svg>
    </Container>
  );
};

Arrow.displayName = displayName;
Arrow.propTypes = propTypes;
Arrow.defaultProps = defaultProps;

export default Arrow;
