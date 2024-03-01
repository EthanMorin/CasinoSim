<script setup>
let gameWon = false

function gameLoop() {
  // 1. Get the user's bet
  // 2. Spin the wheel
  // 3. Check if the user won
  // 4. Update the user's balance
  // 5. Repeat
  while (!gameWon) {
    getBet()
    spinWheel()
    checkWin()
    updateBalance()
  }
}

function getBet() {

}

function spinWheel() {

}

function checkWin() {

}

function updateBalance() {

}

gameLoop()

</script>
<template>
  <h1>roulette</h1>
</template>