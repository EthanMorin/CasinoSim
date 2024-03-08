<script setup>
const props = defineProps({
  number: Number,
  color: String,
});

const value = ref(0);
</script>

<template>
  <div @click="value += 5">
    <div v-if="value == 0">
      <div>{{ props.number }}</div>
    </div>
    <div v-else class="tile">
      <div class="chip">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.tile {
  display: flex;
  align-items: center;
  justify-content: center;
}
.chip {
  width: 30px;
  height: 30px;
  border-radius: 25px;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
