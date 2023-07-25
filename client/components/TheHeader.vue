<template>
  <header>
    <TheContainer class="flex justify-between">
      <div class="">Welcome you to Rozer Store!</div>
      <div class=""></div>
    </TheContainer>
    <a-divider></a-divider>

    <TheContainer class="flex gap-x-24">
      <NuxtLink to="/">
        <img src="@/assets/images/logo/logo.png" title="rozer" alt="rozer" />
      </NuxtLink>
      <div class="flex-1 flex border border-solid border-gray-300 rounded">
        <!-- <a-select class="border-0">
          <a-select-option key="" value=""></a-select-option>
        </a-select> -->
        <a-input
          class="border-0"
          placeholder="Enter your search key ... "
        ></a-input>
        <a-button type="primary" class="rounded-none">
          <template #icon>
            <Icon name="ant-design:search-outlined" />
          </template>
        </a-button>
      </div>
      <div class=""></div>
    </TheContainer>

    <nav class="bg-blue-500 text-white py-2">
      <TheContainer>
        <ul class="flex gap-x-1">
          <NuxtLink
            class="text-white no-underline px-3 py-1 capitalize focus:text-blue-900"
            to="/"
            >home</NuxtLink
          >
          <NuxtLink
            class="text-white no-underline px-3 py-1 capitalize focus:text-blue-900"
            to="/about-us"
            >about US</NuxtLink
          >
          <NuxtLink
            class="text-white no-underline px-3 py-1 capitalize focus:text-blue-900"
            to="/account"
            >account</NuxtLink
          >
          
          <NuxtLink
            class="text-white no-underline px-3 py-1 capitalize focus:text-blue-900"
            to="/checkout"
            >checkout</NuxtLink
          >
          
          <NuxtLink
            class="text-white no-underline px-3 py-1 capitalize focus:text-blue-900"
            to="/compare"
            >compare</NuxtLink
          >
          

          <NuxtLink
            class="text-white no-underline px-3 py-1 capitalize focus:text-blue-900"
            to="/login"
            >login</NuxtLink
          >
          <NuxtLink
            class="text-white no-underline px-3 py-1 capitalize focus:text-blue-900"
            to="/register"
            >register</NuxtLink
          >
          <NuxtLink
            class="text-white no-underline px-3 py-1 capitalize focus:text-blue-900"
            to="/forget"
            >forget</NuxtLink
          >
          <NuxtLink
            class="text-white no-underline px-3 py-1 capitalize focus:text-blue-900"
            to="/thank-you"
            >thank-you</NuxtLink
          >
          <NuxtLink
            class="text-white no-underline px-3 py-1 capitalize focus:text-blue-900"
            to="/wishlist"
            >wishlist</NuxtLink
          >
          <NuxtLink
            class="text-white no-underline px-3 py-1 capitalize focus:text-blue-900"
            to="/blogs"
            >blogs</NuxtLink
          >
          <NuxtLink
            class=":uno: text-white no-underline px-3 py-1 capitalize focus:text-blue-900"
            to="/contact-us"
            >contact US</NuxtLink
          >
        </ul>
      </TheContainer>
    </nav>

    <div class="bg-gray-100" v-if="route.name !== 'index'">
      <TheContainer>
        <a-breadcrumb class="py-4">
          <a-breadcrumb-item>
            <NuxtLink to="/"> Home </NuxtLink>
          </a-breadcrumb-item>
          <a-breadcrumb-item >
            <NuxtLink :to="route.path" class="capitalize">
              {{ route.name }}
            </NuxtLink>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </TheContainer>
    </div>
  </header>
</template>
<script setup lang="ts">
const route: any = useRoute();
</script>
