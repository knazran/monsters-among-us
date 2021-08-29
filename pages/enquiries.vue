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
          description="We are here because we care for you. Keep in touch with us!"
          title="Contact Us"
        />

        <div class="flex py-8">
          <form
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            class="w-full max-w-lg"
            id="app"
            @submit="checkForm"
            method="post"
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
                  name="name"
                  @keypress="removeErrorName($event)"
                  placeholder="Your name :)"
                  v-bind:class="errorsName ? 'error-border' : ''"
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
                  type="text"
                  v-model="name"
                />
                <p class="text-red-500" v-if="errorsName">
                  Please correct the following error(s): {{ errorsName }}
                </p>
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
                  name="email"
                  @keypress="removeErrorEmail($event)"
                  v-bind:class="errorsEmail ? 'error-border' : ''"
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
                <p class="text-red-500" v-if="errorsEmail">
                  Please correct the following error(s): {{ errorsEmail }}
                </p>
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
                  name="message"
                  @keypress="removeErrorMessage($event)"
                  v-bind:class="errorsMessage ? 'error-border' : ''"
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
                <p class="text-red-500" v-if="errorsMessage">
                  Please correct the following error(s): {{ errorsMessage }}
                </p>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-2/3">
                <input
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
                  type="submit"
                  value="Submit"
                />
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
      message: '',
      errorsName: '',
      errorsEmail: '',
      errorsMessage: '',
    }
  },
  methods: {
    checkForm: function (e) {
      if (
        this.name &&
        this.message &&
        this.email &&
        this.validEmail(this.email)
      ) {
        this.$refs.form.submit()
        return true
      }
      this.errorsName = ''
      this.errorsEmail = ''
      this.errorsMessage = ''

      if (!this.name) {
        this.errorsName = 'Name required.'
      }
      if (!this.email) {
        this.errorsEmail = 'Email required.'
      } else if (!this.validEmail(this.email)) {
        this.errorsEmail = 'Email Invalid.'
      }
      if (!this.message) {
        this.errorsMessage = 'Message required.'
      }

      e.preventDefault()
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    removeErrorName: function ($event) {
      this.errorsName = ''
    },
    removeErrorEmail: function ($event) {
      this.errorsEmail = ''
    },
    removeErrorMessage: function ($event) {
      this.errorsMessage = ''
    },
  },
  computed: {
    getBackgroundImage() {
      return `url(${this.bgGreen})`
    },
  },
}
</script>

<style scoped>
.error-border {
  border-color: red;
}
</style>