<template>
  <div class="container mx-auto w-full h-full">
  <div class="relative wrap overflow-hidden p-10 h-full">
    <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style="left: 50%"></div>
    <!-- right timeline -->
    <div class="mb-8 flex md:flex-row md:justify-between flex-col items-center w-full right-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-24 rounded-full">
       <img
                    src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                    alt=""
                    class="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white"
                />
      </div>
      <div class="z-20 order-1 bg-gray-400  my-3 md:my-0 rounded-lg shadow-xl md:w-5/12 w-full px-6 py-4">
        <h3 class="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>

    <!-- left timeline -->
    <div class="mb-8 flex md:justify-between md:flex-row-reverse flex-col items-center w-full left-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-24 rounded-full">
        <img
                    src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                    alt=""
                    class="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white"
                />
      </div>
      <div class="z-20 order-1 bg-red-400 rounded-lg my-3 md:my-0 shadow-xl md:w-5/12 w-full px-6 py-4">
        <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
        <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    
    <!-- right timeline -->
    <div class="mb-8 flex md:flex-row md:justify-between flex-col items-center w-full right-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-24 rounded-full">
       <img
                    src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                    alt=""
                    class="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white"
                />
      </div>
      <div class="z-20 order-1 bg-gray-400  my-3 md:my-0 rounded-lg shadow-xl md:w-5/12 w-full px-6 py-4">
        <h3 class="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    <!-- left timeline -->
  <div class="mb-8 flex md:justify-between md:flex-row-reverse flex-col items-center w-full left-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-24 rounded-full">
        <img
                    src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                    alt=""
                    class="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white"
                />      </div>
      <div class="z-20 order-1 bg-red-400 rounded-lg shadow-xl my-3 md:my-0  md:w-5/12 w-full px-6 py-4">
        <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
        <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    <!--end-->
  </div>
</div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const meetTheTeamData = await $content('meet-the-team').fetch()
    const boardMembers = meetTheTeamData[0].board_members
    const lpMembers = meetTheTeamData[0].lapor_predator_members

    return {
      boardMembers,
      lpMembers,
    }
  },
}
</script>

