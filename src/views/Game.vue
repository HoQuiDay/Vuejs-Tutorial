<template>
  <MainScreen @onStart="onHandleConfig" v-if="statusMatch === 'default'" />
  <InteractScreen
    v-if="statusMatch === 'match'"
    :cardsContext="settings.cardsContext"
    @onFinish="onGetResult"
  />
  <ResultScreen
    v-if="statusMatch === 'result'"
    :timer="timer"
    @onStartAgain="statusMatch = 'default'"
  />
  <!-- <result-screen /> -->
</template>

<script setup>
import { ref } from 'vue'
import { shuffled } from '../utils/array'
import MainScreen from '../components/GameComponents/MainScreen.vue'
import InteractScreen from '../components/GameComponents/InteractScreen.vue'
import ResultScreen from '../components/GameComponents/ResultScreen.vue'
const settings = ref({
  totalBlocks: 0,
  cardsContext: [],
  startedAt: null
})
const timer = ref(0)
const statusMatch = ref('default')
const onHandleConfig = config => {
  statusMatch.value = 'match'
  settings.value.totalBlocks = config.totalBlocks
  //tao mang co chieu dai = toal / 2 vaf so thu tu cac phan tu tang 1 cho moi index
  const firstCards = Array.from(
    { length: settings.value.totalBlocks / 2 },
    (_, i) => i + 1
  )
  const secondCards = [...firstCards]
  const fullCard = [...firstCards, ...secondCards]
  settings.value.cardsContext = shuffled(shuffled(shuffled(fullCard)))
  settings.value.startedAt = new Date().getTime()
}
const onGetResult = () => {
  timer.value = new Date().getTime() - settings.value.startedAt
  statusMatch.value = 'result'
  settings.value = {
    totalBlocks: 0,
    cardsContext: [],
    startedAt: null
  }
}
</script>

<style></style>
