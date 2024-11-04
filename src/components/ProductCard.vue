<template>
  <router-link :to="{name: SiteLinks.Details, params: {id: product.id }}">
    <div class="card-wrapper">
      <div class="top-section">
        <img :src="getImage(product.image)" alt="tasche">
        <div class="slider">
          <p>Details ansehen</p>
        </div>
      </div>
      <div class="bottom-section">
        <p class="product-name">{{ product.name }}</p>
        <div class="divider"></div>
        <p class="price">{{formatPrice(product.price)}}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">

import {getImage} from "@/utils/ImageUtils";
import {SiteLinks} from "@/enums/SiteLinks";
import type {Product} from "@/interfaces/Global";
import {formatPrice} from "@/utils/FormatUtils";

const {product} = defineProps<{
  product: Product
}>()

</script>

<style scoped>

.card-wrapper {
  width: 300px;
  height: 330px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    img {
      width: 200px;
      height: 200px;
    }

    .slider {
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(100%);
      opacity: 0;
      transition: all 250ms ease-in-out;
      height: 35px;
      width: 100%;
      background-color: rgba(255, 255, 555, 0.5);

      p {
        font-size: 14px;
      }
    }

  }

  .bottom-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    .divider {
      height: 1px;
      width: 30px;
      background-color: var(--black);
    }
  }

  &:hover {
    .top-section {
      .slider {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}

@media (min-width: 1440px) {
  .card-wrapper {
    width: 350px;
    height: 380px;

    .top-section {
      img {
        width: 250px;
        height: 250px;
      }

      .slider {
        height: 50px;
      }
    }
  }
}



</style>