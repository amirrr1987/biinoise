<template>
  <header>
    <TheContainer class=":uno: flex justify-between">
      <div class="">Welcome you to Rozer Store!</div>
      <div class=""></div>
    </TheContainer>
    <el-divider></el-divider>

    <TheContainer class="flex gap-x-24">
      <NuxtLink to="/">
        <img src="https://biinoise.com/wp-content/uploads/2020/12/logo-site-1-e1684931997977.png" title="rozer" alt="rozer" />
      </NuxtLink>
      <div class="flex-1 flex border border-solid border-gray-300 rounded">
        <!-- <el-select class="border-0">
          <el-select-option key="" value=""></el-select-option>
        </el-select> -->
        <el-input
          class=":uno: border-0"
          placeholder="Enter your search key ... "
        ></el-input>
        <el-button type="primary" class="rounded-none">
          <template #icon>
            <Icon name="ant-design:search-outlined" />
          </template>
        </el-button>
      </div>
      <div class=""></div>
    </TheContainer>

    <nav class=":uno: bg-blue-500 text-white py-2">
      <TheContainer>
        <ul class=":uno: flex gap-x-1">
          <NuxtLink
            v-for="(nav, index) in navigation"
            :key="index"
            class=":uno: text-white no-underline px-3 py-1 capitalize focus:text-blue-900"
            :to="nav.url"
          >
            {{ nav.name }}
          </NuxtLink>
        </ul>
      </TheContainer>
    </nav>

    <div class=":uno: bg-gray-100 py-4" v-if="route.name !== 'index'">
      <TheContainer>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item>
            <NuxtLink :to="route.path" class="capitalize">
              {{ route.name }}
            </NuxtLink>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </TheContainer>
    </div>
  </header>
</template>
<script setup lang="ts">
const route: any = useRoute();

const navigation = reactive([
  {
    name: "home",
    url: "/",
  },
  {
    name: "About US",
    url: "/about-us",
  },
  {
    name: "Account",
    url: "/account",
  },
  {
    name: "Checkout",
    url: "/checkout",
  },
  {
    name: "Compare",
    url: "/compare",
  },
  {
    name: "Login",
    url: "/login",
  },
  {
    name: "Register",
    url: "/register",
  },
  {
    name: "Forget",
    url: "/forget",
  },
  {
    name: "Thank You",
    url: "/thank-you",
  },
  {
    name: "Wishlist",
    url: "/wishlist",
  },
  {
    name: "Blogs",
    url: "/blogs",
  },
  {
    name: "Contact US",
    url: "/contact-us",
  },
]);
</script>
