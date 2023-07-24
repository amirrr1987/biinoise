<template>
  <section class="py-12">
    <TheContainer>
      <div class="grid grid-cols-max-1fr gap-2px p-2px bg-gray-400">
        <div class="p-4 bg-white font-bold text-xl">Category</div>
        <div
          class="p-4 bg-white font-bold text-xl"
          v-for="(item, index) in myData"
          :key="index"
        >
          {{ item.category }}
        </div>

        <div class="p-4 bg-white font-bold text-xl">Product</div>
        <div
          class="p-4 bg-white font-bold text-xl"
          v-for="(item, index) in myData"
          :key="index"
        >
          {{ item.brand }}
        </div>

            <div class="p-4 bg-white font-bold text-xl">Model</div>
        <div
          class="p-4 bg-white font-bold text-xl"
          v-for="(item, index) in myData"
          :key="index"
        >
          {{ item.model }}
        </div>

        <div class="p-4 bg-white font-bold text-xl">Image</div>
        <div
          class="p-4 bg-white font-bold text-xl"
          v-for="(item, index) in myData"
          :key="index"
        >
          <img
            class="w-40 h-40 object-contain block m-auto"
            :src="`../assets/images/product-image/${item.img}`"
            alt=""
          />
        </div>

        <div class="p-4 bg-white font-bold text-xl">Price</div>
        <div
          class="p-4 bg-white font-bold text-xl"
          v-for="(item, index) in myData"
          :key="index"
        >
          {{ item.price }}
        </div>

        <div class="p-4 bg-white font-bold text-xl">Color</div>
        <div
          class="p-4 bg-white font-bold text-xl"
          v-for="(item, index) in myData"
          :key="index"
        >
          <div class="w-12 h-6 rounded-full" :style="{ backgroundColor: item.color }"></div>
        </div>
        <div class="p-4 bg-white font-bold text-xl">Stock</div>
        <div
          class="p-4 bg-white font-bold text-xl"
          v-for="(item, index) in myData"
          :key="index"
        >
          <template v-if="item.stock">In Stock</template>
          <template v-else>Out of Stock</template>
        </div>

        <div class="p-4 bg-white font-bold text-xl">Add to cart</div>
        <div
          class="p-4 bg-white font-bold text-xl"
          v-for="(item, index) in myData"
          :key="index"
        >
          <a-button type="primary">Add to cart</a-button>
        </div>

        <div class="p-4 bg-white font-bold text-xl">Delete</div>
        <div
          class="p-4 bg-white font-bold text-xl"
          v-for="(item, index) in myData"
          :key="index"
        >
          <a-button type="text">
            <template #icon>
              <Icon name="table:delete" />
            </template>
          </a-button>
        </div>

        <div class="p-4 bg-white font-bold text-xl">Rating</div>
        <div
          class="p-4 bg-white font-bold text-xl"
          v-for="(item, index) in myData"
          :key="index"
        >
          <a-rate v-model:value="item.rate"></a-rate>
        </div>
      </div>
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
  color: string;
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
    color: "black",
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
    color: "red",
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
    color: "black",
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
    color: "black",
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
    color: "black",
    stock: false,
    rate: 2,
  },
]);
</script>
<style>
.grid-cols-max-1fr {
  grid-template-columns: max-content repeat(v-bind("myData.length"), 1fr);
}
</style>
