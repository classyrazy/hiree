<template>
    <div class="bg-white">
        <nav class="flex px-[15px] py-[20px] lg:px-10 justify-between items-center">
            <router-link to="/"><img src="/logo.svg" alt="logo"></router-link>
            <div class="flex gap-4 items-center">
                <!-- <router-link to="hiring/select-skill">
                    <c-button size="medium" type="b-pry-grad">Find developers</c-button>
                </router-link> -->
                <router-link to="/jobs">
                    <c-button size="medium">View Jobs</c-button>
                </router-link>
            </div>
        </nav>

        <div class=" w-[70%] mx-auto pb-10">
            <div class="details" v-if="computedJob">
                <h2 class="text-2xl font-monts font-bold my-4">{{ computedJob.title }} at {{ computedJob.company_name }}
                </h2>
                <div class="company-details flex justify-between items-center">
                    <div class=" flex flex-col gap-3">
                        <div class="flex gap-6 flex-wrap">
                            <div class="flex gap-2"><span>
                                    <location-icon bg-color="#000"></location-icon>
                                </span>
                                <p class="text-md font-monts font-medium">{{computedJob.company_location}}</p>
                            </div>
                            <div class="flex gap-2"><span>
                                    <salary-icon bg-color="#000"></salary-icon>
                                </span>
                                <p class="text-md font-monts font-medium">{{ computedJob.benefits }}</p>
                            </div>
                        </div>
                        <div class="flex gap-6 flex-wrap">
                            <div class="flex gap-2"><span>
                                    <company-icon bg-color="#000"></company-icon>
                                </span>
                                <p class="text-md font-monts font-medium">{{ computedJob.company_name }}</p>
                            </div>
                            <div class="flex gap-2"><span>
                                    <job-type-icon bg-color="#000"></job-type-icon>
                                </span>
                                <p class="text-md font-monts font-medium">{{ computedJob.work_model }} -
                                    {{ computedJob.job_location_type }}</p>
                            </div>
                            <div class="flex gap-2"><span>
                                    <time-icon bg-color="#000"></time-icon>
                                </span>
                                <p class="text-md font-monts font-medium">3 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-auto">
                        <c-button size="medium" type="b-pry-grad" @click="submitHandler" :loading="loading">Apply
                        </c-button>
                    </div>
                </div>
                <div class="mt-16 mb-8">
                    <h2 class="text-xl font-monts font-semibold my-4">Description</h2>
                    <p class="text-md font-monts">{{ computedJob.description }}</p>
                </div>
                <c-button size="medium" type="pry" @click="submitHandler" :loading="loading">Apply</c-button>
                <formError :error-msg="applicationError" @close-error="applicationError = null"></formError>

            </div>
            <div class="flex flex-col justify-center my-10 items-center" v-if="!loadingJob && !computedJob">
                <h2 class="font-monts text-xl fext-semibold">Job Post not Found</h2>
                <p>Try again later</p>
            </div>
            <div class="flex justify-center my-10 items-center" v-if="loadingJob">
                <LoaderIcon :size="50" color="#d53a9d" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LoaderIcon from '../../components/UI/svgs/loader-icon.vue'
import FormError from '../../components/UI/form-error.vue'
import TimeIcon from '../../components/icons/time-icon.vue'
import JobTypeIcon from '../../components/icons/job-type-icon.vue'
import CompanyIcon from '../../components/icons/company-icon.vue'
import SalaryIcon from '../../components/icons/salary-icon.vue'
import LocationIcon from '../../components/icons/location-icon.vue'
import CButton from '../../components/UI/forms/c-button.vue'

import axios from "axios"

let id = useRoute().params._id
let loadingJob = ref(true)
let baseURL = "https://hiree-server.herokuapp.com/"
// let baseURL = "http://localhost:7000/"
let applicationError = ref(null)
let job = ref(null)
let token = localStorage.getItem("USER_AUTH_TOKEN");
async function getData() {
    try {
        loadingJob.value = true
        let response = await axios.get(`${baseURL}api/jobs/:id`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                _id: id
            }
        })
        loadingJob.value = false
        job.value = response.data[0]
    } catch (error) {
        loadingJob.value = false
        console.log(error)
    }
}
getData()
let computedJob = computed(() => {
    return job.value
})
let { submitData, loading, data } = useFormRequest(
    "api/jobs/apply",
    true,
    null,
    { id },
    (data) => {
        if (data) {
            useRouter().push("/jobs");
        }

    },
    (error) => {
        console.log(error)
        if (error.response.data.error) {
            if(error.response.data.error == "Unauthorized request as developer"  ){
                applicationError.value= "Can't apply for job as an hiring manager"
            }else if(error.response.data.error == "Unauthorized request"  ){
                useRouter().push("/login");
            }
            applicationError.value = error.response.data.error;
        } else {
            applicationError.value = error.message;
        }
    }
);

let submitHandler = () => {
    submitData()
};
</script>

<style scoped>
</style>