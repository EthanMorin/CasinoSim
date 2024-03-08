<script setup lang="js">
const { playerBalance, incrementBalance, decrementBalance, loans } = useAccount()

const loanBalance = ref(loans)
const currentBalance = ref(playerBalance)
console.log(playerBalance)

var inputMoney = ref(0);

function Withdrawl(){
    console.log(inputMoney)
}

function Deposit(){
    
}

</script>
<template>
    <h1>SimBank</h1>
    <div class="loans" v-text="loanBalance"></div>
    <div class="balance" v-text="currentBalance">
    </div>
    <div class="controls">
        <input v-text="inputMoney" id="moneyBox" type="number">
        <button class="button" id="withdrawl" @click="Withdrawl()"()>Withdrawl</button>
        <button class="button" id="deposit" @click="Deposit()">Deposit</button>
    </div>
</template>