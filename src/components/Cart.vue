<script setup lang="ts">
import CartItem from './CartItem.vue';
import { useCartStore } from '../store';

const cart = useCartStore();

const cartData = [
  { title: 'HW0109', price: 200, availableStock: 2 },
  { title: 'HW0110', price: 300, availableStock: 3 },
  { title: 'HW0111', price: 100, availableStock: 4 },
];
</script>

<template>
  <section data-name="Cart">
    <div class="grid grid-cols-4 gap-3">
      <template v-for="item in cartData" :key="item.title">
        <CartItem
          :data-sku="item.title"
          :data-price="item.price"
          :data-available-stock="item.availableStock"
          :title="item.title"
          :price="item.price"
          :availableStock="item.availableStock"
          @click="cart.addToCart(item)"
        />
      </template>
    </div>
  </section>
</template>
