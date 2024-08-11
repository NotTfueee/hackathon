// src/components/waste.jsx

import React from 'react';
import RoboflowComponent from './RoboflowComponent'; // Import the RoboflowComponent

const Waste = () => {
  return (
    <div>
      <h1>Waste Management</h1>
      {/* Add RoboflowComponent within Waste component */}
      <RoboflowComponent />
    </div>
  );
};

export default Waste;