<template>
  <div class="site-wrapper">
    <h1>Details</h1>
    <div v-if="product" class="details-wrapper">
      <h1>{{product.name}}</h1>
    </div>
   >
  </div>
</template>

<script setup lang="ts">
import {useCentralStore} from "@/stores/central";
import {computed, type ComputedRef} from "vue";
import type {Product} from "@/interfaces/Global";

const {id} = defineProps<{
  id: string
}>()

const store = useCentralStore()

const product: ComputedRef<Product | undefined> = computed(()=> {
  return store.products.find(product => product.id === id)
})

</script>

<style scoped>

</style>