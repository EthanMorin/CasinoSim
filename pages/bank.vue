<script setup lang="js">
const { playerBalance, incrementBalance, decrementBalance, loans, incrementLoans, decrementLoans } = useAccount()


const loanBalance = ref(loans)
const currentBalance = ref(playerBalance)
console.log(playerBalance)

var inputMoney = ref(0);

function Withdrawl(){
    if(inputMoney.value < 0){
        alert("You cannot withdraw negative money")
        inputMoney.value = 0
    } else {
    decrementLoans(inputMoney.value)
    incrementBalance(inputMoney.value)
    inputMoney.value = 0

    }

}

function Deposit(){
    if(inputMoney.value > playerBalance.value){
        alert("You cannot deposit more money than you own")
        inputMoney.value = 0
    } else if(inputMoney.value < 0){
        alert("You cannot deposit negative money")
        inputMoney.value = 0
    } else {
        incrementLoans(inputMoney.value)
        decrementBalance(inputMoney.value)
        inputMoney.value = 0
    }
}


</script>
<template>
    <h1>SimBank</h1>
    <div class="loans">${{ loanBalance }}</div>
    <div class="balance"> ${{ currentBalance }}</div>
    <div class="controls">
        <input v-model="inputMoney" id="moneyBox" type="number">
        <button class="button" id="withdrawl" @click="Withdrawl()"()>Withdrawl</button>
        <button class="button" id="deposit" @click="Deposit()">Deposit</button>
    </div>
</template>