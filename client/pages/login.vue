<template>
  <section class="h-screen flex items-center">
    <TheContainer>
      <NuxtLink to="/">
        <img
          class="mx-auto block"
          src="@/assets/images/logo/logo.png"
          alt="rozer"
          title="rozer"
        />
      </NuxtLink>
      <el-form layout="vertical" class="w-2/5 mx-auto p-8">
        <el-form-item label="Username">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input></el-input>
        </el-form-item>
        <div class="flex justify-between">
          <el-form-item label="Remember me">
            <el-checkbox></el-checkbox>
          </el-form-item>
          <NuxtLink to="/forget">Forgot Password?</NuxtLink>
        </div>
        <el-button type="primary">Login</el-button>
        <div class="mt-4 text-center">
          <NuxtLink to="/register">Create account</NuxtLink>
        </div>
      </el-form>
    </TheContainer>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "empty",
});
</script>
