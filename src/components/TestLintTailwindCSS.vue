<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
const isActive = ref(false);
</script>

<template>
  <section data-name="TestLintTailwindCSS">
    <h1>hi, {{ count }}</h1>
    <h2 class="h-[100px] w-full text-xl text-red-500">Tailwind</h2>
    <!-- <h2 class="text-xl text-red-500 h-[100px] w-full">123</h2> -->
    <div>
      <button class="btn data-active:bg-slate-300" :data-active="isActive" @click="isActive = !isActive"
        >toggle active</button
      >
    </div>
  </section>
</template>

<style scoped lang="scss">
h1 {
  /* @apply text-5xl text-black h-[100px] w-full; */
  @apply h-[100px] w-full text-5xl text-black;
}
h2 {
  /* height: 100px;
  width: 400px;
  display: block; */
}
</style>
