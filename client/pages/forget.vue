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
      <el-form labelPosition="top" class="w-140 mx-auto p-8">
        <el-form-item label="Email">
          <el-input></el-input>
        </el-form-item>

        <el-button type="primary">Submit</el-button>
        <div class="mt-4 text-center">
          <NuxtLink to="/login" class=":uno: text-blue no-underline">Login</NuxtLink>
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
