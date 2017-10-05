console.log("I'm linked!");

$(document).ready(function(){
  console.log("jquery ready!");

  $('#box1').on('click', imageAppear);

      function Card(options) {
        this.face = options.face;
        this.isFlipped = options.isFlipped;
        this.matchFound = options.matchFound;
      };

      function User(options) {
        this.score = options.score;
        this.name = options.name;
      };

      function Game(options) {
        this.spot = options.spot;
        this.card = options.card;
        // shuffle function
        // match function
      };

var Justin1 = new Card({face: "Justin", isFlipped: false, matchFound: false});
var Justin2 = new Card({face: "Justin", isFlipped: false, matchFound: false});
var Kay1 = new Card({face: "Kay", isFlipped: false, matchFound: false});
var Kay2 = new Card({face: "Kay", isFlipped: false, matchFound: false});
var Masha1 = new Card({face: "Masha", isFlipped: false, matchFound: false});
var Masha2 = new Card({face: "Masha", isFlipped: false, matchFound: false});
var Beth1 = new Card({face: "Beth", isFlipped: false, matchFound: false});
var Beth2 = new Card({face: "Beth", isFlipped: false, matchFound: false});
var Nick1 = new Card({face: "Nick", isFlipped: false, matchFound: false});
var Nick2 = new Card({face: "Nick", isFlipped: false, matchFound: false});
var Kenneth1 = new Card({face: "Kenneth", isFlipped: false, matchFound: false});
var Kenneth2 = new Card({face: "Kenneth", isFlipped: false, matchFound: false});

var deckOfCards = [Justin1, Justin2, Kay1, Kay2, Masha1, Masha2, Beth1, Beth2, Nick1, Nick2, Kenneth1, Kenneth2];

var box1 = new Game({spot:"box1", card:""});
var box2 = new Game({spot:"box2", card:""});
var box3 = new Game({spot:"box3", card:""});
var box4 = new Game({spot:"box4", card:""});
var box5 = new Game({spot:"box5", card:""});
var box6 = new Game({spot:"box6", card:""});
var box7 = new Game({spot:"box7", card:""});
var box8 = new Game({spot:"box8", card:""});
var box9 = new Game({spot:"box9", card:""});
var box10 = new Game({spot:"box10", card:""});
var box11 = new Game({spot:"box11", card:""});
var box12 = new Game({spot:"box12", card:""});

var wholeBoard = [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12];

// console.log(Card);
//
// box1.card = Justin1;
// console.log(box1);

// push Card values into Board

for (i=0; i < deckOfCards.length; i++) {
  wholeBoard[i].card = deckOfCards[i];
};

console.log(wholeBoard);

function imageAppear(event) {
  var id = event.currentTarget; // identifying DOM object that was clicked
  var square = event.currentTarget.id; // storing specific ID that was clicked
  console.log(id);
  console.log(square);
  alert("hello!");
  console.log(wholeBoard[0].spot);
  // if id ===
  // $(id).html(Card[0].face);
};

// if id (box clicked) = box[i].spot then use jquery to update the image to background color

});
