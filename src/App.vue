<template>
  <div id="app"><TheHeader /></div>
  <router-view />
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default { name: 'App', components: { TheHeader } };
</script>

<style></style>
