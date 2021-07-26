<template>
    <div class="container ">
            <div class="grid grid-rows-3 grid-flow-col gap-4">
                  <div class="col-span-2 ...">2</div>
                  <div class="row-span-2 col-span-2 ...">3</div>
            </div>
    </div>

</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>