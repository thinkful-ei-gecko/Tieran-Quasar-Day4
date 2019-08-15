'use strict';

function getsHovered(){

  // method 2 - attach event listener to parent
  // $('.grid').on('mouseover','.cell',event =>{
  //   $(event.currentTarget).addClass('active');
  // }); 
}

function refreshGrid() {
  // click button
  $('.controls').on('click', 'button', event => {
    createAndPlaceRows(8);
  });
}

// When DOM is ready:
$(() => {
  createAndPlaceRows(8);

  getsHovered();
  refreshGrid();
});

  
// ===============================
// Code below is to automate grid creation
// You can ignore this!
// ===============================
function createRow(cellCount) {
  let row = '<div class="row">';
  let str = '<div class="cell">&nbsp;</div>';
  for (let i = 0; i < cellCount; i++) {
    row += str;
  }
  row += '</div>';
  return row;
}
  
function createRows(n) {
  let rows = '';
  for (let i = 0; i < n; i++) {
    rows += createRow(n);
  }
  return rows;
}
  
function createAndPlaceRows(n) {
  $('.cell').remove(); // Clear all current cells and listeners
  const rows = createRows(n);
  $('.grid').html(rows);
  const cells = $('.cell');
  cells.css({ height: cells.width() });
}
  
  