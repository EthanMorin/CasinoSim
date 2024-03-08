<template>
	<div class="game-display">
		<div class="game-panel">
			<div class="game-panel-content">
				<NuxtLink to="/slots">
					<div class="title-wrapper">
						<h1>Slots</h1>
					</div>
					<img src="/public/card-back.png" alt="image of slots" />
				</NuxtLink>
			</div>
		</div>
		<div class="game-panel">
			<div class="game-panel-content">
				<NuxtLink to="/blackjack">
					<div class="title-wrapper">
						<h1>Black Jack</h1>
					</div>
					<img src="/public/card-back.png" alt="image of blackjack" />
				</NuxtLink>
			</div>
		</div>
		<div class="game-panel">
			<div class="game-panel-content">
				<NuxtLink to="/roulette">
					<div class="title-wrapper">
						<h1>Roulette</h1>
					</div>
					<img src="/public/card-back.png" alt="image of roulette" />
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style scoped>
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

.game-panel-content {
	width: 100%;
	a {
		text-decoration: none;
		color: #f91e2e;
	}

	.title-wrapper {
		width: 100%;
		border-bottom: solid 2px black;
		margin-bottom: 10%;
	}

	img {
		/* Fit to the card */
		/* width: 100%; */
	}
}
</style>
