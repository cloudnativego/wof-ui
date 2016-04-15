import MapActions from '../actions/MapActions'

// Creating bogus data for now to test rendering...
// Will eventually render based on data coming from the map service.
var mockCol = {
  tile : "dirt-topleft",
  id : "abc123",
  sprite: null,
  allowUp: false,
  allowRight: true,
  allowDown: true,
  allowLeft: false,
  walkable: true
}

var mockCol2 = {
  tile : "dirt-topright",
  id : "abc345",
  sprite : null,
  allowUp: false,
  allowRight: false,
  allowDown: true,
  allowLeft: true,
  walkable: true
}

var mockRow = {
  cols : [ mockCol, mockCol2 ],
  id : "row134"
}

var mockCol3 = {
  tile : "dirt-uponly",
  sprite : "player",
  id : "bdd1234",
  allowUp: true,
  allowRight: false,
  allowDown: false,
  allowLeft: false,
  walkable: true
}

var mockCol4 = {
  tile : "dirt-uponly",
  sprite: null,
  id : "bdd4567",
  allowUp: true,
  allowRight: false,
  allowDown: false,
  allowLeft: false,
  walkable: true
}

var mockRow2 = {
  cols: [mockCol3, mockCol4 ],
  id : " row456"
}

var mockData = [
  mockRow,
  mockRow2
];

const MapSource = {
  fetchMap() {
    return {
      remote() {
        return new Promise(function (resolve, reject) {
                resolve(mockData);
            })
      },

      local() {
        return null;
      },

      success: MapActions.updateMap,
      error: MapActions.mapFailed,
      loading: MapActions.fetchMap
    }
  }
};

export default MapSource;
