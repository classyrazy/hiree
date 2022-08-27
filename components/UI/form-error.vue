<template>
    <div class="bg-red-100 border-[red] border rounded-lg max-w-md mx-auto p-2 flex justify-between" v-if="errorMsg">
                <p class="text-red text-sm">{{errorMsg}}</p>
                <i @click="closeError">close</i>
            </div>
</template>

<script setup lang="ts">
interface Props {
    errorMsg: string;
}
let props = defineProps<Props>()
let emit = defineEmits(["closeError"])
function closeError(){
    emit("closeError")
}
</script>

<style scoped>

</style>