<template>
  <div class="item-wrapper">
    <div
        @click="$emit('toggleContent')"
        class="visible-section">
      <p>{{ accordionContent.header }}</p>
      <div class="icon-wrapper">
        <img :src="getImage(showHiddenContent ? 'ic_minus.png' : 'ic_plus.png')" alt="icon">
      </div>
    </div>
    <div :class="['hidden-section', {'show': showHiddenContent}]">
      <p v-html="accordionContent.hiddenContent"></p>
    </div>
  </div>
</template>


<script setup lang="ts">

import {getImage} from "@/utils/ImageUtils";
import type {AccordionContent} from "@/interfaces/Global";

const {accordionContent, showHiddenContent }  = defineProps<{
  accordionContent: AccordionContent,
  showHiddenContent: boolean
}>()


</script>

<style scoped>
.item-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.visible-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px 0;
  user-select: none;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper img {
  width: 16px;
  height: 16px;
}

.hidden-section {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 300ms ease, opacity 150ms ease;
}

.hidden-section.show {
  max-height: 500px;
  opacity: 1;
}
</style>
