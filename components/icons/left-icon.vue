<template>
    <svg :width="size" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 4L7 12L15 20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

</template>
  
  <script setup lang="ts">
interface Props {
    bgColor: string;
    textColor: string;
    size: number;
}

let props = withDefaults(defineProps<Props>(), {
    bgColor: "#000",
    textColor: "#000",
    size: 20,
});
</script>
  
  <style scoped>
  </style>
  