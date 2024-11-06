<template>
  <div class="accordion-flex">
    <AccordionItem
        v-for="(item,index) in accordionItems"
        :key="item.id"
        :accordion-content="item"
        :show-hidden-content="activeItem === item.id"
        @toggleContent="toggleContent(item.id)"
    />
  </div>
</template>

<script setup lang="ts">

import AccordionItem from "@/components/AccordionItem.vue";
import type {AccordionContent} from "@/interfaces/Global";
import {type Ref, ref} from "vue";

const {accordionItems} = defineProps<{
  accordionItems: AccordionContent[]
}>()

const activeItem: Ref<number | null> = ref(null)

function toggleContent(id: number){
  activeItem.value = activeItem.value === id ? null : id
}
</script>

<style scoped>

.accordion-flex {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

</style>