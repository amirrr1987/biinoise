<template>
  <section class="h-screen flex items-center">
    <Container>
      <NuxtLink to="/">
        <img
          class="mx-auto block"
          src="@/assets/images/logo/logo.png"
          alt="rozer"
          title="rozer"
        />
      </NuxtLink>
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
          <NuxtLink to="/forget">Forgot Password?</NuxtLink>
        </div>
        <a-button type="primary">Login</a-button>
        <div class="mt-4 text-center">
          <NuxtLink to="/register">Create account</NuxtLink>
        </div>
      </a-form>
    </Container>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "empty",
});
</script>
