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
          <p>{{ formatPrice(product.price) }}</p>

          <div class="button-wrapper">
            <DynamicCartQuantity
                :quantity="quantity"
                @decrease="decreaseProductQuantity"
                @increase="increaseProductQuantity"
            />
            <DynamicButton
                @click="store.addProduct(product, quantity)"
                text="In den Warenkorb"
            />
          </div>
          <p>{{ product.desc }}</p>
          <DynamicAccordion
              :accordion-items="accordionItems"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {useCentralStore} from "@/stores/central";
import {computed, type ComputedRef, type Ref, ref} from "vue";
import type {AccordionContent, Product} from "@/interfaces/Global";
import DynamicButton from "@/components/DynamicButton.vue";
import {getImage} from "@/utils/ImageUtils";
import {formatPrice} from "@/utils/FormatUtils";
import DynamicAccordion from "@/components/DynamicAccordion.vue";
import DynamicCartQuantity from "@/components/DynamicCartQuantity.vue";

const {id} = defineProps<{
  id: string
}>()

const store = useCentralStore()

const product: ComputedRef<Product | undefined> = computed(() => {
  return store.products.find(product => product.id === id)
})

const accordionItems: ComputedRef<AccordionContent[]> = computed(() => {
  return store.accordionContent
})

const quantity: Ref<number> = ref(1)

function increaseProductQuantity() {
  if (quantity.value < 5) {
    quantity.value++
  }
}

function decreaseProductQuantity() {
  if (quantity.value > 1) {
    quantity.value--
  }
}

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

      .button-wrapper{
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }
  }
}

@media (min-width: 740px) {
  .details-wrapper {
    .left-section {
      .image-wrapper {
        img {
          height: 80%;
          width: auto;
        }
      }
    }
  }
}

@media (min-width: 1200px) {
  .details-wrapper {
    flex-direction: row;
    .left-section {
      width: 50%;
      .image-wrapper {
        width: 100%;
        height: 500px;

        img {
          width: auto;
          height: 80%;
        }
      }
    }

    .right-section {
      width: 50%;
      .facts {
        gap: 32px;
      }
    }
  }
}

@media (min-width: 1440px) {
  .details-wrapper {
    flex-direction: row;
    .left-section {
      width: 40%;
      .image-wrapper {
        width: 100%;
        height: 550px;

        img {
          width: auto;
          height: 80%;
        }
      }
    }

    .right-section {
      width: 60%;
      .facts {
        gap: 32px;

        .button-wrapper {
          width: 320px;
        }
      }
    }
  }
}


</style>