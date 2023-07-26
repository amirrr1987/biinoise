<template>
  <section class="py-12">
    <TheContainer>
      <h3 class="">Recently Added</h3>
      <el-divider class="mt-4"></el-divider>
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="(slide, index) in 29" :key="slide">
          <div class="carousel__item">
            <img
              class="w-full h-48 object-contain bg-white"
              :src="`assets/images/product-image/${index + 1}.jpg`"
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
