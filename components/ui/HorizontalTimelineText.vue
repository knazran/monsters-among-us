<template>
  <!-- right timeline -->
  <div class="my-5 w-full md:mx-1 mx-2 cursor-default">
    <div class=" w-64 sm:-mx-40 mx-9">
      <img
          class="sm:h-64 h-56 cursor-default w-full object-cover rounded-t-md"
          :src="image"
          alt="/img/in-control/yic_campaign2.png"
        />
      
      <div
        class="
         w-64
          h-36
          cursor-default
          cursor-pointer
          shadow-lg
          overflow-hidden
          hover:shadow-xl
          transform
          hover:scale-104
          duration-500
          rounded-b-md
        "
      >   
        <div class="cursor-default sm:h-96 h-36 p-4 bg-mau-primary-100 rounded-b-md">
                        <p class="text-mau-primary-700 text-base font-body font-bold"> {{title}}</p>
                         <p class="text-mau-primary-700 text-sm font-body font-medium"> {{date}}</p>
                           <p class="text-mau-primary-700 font-body font-medium"> {{platform}}</p>
                           

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
    title: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    image:{
      type:String,
      default:"/img/in-control/yic_campaign2.png"
    }
  },
}
</script>




  