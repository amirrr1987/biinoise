<template>
  <el-carousel height="450px" class="bg-[#eeee]">
    <el-carousel-item v-for="(item, index) in myData" :key="index">
      <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
      <img class="h-full w-full object-contain m-auto" :src="item.img" />
    </el-carousel-item>
  </el-carousel>
</template>
<script setup lang="ts">
const myData = reactive([
  {
    img: "https://biinoise.com/wp-content/uploads/2023/04/JBL-PULSE-5-Banner-1.jpg",
  },
  { img: "https://biinoise.com/wp-content/uploads/2023/05/JBL-L75ms.jpg" },
  {
    img: "https://biinoise.com/wp-content/uploads/2023/07/tune-520-bt-b.jpg",
  },
]);
</script>
<style scoped>
.el-carousel__item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
