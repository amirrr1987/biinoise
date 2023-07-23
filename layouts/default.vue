<template>
  <header>
     <nav class="bg-blue text-white py-2">
      <Container>
        <ul class="flex gap-x-2">
          <NuxtLink class="text-white no-underline px-4 py-1 capitalize focus:text-blue-900" to="/">home</NuxtLink>
          <NuxtLink class="text-white no-underline px-4 py-1 capitalize focus:text-blue-900" to="/blogs">blogs</NuxtLink>
        </ul>
      </Container>
    </nav>

    <Container>
      <a-breadcrumb class="py-4">
        <a-breadcrumb-item><NuxtLink to="/">Home</NuxtLink></a-breadcrumb-item>
        <a-breadcrumb-item><NuxtLink to="/blogs">blogs</NuxtLink></a-breadcrumb-item>
        <a-breadcrumb-item><NuxtLink to="/">Home</NuxtLink></a-breadcrumb-item>
        <a-breadcrumb-item><NuxtLink to="/">Home</NuxtLink></a-breadcrumb-item>
      </a-breadcrumb>
    </Container>
   
  </header>
  <main>
    <!-- blog post content here -->
    <slot />
  </main>
  <TheFooter />
</template>
<script setup lang="ts">
const current = ref<string[]>(["mail"]);
const items = ref([
  {
    key: "mail",
    label: "Navigation One",
    title: "Navigation One",
  },
  {
    key: "app",
    label: "Navigation Two",
    title: "Navigation Two",
  },
  {
    key: "sub1",
    label: "Navigation Three - Submenu",
    title: "Navigation Three - Submenu",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    key: "alipay",
    label: "dd",
    title: "Navigation Four - Link",
  },
]);
</script>
