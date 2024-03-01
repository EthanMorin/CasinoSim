<script setup>
const { playerBalance, incrementBalance, decrementBalance } = useAccount();
</script>

<template>
  <h1>roulette</h1>
  <button @click="incrementBalance(20)">+20</button>
  <button @click="decrementBalance(10)">-10</button>
  <p>{{ playerBalance }}</p>
</template>
