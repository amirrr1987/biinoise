<template>
  <section class="h-screen flex items-center">
    <TheContainer>
      <NuxtLink to="/">
        <img
          class="mx-auto block w-40"
          src="https://biinoise.com/wp-content/uploads/2020/12/logo-site-1-e1684931997977.png"
          alt="rozer"
          title="rozer"
        />
      </NuxtLink>
      <el-form labelPosition="top" class="w-140 mx-auto">
        <el-form-item label="Username">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" block @click="onSubmit">Register</el-button>
        </el-form-item>
        <div class="mt-4 text-center">
          <NuxtLink to="/login"
            ><el-button type="info">login</el-button></NuxtLink
          >
        </div>
      </el-form>
    </TheContainer>
  </section>
</template>
<script setup>
definePageMeta({
  layout: "empty",
});
</script>
