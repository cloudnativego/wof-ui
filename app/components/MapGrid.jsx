import React from 'react';
import MapRow from './MapRow';

export default ({map}) => {
  return (
      <div>
        {map.map(mapRow =>
          <MapRow row={mapRow} key={mapRow.id}/>
        )}
      </div>
    );
}
