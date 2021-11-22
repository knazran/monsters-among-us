<template>
   <div class="relative h-24 w-72">
                      <img class="h-16 w-full" src="~/static/img/in-control/blue-h.png">
                     
              <div class=" absolute w-48 h-12 py-4 px-4 inset-0 mx-auto">
                      <p class="text-white w-48 text-xl  "> {{title}} </p>

              </div>
           
        </div>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
   
  },
}
</script>
