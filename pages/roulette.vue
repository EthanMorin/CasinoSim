<script setup>
const bet = reactive({
  chips: [],
  mods: [
    { name: 'black', modifier: 1 },
    { name: 'red', modifier: 1 },
  ],
});

const rowThree = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
const rowTwo = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
const rowOne = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
const redNumbers = [
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
];

function placeChip(num, modNames = []) {
  const chip = {
    number: num,
    amount: 5,
    mod: modNames,
  };
  bet.chips.push(chip);
  spinWheel();
}

function spinWheel() {
  bet.chips.forEach((chip) => console.log(chip.number, chip.amount));
}

function printBet() {
  bet.chips.forEach((chip) => {
    console.log(`number: ${chip.number}\namount: ${chip.amount}`);
  });
}

function calculateWinnings(winningNumber) {
  bet.chips.forEach((chip) => {
    let payoutMultiplier = 1;
    chip.mods.forEach((modName) => {
      let mod = bet.mods.find((mod) => mod.name === modName);
      if (mod) {
        // Check if the mod applies to the winning number
        // and adjust the payoutMultiplier accordingly
      }
    });
    // Calculate the final payout based on the multiplier and chip amount
  });
}
</script>

<template>
  <div class="roulette-wrapper">
    <div class="board-wrapper">
      <div class="zero-question-mark">
        <div class="zero-space">00</div>
        <div class="zero-space">0</div>
      </div>
      <div class="board">
        <div class="row">
          <Tile v-for="num in rowThree" class="space" :number="num">
            {{ num }}
          </Tile>
        </div>
        <div class="row">
          <Tile v-for="num in rowTwo" class="space" :number="num">
            {{ num }}
          </Tile>
        </div>
        <div class="row">
          <Tile v-for="num in rowOne" class="space" :number="num">
            {{ num }}
          </Tile>
        </div>
        <div class="twelve-row">
          <div class="twelve-space">1st 12</div>
          <div class="twelve-space">2nd 12</div>
          <div class="twelve-space">3rd 12</div>
        </div>
        <div class="mod-row">
          <div class="mod-space">1st 12</div>
          <div class="mod-space">2nd 12</div>
          <div class="mod-space">3rd 12</div>
          <div class="mod-space">1st 12</div>
          <div class="mod-space">2nd 12</div>
          <div class="mod-space">3rd 12</div>
        </div>
      </div>
      <div class="col-mod">
        <div class="space">3rd</div>
        <div class="space">2nd</div>
        <div class="space">1st</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.roulette-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.board-wrapper {
  display: flex;
  flex-direction: row;
}
.board {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
}
.twelve-row {
  display: flex;
  width: 100%;
  justify-content: center;
}
.mod-row {
  display: flex;
  flex-direction: row;
}
.zero-space {
  height: 28.5%;
  width: 50px;
  border: solid 2px white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.space {
  border: solid 2px white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.twelve-space {
  border: solid 2px white;
  width: 33%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mod-space {
  width: 16.67%;
  border: solid 2px white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
