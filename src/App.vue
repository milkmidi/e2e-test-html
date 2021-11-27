<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

import Cart from './components/Cart.vue';

import { useCartStore } from './store';

const Checkout = defineAsyncComponent(() => import('./components/Checkout.vue'));
const CartDrawer = defineAsyncComponent(() => import('./components/CartDrawer.vue'));

const cart = useCartStore();
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-7xl font-bold mb-5 py-5"> BigPayPay </h1>
    <CartDrawer v-if="cart.step === 0" />
    <Cart v-if="cart.step === 0" />
    <Checkout v-if="cart.step === 1" />
  </div>
</template>

<style></style>
