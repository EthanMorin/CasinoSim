<script setup>
let gameOver = false
let gameWon = false
const betColor = ref('black')
const randomNumber = ref(0);


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
  // Get the user's bet from the input field
  // If the bet is greater than the balance, set the bet to the balance
  // If the bet is less than 0, set the bet to 0
  // If the bet is greater than 0 and less than or equal to the balance, continue
  // If the bet is 0, set gameOver to true
}

function spinWheel() {
  // Generate a random number between 0 and 36
  // If the number is 0, set the color to green
  // If the number is even, set the color to black
  // If the number is odd, set the color to red

  randomNumber.value = Math.floor(Math.random() * 37) // Generates a random number between 0 and 36

  if (randomNumber === 0) {
    betColor.value = 'green'
  } else if (randomNumber % 2 === 0) {
    betColor.value = 'black'
  } else {
    betColor.value = 'red'
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
  if (betColor === 'green') {
    gameWon = true
  } else if (betColor === 'black' && betColor === 'black') {
    gameWon = true
  } else if (betColor === 'red' && betColor === 'red') {
    gameWon = true
  } else {
    gameWon = false
  }
}

function updateBalance() {
  // If the user won (gameWon == true), add the winnings to the balance
  // If the user lost (gameWon == false), subtract the bet from the balance
}

gameLoop()

</script>
<template>
  <h1>roulette</h1>
</template>