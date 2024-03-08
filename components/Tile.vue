<script setup>
const props = defineProps({
  number,
  color,
});

const value = ref(0);

function placeChip() {}
</script>

<template>
  <div>
    <div v-if="value == 0">
      
    </div>
    <div v-else></div>
  </div>
</template>

<style scoped></style>
