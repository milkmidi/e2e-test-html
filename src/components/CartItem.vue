<script setup lang="ts">
// eslint-disable-next-line no-undef
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
  <div class="border p-4 space-y-2">
    <h3 class="text-3xl font-bold">{{ title }}</h3>
    <h3 class="text-xl">${{ price }}</h3>
    <button class="btn bg-info text-white border-0 hover:brightness-110"> ADD TO CART </button>
  </div>
</template>
