<template>
  <div class="blackjack-game">
    <!-- Dealer's hand -->
    <div class="dealer-hand">
      <div class="card" v-for="(card, index) in dealerCards" :key="index">
        <!-- Render dealer's cards here -->
      </div>
    </div>

    <!-- Player's hand -->
    <div class="player-hand">
      <div class="card" v-for="(card, index) in playerCards" :key="index">
        <img :src="'../public/card-' + card.suit + '-' + card.value + '.png'"/>
      </div>
    </div>

    <!-- Buttons -->
    <div class="buttons">
      <button @click="hit">Hit</button>
      <button @click="stand">Stand</button>
      <button @click="double">Double</button>
      <button @click="split">Split</button>
      <button @click="deal">Deal</button>
    </div>
  </div>
  <img src="../public/BlackJackTable.png"/>
</template>

<script>

import { BlackJackGame } from './gamelogic';
export default {
  
  data() {
    return {
      game: new BlackJackGame(),
      dealerCards: [],
      playerCards: [],
      currentPlayer: null,
    };
  },
  created() {
    this.game.addPlayer("Player 1");
    this.currentPlayer = this.game.players[0];
    this.deal();
  },
  methods: {
    hit() {
      // Implement hit logic
    },
    stand() {
      // Implement stand logic
    },
    double() {
      // Implement double logic
    },
    deal() {
      //
    },
    split() {
      
    }
  }
};
</script>

<style scoped>
.blackjack-game {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dealer-hand {
  display: flex;
  justify-content: center;
}

.player-hand {
  display: flex;
  justify-content: center;
}

.card {
  /* Style for each card */
}

.buttons {
  margin-top: 20px;
}

button {
  margin: 0 10px;
}
</style>
<script setup>

</script>

<style scoped>

</style>
