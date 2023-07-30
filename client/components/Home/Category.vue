<template>
  <section class="pt-12">
    <TheContainer>
      <div class="flex justify-evenly">
        <NuxtLink
          :to="item.id"
          v-for="(item, index) in categories"
          :key="index"
        >
          <img
            class="w-28 h-28 object-contain bg-white"
            :src="item.img"
            alt=""
            srcset=""
          />
        </NuxtLink>
      </div>
    </TheContainer>
  </section>
</template>
<script setup lang="ts">
interface Category {
  id: string;
  img: string;
}
const categories = reactive<Category[]>([
  {
    id: '1',
    img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-%D9%88%D8%B1%D8%B2%D8%B4%DB%8C.png",
  },
  {
    id: '2',
    img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-%D8%A8%D8%A7%D8%B2%DB%8C.png",
  },
  {
    id: '3',
    img: "https://biinoise.com/wp-content/uploads/2023/05/هدفون-روگوشی.png",
  },
  {
    id: '4',
    img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-tws.png",
  },
  {
    id: '5',
    img: "https://biinoise.com/wp-content/uploads/2023/05/%DA%A9%DB%8C%D9%813.png",
  },
  {
    id: '6',
    img: "https://biinoise.com/wp-content/uploads/2023/05/%D8%B3%D8%A7%D9%86%D8%AF%D8%A8%D8%A7%D8%B1.png",
  },
  {
    id: '7',
    img: "https://biinoise.com/wp-content/uploads/2023/05/%D8%A7%D8%B3%D9%BE%DB%8C%DA%A9%D8%B1-%D9%87%D9%85%D8%B1%D8%A7%D9%87.png",
  },
  {
    id: '8',
    img: "https://biinoise.com/wp-content/uploads/2023/05/%D8%A7%D8%B3%D9%BE%DB%8C%DA%A9%D8%B1-%D8%AE%D8%A7%D9%86%DA%AF%DB%8C.png",
  },
  {
    id: '9',
    img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%BE%D8%A7%D8%B1%D8%AA%DB%8C-%D8%A8%D8%A7%DA%A9%D8%B3.png",
  },
]);
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
    itemsToShow: 9,
    snapAlign: "start",
  },
});
</script>
