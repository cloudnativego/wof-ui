import React from 'react'

export default ({tile}) => {
  var className = "maptile tile-" + tile.tile;

  return (
    <div className={className}>
      <img id={tile.sprite} src="/sprites/img_trans.gif"/>
    </div>
  )
}
