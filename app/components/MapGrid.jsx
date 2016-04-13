import React from 'react';
import MapRow from './MapRow';

//import M from './DeployedApp.jsx';

export default ({map}) => {
  return (
      <div>
        {map.map(mapRow =>
          <div key={mapRow.id}><MapRow row={mapRow}/></div>
        )}
      </div>
    );
}
