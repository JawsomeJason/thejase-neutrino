import React, { PropTypes } from 'react';

const { shape, string } = PropTypes;

const Project = ({ match }) => {
  const { params: { id } } = match;
  return (
    <div>
      <h1>Project</h1>
      <p>ID: {id}</p>
    </div>
  );
};

Project.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

export default Project;
