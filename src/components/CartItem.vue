<script setup lang="ts">
import { type Product } from '@/services/api';

const props = defineProps<Product>();
</script>

<template>
  <section class="my-0 space-y-2" data-name="CartItem" :data-sku="props.sku">
    <h3 class="text-3xl font-bold">
      {{ props.title }}
      <span class="badge badge-primary badge-outline text-xs">{{ props.sku }}</span>
    </h3>
    <h3 class="text-xl">${{ props.price }}</h3>
    <img :src="props.featureImage" alt="" />
    <!-- <small class="my-indicator-item">{{ props.availableStock }}</small> -->
    <button class="btn-primary btn"> ADD TO CART </button>
  </section>
</template>
