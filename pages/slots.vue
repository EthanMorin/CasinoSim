<script setup lang="js">


const { playerBalance, incrementBalance, decrementBalance } = useAccount()

class Options {
  constructor(name, value, image) {
    this.name = name;
    this.value = value;
    this.image = image;
  }
}

var bet = ref(5)
var payout = ref()

const wheels = ref(["","",""]);

const cherry = new Options("Cherry", 15, "/slots/slot-machine-cherry.png")
const bells = new Options('Bells', 35, "/slots/slot-machine-bell.png")
const bars = new Options('Bars', 100, "/slots/slot-machine-bars.png")
const sevens = new Options('Sevens', 1000, "/slots/slot-machine-seven.png")

const wheel = [cherry, cherry, cherry, cherry, bells, bells, bells, bars, bars, sevens]

function Spin(){
	//decrementBalance(bet)
	var slots = RandomSlots()

	//SET IMAGE
	wheels.value[0] = slots.Slot1.image
	wheels.value[1] = slots.Slot2.image
	wheels.value[2] = slots.Slot3.image

	CheckWin(slots)
}

function CheckWin(slots){
	if(slots.Slot1.name === slots.Slot2.name && slots.Slot1.name === slots.Slot3.name){
		payout = bet.value * slots.Slot1.value
		console.log("3 in a row: you win $" + payout)

		//TODO ADD PAYOUT TO USER MONEY
		incrementBalance(payout)
		console.log(playerBalance)
		//TRIGGER WIN PROMPT/TRY AGAIN
	} else{
		console.log("L bozo")
		//TRIGGER LOSE PROMPT/TRY AGAIN
	}
}

function RandomSlots(){
    //RANDOMIZE THE SLOTS ON THE WHEELS
    return {Slot1: (wheel[Math.floor(Math.random() * wheel.length)]), Slot2: (wheel[Math.floor(Math.random() * wheel.length)]), Slot3: (wheel[Math.floor(Math.random() * wheel.length)])}
}

function IncrementBet(){
	bet.value += 5
}

function DecrementBet(){
	//CANT BE OR GO UNDER 0
	if(bet.value-5 != 0){
		bet.value -= 5
	}
}
</script>

<template>
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
	<div class="controls">
		<span>
			<button @click="IncrementBet()"> + $5 </button>
			<h2 v-text="bet"></h2>
			<button @click="DecrementBet()"> - $5 </button>
		</span>
		<button @click="Spin()">Spin!</button>
	</div>
</template>
<style>
.wheels {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	padding: 20px;
	background-color: #f0f0f0;
	border-radius: 10px;
}

.wheel {
	width: 100px;
	height: 100px;
	background-color: #ffffff;
	border: 2px solid #000000;
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

.controls {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	padding: 20px;
	background-color: #f0f0f0;
	border-radius: 10px;
}

.controls p {
	margin: 0;
}

.controls span {
	display: flex;
	flex-direction: row;
}

.controls button {
	padding: 10px 20px;
	font-size: 16px;
	background-color: #007bff;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.controls button:hover {
	background-color: #0056b3;
}
</style>
