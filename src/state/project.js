import { PropTypes } from 'react';
import data from '../data/project';

/* eslint-disable import/prefer-default-export */
export const types = {
  SELECT: 'PROJECT/PROJECT_SELECT',
};
export const actions = {
  select: id => ({ type: types.SELECT, id }),
};

const initialState = {
  selected: null,
  items: data,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT:
      return {
        ...state,
        selected: action.id,
      };
    default:
      return state;
  }
};

export default reducer;

export const ITEM_PROP_TYPES = {
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

export const ITEM_DEFAULT_PROPS = {
  employer: null,
  ended: null,
  started: null,
  tags: {},
  testimonials: {},
  url: null,
};

export const PROP_TYPES = {
  items: PropTypes.arrayOf(PropTypes.shape(ITEM_PROP_TYPES)),
  selected: PropTypes.string,
};

export const DEFAULT_PROPS = {
  items: [],
  selected: null,
};
