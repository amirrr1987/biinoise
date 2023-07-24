<template>
  <HomeCarousel />

  <HomeStatic />

  <HomeBannerItem1 />

  <HomeCategory />

  <HomeFeatured />

  <HomeDeals />

  <HomeBrand />

  <HomeRecently />

  <HomeBannerItem2 />

  <!-- <section class="py-12">
    <TheContainer>
      <a-tabs >
        <a-tab-pane key="1" tab="Tab 1">
          <div class="grid grid-cols-5 gap-8">
            <a-card hoverable v-for="(category, index) in 5" :key="index">
              <template #cover>
                <img
                  alt="example"
                  src=""
                />
              </template>
              <template #actions>
                <setting-outlined key="setting" />
                <edit-outlined key="edit" />
                <ellipsis-outlined key="ellipsis" />
              </template>
              <a-card-meta
                title="Card title"
                description="This is the description"
              >
                <template #avatar>
                  <a-avatar src="" />
                </template>
              </a-card-meta>
            </a-card>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2" force-render>
          <div class="grid grid-cols-5 gap-8">
            <a-card hoverable v-for="(category, index) in 5" :key="index">
              <template #cover>
                <img
                  alt="example"
                  src=""
                />
              </template>
              <template #actions>
                <setting-outlined key="setting" />
                <edit-outlined key="edit" />
                <ellipsis-outlined key="ellipsis" />
              </template>
              <a-card-meta
                title="Card title"
                description="This is the description"
              >
                <template #avatar>
                  <a-avatar src="" />
                </template>
              </a-card-meta>
            </a-card>
          </div>
        </a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3">
          <div class="grid grid-cols-5 gap-8">
            <a-card hoverable v-for="(category, index) in 5" :key="index">
              <template #cover>
                <img
                  alt="example"
                  src=""
                />
              </template>
              <template #actions>
                <setting-outlined key="setting" />
                <edit-outlined key="edit" />
                <ellipsis-outlined key="ellipsis" />
              </template>
              <a-card-meta
                title="Card title"
                description="This is the description"
              >
                <template #avatar>
                  <a-avatar src="" />
                </template>
              </a-card-meta>
            </a-card>
          </div>
        </a-tab-pane>
      </a-tabs>
      <h3>Featured Products</h3>
      <a-divider class="mt-4"></a-divider>
    </TheContainer>
  </section> -->

  <!-- <section class="py-12">
    <TheContainer>
      sdf
    </TheContainer>
  </section> -->
</template>
<script lang="ts" setup>
const handleMessage = (): any => {
  message.info("This is a normal message");
};

const settings = reactive({
  itemsToShow: 1,
  snapAlign: "center",
});

const breakpoints = reactive({
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
});
const activeKey = ref<string>("1");
</script>
<style>
/* * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.68;
  position: relative;
  visibility: visible;
  overflow-x: hidden;
  color: #888;
  background-color: #fff;
} */
</style>

<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 460px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
