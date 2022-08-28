<template>
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 15" :width="size" height="auto">
        <path class="st0"
            d="M6.9 7.1c.3 0 .8 0 .8.4s-.4.4-.8.4H5.5c0 .2.1.5.1.8 0 1.1-.4 1.7-.6 2.1.2 0 .6-.1 1.1-.1.5 0 .8.1 1.6.2.2 0 .5.1.8.1.2 0 .3 0 .9-.2.1 0 .2-.1.4-.1.3 0 .5.2.5.5 0 .5-1 .8-1.8.8-.3 0-.6 0-1.6-.3-.9-.2-1.2-.3-1.5-.3-.4 0-.7.1-1 .2-.5.2-.6.2-.8.2-.2 0-.5-.2-.5-.5 0-.2 0-.2.5-.6.9-.9 1.1-1.6 1.1-2 0-.4-.1-.6-.1-.9h-1c-.3 0-.7 0-.7-.4s.4-.4.7-.4h.6c-.4-.8-.5-1.1-.5-1.5 0-1.4 1.1-2.5 3-2.5 2 0 2.9 1.3 2.9 2.1 0 .3-.3.5-.6.5-.4 0-.5-.3-.6-.5-.1-.6-.6-1.3-1.7-1.3s-1.8.7-1.8 1.6c0 .5.1.8.4 1.7h1.6z" />
    </svg>


</template>

<script setup lang="ts">
interface Props {
    bgColor: string;
    textColor: string;
    size: number;
}

let props = withDefaults(defineProps<Props>(), {
    bgColor: "none",
    textColor: "#000",
    size: 20,
});
</script>

<style scoped>
.st0 {
    fill: v-bind('bgColor');
}
</style>
