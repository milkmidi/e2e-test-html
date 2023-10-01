<script setup lang="ts">
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
  <section class="space-y-2 my-0" data-name="CartItem">
    <h3 class="text-3xl font-bold">{{ title }}</h3>
    <h3 class="text-xl">${{ price }}</h3>
    <button class="btn border-0 bg-info text-white hover:brightness-110"> ADD TO CART </button>
  </section>
</template>
