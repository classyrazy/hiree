<template>
    <svg :width="size" height="auto" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_126_905)">
            <path d="M24.5 0.875L8.225 18.7688L3.5 15.1813H0.875L8.225 27.125L27.125 0.875H24.5Z" fill="#0B8F20" />
        </g>
        <defs>
            <clipPath id="clip0_126_905">
                <rect width="28" height="28" fill="white" />
            </clipPath>
        </defs>
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
    size: 28,
});
</script>

<style scoped>
</style>
