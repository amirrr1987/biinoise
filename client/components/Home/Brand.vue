<!-- <template>
  <section class="py-12">
    <TheContainer>
      <div class="grid grid-cols-5 gap-8">
        <NuxtLink v-for="brand in brands" :key="brand.id" :to="`/${brand.id}`">
          <img :src="`../assets/images/brand-logo/${brand.id}.jpg`" alt="" />
        </NuxtLink>
      </div>
    </TheContainer>
  </section>
</template>
<script setup lang="ts">
const getSource = (index: number) => {
  return `../assets/images/brand-logo/${index + 1}.jpg`;
};

const brands = reactive([
  { id: 1, name: "Brand 1" },
  { id: 2, name: "Brand 2" },
  { id: 3, name: "Brand 3" },
  { id: 4, name: "Brand 4" },
  { id: 5, name: "Brand 5" },
]);
</script> -->

<template>
  <section class="py-12">
    <TheContainer>
      <h3 class="">Recently Added</h3>
      <a-divider class="mt-4"></a-divider>
      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints"
        :autoplay="2000"
        :wrap-around="true"
        class="px-10 border border-solid border-gray-100"
      >
        <Slide v-for="(brand, index) in brands" :key="index">
          <div class="carousel__item w-60">
            <img
              class="w-full object-contain bg-white"
              :src="`../assets/images/brand-logo/${brand.id}.jpg`"
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
const getSource = (index: number) => {
  return `../assets/images/brand-logo/${index + 1}.jpg`;
};

const brands = reactive([
  { id: 1, name: "Brand 1" },
  { id: 2, name: "Brand 2" },
  { id: 3, name: "Brand 3" },
  { id: 4, name: "Brand 4" },
  { id: 5, name: "Brand 5" },
]);
</script>
