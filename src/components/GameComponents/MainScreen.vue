<template>
  <div class="main_screen">
    <h1>POKE MEMORIES</h1>
    <h3>Select mode to start game</h3>
    <div>
      <button @click="onStart(16)"><span>4X4</span> <span>Easy</span></button>
      <button @click="onStart(36)"><span>6X6</span> <span>Normal</span></button>
      <button @click="onStart(64)"><span>8X8</span> <span>Hard</span></button>
      <button @click="onStart(100)">
        <span>10X10</span> <span>Super Hard</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['onStart'])

function onStart(totalBlocks) {
  emit('onStart', { totalBlocks })
}
</script>

<style scoped>
.main_screen {
  font-family: 'Odibee Sans', cursive;
}
</style>
