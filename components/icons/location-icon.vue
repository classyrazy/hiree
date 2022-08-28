<template>
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 15" :width="size" height="auto">
        <path class="st0"
            d="M6.5 2.6c-2.1 0-3.8 1.6-3.8 3.6 0 .5.1 1.1.4 1.5l3.4 4.9s2.1-2.9 3.4-4.9c0-.1.4-.7.4-1.6 0-2-1.7-3.5-3.8-3.5zm0 5.4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
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
