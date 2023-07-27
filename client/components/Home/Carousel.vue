<template>
  <el-carousel height="450px">
    <el-carousel-item v-for="item in 4" :key="item">
      <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
      <img class="h-[450px] w-full object-cover m-auto" src="https://biinoise.com/wp-content/uploads/2023/05/aura-stodio-3-gold-banner-e-min.jpg" />
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
