'use strict';

// a function should only have one responsibility



/**  
 * @param {number} num
 * @returns {*}   a string or num
 **/
function fizzbuzz(num){
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0 ) return 'buzz';
  return num;
}

/**  
 * @param {*} fizzResult
 * @returns {string} div content
 **/
function generateFizzHtml(fizzResult) {
  let fizzClass = '';
  if (typeof fizzResult === 'string') {
    fizzClass = fizzResult;
  } 
  return `
    <div class='fizz-buzz-item ${fizzClass}'>
      <span>${fizzResult}</span>
    </div>
  `;
}

// handle form submission
function handleSubmit() {
  $('#number-chooser').on('submit', event => {
    event.preventDefault();                           
    const countTo =  $('#number-choice').val();       // get input

    const fizzBuzzResults = [];                       // holds divs to append 
    for (let i = 1; i <= countTo; i++) {
      fizzBuzzResults.push(fizzbuzz(i));              // count to countTo and calculate output
    }

    const htmlArray = fizzBuzzResults.map(result=>generateFizzHtml(result));
    //console.log(htmlArray);
    $('.js-results').html(htmlArray);
  });
}

$(handleSubmit);