<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCartStore } from '../store';

const router = useRouter();
const cart = useCartStore();

const gotoCheckout = () => {
  cart.proceedToCheckout().then(() => {
    router.push('/checkout');
  });
};
</script>

<template>
  <section data-name="CartDrawer" class="cart-drawer">
    <h1 class="cart-drawer__base-amount mb-2 text-2xl font-bold">
      baseAmount:<span>{{ cart.baseAmount }}</span>
    </h1>
    <div class="mb-2 space-y-2">
      <template v-for="(item, key) in cart.groupLineItems" :key="key">
        <div class="cart-drawer__item border p-1">
          <h3>
            <span class="font-bold">{{ key }}</span>
            x {{ item.length }}</h3
          >
        </div>
      </template>
    </div>
    <button
      id="proceed-to-checkout"
      class="btn-error btn"
      :disabled="cart.baseAmount === 0"
      @click="gotoCheckout"
    >
      Proceed to Checkout
    </button>
  </section>
</template>

<style scoped>
.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: white;
  z-index: 99;
}
</style>
