<template>
  <div
    class="card"
    :class="{ disable: isDisable }"
    :style="{
      width: width + 'px',
      height: height + 'px',
      perspective: width * 2
    }"
  >
    <div
      class="card__inner"
      :class="{ 'is-flipped': isFlipped }"
      @click="onToggleFlipCard"
    >
      <div class="card__face card__face--front">
        <div
          class="card__content"
          :style="{ backgroundSize: `${width / 3}px ${width / 3}px` }"
        ></div>
      </div>

      <div class="card__face card__face--back">
        <!-- dung noi chuoi de chen link hinh theo props vao hinh -->
        <div
          class="card__content"
          :style="{
            backgroundImage: 'url(/src/assets/' + imgBackFaceUrl + ')'
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const isFlipped = ref(false)
const isDisable = ref(false)
const emit = defineEmits(['onFlip'])

const props = defineProps({
  card: {
    type: [String, Number, Object, Array],
    required: true
  },
  imgBackFaceUrl: {
    type: String,
    required: true
  },
  width: Number,
  height: Number
})

function onToggleFlipCard() {
  if (isDisable.value) return false
  isFlipped.value = !isFlipped.value
  emit('onFlip', props.card)
}
function onFlipBackCard() {
  isFlipped.value = false
}
function onChangeDisable() {
  isDisable.value = true
}
defineExpose({
  onFlipBackCard,
  onChangeDisable
})
</script>

<style scoped>
.card {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.card__inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}
.card.disable .card__inner {
  cursor: default;
}
.card__inner.is-flipped {
  transform: rotateY(-180deg);
}
.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 3px 18px 3px rgba(0, 0, 0, 0.2);
}

.card__face--front .card__content {
  /* nen theo link va ko lap , can giua doc va ngang */
  background: url(../../assets/images/icon_back.png) no-repeat center center;
  height: 100%;
  width: 100%;
}
.card__face--back {
  background-color: #f3f3f3;
  transform: rotateY(-180deg);
}
.card__face--back .card__content {
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100%;
}
</style>
