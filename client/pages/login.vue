<template>
  <section class="h-screen flex items-center">
    <TheContainer>
      <NuxtLink to="/">
        <img
          class="mx-auto block w-40 h-40 object-contain"
          src="https://biinoise.com/wp-content/uploads/2020/12/logo-site-1-e1684931997977.png"
          alt="Biinoise"
          title="Biinoise"
        />
      </NuxtLink>
      <el-form labelPosition="top" class="w-140 mx-auto">
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
          <NuxtLink to="/forget" class=":uno: text-blue no-underline">Forgot Password?</NuxtLink>
        </div>
        <el-button type="primary">Login</el-button>
        <div class=":uno: mt-4 text-center">
          <NuxtLink to="/register" class=":uno: text-blue no-underline">Create account</NuxtLink>
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
