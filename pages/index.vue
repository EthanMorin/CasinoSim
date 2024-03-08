<template>
	<div class="game-display">
		<div class="game-panel">
			<NuxtLink to="/slots">
				<div class="title-wrapper">
					<h1>Slots</h1>
				</div>
				<img src="/public/card-back.png" alt="image of slots" />
			</NuxtLink>
		</div>
		<div class="game-panel">
			<NuxtLink to="/blackjack">
				<div class="title-wrapper">
					<h1>Black Jack</h1>
				</div>
				<img src="/public/card-back.png" alt="image of blackjack" />
			</NuxtLink>
		</div>
		<div class="game-panel">
			<NuxtLink to="/roulette">
				<div class="title-wrapper">
					<h1>Roulette</h1>
				</div>
				<img src="/public/card-back.png" alt="image of roulette" />
			</NuxtLink>
		</div>
	</div>
</template>

<style scoped>
a {
	text-decoration: none;
	color: #F91E2E;
}

.game-display {
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 100%;
	width: 100%;
}
.game-panel {
	display: flex;
	justify-content: center;
	margin: 5px;
	border: solid 2px grey;
	border-radius: 4px;
	background-color: white;
	width: 28%;
	height: 80%;
	text-align: center;
}

/* Make fit the whole of the .game-panel background */
.title-wrapper {
	margin-top: -2%;
	width: 100%;
	border: solid 2px black;
	margin-bottom: 10%;
}
</style>
