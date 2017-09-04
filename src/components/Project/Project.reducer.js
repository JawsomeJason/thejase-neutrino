import { PropTypes } from 'react';
import { projects } from '../../data';

export const PROP_TYPES = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  property: PropTypes.string.isRequired,
  screenshots: PropTypes.objectOf(PropTypes.bool).isRequired,
  slug: PropTypes.string.isRequired,

  employer: PropTypes.string,
  ended: PropTypes.string,
  started: PropTypes.string,
  tags: PropTypes.objectOf(PropTypes.bool),
  testimonials: PropTypes.objectOf(PropTypes.bool),
  url: PropTypes.string,
};

export const DEFAULT_PROPS = {
  employer: null,
  ended: null,
  started: null,
  tags: {},
  testimonials: {},
  url: null,
};

export const DATA = projects;
