<template>
  <h1>Man hinh choi game</h1>
  <CardFlip
    v-for="(card, index) in cardsContext"
    :key="index"
    :imgBackFaceUrl="'images/' + card + '.png'"
    :card="{ index, card }"
    @onFlip="checkRule"
    ref="input"
  />
</template>

<script setup>
import { ref } from 'vue'
import CardFlip from './Card.vue'

const rule = ref([])
const input = ref([])
const props = defineProps({
  cardsContext: {
    type: Array,
    default: () => []
  }
})
const checkRule = card => {
  if (rule.value.length === 2) return false
  rule.value.push(card)

  if (rule.value.length === 2 && rule.value[0].card === rule.value[1].card) {
    input.value[rule.value[1].index].onChangeDisable()
    input.value[rule.value[0].index].onChangeDisable()
    rule.value = []
  } else if (
    rule.value.length === 2 &&
    rule.value[0].card !== rule.value[1].card
  ) {
    console.log('🚀 >>>>> checkRule >>>>> Wrong....')
    setTimeout(() => {
      input.value[rule.value[1].index].onFlipBackCard()
      input.value[rule.value[0].index].onFlipBackCard()
      rule.value = []
    }, 500)
  }
}
</script>

<style></style>
