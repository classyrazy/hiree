<template>
    <div class="">
        <div class="flex justify-between items-center">
            <h2 class="text-xl font-semibold uppercase">{{ skillText }}</h2>
            <down-icon @click="handleToggleDropdown" class="cursor-pointer"></down-icon>
        </div>
        <div class="slot-con" v-show="openDropDown">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import DownIcon from './svgs/down-icon.vue'
interface Props {
    skillText: string,
}

let props = defineProps<Props>()
let emit = defineEmits(["openDropdown"])
let openDropDown = ref(false)
function handleToggleDropdown() {
    // if (!openDropDown.value) {
        emit('openDropdown', props.skillText)

    // }
    openDropDown.value = !openDropDown.value

}
</script>

<style scoped>

</style>