<template>
<!-- Generator: Adobe Illustrator 23.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 13 15" style="enable-background:new 0 0 13 15;" xml:space="preserve" :width="size" height="auto">
<polygon class="st0" points="5.9,9.5 4.5,9.5 4.5,5.6 8.5,5.6 8.5,7 5.9,7 "/>
<path class="st0" d="M6.5,3.5c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4S4.3,3.5,6.5,3.5 M6.5,2.5c-2.8,0-5,2.2-5,5s2.2,5,5,5
	s5-2.2,5-5S9.3,2.5,6.5,2.5z"/>
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
