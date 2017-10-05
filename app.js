console.log("I'm linked!");

$(document).ready(function(){
  console.log("jquery ready!");

  $('#box1').on('click', imageAppear);

  function imageAppear(event) {
    alert("hello!");
    console.log("function called");
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

console.log(Nick1);

});
