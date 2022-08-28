<template>
    <svg :width="size" height="auto" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 3.33334C10.81 3.33334 3.33337 10.81 3.33337 20C3.33337 29.19 10.81 36.6667 20 36.6667C29.19 36.6667 36.6667 29.19 36.6667 20C36.6667 10.81 29.19 3.33334 20 3.33334ZM25.4884 27.845L18.3334 20.69V10H21.6667V19.31L27.845 25.4883L25.4884 27.845V27.845Z" fill="black"/>
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
 </style>
 