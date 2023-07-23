<template>
      <section class="py-12">
    <Container>
      <h3>Featured Products</h3>
      <a-divider class="mt-4"></a-divider>
      <div class="grid grid-cols-5 gap-8">
        <a-card hoverable v-for="(category, index) in 5" :key="index">
          <template #cover>
            <img
            class="w-96"
              src="@/assets/images/product-image/3.jpg"
              title="sdf"
              alt="example"
            />
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
    </Container>
  </section>
</template>