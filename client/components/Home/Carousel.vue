<template>
  <el-carousel :interval="4000" type="card" height="400px" class="py-8 bg-gray-200">
    <el-carousel-item
      v-for="(item, index) in 6"
      :key="index"
      :style="{
        backgroundImage: getUrl(index),
      }"
      class="slider"
    >
      <h3 text="2xl" justify="center">{{ index }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script setup lang="ts">
const getUrl = (index: number) => {
  return `url('../assets/images/slider-image/sample-${index + 1}.jpg')`;
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.slider {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  /* box-shadow: 0 0 1px 1px gray; */
}
</style>
