import React from 'react';
import MapComponent from '../../components/Map/Map';

const Mars = () => {
  return (
    <div>
      {/* <PlanetSection planetData={data} /> */}
      <div style={{ marginTop: '20px' }}>
        <MapComponent />
      </div>
    </div>
  );
};

export default Mars;