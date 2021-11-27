<script setup lang="ts">
  defineProps({
    title: String,
    price: Number,
  });
</script>

<template>
  <div class="border p-4">
    <h3>{{ title }}</h3>
    <h3>${{ price }}</h3>
    <button class="btn btn-info"> ADD TO CART </button>
  </div>
</template>
