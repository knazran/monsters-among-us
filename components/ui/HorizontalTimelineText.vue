<template>
  <!-- right timeline -->
  <div class="my-5 w-full md:mx-1 mx-2 cursor-default">
    <div class=" w-64 sm:-mx-40 mx-9">
      <div
        class="
         w-64
    rounded-lg
          h-36
          cursor-default
          cursor-pointer
          shadow-lg
          overflow-hidden
          hover:shadow-xl
          transform
          hover:scale-104
          duration-500
        "
      >
      
        <div class="cursor-default sm:h-96 h-36 p-4 bg-mau-primary-100">
                        <p class="text-mau-primary-700 text-base font-bold"> {{title}}</p>
                         <p class="text-mau-primary-700 text-sm font-bold"> {{date}}</p>
                          <p class="text-mau-primary-700 "> {{time}}</p>
                           <p class="text-mau-primary-700 "> {{platform}}</p>
                           

          <h1
            class="mt-4 font-normal text-justify sm:text-base text-sm text-mau-primary-700"
          >
          </h1>
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
    type: {
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
     time: {
      type: String,
      required: true,
    },
  },
}
</script>




  