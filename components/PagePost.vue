<!-- Component props: title, author,date ,image, content -->
<template>
  <section class="bg-mau-primary-50 h-full my-2">
    <div class="container mx-auto">
      <div class="md:mx-5 px-12 my-5">
        <!-- Title -->
        <p
          class="
            font-medium
            xl:text-4xl
            text-2xl text-mau-primary-700
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
            text-sm text-mau-primary-700
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
            text-sm text-mau-primary-700
            mt-1
            md:text-left
            text-center
          "
        >
          {{ date }}
        </p>
        <!-- Image -->
        <img :src="img" class="object-cover my-4 w-full rounded-sm ..." />
        <!-- Content -->
        <p
          class="
            font-normal
            text-lg text-mau-primary-700
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
