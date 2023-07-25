<template>
  <section class="py-12">
    <a-carousel>
      <div
        :style="{
          backgroundImage: getUrl(index),
        }"
        class="slider"
        v-for="(slide, index) in 7"
        :key="index"
      >
        <h3>{{ index +100 }}</h3>
      </div>
    </a-carousel>
  </section>
</template>

<script setup lang="ts">
const getUrl = (index: number) => {
  return `url('@/assets/images/slider-image/sample-${index + 1}.jpg')`;
};
</script>

<style>
.slider {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 530px;
}
</style>
