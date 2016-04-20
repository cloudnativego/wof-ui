'use strict';

jest.unmock('../MapTile');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from  'react-addons-test-utils';
import MapTile from '../MapTile';


function renderMapTile () {
  var col = {
    tile : "dirt-uponly",
    sprite : "player",
    id : "id-1",
    allowUp: true,
    allowRight: false,
    allowDown: false,
    allowLeft: false,
    walkable: true
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<MapTile tile={col} key={col.id} />);
  return renderer.getRenderOutput();
}

function inspectObject(obj) {
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    console.log("Key: " + key)
    console.log(val);
  }
}

describe('MapTile', () => {
  it('renders a div with background', () => {
    const tile = renderMapTile();
    expect(tile).toBeTruthy();
    //inspectObject(tile);
    expect(tile.props.className).toContain('dirt');
    expect(tile.props.children.type).toEqual('img');
    expect(tile.props.children.props.id).toEqual('player');

  });
});
