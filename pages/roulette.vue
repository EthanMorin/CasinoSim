<script setup>
let gameOver = false
let gameWon = false
const betColor = ref('black')
const playerBalance = ref(100)
const randomNumber = ref(0)
const playerTokenPlacement = ref(0)
const playerBetAmount = ref(0)
const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]



function gameLoop() {
  // 1. Get the user's bet
  // 2. Spin the wheel
  // 3. Check if the user won
  // 4. Update the user's balance
  // 5. Repeat
  while (!gameOver) {
    getBet()
    spinWheel()
    checkWin()
    updateBalance()
  }
}

function getBet() {
  
  //   Single number bet pays 35 to 1. Also called “straight up.”
  //   Double number bet pays 17 to 1. Also called a “split.” 
  //   Three number bet pays 11 to 1. Also called a “street.”
  //   Four number bet pays 8 to 1. Also called a “corner bet.”
  //   Five number bet pays 6 to 1. Only one specific bet which includes the following numbers: 0-00-1-2-3.
  //   Six number bets pays 5 to 1. Example: 7, 8, 9, 10, 11, 12. Also called a “line.”
  //   Twelve numbers or dozens (first, second, third dozen) pays 2 to 1.
  //   Column bet (12 numbers in a row) pays 2 to 1. 
  //   18 numbers (1-18) pays even money. 
  //   18 numbers (19-36) pays even money. 
  //   Red or black pays even money. 
  //   Odd or even bets pay even money.

  if(playerBetAmount.value > playerBalance.value) {
    console.log('You do not have enough money to place that bet')
  }

  if(playerBetAmount.value < 0) {
    console.log('You cannot place a negative bet')
  }



}

function spinWheel() {
  randomNumber.value = Math.floor(Math.random() * 37) // Generates a random number between 0 and 36

  if (redNumbers.includes(randomNumber.value)) {
    betColor.value = 'red'
  } else if (randomNumber.value === 0) {
    betColor.value = 'green'
  } else {
    betColor.value = 'black'
  }
}

/* TODO: Check amounts 
If the bet happens on 1-12 and the number is 1-12, the user wins
If the bet happens on 13-24 and the number is 13-24, the user wins
If the bet happens on 25-36 and the number is 25-36, the user wins
If the bet happens on 1-18 and the number is 1-18, the user wins
If the bet happens on 19-36 and the number is 19-36, the user wins
If the bet happens on red and the number is red, the user wins
If the bet happens on black and the number is black, the user wins
If the bet happens on green and the number is green, the user wins
If the bet happens on odd and the number is odd, the user wins
If the bet happens on even and the number is even, the user wins
If the bet happens on a specific number and the number is that number, the user wins
If the bet happens on 1-36 (increments of 3) and the number is that number, the user wins
If the bet happens on 2-35 (increments of 3) and the number is that number, the user wins
If the bet happens on 3-34 (increments of 3) and the number is that number, the user wins
*/
function checkWin() {
  // If the user won round to dealer, set gameWon to true
  // If the user lost round to dealer, set gameWon to false
  if (playerTokenPlacement.value === randomNumber.value) {
    gameWon = true
  } else {
    gameWon = false
  }
}

function updateBalance() {
  // If the user won (gameWon == true), add the winnings to the balance
  // If the user lost (gameWon == false), subtract the bet from the balance

  if (gameWon) {
    playerBalance.value += playerBetAmount.value
  } else {
    playerBalance.value -= playerBetAmount.value
  }
}

</script>
<template>
  <h1>roulette</h1>
  <button @click="incrementBalance(20)">+20</button>
  <button @click="decrementBalance(10)">-10</button>
  <p>{{ playerBalance }}</p>
</template>
