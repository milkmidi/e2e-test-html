<script setup lang="ts">
import { ref } from 'vue';
import useFetchData from '../hooks/useFetchData';
import { postData } from '../services/api';
import { useCartStore } from '@/store';

const fetchCheckoutSDK = useFetchData();
const store = useCartStore();

const isSubmitSuccess = ref(false);
const email = ref('');
const password = ref('');
const errorMessages = ref('');
const atSubmit = () => {
  if (email.value === '' || password.value === '') {
    errorMessages.value = 'email or password is empty';
    return;
  }
  console.log('atSubmit', email.value, password.value);
  postData().then(() => {
    isSubmitSuccess.value = true;
  });
};
</script>

<template>
  <section
    data-name="checkout"
    class="checkout"
    :class="{ loading: fetchCheckoutSDK.isLoading }"
    :data-loading="fetchCheckoutSDK.isLoading"
  >
    <section data-name="Products Info">
      <div class="checkout__products-info">
        <template v-for="(item, key) in store.groupLineItems" :key="key">
          <div class="checkout__products-info-item border p-1">
            <h3>
              <span class="font-bold">{{ key }}</span>
              x {{ item.length }}</h3
            >
          </div>
        </template>
      </div>
      <p class="checkout__base-amount text-5xl font-bold"
        >totalAmount:
        <span>{{ store.baseAmount }}</span>
      </p>
    </section>
    <section
      v-if="isSubmitSuccess"
      data-name="Success"
      class="checkout__submit-success style-green"
    >
      <h1 class="text-5xl font-bold">SubmitSuccess</h1>
    </section>
    <form v-else class="space-y-3" @submit.prevent="atSubmit">
      <div>
        <label class="mb-1 block">123@123.com</label>
        <input id="checkout__email" v-model="email" type="email" class="input input-bordered" />
      </div>
      <div>
        <label class="mb-1 block">password:123</label>
        <input
          id="checkout__password"
          v-model="password"
          type="password"
          class="input input-bordered"
        />
      </div>
      <p v-show="!!errorMessages" class="checkout__message text-red font-bold">{{
        errorMessages
      }}</p>
      <button id="checkout__submit" type="submit" class="btn-success btn"> submit </button>
    </form>
  </section>
</template>

<style>
.checkout[data-loading='true']::after {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  font-size: 60px;
  text-align: center;
  color: white;
  background-color: #e67e22;
  content: 'Loading';
}
</style>
