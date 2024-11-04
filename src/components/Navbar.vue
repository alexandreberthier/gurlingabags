<template>
  <div class="nav-wrapper">
    <div class="logo-section">
      <div class="image-wrapper">
        <img :src="getImage('img_logo.png')" alt="logo">
      </div>
    </div>
    <div class="link-section">

    </div>
    <div class="icon-section">
      <div class="image-wrapper">
        <img :src="getImage('ic_cart.png')" alt="logo">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {getImage} from "@/utils/ImageUtils";
</script>

<style scoped>

.nav-wrapper {
  box-sizing: border-box;
  height: 100px;
  width: 100%;
  background-color: var(--light-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
}

</style>