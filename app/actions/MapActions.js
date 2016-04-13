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
}

export default alt.createActions(MapActions);
