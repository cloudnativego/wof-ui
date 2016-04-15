import React from 'react';
import MapActions from '../actions/MapActions';
import MapStore from '../stores/MapStore';
import MapGrid from "./MapGrid";
import MapUtils from '../lib/MapUtils';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = MapStore.getState();
}

componentDidMount() {
   MapStore.listen(this.storeChanged);
   MapStore.fetchMap();
   document.addEventListener("keydown", this.handleKeydown, false);
 }
 componentWillUnmount() {
   MapStore.unlisten(this.storeChanged);
   document.removeEventListener("keydown", this.handleKeydown, false);
 }

 storeChanged = (state) => {
   // Without a property initializer `this` wouldn't
   // point at the right context because it defaults to
   // `undefined` in strict mode.
   this.setState(state);
 };

handleKeydown = (event) => {
  var row = this.state.playerPosition.row;
  var col = this.state.playerPosition.col;
  var playerTile = this.state.map[row].cols[col];

  //alert('key pressed: ' + event.keyCode);
  if (event.keyCode == 38 || event.keyCode == 87) {
    //UP
    if (playerTile.allowUp) {
      var toTile = MapUtils.getTileUp(this.state.map, row, col);
      if (toTile != null) {
        if (MapUtils.isValidDestination(toTile)) {
          MapActions.move(playerTile, toTile);
        }
      }
    }
  } else if (event.keyCode == 37 || event.keyCode == 65) {
    //LEFT
    if (playerTile.allowLeft) {
      var toTile = MapUtils.getTileLeft(this.state.map, row, col);
      if (toTile != null) {
        if (MapUtils.isValidDestination(toTile)) {
          MapActions.move(playerTile, toTile);
        }
      }
    }
  } else if (event.keyCode == 39 || event.keyCode == 68) {
    //RIGHT
    if (playerTile.allowRight) {
      var toTile = MapUtils.getTileRight(this.state.map, row, col);
      if (toTile != null) {
        if (MapUtils.isValidDestination(toTile)) {
          MapActions.move(playerTile, toTile);
        }
      }
    }
  } else if (event.keyCode == 40 || event.keyCode == 83) {
    //DOWN
    if (playerTile.allowDown) {
      var toTile = MapUtils.getTileDown(this.state.map, row, col);
      if (toTile != null) {
        if (MapUtils.isValidDestination(toTile)) {
          MapActions.move(playerTile, toTile);
        }
      }
    }
  }
}

 render() {
    const map = this.state.map;

    if (MapStore.isLoading()) {
      return (
        <div>
          <img src="/ajax-loader.gif" />
        </div>
      )
    }

    if (this.state.errorMessage) {
      return (
        <div>{this.state.errorMessage}</div>
      );
    }

    return (
      <div>
        <MapGrid map={map} />
      </div>
    );
  }
}
