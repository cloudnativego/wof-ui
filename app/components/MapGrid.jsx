import React from 'react';
import MapRow from './MapRow';

//import M from './DeployedApp.jsx';

export default ({map}) => {
  return (
      <div>
        {map.map(mapRow =>
          <MapRow row={mapRow} key={mapRow.id}/>
        )}
      </div>
    );
}
