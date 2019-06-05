let emptyRow = 2;
let emptyCol = 2;

let makeMoveHandler = function (tile, i, j) {
  
  let row = i;
  let col = j;
  
  return function () {
    let rowOffset = Math.abs(emptyRow - row);
    let colOffset = Math.abs(emptyCol - col);
    
    if (rowOffset == 1 && colOffset == 0 || rowOffset == 0 && colOffset == 1) {
      tile.style.marginLeft = emptyCol * 200 + 'px';
      tile.style.marginTop = emptyRow * 200 + 'px';
      
      [row, emptyRow] = [emptyRow, row];
      [col, emptyCol] = [emptyCol, col];
    }
  }
};
let shuffle = function () {
  let rows = document.querySelectorAll('.row');
  for (let i = 0; i < 85; ++i) {
    
    let row = ~~(Math.random() * rows.length);
    let tiles = rows.item(row).querySelectorAll('.tile');
    let tile = ~~(Math.random() * tiles.length);
    tiles.item(tile).click();
  }
};
let initTiles = function () {
 
  let rows = document.querySelectorAll('.row');
 
  for (let i = 0; i < rows.length; ++i) {
    let row = rows.item(i);
    
    let tiles = row.querySelectorAll('.tile');
    for (let j = 0; j < tiles.length; ++j) {
      let tile = tiles.item(j);
      
      tile.addEventListener('click', makeMoveHandler(tile, i, j));
      
      tile.style.marginLeft = j * 200 + 'px';
      tile.style.marginTop = i * 200 + 'px';
      
      tile.style.backgroundPosition = `${600 - j * 200}px ${600 - i * 200}px`;
    }
  }
};

initTiles();
shuffle();