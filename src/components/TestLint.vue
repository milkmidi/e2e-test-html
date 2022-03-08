<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <section>
    <h1>hi, {{ count }}</h1>
    <h2 class="h-[100px] w-full text-xl text-red-50">123</h2>
    <!-- <h2 class="text-xl text-red-50 h-[100px] w-full">123</h2> -->
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
