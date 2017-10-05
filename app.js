console.log("I'm linked!");

$(document).ready(function(){
  console.log("jquery ready!");

  $('#box1').on('click', imageAppear);

  function imageAppear(event) {
    var id = event.currentTarget; // identifying DOM object that was clicked
    var square = event.currentTarget.id; // storing specific ID that was clicked
    console.log(id);
    console.log(square);
    alert("hello!");
    // $(id).html(Card[0].face);
  };

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

// create 12 spots using [] array within the Game function
// we will then prototype Card objects into the Game objects
// the game objects will coorespond with the HTML IDs on the board

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

console.log(Nick1);
console.log(box1);

box1.card = Justin1;
console.log(box1);

});
