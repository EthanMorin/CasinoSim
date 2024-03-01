<script setup lang="js">
import { reactive } from 'vue';


class Options {
  constructor(name, value, image) {
    this.name = name;
    this.value = value;
    this.image = image;
  }
}

const wheels = reactive([]);

const cherry = new Options("Cherry", 15, "/slots/Wheel - Cherry.png")
const bells = new Options('Bells', 35, "/slots/Wheel - Bell.png")
const bars = new Options('Bars', 100, "/slots/Wheel - Bars.png")
const sevens = new Options('Sevens', 1000, "/slots/Wheel - Seven.png")

const wheel = [cherry, cherry, cherry, cherry, bells, bells, bells, bars, bars, sevens]

function Spin(){
    var slots = RandomSlots()
    
}

function RandomSlots(){
    return {Slot1: (wheel[Math.floor(Math.random() * wheel.length)]), Slot2: (wheel[Math.floor(Math.random() * wheel.length)]), Slot3: (wheel[Math.floor(Math.random() * wheel.length)])}
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
