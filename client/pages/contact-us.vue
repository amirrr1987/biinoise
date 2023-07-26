<template>
  <section class="py-12">
    <TheContainer>
      <div class="py-12">
        <iframe
          width="100%"
          height="450"
          src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        />
      </div>
      <div class="grid grid-cols-12 gap-4">
        <div
          class="col-span-4 bg-gray-200 rounded flex flex-col gap-4 px-17 py-10"
        >
          <div class="flex items-center gap-x-4">
            <Icon name="tabler:brand-github" size="32" />
            <div class="">
              <div class="">0123456789</div>
              <div class="">0123456789</div>
            </div>
          </div>
          <div class="flex items-center gap-x-4">
            <Icon name="tabler:brand-github" size="32" />
            <div class="">
              <div class="">0123456789</div>
              <div class="">0123456789</div>
            </div>
          </div>
          <div class="flex items-center gap-x-4">
            <Icon name="tabler:brand-github" size="32" />
            <div class="">
              <div class="">0123456789</div>
              <div class="">0123456789</div>
            </div>
          </div>
          <div class="flex items-center gap-x-4">
            <Icon name="tabler:brand-github" size="32" />
            <div class="">
              <div class="">0123456789</div>
              <div class="">0123456789</div>
            </div>
          </div>
          <div class="">
            <h4 class="text-xl mb-2">Flow US</h4>
            <div class="">
              <NuxtLink to="/" class="text-dark hover:text-blue-500"
                ><Icon name="tabler:brand-facebook" size="32"
              /></NuxtLink>
              <NuxtLink to="/" class="text-dark hover:text-blue-500"
                ><Icon name="tabler:brand-instagram" size="32"
              /></NuxtLink>
              <NuxtLink to="/" class="text-dark hover:text-blue-500"
                ><Icon name="tabler:brand-telegram" size="32"
              /></NuxtLink>
              <NuxtLink to="/" class="text-dark hover:text-blue-500"
                ><Icon name="tabler:brand-meta" size="32"
              /></NuxtLink>
              <NuxtLink to="/" class="text-dark hover:text-blue-500"
                ><Icon name="tabler:brand-apple" size="32"
              /></NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-span-8 bg-gray-200 p-4 rounded">
          Get In Touch
          <el-form layout="vertical">
            <div class="grid grid-cols-2 gap-8">
              <el-form-item label="Name">
                <el-input></el-input>
              </el-form-item>

              <el-form-item label="Email">
                <el-input></el-input>
              </el-form-item>
            </div>

            <el-form-item label="Subject">
              <el-input></el-input>
            </el-form-item>

            <el-form-item label="Message">
              <el-textarea
                :rows="2"
                type="textarea"
                placeholder="Notes about your order, e.g. special notes for delivery. "
              />
            </el-form-item>
          </el-form>
        </div>
      </div>
    </TheContainer>
  </section>
</template>
