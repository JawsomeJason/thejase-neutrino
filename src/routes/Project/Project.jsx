import React from 'react';

const Project = ({ match }) => {
  const { params: { id } } = match;
  return (
    <div>
      <h1>Project</h1>
      <p>ID: {id}</p>
    </div>
  );
}
export default Project;
