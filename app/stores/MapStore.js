import alt from '../lib/alt';
import MapSource from '../sources/MapSource'
import MapActions from '../actions/MapActions';

class MapStore {
  constructor() {
   this.map = [];
   this.errorMessage = null;

   this.bindListeners({
     handleUpdateMap: MapActions.UPDATE_MAP,
     handleFetchMap: MapActions.FETCH_MAP,
     handleMapFailed: MapActions.MAP_FAILED
   });

   this.exportAsync(MapSource)
  }

  handleUpdateMap(map) {
    this.map = map;
    this.errorMessage = null;
  }

  handleFetchMap() {
    this.map = [];
  }

  handleMapFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(MapStore, 'MapStore');
