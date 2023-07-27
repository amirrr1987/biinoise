<template>
  <section class="py-12">
    <TheContainer>
      <el-table :data="myData" style="width: 100%" height="700">
        <el-table-column label="Image" width="180">
          <template #default="scope">
            <el-image
              class="w-full h-full object-contain block m-auto"
              :src="`../assets/images/product-image/${scope.row.img}`"
              alt=""
            />
          </template>
        </el-table-column>
        <el-table-column prop="category" label="Category" width="180" />
        <el-table-column prop="brand" label="Brand" />
        <el-table-column prop="model" label="Model" />
        <el-table-column prop="price" label="Price" />
        <el-table-column label="Colors">
          <template #default="scope">
            <div
              v-for="item in scope.row.colors"
              class="w-4 h-4 rounded inline-block mr-1"
              :style="{ backgroundColor: item }"
            />
          </template>
        </el-table-column>
        <el-table-column prop="stock" label="Stock">
          <template #default="scope">
            <span class="text-green" v-if="scope.row.stock">in Stock</span>
            <span class="text-red" v-else>Out of Stock</span>
          </template>
        </el-table-column>
        <el-table-column prop="rate" label="Rating">
          <template #default="scope">
            <el-rate v-model="scope.row.rate"></el-rate>
          </template>
        </el-table-column>
      </el-table>
    </TheContainer>
  </section>
</template>
<script setup lang="ts">
interface MyData {
  img: string;
  category: string;
  brand: string;
  model: string;
  description: string;
  price: number;
  colors: string[];
  stock: boolean;
  rate: number;
}
const myData = reactive<MyData[]>([
  {
    img: "19.jpg",
    category: "camera",
    brand: "Zeon Zen 4 Pro",
    model: "Zeon Zen 4 Pro",
    description:
      "Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.",
    price: 295,
    colors: ["black", "red", "yellow"],
    stock: true,
    rate: 0,
  },
  {
    img: "9.jpg",
    category: "camera",
    brand: "Zeon Zen 4 Pro",
    model: "Zeon Zen 4 Pro",
    description:
      "Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.",
    price: 295,
    colors: ["red", "#0ff"],
    stock: true,
    rate: 4,
  },
  {
    img: "10.jpg",
    category: "camera",
    brand: "Zeon Zen 4 Pro",
    model: "Zeon Zen 4 Pro",
    description:
      "Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.",
    price: 295,
    colors: ["black"],
    stock: true,
    rate: 5,
  },
  {
    img: "7.jpg",
    category: "camera",
    brand: "Zeon Zen 4 Pro",
    model: "Zeon Zen 4 Pro",
    description:
      "Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.",
    price: 295,
    colors: ["black", "yellow", "brown", "pink"],
    stock: true,
    rate: 1,
  },
  {
    img: "7.jpg",
    category: "camera",
    brand: "Zeon Zen 4 Pro",
    model: "Zeon Zen 4 Pro",
    description:
      "Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.",
    price: 295,
    colors: ["black"],
    stock: true,
    rate: 1,
  },
  {
    img: "7.jpg",
    category: "camera",
    brand: "Zeon Zen 4 Pro",
    model: "Zeon Zen 4 Pro",
    description:
      "Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.",
    price: 295,
    colors: ["black", "yellow", "brown", "pink"],
    stock: true,
    rate: 1,
  },
  {
    img: "22.jpg",
    category: "camera",
    brand: "Zeon Zen 4 Pro",
    model: "Zeon Zen 4 Pro",
    description:
      "Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.",
    price: 295,
    colors: ["black"],
    stock: true,
    rate: 1,
  },
  {
    img: "24.jpg",
    category: "camera",
    brand: "Zeon Zen 4 Pro",
    model: "Zeon Zen 4 Pro",
    description:
      "Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.",
    price: 295,
    colors: ["black", "yellow", "brown", "pink"],
    stock: true,
    rate: 1,
  },
  {
    img: "27.jpg",
    category: "camera",
    brand: "Zeon Zen 4 Pro",
    model: "Zeon Zen 4 Pro",
    description:
      "Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.",
    price: 295,
    colors: ["black", "yellow", "brown", "pink"],
    stock: true,
    rate: 1,
  },
  {
    img: "12.jpg",
    category: "Mobile",
    brand: "iPhone 14",
    model: "Zeon Zen 4 Pro",
    description:
      "Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.",
    price: 295,
    colors: ["black"],
    stock: false,
    rate: 2,
  },
]);
const selectedItems = reactive<MyData[]>([]);
const removeItem = (itemIndex: number) => {
  usePullAt(myData, itemIndex);
};
const clearSelection = () => (selectedItems.length = 0);
</script>
<style>
.grid-cols-max-1fr {
  grid-template-columns: max-content repeat(v-bind("myData.length"), 160px);
}
</style>
