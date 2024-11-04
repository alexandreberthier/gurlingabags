<template>
  <div class="item-wrapper">
    <div
        @click="toggleContent"
        class="visible-section">
      <p>Info</p>
      <div class="icon-wrapper">
        <img :src="getImage(showHiddenContent ? 'ic_minus.png' : 'ic_plus.png')" alt="icon">
      </div>
    </div>
    <div :class="['hidden-section', {'show': showHiddenContent}]">
      <p>asdasdasdasdadsasd</p>
    </div>
  </div>
</template>

<script setup lang="ts">

import {getImage} from "@/utils/ImageUtils";
import {ref} from "vue";

const showHiddenContent = ref(false)

function toggleContent() {
  showHiddenContent.value = !showHiddenContent.value
}
</script>

<style scoped>
.item-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;


  .visible-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    padding: 20px 0;

    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }

  .hidden-section {
    transform: translateY(-100%);
    opacity: 0;
    transition: all 300ms ease-in-out;
    overflow: hidden;

    &.show {
      transform: translateY(0);
      opacity: 1;
    }
  }
}

</style>