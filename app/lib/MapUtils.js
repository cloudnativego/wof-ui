class MapUtils {
  isValidDestination = (tile) => {
      return tile.walkable;
  }

  findTileById = (map, id) => {
    console.log('entering find tile');
    for (var r = 0; r < map.length; r++) {
      console.log('r: ' + r);
      for (var c =0; c < map[r].cols.length; c++) {
        var row = map[r];
        var col = row.cols[c];
        console.log('examining tile: ' + col.id);
        if (col.id === id) {
          console.log('row:' + r + ' col: ' + c);
          return {
            row: r, col: c
          };
        }
      }
    }
    return null;
  }

  getTileUp = (map, row, col) => {
    var toTile = null;
    var targetRow = row-1;
    if (targetRow >= 0 && targetRow < map.length) {
      toTile = map[targetRow].cols[col];
    }
    return toTile;
  }

  getTileDown = (map, row, col) => {
    var toTile = null;
    var targetRow = row+1;
    if (targetRow >= 0 && targetRow < map.length) {
      toTile = map[targetRow].cols[col];
    }
    return toTile;
  }

  getTileLeft = (map, row, col) => {
    var toTile = null;
    var targetCol = col-1;
    if (targetCol >= 0 && targetCol < map[row].cols.length) {
      toTile = map[row].cols[targetCol];
    }
    return toTile;
  }

  getTileRight = (map, row, col) => {
    var toTile = null;
    var targetCol = col+1;
    if (targetCol >= 0 && targetCol < map[row].cols.length) {
      toTile = map[row].cols[targetCol];
    }
    return toTile;
  }


}

const utils = new MapUtils();

export default utils;
