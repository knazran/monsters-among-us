<!-- Component props: title, author,date ,image, content -->
<template>
  <section class="bg-mau-primary-50 h-full my-2">
    <div class="container mx-auto">
      <div class=" px-12 md:px-24 lg:px-56 my-5">
        <!-- Title -->
        <p
          class="
            font-medium
            md:text-6xl
            text-5xl text-mau-primary-700
            my-1
            md:text-left
            text-center
          "
        >
          {{ title }}
        </p>
        <!-- Author -->
        <p
          class="
            font-light
            text-md text-mau-primary-700
            mt-1
            md:text-left
            text-center
          "
        >
          By: {{ author }}
        </p>
        <!-- Date -->
        <p
          class="
            font-light
            text-md text-mau-primary-700
            mt-1
            md:text-left
            text-center
          "
        >
          {{ date }}
        </p>
        <!-- Image -->
      
          <img :src="img" class="my-5"/>

        <!-- Content -->
        <p
          class="
            font-normal
            md:text-xl text-lg text-mau-primary-700
            my-4
            py-6
            text-justify
          "
        >
          {{ content }}
        </p>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: false,
    },
    date: {
      type: String,
    },
    img: {
      type: String,
    },
    content: {
      type: String,
    },
  },
}
</script>
