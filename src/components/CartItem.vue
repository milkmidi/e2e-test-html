<script setup lang="ts">
type CartItemProps = {
  title: string;
  price: number;
  availableStock: number;
};
const props = defineProps<CartItemProps>();
</script>

<template>
  <section class="my-0 space-y-2" data-name="CartItem">
    <h3 class="text-3xl font-bold">{{ props.title }}</h3>
    <h3 class="text-xl">${{ props.price }}</h3>
    <!-- <small class="my-indicator-item">{{ props.availableStock }}</small> -->
    <button class="btn border-0 bg-info text-white hover:brightness-110"> ADD TO CART </button>
  </section>
</template>
