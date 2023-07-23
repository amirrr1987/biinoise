<template>
  <header>
    <nav class="bg-blue-500 text-white py-2">
      <Container>
        <ul class="flex gap-x-2">
          <NuxtLink class="text-white no-underline px-4 py-1 capitalize focus:text-blue-900" to="/about">about</NuxtLink>
          <NuxtLink class="text-white no-underline px-4 py-1 capitalize focus:text-blue-900" to="/compare">compare</NuxtLink>
          <NuxtLink class="text-white no-underline px-4 py-1 capitalize focus:text-blue-900" to="/contact">contact</NuxtLink>
          <NuxtLink class="text-white no-underline px-4 py-1 capitalize focus:text-blue-900" to="/">home</NuxtLink>
          <NuxtLink class="text-white no-underline px-4 py-1 capitalize focus:text-blue-900" to="/login">login</NuxtLink>
          <NuxtLink class="text-white no-underline px-4 py-1 capitalize focus:text-blue-900" to="/register">register</NuxtLink>
          <NuxtLink class="text-white no-underline px-4 py-1 capitalize focus:text-blue-900" to="/thank-you">thank-you</NuxtLink>
          <NuxtLink class="text-white no-underline px-4 py-1 capitalize focus:text-blue-900" to="/wishlist">wishlist</NuxtLink>
        </ul>
      </Container>
    </nav>

    <Container>
      <a-breadcrumb class="py-4">
        <a-breadcrumb-item>
          <NuxtLink to="/"> Home </NuxtLink>
        </a-breadcrumb-item>
        <a-breadcrumb-item v-if="route.name !== 'index'">
          <NuxtLink :to="route.path" class="capitalize">
            {{ route.name }}
          </NuxtLink>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </Container>
  </header>
</template>
<script setup lang="ts">
const route :any = useRoute()
</script>
