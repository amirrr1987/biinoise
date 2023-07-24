<template>
  <section class="py-12 bg-gray-50">
    <TheContainer>
      <h3>Featured Products</h3>
      <a-divider class="mt-4"></a-divider>
      <div class="grid grid-cols-2 gap-8">
        <a-card v-for="(category, index) in 2" :key="index">
          <template #cover>
            <img alt="example" src="" />
          </template>
          <template #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
          <a-card-meta title="Card title" description="This is the description">
            <template #avatar>
              <a-avatar src="" />
            </template>
          </a-card-meta>
        </a-card>
      </div>
      <div class="rounded overflow-hidden h-48 mt-12">
        <img
          class="duration-300 w-full h-full cursor-pointer object-cover hover:scale-105"
          src="@/assets/images/banner-image/4.jpg"
          alt=""
        />
      </div>
    </TheContainer>
  </section>
</template>
