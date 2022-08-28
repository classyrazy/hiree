<template>
<!-- Generator: Adobe Illustrator 23.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 13 15" style="enable-background:new 0 0 13 15;" xml:space="preserve" :width="size" height="auto">
<path class="st0" d="M2.7,3.5v8h0.8V9.2h2.7v2.3h4.2v-8H2.7 M3.5,4.4h2.7v1.5H3.5V4.4 M3.5,8.5V7h2.7v1.5H3.5 M9.5,10.8H6.9V9.3h2.7
	V10.8 M9.5,8.5H6.9V7h2.7V8.5 M9.5,5.9H6.9V4.4h2.7V5.9"/>
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
