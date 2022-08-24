<template>
  <div class="p-4 bg-white" :class="right ? 'frame30' : 'frame30-left'">
    <!-- <div :class="right ? 'max-w-xs' : ''"> -->
      <div
        class="w-[38px] h-[38px] p-3 grid justify-center rounded-t-3xl my-3 rounded-r-3xl items-center"
        :class="[right ? 'ml-auto' : '', _class]"
        :style="{ background: color }"
      >
        <component :is="icon" class="animate-bounce"></component>
      </div>
    <!-- </div> -->
    <div class="" :class="right ? 'text-right' : ''">
      <h2 class="text-2xl text-dark font-monts font-semibold my-2">
        {{ cardHeader }}
      </h2>
      <p class="text-left"><slot></slot></p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "@vue/reactivity";
let props = defineProps({
  icon: {
    type: Object,
  },
  cardHeader: {
    type: String,
  },
  iconColor: {
    type: String,
    default: "#E8EEFF"
  },
  right: {
    type: Boolean,
    default: false,
  },
});
let color = ref(props.iconColor);
let _class = computed(() => {
  let __class = `bg-[${color.value}]`;
  return __class
})
console.log(props.iconColor)
</script>

<style scoped>
.frame {
  text-shadow: 0 4px 0 #fff;
}
.frame30 {
  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.13);
  /* box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.13); */
}
.frame30-left {
  box-shadow: -1px 1px 0px rgba(0, 0, 0, 0.13);
}
</style>