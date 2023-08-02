<template>
  <section class="py-12">
    <TheContainer>
      <div class="grid grid-cols-12">
        <div class="col-span-2">
          <div class="mb-4">Products</div>
          filters
        </div>
        <div class="col-span-10">
          <div class="mb-4">
            Products {{ layoutFormat }}
            <el-radio-group v-model="layoutFormat">
              <el-radio :label="4">
                <img class="w-4 h-4" src="~/assets/images/icons/grid-4_4.svg" alt="" >
              </el-radio>
              <el-radio :label="3">
                <img class="w-4 h-4" src="~/assets/images/icons/grid-3_3.svg" alt="" >
              </el-radio>
              <el-radio :label="2">
                <img class="w-4 h-4" src="~/assets/images/icons/grid-2_2.svg" alt="" >
              </el-radio>
            </el-radio-group>
            <el-select
              v-model="value"
              class="m-2"
              placeholder="Select"
              size="large"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <div
            class="grid gap-8"
            :style="{
              gridTemplateColumns: `repeat(${layoutFormat}, 1fr)`,
            }"
          >
            <el-card v-for="(product, index) in productStore.state.products">
              <img
                class="w-full h-full object-contain"
                :src="product.images[0]"
                alt=""
                srcset=""
              />
              <div>
                {{ product.name }}
              </div>
              <div class=""></div>
              <el-rate v-model="product.rate" />
            </el-card>
          </div>
        </div>
      </div>
    </TheContainer>
  </section>
</template>

<script lang="ts" setup>
import { useProductStore } from "../../stores/productStore";
import { ref } from "vue";
const productStore = useProductStore();
const layoutFormat = ref(4);
const value = ref("");

const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
</script>
