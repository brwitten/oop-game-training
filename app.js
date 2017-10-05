console.log("I'm linked!");

$(document).ready(function(){
  console.log("jquery ready!");

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

var newCard = new Card({face: "JUstin", isFlipped: false, matchFound: false});
console.log(newCard)
});
