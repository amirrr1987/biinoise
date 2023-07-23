<template>
  <div class="container mx-auto">
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
      <div class="col-span-4">
        <div class="bg-red">sfd</div>
      </div>
      <div class="col-span-8">
        <div class="bg-gray p-4 rounded">
          Get In Touch
          <a-form layout="vertical">
            <div class="grid grid-cols-2 gap-8">
              <a-form-item label="Name">
                <a-input></a-input>
              </a-form-item>

              <a-form-item label="Email">
                <a-input></a-input>
              </a-form-item>
            </div>

            <a-form-item label="Subject">
              <a-input></a-input>
            </a-form-item>

            <a-form-item label="Message">
              <a-textarea></a-textarea>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>
