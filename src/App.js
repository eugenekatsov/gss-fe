import React, { useState } from 'react';

const App = () => {
  const [healthStatus, setHealthStatus] = useState('');

  const handleHealthClick = () => {
    // Make the API call to the backend service
    fetch('/healthz', {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    })
      .then(response => response.json())
      .then(data => {
        // Update the health status state with the response
        setHealthStatus(data.status);
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle any error that occurred during the API call
        setHealthStatus('Error');
      });
  };

  return (
    <div>
      <button onClick={handleHealthClick}>health</button>
      <p>Health status: {healthStatus}</p>
    </div>
  );
};

export default App;
