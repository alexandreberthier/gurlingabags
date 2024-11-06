<template>
  <div class="site-wrapper">
    <div v-if="product" class="details-wrapper">
      <div class="left-section">
        <div class="image-wrapper">
          <img :src="getImage(product.image)" :alt="`Bil der Tasche ${product.name}`">
        </div>
      </div>
      <div class="right-section">
        <div class="facts">
          <h1>{{ product.name }}</h1>
          <p>{{formatPrice(product.price)}}</p>
          <DynamicButton text="In den Warenkorb"/>
          <DynamicAccordion
              :accordion-items="accordionItems"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {useCentralStore} from "@/stores/central";
import {computed, type ComputedRef} from "vue";
import type {AccordionContent, Product} from "@/interfaces/Global";
import DynamicButton from "@/components/DynamicButton.vue";
import {getImage} from "@/utils/ImageUtils";
import {formatPrice} from "@/utils/FormatUtils";
import AccordionItem from "@/components/AccordionItem.vue";
import DynamicAccordion from "@/components/DynamicAccordion.vue";

const {id} = defineProps<{
  id: string
}>()

const store = useCentralStore()

const product: ComputedRef<Product | undefined> = computed(() => {
  return store.products.find(product => product.id === id)
})

const accordionItems: ComputedRef<AccordionContent[]> = computed(()=> {
  return store.accordionContent
})

</script>

<style scoped>

.details-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;

  .left-section {
    .image-wrapper {
      border: 1px solid var(--light-gray);
      width: 100%;
      height: 330px;

      img {
        width: 80%;
        height: 80%;
      }
    }
  }

  .right-section {
    display: flex;
    flex-direction: column;
    gap: 32px;

    .facts {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
}

</style>