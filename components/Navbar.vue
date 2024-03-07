<script setup lang="ts">
const { playerBalance } = useAccount();

const bal = ref(playerBalance);
</script>
<template>
	<nav>
		<ul>
			<li><NuxtLink to="/">Home</NuxtLink></li>
			<li><NuxtLink to="/slots">Slots</NuxtLink></li>
			<li><NuxtLink to="/blackjack">BlackJack</NuxtLink></li>
			<li><NuxtLink to="/roulette">Roulette</NuxtLink></li>
			<li><NuxtLink to="/bank">Bank</NuxtLink></li>
		</ul>
		<p v-text="'Balance: ' + bal"></p>
	</nav>
</template>
<style>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%; /* Ensure the nav spans the full width of the viewport */
    background-color: #333;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex; /* Keeps the list items aligned horizontally */
    width: 100%; /* Ensures the ul takes up the full width of the nav */
}

nav ul li {
    flex: 1; /* This will ensure each li takes up an equal amount of space */
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
