<template>
    <div class="bg-white border border-gray-100 flex justify-between px-2 py-1 rounded-md" v-if="pillText">
                <span class="text-md mr-3">{{pillText}}</span>
                <close-icon @click="removePill" :size="16" class="cursor-pointer"></close-icon>
            </div>
</template>

<script setup lang="ts">
import CloseIcon from '../icons/close-icon.vue'
interface Props {
    pillText: string;
}
let props = defineProps<Props>()
let emit = defineEmits(["removePill"])
function removePill(){
    emit("removePill")
}
</script>

<style scoped>

</style>