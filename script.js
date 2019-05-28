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
  
  // Pwease don't submit
  event.preventDefault();

  // Set variables
  let textContent;
  let emojiContent;
  let spaceRegex = /\s/g;
  let errorMessage = 'Please enter some text 👍'
  
  // Default emoji is clapping unless other emoji are present
  if ( emojiInput.value == ''){
    
    emojiContent = '👏';
        
  } else {
    
    emojiContent = emojiInput.value;
    
  }
  
  // Text must be present
  if ( textInput.value == ''){
      
    textContent = textInput.value = errorMessage;
    textInput.classList.add('error');
        
    return false;
    
  } else if ( textInput.value == errorMessage ) {
    
    return false;
    
  } else {
  
    textContent = textInput.value;
  
  }
  
  // Change to ALL CAPS + replace spaces with emoji
  let emojifizedText = textContent
                        .toUpperCase()
                        .replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '')
                        .replace(spaceRegex, ' ' + emojiContent + ' ');
  
  // Bookend with emoji

  emojifizedText = emojiContent + ' ' + emojifizedText + ' ' + emojiContent;
  
  resultOutput.value = emojifizedText;
  resultOutput.focus();
  result.style.display = 'block';

}

/* Clear Error in text area when interacted with */
textInput.onclick = function(){
  
  if ( this.classList.contains('error') ) {
    
    this.classList.remove('error');
    this.value = '';
    
  }
    
}

/* Select all text when clicking into results */
resultOutput.onclick = function(event){
  
  this.focus();
  this.select();
  
}

/* Action that clears form */
clear.onclick = function(event) {
  
  // Pwease don't click
  event.preventDefault();
  
  // Clear That Form!
  form.reset();
  
}