<template>
  <!-- right timeline -->
  <div class="my-5 w-full md:mx-1 mx-2 cursor-default">
    <div class="w-64 sm:-mx-40">
      <img
        class="sm:h-64 h-56 cursor-default w-full object-cover rounded-t-md"
        :src="image"
      />

      <div
        class="
          w-64
          h-36
          cursor-default
          shadow-lg
          overflow-hidden
          hover:shadow-xl
          transform
          hover:scale-104
          duration-500
          rounded-b-md
        "
      >
        <div
          class="
            cursor-default
            sm:h-96
            h-36
            p-4
            bg-mau-primary-100
            rounded-b-md
          "
        >
          <p class="text-mau-primary-700 text-base font-body font-bold">
            {{ title }}
          </p>
          <p class="text-mau-primary-700 text-sm font-body font-medium">
            {{ date }}
          </p>
          <p class="text-mau-primary-700 font-body font-medium">
            {{ platform }}
          </p>
          <div class="absolute bottom-0 right-0 p-4">
            <a :href="link"
              ><button
                class="
                  bg-mau-primary-700
                  text-center text-white
                  rounded-md
                  w-20
                  h-6
                  transform
                  hover:scale-105
                  font-body font-medium
                  text-xs
                "
              >
                Listen here
              </button></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '/img/in-control/yic_campaign2.png',
    },
    link: {
      type: String,
      default: 'https://www.instagram.com/monstersamongus_my/',
    },
  },
}
</script>




  