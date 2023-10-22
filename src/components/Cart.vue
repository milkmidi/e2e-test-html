<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CartItem from './CartItem.vue';
import { useCartStore } from '../store';
import { type Product, getProductList } from '@/services/api';

const cart = useCartStore();

const cartData = ref<Product[]>([]);
onMounted(() => {
  getProductList().then((data) => {
    cartData.value = data;
    console.log(JSON.stringify(data));
  });
});
</script>

<template>
  <section data-name="Cart">
    <div class="grid grid-cols-4 gap-3">
      <template v-for="item in cartData" :key="item.title">
        <CartItem v-bind="item" @click="cart.addToCart(item)" />
      </template>
    </div>
  </section>
</template>
