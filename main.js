// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let heartStates = {
  '♡':'♥',
  '♥':'♡'
};

let heartColorStates = {
  'like-glyph':'like-glyph activated-heart',
  'like-glyph activated-heart':'like-glyph'
};

// Your JavaScript code goes here!

const likeHearts = document.querySelectorAll('span.like-glyph');
const errorModal = document.getElementById('modal');

likeHearts.forEach(heart => {
  heart.addEventListener('click', (e) => {
    let selectedHeart = e.target;
    mimicServerCall()
      .then(resp => {
        selectedHeart.innerHTML = heartStates[selectedHeart.innerHTML];
        selectedHeart.classList = heartColorStates[selectedHeart.classList];
      })
      .catch((error) => {
        console.log('test');
        errorModal.classList = "";
        setTimeout(() => errorModal.classList = 'hidden' ,5000);
      })

  });
});


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

