<script setup lang="ts">
const { playerBalance } = useAccount();

const bal = ref(playerBalance);
</script>
<template>
	<Nav>
		<ul>
			<li><NuxtLink to="/">Home</NuxtLink></li>
			<li><NuxtLink to="/slots">Slots</NuxtLink></li>
			<li><NuxtLink to="/blackjack">BlackJack</NuxtLink></li>
			<li><NuxtLink to="/roulette">Roulette</NuxtLink></li>
			<li><NuxtLink to="/bank">Bank</NuxtLink></li>
		</ul>
		<p v-text="'Balance: ' + bal"></p>
	</Nav>
</template>
<style>
nav ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #333;
}

nav ul li {
	float: left;
}

nav ul li a {
	display: block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
}

nav ul li a:hover {
	background-color: #111;
}
</style>
