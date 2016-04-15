import alt from '../lib/alt';
import MapSource from '../sources/MapSource'
import MapActions from '../actions/MapActions';
import MapUtils from '../lib/MapUtils';

class MapStore {
  constructor() {
   this.map = [];
   this.playerPosition = { row: 1, col: 0};
   this.errorMessage = null;

   this.bindListeners({
     handleUpdateMap: MapActions.UPDATE_MAP,
     handleFetchMap: MapActions.FETCH_MAP,
     handleMapFailed: MapActions.MAP_FAILED,
     handleTileClicked: MapActions.TILE_CLICKED,
     handleSpriteClicked: MapActions.SPRITE_CLICKED,
     handlePlayerMoved: MapActions.MOVE
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

  handlePlayerMoved(tiles) {
    tiles[0].sprite = null;
    tiles[1].sprite = "player";
    var newPosition = MapUtils.findTileById(this.map, tiles[1].id);
    this.playerPosition = newPosition;
  }

  handleTileClicked(tile) {
  //  this.map = processTileClick(tile, map)
   tile.sprite = "home";
    alert('tile: ' + tile.id);
  }

  handleSpriteClicked(tile) {
    alert('sprite: ' + tile.sprite);
  }
}

export default alt.createStore(MapStore, 'MapStore');
