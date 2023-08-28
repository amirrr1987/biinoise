<template>
  <section class="py-12">
    <TheContainer>
      <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="(slide, index) in products" :key="slide">
      <div class="carousel__item">
        <img
          class="w-full h-full object-contain bg-white"
          :src="slide.img"
          alt=""
          srcset=""
        />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
    </TheContainer>
  </section>
</template>
<script setup lang="ts">
const products = reactive([
  {
    img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-%D9%88%D8%B1%D8%B2%D8%B4%DB%8C.png",
    label: "ورزشی",
  },
  {
    img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-%D9%88%D8%B1%D8%B2%D8%B4%DB%8C.png",
    label: "ورزشی",
  },
  {
    img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-%D9%88%D8%B1%D8%B2%D8%B4%DB%8C.png",
    label: "ورزشی",
  },
  {
    img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-%D9%88%D8%B1%D8%B2%D8%B4%DB%8C.png",
    label: "ورزشی",
  },
  {
    img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-%D9%88%D8%B1%D8%B2%D8%B4%DB%8C.png",
    label: "ورزشی",
  },
  {
    img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-%D9%88%D8%B1%D8%B2%D8%B4%DB%8C.png",
    label: "ورزشی",
  },
]);
const settings = reactive({
  itemsToShow: 1,
  snapAlign: "center",
});

const breakpoints = reactive({
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
});
</script>
<style scoped>


.el-carousel__item {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
  filter: transparent;
}

</style>
