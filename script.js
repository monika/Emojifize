/* Set Variables */
let button = document.querySelector('.emojifize__action.button');
let form = document.querySelector('.emojifize__form');
let textInput = document.querySelector('.emojifize__area');
let emojiInput = document.querySelector('.emojifize__emoji');
let result = document.querySelector('.emojifize__output');
let resultOutput = document.querySelector('.emojifize__result');
let clear = document.querySelector('.emojifize__action.text');

/* Action that triggers everything */
button.onclick = function(event) {
  
  // Don't actually submit
  event.preventDefault();
  
  // Check that form inputs have content

  // Grab new data, set new variables
  let textContent = textInput.value;
  let emojiContent = emojiInput.value;
  let spaceRegex = /\s/g;

  // Change to ALL CAPS + replace spaces with emoji
  let emojifizeText = textContent.toUpperCase().replace(spaceRegex, ' ' + emojiContent + ' ');
  
  resultOutput.value = emojifizeText;
  resultOutput.focus();
  result.style.display = 'block';

}

/* Select all text when clicking into results */
resultOutput.onclick = function(event){
  
  this.focus();
  this.select();
  
}

/* Action that clears form */
clear.onclick = function(event) {
  
  // Don't actually click
  event.preventDefault();
  
  // Clear That Form!
  form.reset();
  
}