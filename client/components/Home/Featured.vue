<template>
  <section class="py-12">
    <TheContainer>
      <h3>Featured Products</h3>
      <el-divider class="mt-4"></el-divider>
      <div class="grid grid-cols-5 gap-8">
        <el-card
          v-for="(category, index) in 5"
          :key="index"
          :body-style="{ padding: '0px' }"
        >
          <img
            title="sd"
            alt="example"
            class="w-40"
            :src="`../assets/images/product-image/1${index + 1}.jpg`"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">{{ 234234 }}</time>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </div>
    </TheContainer>
  </section>
</template>
