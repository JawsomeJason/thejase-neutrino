/* eslint-disable import/prefer-default-export */
import find from 'lodash/find';
import data from './data';
import {
  SELECT_PROJECT,
} from './actions';

const INITIAL_PROJECTS = {
  selected: null,
  items: data,
};

export const projects = (state = INITIAL_PROJECTS, action) => {
  switch (action.type) {
    case SELECT_PROJECT:
      return {
        ...state,
        selected: action.id,
      };
    default:
      return state;
  }
};

export const project = (state = {}, action) => {
  switch (action.type) {
    case SELECT_PROJECT: {
      const { id } = action;
      return find(data, { id });
    }
    default:
      return state;
  }
};
