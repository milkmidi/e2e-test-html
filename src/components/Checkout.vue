<script setup lang="ts">
import { ref } from 'vue';
import useFetchData from '../hooks/useFetchData';
import { postData } from '../services/api';

const fetchCheckutSDK = useFetchData();

const isSubmitSuccess = ref(false);
const email = ref('');
const password = ref('');
const atSubmit = () => {
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
    :class="{ loading: fetchCheckutSDK.isLoading }"
    :data-loading="fetchCheckutSDK.isLoading"
  >
    <form @submit.prevent="atSubmit">
      <div class="mb-3">
        <label class="mb-1 block">123@123.com</label>
        <input id="checkout__email" v-model="email" type="email" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="mb-1 block">password</label>
        <input id="checkout__password" v-model="password" type="password" class="form-control" />
      </div>
      <button id="checkout__submit" type="submit" class="btn h-12 border-0 bg-primary px-5 text-xl text-white">
        submit
      </button>
    </form>
    <h1 v-if="isSubmitSuccess" class="checkout__submit-success">SubmitSuccess</h1>
  </section>
</template>

<style scoped>
.checkout[data-loading="true"]::after {
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
  content: "Loading";
}
</style>
