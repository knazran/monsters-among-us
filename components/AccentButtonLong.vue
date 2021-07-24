<template>
    <button class='rounded-lg bg-mau-secondary-900 text-center text-white 2xl:w-96 xl:w-72 w-64 py-2'>
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>