<script setup>
import { useCartStore } from '../store';

const cart = useCartStore();

</script>

<template>
  <section
    data-name="CartDrawer"
    class="cart-drawer"
  >
    <h1
      class="cart-drawer__base-amount"
    >
      baseAmount:<span>{{ cart.baseAmount }}</span>
    </h1>
    <template
      v-for="(item, key) in cart.groupLineItems"
      :key="key"
    >
      <div class="cart-drawer__item border p-1">
        <h3>{{ key }} x {{ item.length }}</h3>
      </div>
    </template>
    <button
      id="proceed-to-checkout"
      class="btn btn-warning"
      :disabled=" cart.baseAmount === 0"
      @click="cart.proceedToCheckout"
    >
      Proceed to Checkout
    </button>
  </section>
</template>

<style scoped>
.cart-drawer {
  position: fixed;
  top: 0;
  right :0;
  height: 100%;
  background-color: white;
  z-index: 99;
}
</style>
