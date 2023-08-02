<template>
  <!-- Footer Section -->

  <footer class="grid">
    <svg class="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#1387f8"
        fill-opacity="1"
        d="M0,128L48,138.7C96,149,192,171,288,192C384,213,480,235,576,224C672,213,768,171,864,144C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
    <div class="bg-[#1387f8]">
      <TheContainer>
        <div class="grid grid-cols-12 gap-8 py-12">
          <div class="col-span-12 md:col-span-4 lg:col-span-2">
            <NuxtLink to="/">
              <img
                class="w-full w-full object-contain"
                src="https://biinoise.com/wp-content/uploads/2020/12/logo-site-1-e1684931997977.png"
                title="rozer"
                alt="rozer"
              />
            </NuxtLink>
          </div>
          <div class="col-span-12 md:col-span-4 lg:col-span-2">
            <h3 class="font-medium text-lg mb-2">Custom Links</h3>
            <el-divider class="my-2 border-blue"></el-divider>
            <ul class="list-none">
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >Legal Notice</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >Prices Drop</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >New Products</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >Best Sales</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >Login</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >My Account</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="col-span-12 md:col-span-4 lg:col-span-2">
            <h3 class="font-medium text-lg mb-2">Custom Links</h3>
            <el-divider class="my-2 border-blue"></el-divider>
            <ul class="list-none">
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >Legal Notice</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >Prices Drop</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >New Products</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >Best Sales</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >Login</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >My Account</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="col-span-12 md:col-span-4 lg:col-span-3">
            <h3 class="font-medium text-lg mb-2">Custom Links</h3>
            <el-divider class="my-2 border-blue"></el-divider>
            <ul class="list-none">
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >Legal Notice</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >Prices Drop</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >New Products</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >Best Sales</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >Login</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-light no-underline" to="/"
                  >My Account</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="col-span-12 md:col-span-4 lg:col-span-3">
            <div class="grid grid-cols-2">
              <img
                class="w-full"
                src="https://persianmedia.co/upload/news/NL4af3EG.png"
                alt=""
                srcset=""
              />
              <img
                class="w-full"
                src="https://persianmedia.co/upload/news/NL4af3EG.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </TheContainer>
    </div>
    <el-divider class="!my-0" />
    <div class="py-3 bg-[#1387f8]">
      <TheContainer>
        <div class="flex justify-between">
          <span
            >© 2021 Rozer Made With By
            <a class="text-light no-underline" href="https://amirmaghami.ir/" target="_blank"
              >Amir Maghami</a
            >.</span
          >
          <div>
            <el-button type="primary" circle class="text-white">
              <template #icon>
                <Icon name="simple-icons:aparat" />
              </template>
            </el-button>
            <el-button type="primary" circle>
              <template #icon>
                <Icon name="tabler:brand-whatsapp" />
              </template>
            </el-button>
            <el-button type="primary" circle class="text-white">
              <template #icon>
                <Icon name="tabler:brand-instagram" />
              </template>
            </el-button>
          </div>
        </div>
      </TheContainer>
    </div>
  </footer>
</template>
