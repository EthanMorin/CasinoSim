<template>
  <img src="/blackjack-icon.png" width="200px" />
  <board></board>
  

  <div class="rules">
      <h2>Rules</h2>
      <p>Get as close to 21 as possible without going over.</p>
      <p>Face cards are worth 10, Aces are worth 1 or 11.</p>
      <p>Double your bet and receive one more card.</p>
      <p>Split your hand into two separate hands.</p>
  </div>

</template>

<style scoped>
body {
  background-image: url('../public/generic-felt-mat.png');
}

.rules {
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-45%); 
  border-radius: 5%;
  border: 2px solid black;
  width: 300px;
  padding: 10px; 
}

</style>
