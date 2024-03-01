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

<template>
  <div class="wheels">
    <div class="wheel">
      {/* Display wheel result */}
    </div>
    <div class="wheel">
      {/* Display wheel result */}
    </div>
    <div class="wheel">
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