<template>
  <section class="py-12 bg-gray-50">
    <TheContainer>
      <h3>Featured Products</h3>
      <el-divider class="mt-4"></el-divider>
      <div class="grid grid-cols-2 gap-8">
        <el-card v-for="(category, index) in 2" :key="index">

        </el-card>
      </div>
      <div class="rounded overflow-hidden h-48 mt-12">
        <img
          class="duration-300 w-full h-full cursor-pointer object-cover hover:scale-105"
          src="@/assets/images/banner-image/4.jpg"
          alt=""
        />
      </div>
    </TheContainer>
  </section>
</template>
