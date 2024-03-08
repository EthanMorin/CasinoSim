<script setup>
const router = useRouter();
</script>

<template>
  <div class="game-display">
    <div class="game-panel" @click="router.push({ path: 'slots' })">
      <div class="game-panel-content">
        <div class="title-wrapper">
          <h1>Slots</h1>
        </div>
        <img src="/public/card-back.png" alt="image of slots" />
      </div>
    </div>
    <div class="game-panel" @click="router.push({ path: 'blackjack' })">
      <div class="game-panel-content">
        <div class="title-wrapper">
          <h1>Black Jack</h1>
        </div>
        <img src="/public/card-back.png" alt="image of blackjack" />
      </div>
    </div>
    <div class="game-panel" @click="router.push({ path: 'roulette' })">
      <div class="game-panel-content">
        <div class="title-wrapper">
          <h1>Roulette</h1>
        </div>
        <img src="/public/card-back.png" alt="image of roulette" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-display {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
}
.game-panel {
  display: flex;
  justify-content: center;
  margin: 5px;
  background-color: radial-gradient(at top left, #2a3447, #0d111a);
  border: solid 2px grey;
  border-radius: 4px;
  width: 28%;
  height: 80%;
  text-align: center;
}

.game-panel-content {
  background-color: white;
  width: 100%;
  a {
    text-decoration: none;
    color: #f91e2e;
  }

  .title-wrapper {
    width: 100%;
    border-bottom: solid 2px black;
    margin-bottom: 10%;
  }
}
</style>
