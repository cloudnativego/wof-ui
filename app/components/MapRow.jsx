import React from 'react';
import MapTile from './MapTile'

export default ({row}) => {
  return (
    <div className="maprow">
      {row.cols.map(col =>
        <MapTile tile={col} key={col.id}/>
      )}
    </div>
  );
}
