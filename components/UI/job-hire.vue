<template>
    <div class="border border-gray-100 p-4 rounded-lg">
        <div class="flex justify-between w-full items-center">
            <h2 class="text-2xl font-monts font-medium">{{details.title}}</h2>
            <p class="text-md" v-if="details.applications && type == 'hiring'">{{details.applications.length}} applications</p>
        </div>
        <div class="flex justify-between gap-6 max-h-[300px] overflow-hidden ">
            <p class="text-ellipsis overflow-hidden text font-monts-alt text-md my-3">{{details.description}}</p>
            <div class="cta flex items-center gap-4 ">
                <c-button size="small" v-if="!details.review_id && type == 'hiring'" @click="handleReview" :loading="loadingCreateReview">Review</c-button>
                <router-link :to="`/jobs/${details.id}`" class=""><c-button type="b-pry-grad" size="small"> View</c-button></router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CButton from './forms/c-button.vue'
import useFormRequest from '~~/composables/useFormRequest'
interface Props {
    details: {
        id: string,
        review_id: string | null,
        company_id: string,
        company_name: string,
        title: string,
        description: string,
        job_location_type: string,
        work_model: string,
        skills: string[],
        applications?: string[],
        __createdtime__: number,
        __updatedtime__: number,
    },
    type: string,
}

let props = withDefaults(defineProps<Props>(), {
    type: 'hiring',
})
let jobId = props.details.id
let { submitData, loading: loadingCreateReview, data } = useFormRequest(
    "api/jobs/create-job-review",
    true,
    null,
    { jobId },
    (data) => {
        if (data) {
            console.log(data)
            // reviewData.value = data.data
            useRouter().push(`/hiring/review/${data.data}`)
        }

    },
    (error) => {
        console.log(error)
        // resultError.value = error.response.data.error;
    }
);

function handleReview() {
    submitData()
}
</script>

<style scoped>
.test-class{
   word-break: break-word;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 16px; /* fallback */
   max-height: 200px; /* fallback */
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
}
.text {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 4; /* number of lines to show */
   -webkit-box-orient: vertical;
}
</style>