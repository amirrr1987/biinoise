<template>
  <section class="py-12">
    <Container>
      <div class="flex justify-between gap-8 flex-warp">
        
          <div
            class="flex gap-4 select-none"
            v-for="(item, index) in myData"
            :key="index"
          >
            <img class="object-contain" :src="getImage(index)" alt="" />
            <div class="">
              <h4 class="">{{ item.title }}</h4>
              <div class="text-gray text-xs font-light">
                {{ item.caption }}
              </div>
            </div>
          </div>
      </div>
    </Container>
  </section>
</template>
<script setup lang="ts">
interface Item {
  img: string;
  title: string;
  caption: string;
}
const myData = reactive<Item[]>([
  {
    img: "static-icons-1.png",
    title: "Free Shipping",
    caption: "On all orders over $75.00",
  },
  {
    img: "static-icons-2.png",
    title: "Free Returns",
    caption: "Returns are free within 9 days",
  },
  {
    img: "static-icons-3.png",
    title: "Support 24/7",
    caption: "Contact us 24 hours a day",
  },
  {
    img: "static-icons-4.png",
    title: "100% Payment Secure",
    caption: "Your payment are safe with us.",
  },
]);
const getImage = (index: number) => {
  return index ? `../assets/images/icons/static-icons-${index}.png` : "";
};
</script>
