<template>
  <div class="nav-wrapper">
    <div class="logo-section">
      <div class="image-wrapper">
        <img :src="getImage('img_logo.png')" alt="logo">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {getImage} from "@/utils/ImageUtils";
</script>

<style scoped>

</style>