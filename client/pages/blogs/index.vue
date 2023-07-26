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
          <div class="grid grid-cols-3 gap-8">
            <el-card v-for="(blog, index) in data" :key="index">
              <img
                class="aspect-[3/2] w-full mb-2"
                :src="`../assets/images/blog-image/blog-${index + 1}.jpg`"
                title="sfd"
                alt="sdf"
              />

              <div class="text-lg font-bold mb-2">
                This is Third Post For XipBlog
              </div>
              <div class="text-sm text-gray">{{ blog.role }} {{ useDateFormat(blog.timestamp) }}</div>

              <el-divider class="!my-2"></el-divider>

              <p class="mb-2 text-gray-500">
                {{ useTruncate(blog.caption, { length: 140 }) }}
              </p>
              <NuxtLink :to="`/blogs/blog-${blog._id}`"
                ><el-button type="info" to="/">More</el-button></NuxtLink
              >
            </el-card>
          </div>
          <el-pagination
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

const text = ref();
const a = useTruncate(text.value, { length: 140 });
const data = reactive<any>([
  {
    _id: "234",
    title: "Ant Design Title 1",
    timestamp: 0,
    role: "editor",
    caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quisquam est earum maiores quae, eligendi rerum expedita
                molestias, tempora ad reiciendis eos illum harum et laudantium
                magni temporibus quasi doloremque!`,
  },
  {
    _id: "89435",
    title: "Ant Design Title 2",
    timestamp: 234234234234,
    role: "editor",
    caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quisquam est earum maiores quae, eligendi rerum expedita
                molestias, tempora ad reiciendis eos illum harum et laudantium
                magni temporibus quasi doloremque!`,
  },
  {
    _id: "45345345",
    title: "Ant Design Title 3",
    timestamp: 234234234234,
    role: "editor",
    caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quisquam est earum maiores quae, eligendi rerum expedita
                molestias, tempora ad reiciendis eos illum harum et laudantium
                magni temporibus quasi doloremque!`,
  },
  {
    _id: "56734",
    title: "Ant Design Title 4",
    timestamp: 234234234234,
    role: "editor",
    caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quisquam est earum maiores quae, eligendi rerum expedita
                molestias, tempora ad reiciendis eos illum harum et laudantium
                magni temporibus quasi doloremque!`,
  },
]);
const current = ref<number>(2);
</script>
<style lang="less"></style>
<!-- <style src="./my-card.module.less" module></style> -->
