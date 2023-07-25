<template>
  <section class="py-12">
    <TheContainer>
      <h3 class="mb-4">Your cart items</h3>
      <a-table :dataSource="dataSource" :columns="columns">
        <template #bodyCell="{ column, text }" maxWidth="200">
          <template v-if="column.dataIndex === 'img'">
            <img
              class="!bg-transparent !h-30 !w-51 object-contain"
              :src="`assets/images/product-image/${text}`"
              alt=""
            />
          </template>

          <template v-if="column.dataIndex === 'qty'">
            <a-input-number :value="text"></a-input-number>
          </template>
          <template v-if="column.dataIndex === 'addToCart'">
            <a-button type="primary">Add to cart</a-button>
          </template>
        </template>
      </a-table>
    </TheContainer>
  </section>
</template>
<script lang="ts" setup>
interface DataItem {
  img: string;
  name: string;
  untilPrice: number;
  subtotal: number;
  qty: number;
}
const dataSource: DataItem[] = [
  {
    img: "2-1.jpg",
    name: "Ant Design Title 1",
    qty: 0,
    untilPrice: 60.0,
    subtotal: 70.0,
  },
  {
    img: "2-1.jpg",
    name: "Ant Design Title 1",
    qty: 0,
    untilPrice: 60.0,
    subtotal: 70.0,
  },
  {
    img: "2-1.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
  {
    img: "2-1.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
];

const columns = [
  {
    title: "Image",
    dataIndex: "img",
    key: "img",
    with: 100,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Until Price",
    dataIndex: "untilPrice",
    key: "untilPrice",
  },
  {
    title: "QTY",
    dataIndex: "qty",
    key: "qty",
  },
  {
    title: "Subtotal",
    dataIndex: "subtotal",
    key: "subtotal",
  },
  {
    title: "Add to cart",
    dataIndex: "addToCart",
    key: "addToCart",
  },
];
</script>
