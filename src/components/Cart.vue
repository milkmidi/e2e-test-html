<script setup>
import Item from './Item.vue';
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
    <div class="row">
      <template
        v-for="item in cartData"
        :key="item.title"
      >
        <div class="col-3">
          <Item
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

<style>

</style>
