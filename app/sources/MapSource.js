import MapActions from '../actions/MapActions'

// Creating bogus data for now to test rendering...
// Will eventually render based on data coming from the map service.
var mockCol = {
  tile : "grass1",
  id : "abc123",
  sprite: null
}

var mockCol2 = {
  tile : "grass1",
  id : "abc345",
  sprite : "home"
}

var mockRow = {
  cols : [ mockCol, mockCol2 ],
  id : "row134"
}

var mockCol3 = {
  tile : "grass2",
  sprite : "prev",
  id : "bdd1234"
}

var mockCol4 = {
  tile : "grass2",
  sprite: null,
  id : "bdd4567"
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
