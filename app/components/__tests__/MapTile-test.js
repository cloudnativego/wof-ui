'use strict';

jest.unmock('../MapTile');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from  'react-addons-test-utils';
import MapTile from '../MapTile';

// -- Equivalent ES5 declarations --
// var React = require('react');
// var ReactDOM = require('react-dom');
// var TestUtils = require('react-addons-test-utils');
// var MapTile = require('../MapTile').default;


describe('MapTile', () => {
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

  var tile = TestUtils.renderIntoDocument(
    <MapTile tile={col} key={col.id} />
  );

  var node = ReactDOM.findDOMNode(tile);

  it('stateless objects cannot be referenced without legerdemain', () => {
    expect(tile).toBeFalsy();
    expect(node).toBeFalsy();
  });
});
