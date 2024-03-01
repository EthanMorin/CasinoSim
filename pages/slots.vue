<script setup lang="js">
import { onMounted, reactive, shallowReactive } from 'vue';


class Options {
  constructor(name, value, image) {
    this.name = name;
    this.value = value;
    this.image = image;
  }
}

const wheels = ref(["","",""]);

const cherry = new Options("Cherry", 15, "/slots/Wheel - Cherry.png")
const bells = new Options('Bells', 35, "/slots/Wheel - Bell.png")
const bars = new Options('Bars', 100, "/slots/Wheel - Bars.png")
const sevens = new Options('Sevens', 1000, "/slots/Wheel - Seven.png")

const wheel = [cherry, cherry, cherry, cherry, bells, bells, bells, bars, bars, sevens]

function Spin(){
    var slots = RandomSlots()
    
    //SET IMAGE
    wheels.value[0] = slots.Slot1.image
    wheels.value[1] = slots.Slot2.image
    wheels.value[2] = slots.Slot3.image
}

function CheckWin(){

}

function RandomSlots(){
    //RANDOMIZE THE SLOTS ON THE WHEELS
    return {Slot1: (wheel[Math.floor(Math.random() * wheel.length)]), Slot2: (wheel[Math.floor(Math.random() * wheel.length)]), Slot3: (wheel[Math.floor(Math.random() * wheel.length)])}
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
		<p>5 Coins</p>
		<button @click="Spin()">Spin</button>
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
