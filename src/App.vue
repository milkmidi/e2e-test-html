<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Cart from './components/Cart.vue';
import Checkout from './components/Checkout.vue';
import CartDrawer from './components/CartDrawer.vue';
import { useCartStore } from './store';

const cart = useCartStore();
</script>

<template>
  <div class="container">
    <h1 class="display-1">
      BigPayPay
    </h1>
    <CartDrawer v-if="cart.step === 0" />
    <Cart v-if="cart.step === 0" />
    <Checkout v-if="cart.step === 1" />
  </div>
</template>

<style>
</style>
