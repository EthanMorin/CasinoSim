<script setup lang="js">
const { playerBalance, incrementBalance, decrementBalance, loans } = useAccount()

const loanBalance = ref(loans)
const currentBalance = ref(playerBalance)
console.log(playerBalance)


</script>
<template>
    <h1>bank</h1>
    <div class="loans" v-text="loanBalance"></div>
    <div class="balance" v-text="currentBalance">
    </div>
    <div class="controls">
        <input id="moneyBox" type="number">
        <button class="button" id="withdrawl">Withdrawl</button>
        <button class="button" id="deposit">Deposit</button>
    </div>
</template>