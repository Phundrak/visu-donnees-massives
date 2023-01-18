<template>
  <p class="center-text">
    <a :href="props.src" target="_blank">
      <img :alt="props.alt" :src="props.src" class="padded centered" />
    </a>
  </p>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt?: string;
}>();
</script>

<style lang="less" scoped>
a {
  box-shadow: none;
}
</style>
