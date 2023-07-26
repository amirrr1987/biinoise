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
        <el-form-item label="Email">
          <el-input></el-input>
        </el-form-item>

        <el-button type="primary">submit</el-button>
        <div class="mt-4 text-center">
          <NuxtLink to="/login">login</NuxtLink>
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
