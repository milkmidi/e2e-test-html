<script setup>
import { ref } from 'vue';
import useFetchData from '../hooks/useFetchData';
import { postData } from '../services/api';
/* defineProps({
  msg: String,
}); */

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
    :data-loading="fetchCheckutSDK.isLoading"
  >
    <form @submit.prevent="atSubmit">
      <div class="mb-3">
        <label class="form-label">123@123.com</label>
        <input
          id="checkout__email"
          v-model="email"
          type="email"
          class="form-control"
        >
      </div>
      <div class="mb-3">
        <label class="form-label">password</label>
        <input
          id="checkout__password"
          v-model="password"
          type="password"
          class="form-control"
        >
      </div>
      <button
        id="checkout__submit"
        type="submit"
        class="btn btn-primary"
      >
        submit
      </button>
    </form>
    <h1
      v-if="isSubmitSuccess"
      class="checkout__submit-success"
    >
      SubmitSuccess
    </h1>
  </section>
</template>

<style scoped>
.checkout {

}
.checkout[data-loading="true"]::after {
  content: 'Loading';
  text-align: center;
  font-size: 60px;
  color: white;
  display: block;
  position: absolute;
  left: 0;
  top : 0;
  width: 100%;
  height: 100%;
  background-color: #e67e22;
}
</style>
