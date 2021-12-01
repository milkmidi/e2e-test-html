<script setup lang="ts">
import CartItem from './CartItem.vue';
import { useCartStore } from '../store';

const cart = useCartStore();

const cartData = [
  { title: 'HW0109', price: 200 },
  { title: 'HW0110', price: 300 },
  { title: 'HW0111', price: 100 },
];
</script>

<template>
  <section data-name="Cart">
    <div class="flex flex-wrap -m-2">
      <template v-for="item in cartData" :key="item.title">
        <div class="w-1/4 p-2">
          <CartItem
            :data-sku="item.title"
            :data-price="item.price"
            :title="item.title"
            :price="item.price"
            @click="cart.addToCart(item)"
          />
        </div>
      </template>
    </div>
  </section>
</template>
