<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

import Cart from './Cart.vue';

const CartDrawer = defineAsyncComponent(() => import('./CartDrawer.vue'));
</script>

<template>
  <CartDrawer />
  <Cart />
</template>

<style></style>
