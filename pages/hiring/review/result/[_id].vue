<template>
    <div class="" :class="showModal? 'overflow-y-hidden h-screen':'overflow-y-auto'">
        <nav class="flex px-[15px] py-[20px] lg:px-10 justify-between items-center">
            <router-link to="/"><img src="/logo.svg" alt="logo"></router-link>
            <router-link to="/hiring"
                class="cursor-pointer border border-red-700 font-medium font-monts-alt text-md md:block p-3 rounded">
                Go to dashboard
            </router-link>
        </nav>

        <div
            class="flex relative h-screen px-[15px] py-[20px] lg:px-[210px] items-start mb-12 flex-col screen font-monts">

            <h1 class="font-semibold  text-3xl my-6">Make your final choice</h1>
            <!-- {{reviewData}} -->
            <!-- <div class="" v-if="reviewData"> -->
            <reviewed-dev-hire class="my-2" v-for="(det, idx) in  reviewData" :rate-details="det.result" :dev-idx="idx"
                :reviewed-dev="det.developer" @open-modal="handleOpenModal"></reviewed-dev-hire>
            <dev-profile v-if="reviewData && showModal" :details="reviewData[computedDevIdx].developer" @close-modal="handleCloseModal"></dev-profile>

            <!-- </div> -->


            <c-button type="pry rounded-lg" class="my-4" :loading="loading" @click="submitHandler" size="big">Choose
                random
            </c-button>



        </div>


    </div>
</template>

<script setup lang="ts">
import DevProfile from '../../../../components/UI/modals/dev-profile.vue'
import ReviewedDevHire from '../../../../components/UI/reviewed-dev-hire.vue'
import CButton from '../../../../components/UI/forms/c-button.vue'
import useFormRequest from '~/composables/useFormRequest'

let resultError = ref(null)
let showModal = ref(false)
let reviewData = ref(null)
console.log(useRoute().params._id)
let routeParam = useRoute().params._id
let { submitData, loading, data } = useFormRequest(
    `api/hire/review/result/${routeParam}`,
    true,
    null,
    { routeParam },
    (data) => {
        if (data) {
            // console.log(data)
            reviewData.value = data.data
        }

    },
    (error) => {
        console.log(error)
        resultError.value = error.response.data.error;
    }
);
onMounted(() => {
    submitData()
})
function handleCloseModal() {
    showModal.value = false
}
let computedDevIdx = ref(0)
function handleOpenModal(idx) {
    computedDevIdx.value = idx
    showModal.value = true
}
</script>

<style scoped>
.required:after {
    content: "*";
    color: red
}
</style>