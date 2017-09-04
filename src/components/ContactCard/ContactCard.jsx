import React from 'react';
// import React, { PropTypes } from 'react';
import { styles as s } from '.';
import { className as c } from '../../utils/style-utils';

const displayName = 'ContactCard';
const propTypes = {};
const defaultProps = {};

const ContactCard = () => (
  <div {...c(s.container)}>
    ContactCard
  </div>
);

ContactCard.displayName = displayName;
ContactCard.propTypes = propTypes;
ContactCard.defaultProps = defaultProps;

export default ContactCard;
