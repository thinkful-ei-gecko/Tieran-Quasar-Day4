'use strict';

/* enter items they need to purchase by entering text 
and hitting "Return" or clicking the "Add item" button */

// 1. hit submit
//    2. copy user text
//    3. add new li for new item

function addToList() {
  $('#js-shopping-list-form').on('submit', event => {
      event.preventDefault();
      const itemName = $('#shopping-list-entry').val();
      $('.shopping-list').append(createNewItem(itemName));
      $('#shopping-list-entry').val('');
  });
}

// item is a string
// return a new <li>
function createNewItem(item) { 
  return $(`
    <li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>
  `);
}

// check and uncheck items on the list by 
// clicking the "Check" button
function checkItem() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}

// delete item when click delete button
function deleteItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    (this).closest('li').remove();
  });
}

// call all functions
function main() {
  addToList();
  checkItem();
  deleteItem();
}
// call main on page load
$(main);