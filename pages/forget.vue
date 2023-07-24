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
        <a-form-item label="Email">
          <a-input></a-input>
        </a-form-item>

        <a-button type="primary">submit</a-button>
        <div class="mt-4 text-center">
          <NuxtLink to="/login">login</NuxtLink>
        </div>
      </a-form>
    </Container>
  </section>
</template>
<script setup>
definePageMeta({
  layout: "empty",
});
</script>
