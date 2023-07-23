<template>
  <section class="h-screen flex items-center">
    <Container>
      <img class="mx-auto block" src="@/assets/images/logo/logo.png" alt="" srcset="" />
      <a-form layout="vertical" class="w-2/5 mx-auto shadow p-8">
        <a-form-item label="Username">
          <a-input></a-input>
        </a-form-item>
        <a-form-item label="Password">
          <a-input></a-input>
        </a-form-item>
        <div class="flex justify-between">
          <a-form-item label="Remember me">
            <a-checkbox></a-checkbox>
          </a-form-item>
          <NuxtLink>Forgot Password?</NuxtLink>
        </div>
        <a-button type="primary">Login</a-button>
      </a-form>
    </Container>
  </section>
</template>
<script setup lang="ts">

const MyOtherLayout = defineAsyncComponent(() => import('@/layouts/empty.vue'))

const layout = MyOtherLayout
</script>
