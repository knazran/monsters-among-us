<template>
    <button class='rounded-lg bg-mau-secondary-900 text-center text-white w-24 py-1'>
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