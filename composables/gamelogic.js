
class BlackJackGame {
    constructor() {
        this.deck = new Deck();
        this.dealer = new Player("Dealer");
        this.players = [];
        this.gameState = "new";
        this.currentPlayerIndex = 0;
        this.dealerShowHand = false;
    }
    /**
     * Starts the game, deals to all players and the dealer
     */
    startGame() {
        if (this.players.length === 0) {
            return;
        }
        this.deck = new Deck();
        this.deck.shuffle();
        this.gameState = "inProgress";
        this.players.forEach(player => {
            player.clearHand();
            player.addCard(this.deck.drawCard());
            player.addCard(this.deck.drawCard());
        });
        this.dealer.clearHand();
        this.dealer.addCard(this.deck.drawCard());
        this.dealer.addCard(this.deck.drawCard());
        this.currentPlayerIndex = 0;
        this.dealerShowHand = false;
    }

    /**
     * Adds a player to the game
     * @param {String} name 
     */
    addPlayer(name) {
        this.players.push(new Player(name));
    }

    
    playerHit() {
        if(this.gameState !== "inProgress") { return; }
        const player = this.players[this.currentPlayerIndex];
        player.addCard(this.deck.drawCard());
        if(player.score > 21) {
            // player busts
            this.moveToNextPlayer();
        }
    }


    playerStand() {
        if(this.gameState !== "inProgress") { return; }
        const player = this.players[this.currentPlayerIndex];
        this.moveToNextPlayer();
    }

    playerDoubleDown() {
        if(this.gameState !== "inProgress") { return; }
        const player = this.players[this.currentPlayerIndex];
        player.bet *= 2;
        this.playerHit(player);
        if(player.score <= 21) {
            this.moveToNextPlayer();
        }
    }

    playerSplit() {
        if(this.gameState !== "inProgress") { return; }
        const player = this.players[this.currentPlayerIndex];
        const splitCard = player.hand.pop();
        const splitPlayer = new Player(`${player.name} - Split`);
        player.addCard(this.deck.drawCard());
        splitPlayer.addCard(splitCard);
        splitPlayer.addCard(this.deck.drawCard());
        this.players.splice(this.currentPlayerIndex + 1, 0, splitPlayer);
    }

    moveToNextPlayer() {
        if(this.gameState !== "inProgress") { return; }
        this.currentPlayerIndex++;
        if(this.currentPlayerIndex >= this.players.length) {
            this.dealerTurn();
        }
    }

    dealerTurn() {
        if(this.gameState !== "inProgress") { return; }
        while(this.dealer.score < 17) {
            this.dealer.addCard(this.deck.drawCard());
        }
        this.dealerShowHand = true;
        this.determineWinner();
    }

    determineWinner() {
        this.players.forEach(player => {
            if(player.score > 21) {
                // player busts
            } else if(this.dealer.score > 21 || player.score > this.dealer.score) {
                // player wins
            } else if(player.score < this.dealer.score) {
                // dealer wins
            } 
        });
    }


}

class Player {
    constructor(name, money = 1000) {
        this.name = name;
        this.hand = [];
        this.bet = 0;
        this.money = money;
        this.score = 0;
    }
    /**
     * Adds a card to the player's hand
     * @param {Card} card 
     */
    addCard(card) {
        this.hand.push(card);
        this.updateScore();
    }
    /**
     * Clears the player's hand
     */
    clearHand() {
        this.hand = [];
        this.score = 0;
    }

    /**
     * Updates the player's score
     */
    updateScore() {
        this.score = 0;
        let aces = 0;
        this.hand.forEach(card => {
            if (['j', 'q', 'k'].includes(card.value)) {
                this.score += 10;
            } else if (card.value === 'a') {
                aces++;
                this.score += 11;
            } else {
                this.score += parseInt(card.value);
            }
        });
        while (this.score > 21 && aces > 0) {
            this.score -= 10;
            aces--;
        }
    }

    canSplit() {
        return this.hand.length === 2 && this.hand[0].value === this.hand[1].value;
    }
}



class Deck {
    // Only 52 card decks
    constructor() {
        this.cards = [];
        this.initialize();
    }
    
    initialize() {
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
        for (let suit of suits) {
            for (let value of values) {
                this.cards.push(new Card(suit, value));
            }
        }
    }
    
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    
    drawCard() {
        return this.cards.pop();
    }
}

class Card {
    constructor(suit, value) {
      this.suit = suit;
      this.value = value;
    }
}


export { BlackJackGame, Player, Deck, Card };