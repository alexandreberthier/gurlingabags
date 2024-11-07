<template>
  <div class="button" role="button">
    <div
        @click="$emit('decrease')"
        class="icon-wrapper">
      <img :src="getImage('ic_minus.png')" alt="minus">
    </div>
    <p>{{quantity}}</p>
    <div
        @click="$emit('increase')"
        class="icon-wrapper">
      <img :src="getImage('ic_plus.png')" alt="plus">
    </div>
  </div>
</template>

<script setup lang="ts">

import {getImage} from "@/utils/ImageUtils";

const {quantity}= defineProps<{
  quantity: number
}>()

</script>

<style scoped>

.button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border: 1px solid var(--light-gray);
  width: 100%;
  padding: 2px 10px;

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    cursor: pointer;

    img {
      width: 16px;
      height: 16px;
      transition: all 150ms ease-in-out;
    }

    &:active img {
      transform: scale(1.01);
    }
  }
}

</style>