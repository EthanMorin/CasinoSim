<script setup lang="js">

class Options {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

const cherry = new Options("Cherry", 15)
const bells = new Options('Bells', 35)
const bars = new Options('Bars', 100)
const sevens = new Options('Sevens', 1000)

const wheel = [cherry, cherry, cherry, cherry, bells, bells, bells, bars, bars, sevens]

function Spin(){
    RandomSlots()

}

function RandomSlots(){
    var slot1 = wheel[Math.floor(Math.random() * wheel.length)]
    var slot2 = wheel[Math.floor(Math.random() * wheel.length)]
    var slot3 = wheel[Math.floor(Math.random() * wheel.length)]

    return {Slot1: slot1, Slot2: slot2, Slot3: slot3}
}
</script>
<template>
	<div class="wheels">
		<div class="wheel" id="wheel1">
			{{}}
		</div>
		<div class="wheel" id="wheel2">
			{{}}
		</div>
		<div class="wheel" id="wheel3">
			{{}}
		</div>
	</div>
	<div class="controls">
		<p>5 Coins</p>
		<button>Spin</button>
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

.controls {
	display: flex;
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
