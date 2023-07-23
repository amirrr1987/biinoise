<template>
  <footer class="bg-blue-500 text-white">
    <Container>
      <div class="grid grid-cols-12 gap-8 py-12">
        <div class="col-span-12 md:col-span-4 lg:col-span-4">
          <h3 class="font-medium text-lg mb-2">About US</h3>
          <a-divider class="my-2 border-blue"></a-divider>
          <p class="mb-4">
            We are a team of designers and developers that create high quality
            HTML template
          </p>
          <NuxtLink to="/">
            <img src="@/assets/images/logo/logo-2.png" alt="" />
          </NuxtLink>
        </div>
        <div class="col-span-12 md:col-span-4 lg:col-span-2">
          <h3 class="font-medium text-lg mb-2">Information</h3>
          <a-divider class="my-2 border-blue"></a-divider>
          <ul class="list-none">
            <li><NuxtLink class="text-light no-underline" to="/">Delivery</NuxtLink></li>
            <li><NuxtLink class="text-light no-underline" to="/">About Us</NuxtLink></li>
            <li><NuxtLink class="text-light no-underline" to="/">Secure Payment</NuxtLink></li>
            <li><NuxtLink class="text-light no-underline" to="/">Contact Us</NuxtLink></li>
            <li><NuxtLink class="text-light no-underline" to="/">Sitemap</NuxtLink></li>
            <li><NuxtLink class="text-light no-underline" to="/">Stores</NuxtLink></li>
          </ul>
        </div>

        <div class="col-span-12 md:col-span-4 lg:col-span-2">
          <h3 class="font-medium text-lg mb-2">Custom Links</h3>
          <a-divider class="my-2 border-blue"></a-divider>
          <ul class="list-none">
            <li><NuxtLink class="text-light no-underline" to="/">Legal Notice</NuxtLink></li>
            <li><NuxtLink class="text-light no-underline" to="/">Prices Drop</NuxtLink></li>
            <li><NuxtLink class="text-light no-underline" to="/">New Products</NuxtLink></li>
            <li><NuxtLink class="text-light no-underline" to="/">Best Sales</NuxtLink></li>
            <li><NuxtLink class="text-light no-underline" to="/">Login</NuxtLink></li>
            <li><NuxtLink class="text-light no-underline" to="/">My Account</NuxtLink></li>
          </ul>
        </div>

        <div
          class="col-span-12 md:col-span-8 md:col-start-3 lg:col-start-auto lg:col-span-4"
        >
          <h3 class="font-medium text-lg mb-2">Newsletter</h3>
          <a-divider class="my-2 border-blue"></a-divider>
          <p class="mb-4">
            You may unsubscribe at any moment. For that purpose, please find our
            contact info in the legal notice.
          </p>
          <a-form-item>
            <div class="bg-white flex rounded overflow-hidden">
              <a-input size="large" class="border-0 focus:outline-none">
              </a-input>
              <a-button type="text" class="bg-dark text-light rounded-0 h-10"
                >signup</a-button
              >
            </div>
          </a-form-item>
          <div class="flex gap-x-4">
            <a-button type="primary" shape="circle" class="text-white">
              <template #icon>
                <Icon name="tabler:brand-github" size="22" />
              </template>
            </a-button>
            <a-button type="primary" shape="circle" class="text-white">
              <template #icon>
                <Icon name="tabler:brand-facebook" size="22" />
              </template>
            </a-button>
            <a-button type="primary" shape="circle" class="text-white">
              <template #icon>
                <Icon name="tabler:brand-google" size="22" />
              </template>
            </a-button>
            <a-button type="primary" shape="circle" class="text-white">
              <template #icon>
                <Icon name="tabler:brand-instagram" size="22" />
              </template>
            </a-button>
            <a-button type="primary" shape="circle" class="text-white">
              <template #icon>
                <Icon name="tabler:brand-twitter" size="22" />
              </template>
            </a-button>
          </div>
        </div>
      </div>
    </Container>
    <a-divider class="my-0"></a-divider>
    <Container>
      <div class="flex justify-between py-4">
        <span>© 2021 Rozer Made With By <NuxtLink class="text-light no-underline" to="/amirmaghami.ir">Amir Maghami</NuxtLink>.</span>
        <div>
          <img src="@/assets/images/icons/payment.png" title="" alt="" />
        </div>
      </div>
    </Container>
  </footer>
</template>
