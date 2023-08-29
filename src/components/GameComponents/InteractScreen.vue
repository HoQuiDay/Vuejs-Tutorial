<template>
  <div class="screen">
    <div class="screen__inner" :style="{ width: widthScreen + 'px' }">
      <CardFlip
        v-for="(card, index) in cardsContext"
        :key="index"
        :imgBackFaceUrl="'images/' + card + '.png'"
        :card="{ index, card }"
        @onFlip="checkRule"
        ref="input"
        :height="height"
        :width="width"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import CardFlip from './Card.vue'

const rule = ref([])
const input = ref([])
const height = ref(0)
const width = ref(0)

height.value = (920 - 16 * 4) / Math.sqrt(props.cardsContext.length) - 16

width.value = (height.value * 3) / 4

const widthScreen = computed(
  () => ((height.value * 3) / 4 + 16) * Math.sqrt(props.cardsContext.length)
)

const heightScreen = computed(
  () => ((height.value * 3) / 4) * Math.sqrt(props.cardsContext.length)
)
const emit = defineEmits(['onFinish'])

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
    // kiem tra cac thanh phan disable trong element
    const disableElements = document.querySelectorAll('.screen .card.disable')
    console.log('🚀 >>>>> checkRule >>>>> disableElements:', disableElements)
    if (
      disableElements &&
      disableElements.length === props.cardsContext.length - 2
    ) {
      setTimeout(() => {
        emit('onFinish')
      }, 900)
    }
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

<style scoped>
.screen {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background: var(--dark);
  color: var(--light);
}
.screen__inner {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
}
</style>
