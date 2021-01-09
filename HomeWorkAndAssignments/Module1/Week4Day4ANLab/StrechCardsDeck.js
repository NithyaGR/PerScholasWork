// - Using classes, generate a deck of cards and store them in an array
//     - cards are objects and should have a value, a face, a suit, a boolean of whether they are faceUp etc.//
//     - there are 13 cards per suit, values should match what they are in BlackJack (or another game),//
//             - Ace, by default is equal to 11,//
//             - cards 2-10 share the same face and value//
//             - Jack, Queen and King have a value of 10//
// - Figure out how to shuffle the array and `console.log` the top card (Hint: google it)//
// - Figure out how to compare the top and bottom card and `console.log` both cards and a message that says which card is bigger (or a tie)
//

class Card {
  constructor(value, face, suit, faceUp) {
    this.value = value;
    this.face = face;
    this.suit = suit;
    this.faceUp = false;
  }
  getValue(){
    return this.value;
  }
  getFace(){
    return this.face;
  }
  getsuit(){
    return this.suit;
  }
  getFaceUp(){
    return this.faceUp;
  }
}
