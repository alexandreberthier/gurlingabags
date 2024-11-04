<template>
 <button class="btn">
   <span>{{text}}</span>
 </button>
</template>

<script setup lang="ts">

const {text} = defineProps<{
  text: string
}>()

</script>

<style scoped>

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px 15px;
  border: none;
  width: 100%;
  background-color: var(--black);
  transition: all 250ms ease-in-out;
  cursor: pointer;

  span {
    color: var(--white)
  }

  &:hover {
    background-color: var(--dark-gray);
  }

}



</style>