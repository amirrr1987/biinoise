<template>
  <section class="py-12">
    <TheContainer>
      <div class="grid grid-cols-5 bg-gray-100 py-6 px-4">
        <div class="text-center" v-for="(item, index) in myData" :key="index">
          <Icon size="40" class="mb-2 text-gray" :name="item.icon" />
          <h4 class="text-base">{{ item.title }}</h4>
          <p class="text-sm font-light text-gray">
            {{ item.caption }}
          </p>
        </div>
      </div>
    </TheContainer>
  </section>
</template>
<script setup lang="ts">
interface Item {
  icon: string;
  title: string;
  caption: string;
}
const myData = reactive<Item[]>([
  {
    icon: "tabler:send",
    title: "Shipping",
    caption: "Possibility of express delivery",
  },
  {
    icon: "icon-park-outline:redo",
    title: "Warranty",
    caption: "1 month warranty for product replacement in case of damage",
  },
  {
    icon: "tabler:phone-call",
    title: "Support",
    caption: "Telephone and face-to-face support",
  },
  {
    icon: "tabler:play-card",
    title: "100% Payment Secure",
    caption: "Your payment are safe with us.",
  },
  {
    icon: "tabler:shield",
    title: "Guarantee",
    caption: "Guarantee of originality of goods",
  },
]);
const getImage = (index: number) => {
  return index ? `../assets/images/icons/static-icons-${index}.png` : "";
};
</script>
