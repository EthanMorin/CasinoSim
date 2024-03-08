<script setup>
const { playerBalance, incrementBalance, decrementBalance } = useAccount();

class Options {
  constructor(name, value, image) {
    this.name = name;
    this.value = value;
    this.image = image;
  }
}

var bet = ref(5);
var payout = ref();
var winAmount = ref();

const wheels = ref(['', '', '']);

const cherry = new Options('Cherry', 15, '/slots/slot-machine-cherry.png');
const bells = new Options('Bells', 35, '/slots/slot-machine-bell.png');
const bars = new Options('Bars', 100, '/slots/slot-machine-bars.png');
const sevens = new Options('Sevens', 1000, '/slots/slot-machine-seven.png');

const wheel = [
  cherry,
  cherry,
  cherry,
  cherry,
  bells,
  bells,
  bells,
  bars,
  bars,
  sevens,
];

function Spin() {
  decrementBalance(bet.value);
  var slots = RandomSlots();

  //SET IMAGE
  wheels.value[0] = slots.Slot1.image;
  wheels.value[1] = slots.Slot2.image;
  wheels.value[2] = slots.Slot3.image;

  CheckWin(slots);
}

function CheckWin(slots) {
  if (
    slots.Slot1.name === slots.Slot2.name &&
    slots.Slot1.name === slots.Slot3.name
  ) {
    payout = bet.value * slots.Slot1.value;
		winAmount = "you win $" + payout

    //TODO ADD PAYOUT TO USER MONEY
    incrementBalance(payout);
    //TRIGGER WIN PROMPT/TRY AGAIN
  } else {
		payout = 0
		winAmount = "no money gained"
    //TRIGGER LOSE PROMPT/TRY AGAIN
  }
}

function RandomSlots() {
  //RANDOMIZE THE SLOTS ON THE WHEELS
  return {
    Slot1: wheel[Math.floor(Math.random() * wheel.length)],
    Slot2: wheel[Math.floor(Math.random() * wheel.length)],
    Slot3: wheel[Math.floor(Math.random() * wheel.length)],
  };
}

function IncrementBet() {
  bet.value += 5;
}

function DecrementBet() {
  //CANT BE OR GO UNDER 0
  if (bet.value - 5 != 0) {
    bet.value -= 5;
  }
}
</script>

<template>
  <div class="roulette-wrapper">
    <div class="wheels">
      <div class="wheel" id="wheel1">
        <img v-if="wheels[0] !== null" :src="wheels[0]" />
      </div>
      <div class="wheel" id="wheel2">
        <img v-if="wheels[1] !== null" :src="wheels[1]" />
      </div>
      <div class="wheel" id="wheel3">
        <img v-if="wheels[2] !== null" :src="wheels[2]" />
      </div>
    </div>
		<h3>{{ winAmount }}</h3>
    <h2>${{ bet }}</h2>
    <div class="controls-wrapper">
      <div class="controls">
        <div class="bet-btn">
          <button @click="DecrementBet()">- $5</button>
        </div>
        <button @click="Spin()">Spin!</button>
        <div class="bet-btn">
          <button @click="IncrementBet()">+ $5</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.roulette-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.wheels {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
}

.wheel {
  width: 100px;
  height: 100px;
  background-color: #18202d;
  border: 2px solid #263348;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  text-align: center;
}

.wheel > img {
  height: 75%;
}
.controls-wrapper {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.controls {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.controls p {
  margin: 0;
}
</style>
