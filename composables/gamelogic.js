
class BlackJackGame {
    constructor() {
        this.deck = new Deck();
        this.dealer = new Player("Dealer");
        this.players = [];
        this.gameState = "new";
    }
    /**
     * Starts the game, deals to all players and the dealer
     */
    startGame() {
        
    }

    /**
     * Adds a player to the game
     * @param {String} name 
     */
    addPlayer(name) {
        this.players.push(new Player(name));
    }


    playerHit(player) {
        
    }

    playerStand(player) {
        
    }

    playerDoubleDown(player) {
            
    }

    playerSplit(player) {
            
    }

    determineWinner() {

    }


}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}
class Deck {
    // Only 52 card decks
  constructor() {
    this.cards = [];
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['2','3','4','5','6','7','8','9','10','j','q','k','a'];
    for (let suit in suits) {
        for (let value in values) {
            this.cards.push(new Card(suits[suit], values[value]));
        }
    }
    this.shuffle();
  }
  shuffle() {
    this.constructor();
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
  
  drawCard() {
    if (this.cards.length === 0) {
      return null;
    }
    return this.cards.pop();
  }
}


export { BlackJackGame, Card, Deck };