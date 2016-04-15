import alt from '../lib/alt';

class MapActions {
  updateMap(map) {
    return map;
  }

  fetchMap() {
    return [];
  }

  mapFailed(errorMessage) {
    return errorMessage;
  }

  tileClicked(tile) {
    return tile;
  }

  spriteClicked(tile) {
    return tile;
  }

  move(fromTile, toTile) {
    //TODO: update position in pubnub
    return [fromTile, toTile];
  }
}

export default alt.createActions(MapActions);
