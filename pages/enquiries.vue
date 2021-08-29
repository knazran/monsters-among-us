<template>
  <div :style="{ backgroundImage: getBackgroundImage }">
    <div
      class="
        py-12
        bg-scroll
        rotate-180
        lg:bg-contain
        bg-no-repeat
        lg:bg-right
        bg-top
      "
      style="background-image: url(img//img_bg/gotta_read_this_bg-2.png)"
    >
      <PageSection>
        <PageTitle
          description="We are here because we care you. Keep in touch with us!"
          title="Contact Us"
        />

        <div class="flex py-8">
          <form
            class="w-full max-w-lg"
            name="contact"
            action=""
            method="post"
            netlify
          >
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <input type="hidden" name="form-name" value="contact" />

                <label
                  class="
                    block
                    tracking-wide
                    text-mau-primary-700 text-base
                    font-bold
                    mb-2
                  "
                  for="grid-password"
                >
                  Name
                </label>

                <input
                  placeholder="Your name :)"
                  class="
                    appearance-none
                    block
                    w-full
                    bg-gray-200
                    text-mau-primary-700
                    border border-gray-200
                    rounded
                    py-3
                    px-4
                    mb-3
                    leading-tight
                    focus:outline-none
                    focus:bg-white
                    focus:border-gray-500
                  "
                  id="name"
                  type="text" v-model="name"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="
                    block
                    tracking-wide
                    text-mau-primary-700 text-base
                    font-bold
                    mb-2
                  "
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  placeholder="jane@example.com"
                  class="
                    appearance-none
                    block
                    w-full
                    bg-gray-200
                    text-mau-primary-700
                    border border-gray-200
                    rounded
                    py-3
                    px-4
                    mb-3
                    leading-tight
                    focus:outline-none
                    focus:bg-white
                    focus:border-gray-500
                  "
                  id="email"
                  type="email"
                   v-model="email"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="
                    block
                    tracking-wide
                    text-mau-primary-700 text-base
                    font-bold
                    mb-2
                  "
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  class="
                    no-resize
                    appearance-none
                    block
                    w-full
                    bg-gray-200
                    text-mau-primary-700
                    border border-gray-200
                    rounded
                    py-3
                    px-4
                    mb-3
                    leading-tight
                    focus:outline-none
                    focus:bg-white
                    focus:border-gray-500
                    h-48
                    resize-none
                  "
                  id="message"
                   v-model="message"
                ></textarea>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-2/3">
                <button
                @submit.prevent="processForm"
                  class="
                    form-button
                    rounded-lg
                    bg-mau-secondary-900
                    text-center text-white
                    w-32
                    py-1
                    cursor-pointer
                    hover:font-bold
                    hover:bg-mau-secondary-950
                  "
                 
                >Submit</button>
              </div>
              <div class="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </PageSection>
    </div>
  </div>
</template>

<script>
import TextureGreen from '~/static/img/textures/texture-green-2.png'
export default {
  data() {
    return {
      bgGreen: TextureGreen,
       name: '',
        email: '',
        message:''
    }
  },
   methods: {
    processForm: function() {
      console.log({ name: this.name, email: this.email });
      alert('Processing!');
    }
  },
  computed: {
    getBackgroundImage() {
      return `url(${this.bgGreen})`
    },
  },
}
</script>