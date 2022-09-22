<template>
    <div class="modal-bg absolute w-full min-h-screen top-0 left-0 grid" @click.self="handleCloseModal">
        <div class="max-h-[600px] w-[80%] p-8 overflow-y-auto center-middle rounded-lg">
            <Developer :developer="details" type="profile" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Developer from '../../Profile/developer.vue'
interface Props {
    details: object
}

let props = defineProps<Props>()
let emit = defineEmits(['closeModal'])
function handleCloseModal() {
    emit('closeModal')
}
</script>

<style scoped>
.center-middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.modal-bg {
    background: rgba(93, 87, 87, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>