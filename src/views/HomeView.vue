<template>
  <div class="site-wrapper">
    <h1>Unsere Taschen</h1>
    <div class="product-flex">
      <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import ProductCard from "@/components/ProductCard.vue";
import {useCentralStore} from "@/stores/central";
import {computed} from "vue";

const store = useCentralStore()

const products = computed(() => {
  return store.products
})


</script>

<style scoped>

.product-flex {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

@media (min-width: 1440px) {
  .product-flex {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }
}

</style>