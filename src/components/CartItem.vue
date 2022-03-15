<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="space-y-2 border p-4">
    <h3 class="text-3xl font-bold">{{ title }}</h3>
    <h3 class="text-xl">${{ price }}</h3>
    <button class="btn border-0 bg-info text-white hover:brightness-110"> ADD TO CART </button>
  </div>
</template>
