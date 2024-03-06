<script setup lang="ts"></script>
<template>
	<nav>
		<Navbar />
	</nav>
	<div class="content">
		<NuxtPage />
	</div>
</template>
<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } 
</style>
