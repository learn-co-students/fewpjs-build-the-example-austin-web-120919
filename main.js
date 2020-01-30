// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.getElementsByClassName('like-glyph')
for(const likeButton of likes){
  likeButton.addEventListener('click', () => mimicServerCall()
    //.then(console.log(resp))
   // .then(console.log(json))
    .then(console.log('hello'))
    .catch((error) => {
    const div = document.getElementById('modal');
    div.className = 'alert';
    const message = document.getElementById('modal-message');
    message.innerText = error
    setTimeout(() => { div.className = 'hidden'}, 5000);
  })
  .then(likeToggle(likeButton))
  );


}

function likeToggle(heart){
  if (heart.innerText === EMPTY_HEART){
    heart.classList.add('activated-heart');
    heart.innerText = FULL_HEART;
    
    //console.log(heart);
  }
  else{
    heart.innerText = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
