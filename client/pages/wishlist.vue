<template>
  <section class="py-12">
    <TheContainer>
      <h3 class="mb-4">Your cart items</h3>

      <el-table :data="dataSource" height="750" style="width: 100%">
        <el-table-column label="Image" width="240">
          <template #default="scope">
            <img
              class="h-36 w-60 object-contain rounded"
              :src="`assets/images/product-image/${scope.row.img}`"
              alt=""
            />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="qty" label="Qty" width="180" />
        <el-table-column prop="untilPrice" label="Until Price" width="180" />
        <el-table-column prop="subtotal" label="Subtotal" width="180" />
        <el-table-column label="Action" width="240">
          <template #default="scope">
            <div class="flex px-4">
              <el-button type="primary">
                Buy
                <template #icon>
                  <Icon name="tabler:shopping-cart" />
                </template>
              </el-button>
              <el-button type="danger">
                Delete
                <template #icon>
                  <Icon name="tabler:trash" />
                </template>
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
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
    img: "2-2.jpg",
    name: "Ant Design Title 1",
    qty: 0,
    untilPrice: 60.0,
    subtotal: 70.0,
  },
  {
    img: "2-3.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
  {
    img: "2-4.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
  {
    img: "2-5.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
  {
    img: "2.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
  {
    img: "3.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
  {
    img: "4.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
  {
    img: "5.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
  {
    img: "6.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
  {
    img: "7.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
  {
    img: "8.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
  {
    img: "9.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
  {
    img: "10.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
  {
    img: "11.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
  {
    img: "12.jpg",
    name: "Ant Design Title 1",
    untilPrice: 60.0,
    qty: 0,
    subtotal: 70.0,
  },
];
</script>
