'use strict';

$('.thumbnail').on('click', e => {
  console.log(e.target);
  const selectedImg = $(e.target); //selectedImg becomes jQuery target on click
  $('.hero img').attr('src', selectedImg.attr('src'));//jQuery calls class hero and selecting img 
  //attr taking the current src image and changing it value with new img that is clicked
  $('.hero img').attr('alt', selectedImg.attr('alt'));//changes the alt tag to the image selected alt tag
});

