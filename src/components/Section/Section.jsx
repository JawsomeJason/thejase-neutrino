// import React from 'react';
import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';
import trim from 'lodash/trim';
import { styles as s } from '.';
import { className as c } from '../../utils/style-utils';

const displayName = 'Section';
const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,

  id: PropTypes.string,
  outline: PropTypes.number,
};
const defaultProps = {
  id: null,
  outline: 1,
};

const Section = ({
  id,
  title,
  description,
  outline,
  children,
}) => {
  const Title = `h${outline || 1}`;

  const trimmedDescription = trim(description)
    .replace(/\n[^\n\S]+/g, '\n');

  return (
    <div id={id} {...c(s.container)}>
      <header {...c(s.header)}>
        <Title {...c(s.title)}>{title}</Title>
        <div {...c(s.description)}>
          <Markdown source={trimmedDescription} />
        </div>
      </header>
      {children}
    </div>
  );
};

Section.displayName = displayName;
Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
