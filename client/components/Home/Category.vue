<template>
  <section class="py-12">
    <TheContainer>
      <h3>Popular Categories</h3>
      <Icon name="uil:github" color="black" />

      <a-divider class="mt-4"></a-divider>
      <div class="grid grid-cols-5 gap-8">
        <a-card hoverable v-for="(category, index) in 5" :key="index">
          <template #cover>
            <img
              alt="example"
              class="w-40"
              :src="`../assets/images/product-image/1${index + 1}.jpg`"
            />
          </template>
          <template #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
          <a-card-meta title="Card title" description="This is the description">
            <template #avatar>
              <a-avatar
                :src="`../assets/images/product-image/1${index + 1}.jpg`"
              />
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </TheContainer>
  </section>
</template>
