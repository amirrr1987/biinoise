<template>
  <section class="py-12">
    <TheContainer>
      <div class="grid grid-cols-12 gap-8">
           <div class="col-span-3">
          <legend>search</legend>
          <el-form-item>
            <el-input type="search"></el-input>
          </el-form-item>

          <div class="">
            <div>Categories</div>
            <ul class="list-none">
              <li v-for="(categoy, index) in 4" :key="index">
                <NuxtLink class="text-gray" to="/category/category-3"
                  >Dresses</NuxtLink
                >
              </li>
            </ul>
          </div>

          <div class="">
            <div class="">Recent Post</div>
            <el-list item-layout="horizontal" :datel-source="data">
              <template #renderItem="{ item, index }">
                <el-list-item class="!px-0">
                  <el-list-item-meta
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  >
                    <template #title>
                      <a href="https://www.antdv.com/">{{ item.title }}</a>
                    </template>
                    <template #avatar>
                      <img
                        class="w-full h-14 object-contain"
                        :src="`../assets/images/blog-image/blog-${
                          index + 1
                        }.jpg`"
                        alt=""
                        srcset=""
                      />
                    </template>
                  </el-list-item-meta>
                </el-list-item>
              </template>
            </el-list>
          </div>

          <div class="">
            <div class="mb-2">Categories</div>
            <div class="flex gap-3 flex-wrap">
              <el-tag v-for="(tag, index) in 7" :key="index" class="cursor-pointer">
                Electronics
              </el-tag>
            </div>
          </div>
        </div>
        <div class="col-span-9">
          <div class="">
            <a-card  class="">
              <template #cover>
                <img
                  :src="`../assets/images/blog-image/blog-1.jpg`"
                  title="sfd"
                  alt="sdf"
                />
              </template>
              <a-card-meta>
                <template #title>
                  <NuxtLink to="/blogs/blog-1"
                    >This is Third Post For XipBlog</NuxtLink
                  >
                  <div class="text-sm text-gray">Admin 24 April, 2020</div>
                </template>
                <template #description>
                  <a-divider class="my-2"></a-divider>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum quisquam est earum maiores quae, eligendi rerum
                    expedita molestias, tempora ad reiciendis eos illum harum et
                    laudantium magni temporibus quasi doloremque!
                  </p>
                  <a-button type="link" to="/">More</a-button>
                </template>
              </a-card-meta>
            </a-card>
          </div>
          <a-pagination
            class="my-12 text-center"
            v-model:current="current"
            :total="50"
            show-less-items
          />
        </div>
      </div>
    </TheContainer>
  </section>
</template>
<script setup lang="ts">
// import { ref, reactive } from "nuxt";
const data = reactive<any>([
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
]);
const current = ref<number>(2);
</script>
<style lang="less"></style>
<!-- <style src="./my-card.module.less" module></style> -->
