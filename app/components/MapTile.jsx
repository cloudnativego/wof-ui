import React from 'react'
import MapActions from '../actions/MapActions'

export default ({tile}) => {
  var className = "maptile tile-" + tile.tile;

  const tileClicked = function(event) {
    MapActions.tileClicked(tile);
  }

  const spriteClicked = function(event) {
    MapActions.spriteClicked(tile);
    event.stopPropagation();
  }

  return (
    <div className={className} onClick={tileClicked}>
      <img id={tile.sprite} src="/sprites/img_trans.gif" onClick={spriteClicked}/>
    </div>
  )
}
