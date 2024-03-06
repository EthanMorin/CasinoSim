<script setup lang="js">
const { playerBalance, incrementBalance, decrementBalance } = useAccount()

const currentBalance = ref(playerBalance)
console.log(playerBalance)


</script>
<template>
    <h1>bank</h1>
    <div class="loans"></div>
    <div class="balance" v-text="currentBalance">
    </div>
    <div class="controls">
        <input id="moneyBox" type="number">
    </div>
</template>