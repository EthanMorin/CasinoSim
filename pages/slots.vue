<script setup lang="js">
import { onMounted, reactive, shallowReactive } from 'vue';


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
    wheels.value[0] = slots.Slot1.image
    wheels.value[1] = slots.Slot2.image
    wheels.value[2] = slots.Slot3.image
}

function RandomSlots(){
    return {Slot1: (wheel[Math.floor(Math.random() * wheel.length)]), Slot2: (wheel[Math.floor(Math.random() * wheel.length)]), Slot3: (wheel[Math.floor(Math.random() * wheel.length)])}
}
onMounted(()=>{
    Spin()
})

</script>
<template>
  <div class="wheels">
    <div class="wheel" id="wheel1">
        <img v-if="wheels[0] !== null" :src="wheels[0]">
      {/* Display wheel result */}
    </div>
    <div class="wheel" id="wheel2">
        <img v-if="wheels[1] !== null" :src="wheels[1]">
      {/* Display wheel result */}
    </div>
    <div class="wheel" id="wheel3">
        <img v-if="wheels[2] !== null" :src="wheels[2]">
      {/* Display wheel result */}
    </div>
  </div>
  <div class="controls">
    <p>5 Coins</p>
    <button>Spin</button>
  </div>
</template>
<style>
  
</style>