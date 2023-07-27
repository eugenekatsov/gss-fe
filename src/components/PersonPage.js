// PersonPage.js
import React from 'react';

const PersonPage = ({ state }) => {
  const { name, id } = state;

  return (
    <div>
      <div style={{ border: '2px solid blue' }}>
        <h3>Name:</h3>
        <p>{name}</p>
      </div>
      <div style={{ border: '2px solid green' }}>
        <h3>ID:</h3>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default PersonPage;
