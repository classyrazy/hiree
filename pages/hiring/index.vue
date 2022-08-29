<template>
    <div class="bg-white">
        <nav class="flex px-[15px] py-[20px] lg:px-10 justify-between items-center">
            <router-link to="/"><img src="/logo.svg" alt="logo"></router-link>
            <div class="flex gap-4 items-center">
                <router-link to="hiring/select-skill">
                <c-button size="medium" type="b-pry-grad">Find developers</c-button>
            </router-link>
            <router-link to="/hiring/create-job">
                <c-button size="medium">Create Job</c-button>
            </router-link>
            </div>
        </nav>
        <div class="w-[80%] mx-auto">
            <h2 class="text-2xl font-monts text-dark font-semibold">Dashboard</h2>
            <div class="my-10 max-w-5xl mx-auto ">
            <h2 class="text-2xl font-monts font-medium">Jobs</h2>
            <div class="max-w-5xl mx-auto " v-if="computedCompanyJobs">
                <job-hire v-for="job in computedCompanyJobs" :details="job"></job-hire>
            </div>
            <div class="flex flex-col justify-center my-10 items-center" v-else-if="computedCompanyJobs && computedCompanyJobs.length== 0">
            <h2 class="font-monts text-xl fext-semibold">You have not created any job yet</h2>
            <c-button> Create Jobs</c-button>
            </div>
            <div class="flex justify-center my-10 items-center" v-else><LoaderIcon :size="50" color="#d53a9d"/></div>
        </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import CButton from '../../components/UI/forms/c-button.vue'
import LoaderIcon from '../../components/UI/svgs/loader-icon.vue'
import JobHire from '../../components/UI/job-hire.vue'

import axios from "axios"


let baseURL = "https://hiree-server.herokuapp.com/"
let companyJobs = ref(null)
let token = localStorage.getItem("USER_AUTH_TOKEN");
// let baseURL = "http://localhost:7000/"
async function getData() {
    console.log(`${baseURL}api/hire/jobs`)
    try {
        let response = await axios.get(`${baseURL}api/hire/jobs`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(response)
        // return response.data
        companyJobs.value = response.data
    } catch (error) {
        console.log(error)
    }
}
getData()
let computedCompanyJobs = computed(()=> {
    return companyJobs.value
})
// onMounted(() => {
    // companyJobs.value = getData()
// })
</script>

<style scoped>
</style>