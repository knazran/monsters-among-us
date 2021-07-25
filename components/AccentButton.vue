<template>
    <button class='rounded-lg bg-mau-secondary-900 text-center text-white w-24 py-1 mx-2 hover:font-bold hover:bg-mau-secondary-950'>
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
    }
}
</script>